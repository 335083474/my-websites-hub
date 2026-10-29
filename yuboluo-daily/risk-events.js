'use strict';
(()=>{
 const VERSION='20261029-observations-v6', $=s=>document.querySelector(s);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const iso=d=>new Date(d+'T00:00:00Z');
 const fmt=n=>n.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});
 let DATA,selectedIndex='wind-all-a',selectedDate,groups=[],activeSeries,resizeObserver;
 const visibleKinds=new Set(['risk','view','position','plan']);
 const kind=e=>e.kind||'risk';
 const visibleEvents=()=>DATA.events.filter(e=>visibleKinds.has(kind(e)));
 const ordered=events=>[...events].sort((a,b)=>['position','view','plan','risk'].indexOf(kind(a))-['position','view','plan','risk'].indexOf(kind(b)));
 const positionLabel=e=>e.position?.percent===null?'持有 · 比例未报':`${e.position.percent}%`;
 const kindLabel=e=>({risk:'风险提示',view:'机会与观点',position:'仓位披露',plan:'操作计划'}[kind(e)]);
 const indexSelect=$('#indexSelect'),dateSelect=$('#dateSelect'),svgElement=$('#riskChart'),wrap=$('#chartWrap'),tip=$('#eventTooltip');
 function series(){return DATA.series.find(s=>s.id===selectedIndex)}
 function dateEvents(day){return visibleEvents().filter(e=>day==='pending'?!e.date:e.date===day)}
 const components=s=>s.bias==='mixed'?['up','down']:[s.bias];
 const glyphs={up:'↑',down:'↓',rotation:'↔'};
 const biasLabels={up:'偏多',down:'偏空',rotation:'板块轮动'};
 function eventDirections(e){return e.direction?.signals||[];}
 function directionLabel(e){
  const signals=eventDirections(e);if(!signals.length)return '本条未标方向';
  return [...new Set(signals.map(s=>`${components(s).map(x=>glyphs[x]).join('')} ${s.conditional?'条件情景':s.basis} · ${s.scope}`))].join('；');
 }
 function categoryColor(category){return DATA.categoryStyles[category].color;}
 function plottedDirections(group){
  const signals=group.events.flatMap(eventDirections).filter(s=>s.plot_eligible),out=[];
  for(const bias of ['up','down','rotation']){
   const supporting=signals.filter(s=>components(s).includes(bias));
   if(supporting.length)out.push({bias,conditional:supporting.every(s=>s.conditional)});
  }
  return out;
 }
 function anchorDate(day){return DATA.tradingCalendar.find(d=>d>=day)||null}
 function mappings(s){
  const prices=new Map(s.points.map(p=>[p[0],p[1]])),buckets=new Map(),missing=[];
  for(const e of visibleEvents()){
   if(!e.date)continue;
   const anchor=anchorDate(e.date);
   if(!anchor||!prices.has(anchor)){missing.push(e);continue;}
   if(!buckets.has(anchor))buckets.set(anchor,{date:anchor,value:prices.get(anchor),events:[]});
   buckets.get(anchor).events.push(e);
  }
  return {groups:[...buckets.values()].sort((a,b)=>a.date.localeCompare(b.date)),missing};
 }
 function selectedGroup(){return groups.find(g=>g.events.some(e=>e.date===selectedDate))}
 function linkToDay(q){const id=q.paragraphs.find(p=>/^2026-\d\d-\d\d-g[12]-p\d+$/.test(p));return id?'./#'+id.replace(/-p\d+$/,''):null;}
 function renderDetails(){
  const group=selectedGroup(),events=ordered(group?group.events:dateEvents(selectedDate)),pending=selectedDate==='pending';
  $('#selectedHeading').textContent=pending?`年份待核 · ${events.length}条参考稿提及`:`${group?group.date:selectedDate} · ${events.length}条记录`;
  if(group){
   const labels=[...new Set(group.events.map(e=>e.date))].sort();
   $('#selectionNote').textContent=`${activeSeries.name}收盘 ${fmt(group.value)}点；资料标签：${labels.join('、')}。${labels.some(d=>d!==group.date)?'休市日标签顺延至下一交易日，同点合并显示。':'标记与资料标签为同日。'} 定位不代表已核实发言时间。`;
  }else $('#selectionNote').textContent=pending?'未确认年份，不放到指数走势上。':`${activeSeries.name}在对应交易日缺少行情，提示仍可阅读，图上不补点。`;
  $('#eventDetails').innerHTML=events.map((e,i)=>`<details class="event-card kind-${kind(e)}" ${i===0||kind(e)==='view'?'open':''} data-event="${esc(e.id)}"><summary><i class="category-dot" style="--category-color:${categoryColor(e.category)}" aria-hidden="true"></i>${esc(e.risk)} · ${esc(e.name)}</summary><div class="event-labels">${esc(e.label)} · ${esc(e.category)} · ${esc(e.status)}${e.time_expression?' · 条件／时间：'+esc(e.time_expression):''}</div>${e.position?`<div class="position-disclosure ${kind(e)==='plan'?'is-plan':''}"><strong>${kind(e)==='plan'?'计划目标':'本次披露'} · ${e.position.percent===null?'总比例未明确':positionLabel(e)}</strong><span>${esc(e.position.scope)}；${kind(e)==='plan'?'未确认执行，不能视为已达到该仓位':'原文自述，未经账户核验；不延伸为其他日期的持仓'}</span></div>`:`<div class="direction-review"><span class="label">原文方向 · 整理标注</span><p>${esc(directionLabel(e))}</p>${eventDirections(e).map(s=>`<p class="direction-basis">${esc(s.summary)} <span>依据 ${esc(s.evidence_id)}</span>${!s.plot_eligible?' · 非本图对象，不画箭头':''}</p>`).join('')}${!eventDirections(e).length?'<p class="direction-basis">本条未提炼明确方向，保留原文判断与条件。</p>':''}</div>`}${e.updates.length?`<div class="update">后续修正：${e.updates.map(esc).join('；')}</div>`:''}${e.quotes.map(q=>{const link=linkToDay(q);return `<blockquote><p>${esc(q.text)}</p><div class="quote-source">${esc(q.id)} · ${esc(q.attribution)} · 原音未听核${link?`<a href="${esc(link)}">查看这一天 ↗</a>`:''}<br>${q.paragraphs.map(esc).join('、')}</div></blockquote>`}).join('')}<p class="event-summary"><span class="label">${e.kind?'整理说明':'应对归纳'}</span>${esc(e.response)}</p><p class="limits">限制与待核：${esc(e.limits)}</p></details>`).join('')||'<p class="empty-records">该日期没有当前所选类型的记录，可切换图层或日期。</p>';
 }
 function hideTooltip(){tip.hidden=true;}
 function showTooltip(group,px,py){
  const events=ordered(group.events),shown=events.slice(0,5);
  tip.innerHTML=`<h3>${esc(group.date)} · ${group.events.length}条记录</h3><small>${esc(activeSeries.name)}收盘 ${fmt(group.value)}点</small><ul>${shown.map(e=>`<li><b><i class="category-dot" style="--category-color:${categoryColor(e.category)}" aria-label="${esc(e.category)}"></i>${esc(kindLabel(e))} · ${esc(e.name)}</b>${eventDirections(e).length?`<span class="tooltip-direction">${esc(directionLabel(e))}</span>`:''}<small>资料 ${esc(e.date)}${e.date!==group.date?' → 下一交易日定位':''} · ${esc(e.status)}</small></li>`).join('')}</ul><div class="tooltip-foot">${events.length>shown.length?`另有${events.length-shown.length}条记录，`:''}点击查看全部原句与条件</div>`;
  tip.hidden=false;
  const bounds=wrap.getBoundingClientRect(),tw=tip.getBoundingClientRect().width,th=tip.getBoundingClientRect().height;
  let tx=px+18,ty=py-th-16;if(tx+tw>bounds.width-9)tx=px-tw-18;if(ty<6)ty=py+18;
  tip.style.left=Math.max(9,Math.min(tx,bounds.width-tw-9))+'px';
  const screenTop=8-bounds.top,screenBottom=window.innerHeight-bounds.top-th-8;
  tip.style.top=Math.max(screenTop,Math.min(ty,screenBottom))+'px';
 }
 function choose(group){selectedDate=[...new Set(group.events.map(e=>e.date))].sort().at(-1);dateSelect.value=selectedDate;update();}
 function draw(){
  hideTooltip();
  const width=wrap.getBoundingClientRect().width||900,height=width<600?355:430;
  const margin={left:width<600?55:67,right:19,top:27,bottom:47};
  const svg=d3.select(svgElement).attr('viewBox',`0 0 ${width} ${height}`).attr('height',height).style('height',height+'px');svg.selectAll('g,path,rect,line,circle,text').remove();
  const points=activeSeries.points.map(p=>({date:iso(p[0]),value:p[1]}));
  const x=d3.scaleUtc().domain([iso(DATA.start),iso(DATA.end)]).range([margin.left+6,width-margin.right-6]);
  const [lo,hi]=d3.extent(points,p=>p.value),pad=(hi-lo)*.10;
  const y=d3.scaleLinear().domain([lo-pad,hi+pad]).nice().range([height-margin.bottom-38,margin.top+38]);
  const frame={x:margin.left,y:margin.top,width:width-margin.left-margin.right,height:height-margin.bottom-margin.top};
  svg.append('rect').attr('data-chart-frame','').attr('x',frame.x).attr('y',frame.y).attr('width',frame.width).attr('height',frame.height).attr('fill','none').attr('stroke','#e0e5d9');
  if(activeSeries.points.at(-1)[0]<DATA.end){
   const last=x(points.at(-1).date);svg.append('rect').attr('class','missing-region').attr('x',last).attr('y',margin.top).attr('width',width-margin.right-last).attr('height',frame.height).attr('fill','#eef1e8');
   svg.append('text').attr('x',width-margin.right-6).attr('y',margin.top+18).attr('text-anchor','end').text('行情缺失');
  }
  svg.append('g').attr('transform',`translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(8).tickFormat(d3.format(',.0f')));
  const axis=d3.axisBottom(x).ticks(5).tickSize(4).tickPadding(9).tickFormat(d3.utcFormat('%m-%d'));
  if(width<600)axis.tickValues(['2026-06-01','2026-08-01','2026-10-01'].map(iso));
  svg.append('g').attr('transform',`translate(0,${height-margin.bottom})`).call(axis);
  svg.append('text').attr('x',margin.left).attr('y',15).text('指数收盘 / 点');
  svg.append('path').datum(points).attr('class','price-line').attr('fill','none').attr('stroke','#315d49').attr('stroke-width',2).attr('stroke-linejoin','round').attr('d',d3.line().x(p=>x(p.date)).y(p=>y(p.value)));
  const selected=selectedGroup();
  if(selected)svg.append('line').attr('x1',x(iso(selected.date))).attr('x2',x(iso(selected.date))).attr('y1',margin.top).attr('y2',height-margin.bottom).attr('stroke','#a8b49d').attr('stroke-dasharray','3 4');
  const riskGroups=svg.append('g').attr('class','event-markers');
  const markerNodes=[],badgeBoxes=[];
  groups.forEach((group,i)=>{
   const px=x(iso(group.date)),py=y(group.value),radius=4+Math.min(4,Math.sqrt(group.events.length));group.px=px;group.py=py;
   const node=riskGroups.append('g').attr('class','risk-marker').attr('data-anchor-date',group.date).attr('data-price',group.value).attr('data-event-count',group.events.length).attr('transform',`translate(${px},${py})`).attr('tabindex',0).attr('role','button').attr('aria-label',`${group.date}，${group.events.length}条风险提示，收盘${fmt(group.value)}点`).attr('aria-describedby','eventTooltip');
   const types=DATA.categories.filter(cat=>group.events.some(e=>e.category===cat));
   node.attr('data-categories',types.join('|'));
   node.append('circle').attr('class','marker-ring').attr('r',selected===group?radius+4:radius+1).attr('fill','#fffffb').attr('stroke',selected===group?'#344b3d':'#d8dfd0').attr('stroke-width',1.2);
   const segments=d3.pie().sort(null).value(()=>1)(types),arc=d3.arc().innerRadius(Math.max(2,radius-2)).outerRadius(radius+1);
   node.selectAll('path.category-segment').data(segments).enter().append('path').attr('class','category-segment').attr('data-category',v=>v.data).attr('d',arc).attr('fill',v=>categoryColor(v.data));
   const disclosure=group.events.find(e=>kind(e)==='position');
   if(disclosure)node.append('rect').attr('class','position-symbol').attr('x',-3).attr('y',-3).attr('width',6).attr('height',6).attr('fill','#394f73');
   else node.append('circle').attr('r',1.8).attr('fill',types.length===1?categoryColor(types[0]):'#344b3d');
   if(disclosure){
    node.attr('data-disclosed-percent',disclosure.position.percent===null?'unknown':disclosure.position.percent);
    const prior=groups.slice(0,i).flatMap(g=>g.events).filter(e=>kind(e)==='position').at(-1);
    if(!prior||prior.position.percent!==disclosure.position.percent||selected===group||i===groups.length-1){
     const label=disclosure.position.percent===null?'持有':positionLabel(disclosure),bw=label.length*7+12;
     let by=py+radius+32,bx=Math.max(margin.left+2,Math.min(px-bw/2,width-margin.right-bw-2));
     for(let attempt=0;attempt<8;attempt++){if(!badgeBoxes.some(b=>bx<b.x+b.w+4&&bx+bw>b.x-4&&by<b.y+20&&by+17>b.y-3))break;by+=21;}
     by=Math.min(height-margin.bottom-19,by);badgeBoxes.push({x:bx,y:by,w:bw});
     const badge=svg.append('g').attr('class','position-badge').attr('aria-hidden','true').style('pointer-events','none');
     badge.append('line').attr('x1',px).attr('x2',bx+bw/2).attr('y1',py+radius+2).attr('y2',by).attr('stroke','#9aa8bd').attr('stroke-width',.8);
     badge.append('rect').attr('x',bx).attr('y',by).attr('width',bw).attr('height',17).attr('rx',3).attr('fill','#394f73');
     badge.append('text').attr('x',bx+bw/2).attr('y',by+12).attr('text-anchor','middle').style('fill','#fff').style('font-size','10px').text(label);
    }
   }
   if(group.events.some(e=>kind(e)==='plan'))node.append('path').attr('class','plan-symbol').attr('d',`M${radius+4},-4l4,4l-4,4l-4,-4Z`).attr('fill','#fffffb').attr('stroke','#89764e').attr('stroke-width',1.4);
   const arrows=plottedDirections(group);
   for(const arrow of arrows){
    const a=node.append('g').attr('class','direction-arrow').attr('data-bias',arrow.bias).attr('data-conditional',String(arrow.conditional)).attr('aria-hidden','true');
    const stroke='#344b3d',fill=arrow.conditional?'#fffffb':stroke;
    if(arrow.bias==='rotation'){
     a.attr('transform',`translate(0,${-radius-13})`);
     a.append('line').attr('x1',-10).attr('x2',10).attr('stroke',stroke).attr('stroke-width',1.6).attr('stroke-dasharray',arrow.conditional?'3 2':null);
     a.append('path').attr('d','M-15,0L-9,-4L-9,4Z M15,0L9,-4L9,4Z').attr('stroke',stroke).attr('fill',fill);
    }else{
     const sign=arrow.bias==='up'?-1:1;
     a.attr('transform',`translate(0,${sign*(radius+4)})`);
     a.append('line').attr('y1',0).attr('y2',sign*14).attr('stroke',stroke).attr('stroke-width',1.6).attr('stroke-dasharray',arrow.conditional?'3 2':null);
     a.append('path').attr('d',`M0,${sign*21}L-4,${sign*14}L4,${sign*14}Z`).attr('stroke',stroke).attr('fill',fill);
    }
   }
   node.attr('aria-label',`${group.date}，${group.events.length}条记录，${types.join('、')}，${disclosure?'本次披露仓位'+positionLabel(disclosure)+'，':''}${arrows.map(a=>glyphs[a.bias]+(a.conditional?'条件情景':'原文倾向')).join('；')||'未标方向'}，收盘${fmt(group.value)}点`);
   node.on('focus',()=>showTooltip(group,px,py)).on('blur',hideTooltip).on('click',()=>choose(group)).on('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){event.preventDefault();choose(group);hideTooltip();}
    if(event.key==='Escape')hideTooltip();
    if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();markerNodes[Math.max(0,Math.min(groups.length-1,i+(event.key==='ArrowLeft'?-1:1)))].focus();}
   });markerNodes.push(node.node());
  });
  const overlay=svg.append('rect').attr('data-hover-overlay','').attr('x',frame.x).attr('y',frame.y).attr('width',frame.width).attr('height',frame.height).attr('fill','transparent').attr('aria-hidden','true');
  let near=null;
  function nearest(event){const [px,py]=d3.pointer(event,svgElement);let best=null,distance=Infinity;for(const group of groups){const delta=Math.hypot(group.px-px,group.py-py);if(delta<distance){distance=delta;best=group;}}return {group:distance<=22?best:null,px,py};}
  overlay.on('pointermove',event=>{const {group,px,py}=nearest(event);near=group;overlay.style('cursor',group?'pointer':'default');if(group)showTooltip(group,px,py);else hideTooltip();}).on('pointerleave',()=>{near=null;hideTooltip();}).on('click',event=>{const {group}=nearest(event);if(group){choose(group);hideTooltip();}});
 }
 function update(){
  activeSeries=series();const mapping=mappings(activeSeries);groups=mapping.groups;
  for(const option of dateSelect.options)option.textContent=option.value==='pending'?`年份待核 · ${dateEvents('pending').length}条`:`${option.value} · ${dateEvents(option.value).length}条`;
  $('#coverage').textContent=`${activeSeries.name} ${activeSeries.code} · ${activeSeries.points[0][0]}—${activeSeries.points.at(-1)[0]}`;
  $('#markCounts').textContent=`${groups.length}个指数圆点 · ${groups.reduce((n,g)=>n+g.events.length,0)}条所选记录 · ${dateEvents('pending').length}条年份待核单列`;
  $('#missingNotice').hidden=!mapping.missing.length;
  $('#missingNotice').textContent=`当前指数有 ${mapping.missing.length} 条提示因缺少对应行情未落点，仍可在日期菜单查看；切换万得全A可查看全部已标日期的提示。`;
  renderDetails();draw();
 }
 async function init(){
  try{
   if(!window.d3)throw Error('图表组件未加载，请刷新重试。');
   const response=await fetch('data/risk-events-v3.json?v='+VERSION);if(!response.ok)throw Error('事件资料暂时没有载入，请刷新重试。');DATA=await response.json();
   if(DATA.events.length<133||DATA.series.length!==4||DATA.schemaVersion!==3)throw Error('事件资料结构不完整。');
   $('#categoryLegend').innerHTML=DATA.categories.map(cat=>`<span><i class="category-dot" style="--category-color:${categoryColor(cat)}" aria-hidden="true"></i>${esc(cat)}</span>`).join('');
   DATA.series.forEach(s=>indexSelect.add(new Option(s.name+' · '+s.role,s.id)));
   const days=[...new Set(DATA.events.filter(e=>e.date).map(e=>e.date))].sort();days.forEach(day=>dateSelect.add(new Option(day+' · '+dateEvents(day).length+'条',day)));
   dateSelect.add(new Option('年份待核 · 7条','pending'));
   const latest=DATA.events.find(e=>e.id===DATA.meta.observationsReview.latestDisclosureId);
   $('#latestPosition').innerHTML=`<span class="eyebrow">最近一次明确比例披露</span><strong>${latest.date} · ${positionLabel(latest)}</strong><p>${esc(latest.name)}。这是该资料日的自述，之后未披露日期不延续。</p><button type="button" data-jump-date="${latest.date}">查看原句 ↗</button>`;
   $('#latestView').innerHTML='<span class="eyebrow">近期观点与条件</span><strong>底部附近，准备做反弹</strong><p>10月23日自述“很兴奋”；10月26日仍看近期反弹，也保留反弹后再下一个台阶的可能。满仓属于后续计划。</p><button type="button" data-jump-date="2026-10-26">查看观点与计划 ↗</button>';
   document.querySelectorAll('[data-jump-date]').forEach(button=>button.addEventListener('click',()=>{selectedDate=button.dataset.jumpDate;dateSelect.value=selectedDate;update();$('#selectedHeading').scrollIntoView({block:'start'});}));
   document.querySelectorAll('[data-layer]').forEach(input=>input.addEventListener('change',()=>{input.checked?visibleKinds.add(input.dataset.layer):visibleKinds.delete(input.dataset.layer);update();}));
   const requested=new URLSearchParams(location.search).get('date');selectedDate=days.includes(requested)?requested:days.at(-1);dateSelect.value=selectedDate;
   indexSelect.disabled=false;dateSelect.disabled=false;
   $('#sourceInfo').innerHTML=`<p>风险库第一版：36类风险、133条日期提及、169条去重证据。126条按资料标签日期标注，7条参考稿年份待核。重复提及不是独立市场冲击或预测命中。</p><p>方向为依据现有原句添加的整理标注。已逐条整理169条证据，49条日期提及含方向或轮动表述；保留条件、对象与阶段，不从后续走势倒推。复盘旧预期、仅说风险缓和、等待确认，不直接画成新的方向箭头。海外对象可在文字中显示，但不在本图画箭头。</p><p>箭头描述的是原文观点，可能针对整体市场、板块或个股，不等同所选指数的价格预测；同点向上和向下箭头可能属于分阶段或分对象判断。多色圆点表示多类事件，每类一段，不代表风险大小。</p><p>多数发言归属仍待核，全部未做原音听核或外部事实核查。应对为跨所列原句的整理归纳，不是每条原句都给出了交易动作。</p><p>万得全A：本地Wind WPS日收盘快照，至2026-10-28；其余指数：本地日行情快照，至2026-09-30。没有补齐缺失行情，也没有计算策略收益。</p><p>资料标签在休市日时，按万得全A交易日期表顺延到下一交易日，将提示放在该日指数真实收盘点上；每条提示保留原标签日期。走势图不能据此认定已核实实际发言日期或影响因果。</p>`;
   $('#sourceInfo').insertAdjacentHTML('afterbegin',`<p><strong>新增观点与仓位：</strong>${DATA.meta.observationsReview.positions}条持仓自述、${DATA.meta.observationsReview.plans}条个人操作计划、${DATA.meta.observationsReview.views}条机会与观点补充。蓝色实心方块＝持仓自述，空心菱形＝计划；蓝底比例文字优先显示比例变化日与选中日，每个披露点均可悬停查看。比例未报时不从前文推算，也不连成持续仓位曲线。计划不计入已披露仓位；清仓不自动代表看空市场。</p><p>新增观点侧重补齐机会条件与近期上下文，尚非全量观点库。全部为资料原文自述，未核验账户、实际成交或收益。</p><p><strong>日期核查：</strong>${esc(DATA.meta.dateAuditNotice)}</p>`);
   indexSelect.addEventListener('change',()=>{selectedIndex=indexSelect.value;update();});dateSelect.addEventListener('change',()=>{selectedDate=dateSelect.value;update();});
   $('#chartStatus').hidden=true;update();resizeObserver=new ResizeObserver(()=>draw());resizeObserver.observe(wrap);
  }catch(error){$('#chartStatus').textContent=error.message;$('#coverage').textContent='暂时无法显示';console.error(error);}
 }
 init();
})();

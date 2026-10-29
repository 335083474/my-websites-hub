'use strict';
(()=>{
 const VERSION='20261029-risk-v1', $=s=>document.querySelector(s);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const iso=d=>new Date(d+'T00:00:00Z');
 const fmt=n=>n.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});
 let DATA,selectedIndex='wind-all-a',selectedDate,groups=[],activeSeries,resizeObserver;
 const indexSelect=$('#indexSelect'),dateSelect=$('#dateSelect'),svgElement=$('#riskChart'),wrap=$('#chartWrap'),tip=$('#eventTooltip');
 function series(){return DATA.series.find(s=>s.id===selectedIndex)}
 function dateEvents(day){return DATA.events.filter(e=>day==='pending'?!e.date:e.date===day)}
 function anchorDate(day){return DATA.tradingCalendar.find(d=>d>=day)||null}
 function mappings(s){
  const prices=new Map(s.points.map(p=>[p[0],p[1]])),buckets=new Map(),missing=[];
  for(const e of DATA.events){
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
  const group=selectedGroup(),events=group?group.events:dateEvents(selectedDate),pending=selectedDate==='pending';
  $('#selectedHeading').textContent=pending?`年份待核 · ${events.length}条参考稿提及`:`${group?group.date:selectedDate} · ${events.length}条风险提示`;
  if(group){
   const labels=[...new Set(group.events.map(e=>e.date))].sort();
   $('#selectionNote').textContent=`${activeSeries.name}收盘 ${fmt(group.value)}点；资料标签：${labels.join('、')}。${labels.some(d=>d!==group.date)?'休市日标签顺延至下一交易日，同点合并显示。':'标记与资料标签为同日。'} 定位不代表已核实发言时间。`;
  }else $('#selectionNote').textContent=pending?'未确认年份，不放到指数走势上。':`${activeSeries.name}在对应交易日缺少行情，提示仍可阅读，图上不补点。`;
  $('#eventDetails').innerHTML=events.map((e,i)=>`<details class="event-card" ${i===0?'open':''} data-event="${esc(e.id)}"><summary>${esc(e.risk)} · ${esc(e.name)}</summary><div class="event-labels">${esc(e.label)} · ${esc(e.category)} · ${esc(e.status)}${e.time_expression?' · 原文时间：'+esc(e.time_expression):''}</div>${e.updates.length?`<div class="update">后续修正：${e.updates.map(esc).join('；')}</div>`:''}${e.quotes.map(q=>{const link=linkToDay(q);return `<blockquote><p>${esc(q.text)}</p><div class="quote-source">${esc(q.id)} · ${esc(q.attribution)} · 原音未听核${link?`<a href="${esc(link)}">查看这一天 ↗</a>`:''}<br>${q.paragraphs.map(esc).join('、')}</div></blockquote>`}).join('')}<p class="event-summary"><span class="label">应对归纳</span>${esc(e.response)}</p><p class="limits">限制与待核：${esc(e.limits)}</p></details>`).join('');
 }
 function hideTooltip(){tip.hidden=true;}
 function showTooltip(group,px,py){
  tip.innerHTML=`<h3>${esc(group.date)} · ${group.events.length}条风险提示</h3><small>${esc(activeSeries.name)}收盘 ${fmt(group.value)}点</small><ul>${group.events.map(e=>`<li><b>${esc(e.risk)} ${esc(e.name)}</b><small>资料 ${esc(e.date)}${e.date!==group.date?' → 下一交易日定位':''} · ${esc(e.status)}</small></li>`).join('')}</ul><div class="tooltip-foot">点击圆点查看原句与后续修正</div>`;
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
  const y=d3.scaleLinear().domain([lo-pad,hi+pad]).nice().range([height-margin.bottom-7,margin.top+7]);
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
  const markerNodes=[];
  groups.forEach((group,i)=>{
   const px=x(iso(group.date)),py=y(group.value),radius=4+Math.min(4,Math.sqrt(group.events.length));group.px=px;group.py=py;
   const node=riskGroups.append('g').attr('class','risk-marker').attr('data-anchor-date',group.date).attr('data-price',group.value).attr('data-event-count',group.events.length).attr('transform',`translate(${px},${py})`).attr('tabindex',0).attr('role','button').attr('aria-label',`${group.date}，${group.events.length}条风险提示，收盘${fmt(group.value)}点`).attr('aria-describedby','eventTooltip');
   node.append('circle').attr('class','marker-ring').attr('r',selected===group?radius+3:radius+1).attr('fill',selected===group?'#f3e2c8':'#fffffb').attr('stroke',selected===group?'#835c31':'#b47a40').attr('stroke-width',1.4);
   node.append('circle').attr('r',Math.max(2,radius-2)).attr('fill','#b47a40');
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
  $('#coverage').textContent=`${activeSeries.name} ${activeSeries.code} · ${activeSeries.points[0][0]}—${activeSeries.points.at(-1)[0]}`;
  $('#markCounts').textContent=`${groups.length}个指数圆点 · ${groups.reduce((n,g)=>n+g.events.length,0)}条提示 · 7条年份待核单列`;
  $('#missingNotice').hidden=!mapping.missing.length;
  $('#missingNotice').textContent=`当前指数有 ${mapping.missing.length} 条提示因缺少对应行情未落点，仍可在日期菜单查看；切换万得全A可查看全部已标日期的提示。`;
  renderDetails();draw();
 }
 async function init(){
  try{
   if(!window.d3)throw Error('图表组件未加载，请刷新重试。');
   const response=await fetch('data/risk-events-v1.json?v='+VERSION);if(!response.ok)throw Error('事件资料暂时没有载入，请刷新重试。');DATA=await response.json();
   if(DATA.events.length!==133||DATA.series.length!==4)throw Error('事件资料结构不完整。');
   DATA.series.forEach(s=>indexSelect.add(new Option(s.name+' · '+s.role,s.id)));
   const days=[...new Set(DATA.events.filter(e=>e.date).map(e=>e.date))].sort();days.forEach(day=>dateSelect.add(new Option(day+' · '+dateEvents(day).length+'条',day)));
   dateSelect.add(new Option('年份待核 · 7条','pending'));
   const requested=new URLSearchParams(location.search).get('date');selectedDate=days.includes(requested)?requested:days.at(-1);dateSelect.value=selectedDate;
   indexSelect.disabled=false;dateSelect.disabled=false;
   $('#sourceInfo').innerHTML=`<p>风险库第一版：36类风险、133条日期提及、169条去重证据。126条按资料标签日期标注，7条参考稿年份待核。重复提及不是独立市场冲击或预测命中。</p><p>多数发言归属仍待核，全部未做原音听核或外部事实核查。应对为跨所列原句的整理归纳，不是每条原句都给出了交易动作。</p><p>万得全A：本地Wind WPS日收盘快照，至2026-10-28；其余指数：本地日行情快照，至2026-09-30。没有补齐缺失行情，也没有计算策略收益。</p><p>资料标签在休市日时，按万得全A交易日期表顺延到下一交易日，将提示放在该日指数真实收盘点上；每条提示保留原标签日期。走势图不能据此认定已核实实际发言日期或影响因果。</p>`;
   indexSelect.addEventListener('change',()=>{selectedIndex=indexSelect.value;update();});dateSelect.addEventListener('change',()=>{selectedDate=dateSelect.value;update();});
   $('#chartStatus').hidden=true;update();resizeObserver=new ResizeObserver(()=>draw());resizeObserver.observe(wrap);
  }catch(error){$('#chartStatus').textContent=error.message;$('#coverage').textContent='暂时无法显示';console.error(error);}
 }
 init();
})();

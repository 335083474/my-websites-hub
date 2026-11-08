(() => {
  'use strict';
  const D = window.MARKET_HOURS;
  const esc = x => String(x ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const num = x => Number(x).toLocaleString('zh-CN',{maximumFractionDigits:2});
  const duration = x => {const s=Math.round(x*60),h=Math.floor(s/3600),m=Math.floor(s%3600/60),sec=s%60;return `${h}小时${m?m+'分':''}${sec?sec+'秒':''}`;};
  const timeNum = x => Number(x.slice(0,2))*60+Number(x.slice(3));
  const gaps = p => p.segments.slice(1).map((s,i)=>(timeNum(s.open)-timeNum(p.segments[i].close)+1440)%1440).filter(x=>x>0);
  const sessions = p => p.segments.map(s=>`${s.open}–${s.close}${s.overnight?'（跨午夜）':''}${s.night?' · 夜盘':''}`);
  const all = D.rows.flatMap(r=>r.profiles.map((p,i)=>({r,p,i,key:r.id+'|'+i})));
  const state = {q:'',asset:'全部资产',region:'全部地区',quality:'全部来源',gap:'全部休息结构',freq:60,target:968,sort:'closest',page:0};
  const options = arr => arr.map(x=>`<option>${esc(x)}</option>`).join('');
  function resultSet() {
    const q=state.q.trim().toLowerCase();
    return all.filter(({r,p})=>(!q||[r.name,r.id,r.timezone,...r.aliases,...r.notes].join(' ').toLowerCase().includes(q))
      &&(state.asset==='全部资产'||r.asset===state.asset)&&(state.region==='全部地区'||r.region===state.region)
      &&(state.quality==='全部来源'||(state.quality==='官方资料'?r.quality.startsWith('官方'):r.quality===state.quality))
      &&(state.gap==='全部休息结构'||(state.gap==='段间有60分钟空档'?gaps(p).includes(60):p.segments.length===1&&1440-p.minutes===60)))
      .sort((a,b)=>state.sort==='closest'?(Number(a.r.comparisonEligible===false)-Number(b.r.comparisonEligible===false)||Math.abs(a.p.minutes*60/state.freq-state.target)-Math.abs(b.p.minutes*60/state.freq-state.target)||a.r.name.localeCompare(b.r.name,'zh')):a.r.name.localeCompare(b.r.name,'zh'));
  }
  function update() {
    const data=resultSet(), pages=Math.max(1,Math.ceil(data.length/20)); state.page=Math.min(state.page,pages-1);
    document.getElementById('mh-count').textContent=`找到 ${data.length} 种时段，来自 ${new Set(data.map(x=>x.r.id)).size} 条记录`;
    document.getElementById('mh-assumption').textContent=`现在假设每 ${state.freq} 秒一个点，并且数据包含整段交易。比较目标：${state.target} 点${state.target===789?'（849 − 假设休息60点）':''}，相当于 ${duration(state.target*state.freq/60)}。`;
    document.getElementById('mh-rows').innerHTML=data.length?data.slice(state.page*20,state.page*20+20).map(({r,p,i,key})=>{
      const expected=p.minutes*60/state.freq, diff=expected-state.target;
      return `<tr><td><button class="mh-name" data-market="${esc(key)}">${esc(r.name)} <span>↗</span></button><small>${esc(r.asset)} · ${esc(r.region)}${r.profiles.length>1?` · 时段 ${i+1}/${r.profiles.length}`:''}</small><span class="mh-source ${r.quality.startsWith('官方')?'official':''}">${esc(r.quality)}</span></td>
      <td class="mh-session">${sessions(p).map(x=>`<span>${esc(x)}</span>`).join('')}<small>${esc(r.timezone)}</small></td>
      <td>${r.comparisonEligible===false?'<small>库原值，不能视为净时长</small>':''}<b>${duration(p.minutes)}</b><small>${num(p.minutes)} 分钟</small></td>
      <td class="mh-compare">${r.comparisonEligible===false?'<b style="font-size:14px">暂不比较</b><small>时段口径待核实<br>点名称看原因</small>':`<b>${num(expected)}</b><small>相差 ${diff>0?'+':''}${num(diff)} 点</small>`}</td>
      <td><span class="mh-period">${esc(r.period)}</span>${p.examples.length?`<small>样例 ${p.examples[0].date}<br>抽样出现 ${p.samples} 天${i>0?' · 非主要模式':''}</small>`:''}</td></tr>`;
    }).join(''):'<tr><td colspan="5" class="empty">没有符合条件的记录。可清除筛选，或换一个品种关键词。</td></tr>';
    document.getElementById('mh-page').textContent=`第 ${state.page+1} / ${pages} 页`;
    document.getElementById('mh-prev').disabled=state.page===0;
    document.getElementById('mh-next').disabled=state.page===pages-1;
  }
  function detail(key) {
    const item=all.find(x=>x.key===key); if(!item)return;
    const {r,p}=item, gap=gaps(p);
    const dialog=document.getElementById('mh-dialog');
    document.getElementById('mh-detail').innerHTML=`<span class="eyebrow">时段与出处</span><h2 id="mh-detail-title">${esc(r.name)}</h2><p class="muted">${esc(r.quality)} · ${esc(r.period)}</p>
      <div class="mh-detail-hours"><strong>${duration(p.minutes)}</strong><span>${r.comparisonEligible===false?'保留库原值，不能视为净开市时长':'各段开市时间相加'}</span></div><p>${sessions(p).map(esc).join(' / ')}<br><small>当地时区 ${esc(r.timezone)}</small></p>
      <p class="reading-banner">${gap.length?`所列各段之间的钟面空档：${gap.map(x=>num(x)+'分钟').join('、')}。空档可能是午休、日夜盘之间休市或其他暂停；周末另计。`:`本条只列一个连续开市区间。${p.minutes<1440?`一天剩余${num(1440-p.minutes)}分钟在此区间以外，不应自动称为午休。`:'通用全天模型不包含特定平台维护。'}`}</p>
      <h3>这条记录怎样使用</h3>${p.samples!=null?`<p>本模式在抽样中出现 ${p.samples} 天。少数日期的模式可能是提前收市、星期差异或年内改时，不能直接当成每天固定时段。</p>`:''}<ul>${r.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>
      ${r.aliases.length?`<details><summary>库中的名称与别名（${r.aliases.length}个）</summary><p class="mh-aliases">${r.aliases.map(esc).join(' / ')}</p><p>同名、别名和重复模型不等于不同交易所，也不证明产品上市年份。</p></details>`:''}
      ${p.examples.length?`<h3>换成北京时间 / 香港时间</h3><p>下面保留实际样例日期。冬夏令时可能改变换算后的钟点。</p>${p.examples.map(e=>`<div class="mh-date-example"><b>交易日 ${e.date}</b><p>香港：${e.hongKong.map(s=>s.map(esc).join(' → ')).join('<br>')}</p><details><summary>查看同一时段的 UTC</summary><p>${e.utc.map(s=>s.map(esc).join(' → ')).join('<br>')}</p></details></div>`).join('')}`:'<p class="muted">本条为官方资料的时段摘录；尚未生成逐日时区换算。</p>'}
      <h3>来源</h3>${r.sources.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a></p>`).join('')}
      ${Object.keys(r.rules).length?`<details><summary>展开库记录的时段变更规则</summary><p>日期来自库定义；不是已核实完整的历史变更表。None 表示库默认规则，不表示从上市开始一直如此。</p><pre class="mh-rules">${esc(JSON.stringify(r.rules,null,2))}</pre></details>`:''}`;
    dialog.showModal();
  }
  window.renderMarketHours = main => {
    main.innerHTML=`<div class="page mh-page"><span class="eyebrow">GLOBAL MARKET HOURS · 全球时段对照</span><div class="intro"><div><h1>先看几点开市，<br>再比一天有多少点。</h1><p>把市场时段放到一起，寻找值得进一步核对的候选。<br>时长接近，只是一条线索；每条记录都能点开看出处。</p></div><div class="date-stamp">最近整理<b>${D.updated}</b><span>以2024样例与历史资料为主</span></div></div>
      <div class="mh-summary"><div><strong>${D.rows.length}</strong><span>日历模型与官方记录</span></div><div><strong>${all.length}</strong><span>收录的时段模式</span></div><div><strong>${new Set(D.rows.map(r=>r.asset)).size}</strong><span>资产类别 / 通用模型</span></div><div><strong>849 → 968</strong><span>待解释的每日观察点数</span></div></div>
      <div class="mh-caveat"><b>这是一份主要市场对照表，尚未覆盖全球所有合约。</b> 同一市场可能有多种模型。开源记录只抽取2024年1、7、11月各两周；官方记录各自注明年份。当前有 ${D.failures.length} 个日历提取失败，${D.excluded.length} 个业务日期模型不用于比较。</div>
      <p class="reading-banner"><b>最新判断：</b>恒指类期货的一分钟总点数值得追查，但午休位置与全历史仍有反证；尚未确认任何真实标的。<a href="#claims/C13">查看候选与排除理由 →</a></p>
      <section class="mh-controls" aria-label="市场时段筛选"><div class="mh-search-row"><label class="mh-search">搜索市场或品种<input id="mh-search" type="search" placeholder="例如：黄金、铜、香港、CME、东京…" value="${esc(state.q)}"></label><button id="mh-reset" class="button outline">清除筛选</button></div><div class="mh-filters">
      <label>资产类别<select id="mh-asset">${options(['全部资产',...new Set(D.rows.map(r=>r.asset))])}</select></label>
      <label>地区<select id="mh-region">${options(['全部地区',...new Set(D.rows.map(r=>r.region))])}</select></label>
      <label>资料来源<select id="mh-quality">${options(['全部来源','官方资料','开源日历','存在口径差异'])}</select></label>
      <label>休息结构<select id="mh-gap">${options(['全部休息结构','段间有60分钟空档','单段开市23小时'])}</select></label></div>
      <div class="mh-compare-controls"><label>假设每个点间隔<select id="mh-freq"><option value="15">15秒</option><option value="30">30秒</option><option value="60">1分钟</option><option value="120">2分钟</option></select></label>
      <label>跟哪段数据比较<select id="mh-target"><option value="968">后段：968点</option><option value="849">前段：849点，全部算交易</option><option value="789">前段：849点，假设其中60点休息</option></select></label>
      <label>排列方式<select id="mh-sort"><option value="closest">点数最接近的在前</option><option value="name">按市场名称</option></select></label></div>
      <p id="mh-assumption" class="mh-assumption"></p><p class="mh-small">预计点数 = 开市分钟 × 60 ÷ 每点秒数。按时间区间计算，端点计法可差1点；休息已从市场开市时长扣除。没有确认等间隔、全天覆盖之前，这只是试算。</p></section>
      <div class="mh-results-head"><p id="mh-count" aria-live="polite"></p><a href="./market-hours.csv" download>下载全部 CSV ↓</a></div>
      <div class="table-container mh-table"><table><thead><tr><th>市场 / 品种 · 点名称看来源</th><th>当地开市时间</th><th>开市总时长</th><th>预计点数</th><th>适用范围</th></tr></thead><tbody id="mh-rows"></tbody></table></div>
      <div class="mh-pagination"><button class="button outline" id="mh-prev">上一页</button><span id="mh-page"></span><button class="button outline" id="mh-next">下一页</button></div>
      <section class="mh-providers"><div class="section-heading"><div><h2>这些资料去哪里找？</h2><p>免费日历先筛选，具体候选再查官方历史通告。商业库也可补覆盖。</p></div></div><div class="mh-provider-grid">${D.providers.map(p=>`<article class="paper-card"><span class="eyebrow">${esc(p.type)}</span><h3><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)} ↗</a></h3><p>${esc(p.description)}</p></article>`).join('')}</div></section>
      <details class="mh-method"><summary>覆盖范围、计算方法与尚未完成的部分</summary><p>${esc(D.method)}</p><ul>${D.limitations.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p>读取 ${D.registeredNames} 个库名称，按日历类合并为 ${D.calendarDefinitions} 个定义；不是 ${D.registeredNames} 家交易所。仍保留两套库对同一市场的不同实现。</p><p>版本：${Object.entries(D.versions).map(([k,v])=>esc(k+' '+v)).join('；')}。源码链接用于查阅，构建时的文件指纹保存在本地研究记录。</p><p>失败：${D.failures.map(f=>esc(f.name+' — '+f.error)).join('；')||'无'}。</p><p>排除：${D.excluded.map(f=>esc(f.name+' — '+f.reason)).join('；')}。</p><a href="./market-hours.json" download>下载带来源的完整 JSON ↓</a></details>
      <div class="bottom-note"><span>◌</span><div><b>60个空点，可以作为假设，但还不能直接叫午休。</b><br>数据中的60点空缺只出现在部分长窗口字段；其他字段仍有值。<a href="#fields/time_id">返回 time_id 的研究记录 →</a></div></div>
      <dialog id="mh-dialog" aria-labelledby="mh-detail-title"><div class="dialog-head"><span class="eyebrow">MARKET HOURS / 查看原始依据</span><button class="icon-button" id="mh-close" aria-label="关闭市场详情">×</button></div><div id="mh-detail"></div></dialog></div>`;
    for(const key of ['asset','region','quality','gap','freq','target','sort']) {
      const e=document.getElementById('mh-'+key);e.value=state[key]; e.addEventListener('change',()=>{state[key]=['freq','target'].includes(key)?Number(e.value):e.value;state.page=0;update();});
    }
    document.getElementById('mh-search').addEventListener('input',e=>{state.q=e.target.value;state.page=0;update();});
    document.getElementById('mh-reset').addEventListener('click',()=>{Object.assign(state,{q:'',asset:'全部资产',region:'全部地区',quality:'全部来源',gap:'全部休息结构',page:0});window.renderMarketHours(main);});
    document.getElementById('mh-prev').addEventListener('click',()=>{state.page--;update();document.getElementById('mh-count').scrollIntoView({block:'start'});});
    document.getElementById('mh-next').addEventListener('click',()=>{state.page++;update();document.getElementById('mh-count').scrollIntoView({block:'start'});});
    document.getElementById('mh-rows').addEventListener('click',e=>{const b=e.target.closest('[data-market]');if(b)detail(b.dataset.market);});
    document.getElementById('mh-close').addEventListener('click',()=>document.getElementById('mh-dialog').close());
    update();
  };
})();

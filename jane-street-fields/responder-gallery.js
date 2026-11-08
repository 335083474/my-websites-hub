(() => {
  'use strict';
  const views = {
    distribution: {label:'数值分布', title:'数字通常落在哪里？', text:'越靠近中间的尖峰，表示越多记录集中在零附近。橙色组更集中，蓝色和绿色组展开得更宽。横轴是匿名目标值，不能读成收益百分比。', scope:'全部1,699天 · 47,127,338行 · 每行等权', variants:[['comparison','叠在一起比较','responder-distributions.png','9列分布按短、中、长窗口候选排列，每幅图比较三组。'],['grid','9列分别看','responder-distributions-grid.png','9列分别绘制的全历史直方图，各小图纵轴不同。']]},
    time: {label:'一天的曲线', title:'同一天，9列怎样一起变化？', text:'先看蓝线和绿线：它们经常一起起伏。再比较上、中、下三幅：短窗口变化更快，长窗口往往连成较长的起伏。这是固定的一天示例，不代表每一天都一样。', scope:'date_id=1000 · symbol_id=25 · 原始数值，无平滑或补值', variants:[['zoom','放大200—440点','responder-time-zoom.png','第1000天25号标的，第200到440个观察点的9列目标曲线。'],['full','看完整一天','responder-time-full.png','第1000天25号标的，全部968个观察点的9列目标曲线。']]},
    boundary: {label:'676／677对照', title:'点数切换前后，两天摆在一起看', text:'上排是676号日期，下排是677号日期，都是25号标的。虚线标出旧369边界的位置，不是已知开盘时间。两天本身行情不同，不能把曲线差异全归因于数据处理。', scope:'同一标的 · 两天原始曲线 · 横纵坐标一致', variants:[['break','两天对照','responder-break-days.png','676与677两个日期、同一标的的9列原始曲线对照。']]},
    relation: {label:'哪些列更像', title:'把全部记录合起来，哪些列更常同向？', text:'越接近1，表示两列越经常同向变化。5与8约0.62、3与6约0.73、4与7约0.80。它们有联系，但不是完全一样。这个结果混合了全部标的和时期，不能当成预测能力。', scope:'全历史同期相关 · 每行等权 · 未消除共同市场因素', variants:[['matrix','相关关系','responder-correlations.png','9列全历史同期相关矩阵，同一窗口的列排在一起。']]}
  };
  const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.renderResponderGallery = (main, selected='distribution') => {
    const key=views[selected]?selected:'distribution';
    const view=views[key];
    main.innerHTML=`<div class="page responder-page"><span class="eyebrow">9 RESPONDERS · 从图里看关系</span><div class="intro"><div><h1>9列答案，放在图里看。</h1><p>先看数值分布，再看同一个标的一天。颜色始终对应同一组；4／20／120表示观察步候选，真实秒数未知。</p></div></div>
      <div class="rg-colors"><span><i style="background:#b96833"></i>橙色：2／0／1</span><span><i style="background:#4b74a0"></i>蓝色：5／3／4</span><span><i style="background:#147d6e"></i>绿色：8／6／7</span></div>
      <nav class="rg-tabs" aria-label="选择看图内容">${Object.entries(views).map(([id,v])=>`<a href="#responders/${id}" ${id===key?'aria-current="page" class="active"':''}>${v.label}</a>`).join('')}</nav>
      <section class="paper-card rg-panel"><div class="rg-panel-head"><div><h2>${view.title}</h2><p>${view.text}</p></div><button class="text-button" data-source="E19">查看数据来源 ↗</button></div><p class="rg-scope">${view.scope}</p>
      <div class="rg-options" role="group" aria-label="选择图片范围">${view.variants.map((v,i)=>`<button data-variant="${i}" aria-pressed="${i===0}">${v[1]}</button>`).join('')}<a id="rg-open-btn" href="./${view.variants[0][2]}" target="_blank" rel="noopener">打开高清原图 ↗</a></div>
      <figure class="rg-figure"><a id="rg-original" href="./${view.variants[0][2]}" target="_blank" rel="noopener" aria-label="打开高清原图"><img id="rg-chart" src="./${view.variants[0][2]}" alt="${esc(view.variants[0][3])}" decoding="async"></a><figcaption id="rg-caption">${view.variants[0][3]} 点击图片可打开高清原图。</figcaption></figure></section>
      <div class="reading-banner"><b>读图时记住：</b>分布图覆盖全部训练记录；日内曲线是明确选出的示例。纵轴是匿名目标值，没有还原成价格、收益百分比或真实风险。</div>
      <div class="rg-more"><a href="#claims/C16">本轮图表结论与证据 ↗</a><a href="#claims/C14">旧边界为何消失？ ↗</a><a href="#fields/responder_6">回到比赛目标 responder_6 ↗</a></div></div>`;
    main.querySelectorAll('[data-variant]').forEach(button=>button.addEventListener('click',()=>{
      const idx=Number(button.dataset.variant),v=view.variants[idx];
      main.querySelectorAll('[data-variant]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      main.querySelector('#rg-chart').src='./'+v[2];main.querySelector('#rg-chart').alt=v[3];
      main.querySelector('#rg-original').href='./'+v[2];main.querySelector('#rg-open-btn').href='./'+v[2];main.querySelector('#rg-caption').textContent=v[3]+' 点击图片可打开高清原图。';
    }));
  };
})();

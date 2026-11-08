(() => {
  'use strict';
  const views = {
    distribution: {label:'数值分布', title:'数字通常落在哪里？', text:'越靠近中间的尖峰，表示越多记录集中在零附近。橙色组更集中，蓝色和绿色组展开得更宽。横轴是匿名目标值，不能读成收益百分比。', scope:'全部1,699天 · 47,127,338行 · 每行等权', variants:[['comparison','叠在一起比较','responder-distributions.png','9列分布按短、中、长窗口候选排列，每幅图比较三组。'],['grid','9列分别看','responder-distributions-grid.png','9列分别绘制的全历史直方图，各小图纵轴不同。']]},
    time: {label:'一天的曲线', title:'同一天，9列怎样一起变化？', text:'先看蓝线和绿线：它们经常一起起伏。再比较上、中、下三幅：短窗口变化更快，长窗口往往连成较长的起伏。这是固定的一天示例，不代表每一天都一样。', scope:'date_id=1000 · symbol_id=25 · 原始数值，无平滑或补值', variants:[['zoom','放大200—440点','responder-time-zoom.png','第1000天25号标的，第200到440个观察点的9列目标曲线。'],['full','看完整一天','responder-time-full.png','第1000天25号标的，全部968个观察点的9列目标曲线。']]},
    boundary: {label:'676／677对照', title:'点数切换前后，两天摆在一起看', text:'上排是676号日期，下排是677号日期，都是25号标的。虚线标出旧369边界的位置，不是已知开盘时间。两天本身行情不同，不能把曲线差异全归因于数据处理。', scope:'同一标的 · 两天原始曲线 · 横纵坐标一致', variants:[['break','两天对照','responder-break-days.png','676与677两个日期、同一标的的9列原始曲线对照。']]},
    relation: {label:'哪些列更像', title:'把全部记录合起来，哪些列更常同向？', text:'越接近1，表示两列越经常同向变化。5与8约0.62、3与6约0.73、4与7约0.80。它们有联系，但不是完全一样。这个结果混合了全部标的和时期，不能当成预测能力。', scope:'全历史同期相关 · 每行等权 · 未消除共同市场因素', variants:[['matrix','相关关系','responder-correlations.png','9列全历史同期相关矩阵，同一窗口的列排在一起。']]},
    deep: {label:'深挖分布 · 新', source:'E20', title:'尖峰、数值大小和端点，又告诉了我们什么？', text:'先把不同标的、不同日子的数值调到同样大小，再画一次：尖峰变矮，却没有消失。另一个新发现藏在最外侧：5号列有49次“某个标的一整天卡在−5或+5”。下面三张图分别核对这两条线索。', scope:'全历史47,127,338行 · 50,382个标的日 · 每行等权；整天常数组另列，不参与统一尺度对比', variants:[['peak','尖峰变矮了多少','responder-peak-concentration.png','中心占比：橙色为整份数据统一尺度，绿色为每标的每天各自统一尺度，灰色为普通钟形曲线参照。这里颜色表示处理方式。'],['grid','调整后9列分别看','responder-peak-scaled-grid.png','9列调整尺度前后对照。横轴已换成标准差单位，绿线用整天信息计算，仅用于事后诊断。'],['saturation','整天卡在端点的新线索','responder-whole-day-saturation.png','5号列49个整天端点常数组，集中7天。右图特选date1696/symbol26异常：5号全天−5，8号仍变化。']]}
  };
  const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.renderResponderGallery = (main, selected='distribution') => {
    const key=views[selected]?selected:'distribution';
    const view=views[key];
    main.innerHTML=`<div class="page responder-page"><span class="eyebrow">9 RESPONDERS · 从图里看关系</span><div class="intro"><div><h1>9列答案，放在图里看。</h1><p>${key==='deep'?'这轮把原图拆开检查：哪些是合并数据造成的形状，哪些是额外的结构与异常。':'先看数值分布，再看同一个标的一天。颜色始终对应同一组；4／20／120表示观察步候选，真实秒数未知。'}</p></div></div>
      ${key==='deep'?'<p class="rg-scope">本页颜色按各图图例解释；前两张表示处理方式，第三张蓝色为5号、绿色为8号。</p>':'<div class="rg-colors"><span><i style="background:#b96833"></i>橙色：2／0／1</span><span><i style="background:#4b74a0"></i>蓝色：5／3／4</span><span><i style="background:#147d6e"></i>绿色：8／6／7</span></div>'}
      <nav class="rg-tabs" aria-label="选择看图内容">${Object.entries(views).map(([id,v])=>`<a href="#responders/${id}" ${id===key?'aria-current="page" class="active"':''}>${v.label}</a>`).join('')}</nav>
      <section class="paper-card rg-panel"><div class="rg-panel-head"><div><h2>${view.title}</h2><p>${view.text}</p></div><button class="text-button" data-source="${view.source||'E19'}">查看数据来源 ↗</button></div><p class="rg-scope">${view.scope}</p>
      <div class="rg-options" role="group" aria-label="选择图片范围">${view.variants.map((v,i)=>`<button data-variant="${i}" aria-pressed="${i===0}">${v[1]}</button>`).join('')}<a id="rg-open-btn" href="./${view.variants[0][2]}" target="_blank" rel="noopener">打开高清原图 ↗</a></div>
      <figure class="rg-figure"><a id="rg-original" href="./${view.variants[0][2]}" target="_blank" rel="noopener" aria-label="打开高清原图"><img id="rg-chart" src="./${view.variants[0][2]}" alt="${esc(view.variants[0][3])}" decoding="async"></a><figcaption id="rg-caption">${view.variants[0][3]} 点击图片可打开高清原图。</figcaption></figure></section>
      ${key==='deep'?`<section class="paper-card rg-probe-notes"><h2>目前可以怎么理解？</h2>
      <ol><li><b>尖峰的一部分，是混在一起造成的。</b>有些日子和标的数值很小，有些很大。把各自的中心和大小调一致后，1号列“挤在中心”的比例从23.4%降到10.3%；普通钟形曲线参照约8.0%。但9列都还保留尖峰和较多极端变化，不能全归因于混合。</li>
      <li><b>长短答案之间，可能另做了大小换算。</b>把后面5段短答案加起来，要乘约0.45至0.56才接近中答案；简单平均应乘0.20。6段中答案拼长答案也有类似现象。更支持“拼接后再缩放”，确切算法和分母仍未知。这用到了未来真实答案，只是在核对结构。</li>
      <li><b>第二组有值得单独追查的共同异常。</b>5号列49次整天卡在同一端点，最严重一天19/38个标的同时出现；3号列另有1次。其他7列未发现整天常数。可能涉及共同参考量、缩放或数据异常，也可能有真实市场共同冲击，原因尚未确认。卡住的是匿名目标，不能解释为价格不动或停市。</li></ol>
      <details><summary>计算口径与还不能下的结论</summary><p>“挤在中心”定义为离各自中心不到0.1个标准差。各自处理后，9列中心占比9.11%—17.00%；超过3个标准差的记录仍有0.79%—1.90%，钟形参照约0.27%。钟形曲线只是参照，没有假定数据服从正态。</p><p>整天均值和标准差用到了当天后面的数据，是事后诊断，不是可实时使用的特征。前后画法使用相同记录：5号排除49个整天常数组，3号排除1个，其余列覆盖全部训练行。各标的日都不少于200行。</p><p>现有输出并非每天每标的严格均值0、标准差1，但不能排除裁剪前、过去窗口或其他维度的标准化。外观对称也不能独立证明减过均值。</p><p>窗口复查另取128个日期，与此前36天不重叠。1190号日期前拟合，后段复查；剔除日首、日尾、旧边界附近和近裁剪值，四种规则使用相同记录。平方根换算胜过直接相加和取平均，仍有残差及尺度变化；这些不是预测成绩。</p><p>49个5号常数组只占全部标的日约0.097%，不能单独解释中心尖峰。异常图特意选异常日，不能代表普通日。所有50个整天常数组都重新读取原始记录，核对唯一值确为−5或+5。</p></details></section>`:''}
      <div class="reading-banner"><b>读图时记住：</b>${key==='deep'?'这轮区分已核实的现象与候选解释；统一尺度只是检验方法，没有还原组织方的实际预处理。':'分布图覆盖全部训练记录；日内曲线是明确选出的示例。纵轴是匿名目标值，没有还原成价格、收益百分比或真实风险。'}</div>
      <div class="rg-more">${key==='deep'?'<a href="#claims/C17">尖峰与缩放：结论和证据 ↗</a><a href="#claims/C18">整天端点异常：结论和证据 ↗</a>':'<a href="#responders/deep">新：深挖尖峰与端点异常 ↗</a><a href="#claims/C16">本轮图表结论与证据 ↗</a>'}<a href="#fields/responder_6">回到比赛目标 responder_6 ↗</a></div></div>`;
    main.querySelectorAll('[data-variant]').forEach(button=>button.addEventListener('click',()=>{
      const idx=Number(button.dataset.variant),v=view.variants[idx];
      main.querySelectorAll('[data-variant]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      main.querySelector('#rg-chart').src='./'+v[2];main.querySelector('#rg-chart').alt=v[3];
      main.querySelector('#rg-original').href='./'+v[2];main.querySelector('#rg-open-btn').href='./'+v[2];main.querySelector('#rg-caption').textContent=v[3]+' 点击图片可打开高清原图。';
    }));
  };
})();

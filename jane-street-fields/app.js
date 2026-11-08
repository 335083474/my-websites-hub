(() => {
  'use strict';
  const D = window.RESEARCH_CATALOG;
  const main = document.getElementById('main');
  if (!D) { main.innerHTML = '<div class="page"><h1>资料暂时没有加载成功</h1><p>请刷新页面重试。</p></div>'; return; }
  const fields = new Map(D.fields.map(f => [f.id, f]));
  const sources = new Map(D.sources.map(s => [s.id, s]));
  const claims = new Map(D.claims.map(c => [c.id, c]));
  const storage = { get(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } } };
  const bookmarks = new Set(storage.get('js-field-guide-bookmarks', []));
  const notes = storage.get('js-field-guide-notes', {});
  const filter = { query: '', kind: '全部类型', status: '全部进展', bookmarks: false };
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = (v, digits = 3) => v == null ? '暂无' : Number(v).toLocaleString('zh-CN', { maximumFractionDigits: digits });
  const stateClass = s => /未知|待解/.test(s) ? 'unknown' : /未通过|有限/.test(s) ? 'failed' : /已知|核对|边界/.test(s) ? 'known' : 'clue';
  const badge = s => `<span class="status ${stateClass(s)}">${esc(s)}</span>`;
  const fieldLink = id => `<a class="field-tag" href="#fields/${encodeURIComponent(id)}">${esc(id)}</a>`;
  const tags = ids => `<div class="tag-links">${ids.map(fieldLink).join('')}</div>`;
  const list = items => `<ul>${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const searchIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6.5" stroke-width="1.6"/><path d="m15 15 5 5" stroke-width="1.6"/></svg>';
  const stamp = `<div class="date-stamp">最近整理<b>${D.updated}</b><span>保留每一步的证据</span></div>`;
  function toast(message) { const e = document.getElementById('toast'); e.textContent = message; e.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => e.classList.remove('show'), 2500); }
  function download(value, name) { const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: 'application/json;charset=utf-8' })); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1500); }
  function sourceRows(ids) { return ids.map(id => { const s = sources.get(id); return `<button class="source-row" data-source="${id}"><span><span class="source-id">${id}</span><span><b>${esc(s.title)}</b><small>${esc(s.scope)}</small></span></span><span class="source-arrow">↗</span></button>`; }).join(''); }
  function intro(eyebrow, title, description) { return `<span class="eyebrow">${eyebrow}</span><div class="intro"><div><h1>${title}</h1><p>${description}</p></div>${stamp}</div>`; }
  function overview() {
    const topics = [
      ['01','从一个具体字段开始','看它是什么、知道了多少，以及还有什么没弄清。','103个字段','#fields/feature_61','用途已知'],
      ['02','看看哪些标的有关联','先认识谁跟谁一起变化，再寻找真实身份。','39个匿名标的','#relations','有线索'],
      ['03','结论和证据放在一起','一句推测来自哪里，点开就能对应到记录。','9条研究结论','#claims','有线索'],
      ['04','还没弄清楚的问题','真实品种、年月日、每列含义，都明确保留未知。','6类核心问题','#questions','仍未知'],
      ['05','先理解那9个参考答案','暂时把它们理解为三套“短一点、远一点”的答案。','计算方法仍未知','#claims/C04','有线索'],
      ['06','这份手册会继续长大','保留新发现，也保留没有通过检查的旧猜测。','查看更新记录','#history','用途已知']
    ];
    main.innerHTML = `<div class="page">${intro('A WORKING FIELD GUIDE · VOL. 01','把匿名数字，<br>一项项读懂。','这里记录我们对这份数据知道了什么、正在猜什么、还有什么不知道。<br>先用直白的话看懂，再按需要展开数字与证据。')}
      <section class="hero"><div class="hero-copy"><span class="eyebrow">从一个看得见的发现开始</span><h2>同一天，大家看到的<br>都是同一个数字。</h2><p>这就是 feature_61。我们已确认它怎样出现，至于它到底代表什么，还在研究。</p><div class="hero-actions"><a class="button light" href="#fields/feature_61">打开这个字段 <span>↗</span></a><a href="#fields/date_id">或从日期编号开始 →</a></div></div><div class="hero-diagram" aria-label="示意：同一天三个标的共用一个值，换一天这个值会改变。不是原始样本数值。"><span class="diagram-head">FEATURE_61 / 同一天 · 同一个值</span><div class="diagram-row"><div class="diagram-cell"><b>A</b><span>标的 01</span></div><div class="diagram-cell"><b>A</b><span>标的 25</span></div><div class="diagram-cell"><b>A</b><span>标的 29</span></div></div><p class="diagram-foot">换一天，大家再一起换一个值。示意。</p></div></section>
      <div class="stats-strip"><div class="stat"><strong>103</strong><span>逐项整理的字段</span></div><div class="stat"><strong>39</strong><span>匿名标的</span></div><div class="stat"><strong>1,699</strong><span>日期编号</span></div><div class="stat"><strong>10</strong><span>可对应的证据记录</span></div></div>
      <div class="section-heading"><div><h2>你想先看哪一部分？</h2><p>每一条结论，都保留适用范围与还没回答的问题。</p></div></div><div class="topic-grid">${topics.map(t=>`<a class="topic-card" href="${t[4]}"><span class="topic-number">NOTE / ${t[0]}</span><h3>${t[1]}</h3><p>${t[2]}</p><div class="card-bottom"><span class="muted">${t[3]}</span><span>↗</span></div></a>`).join('')}</div>
      <div class="bottom-note"><span>◌</span><div><b>事实和猜测，分开记。</b><br>“有线索”表示值得继续核对；即使知道数字怎样变化，也不表示已经认出了它的真实含义。</div></div></div>`;
  }
  function filteredFields() { const q = filter.query.trim().toLowerCase(); return D.fields.filter(f => (!q || [f.id,f.title,f.plain,f.guess,...f.facts].join(' ').toLowerCase().includes(q)) && (filter.kind === '全部类型' || f.kind === filter.kind) && (filter.status === '全部进展' || f.status === filter.status) && (!filter.bookmarks || bookmarks.has(f.id))); }
  function updateFieldList(selected) {
    const data = filteredFields();
    document.getElementById('index-count').textContent = `显示 ${data.length} / 103 项${filter.bookmarks ? ' · 稍后再看' : ''}`;
    document.getElementById('field-list').innerHTML = data.length ? data.map(f => `<a class="field-item ${f.id===selected?'active':''}" href="#fields/${f.id}" ${f.id===selected?'aria-current="page"':''}><code>${esc(f.id)}</code><small>${esc(f.title)}</small><span class="field-dot ${stateClass(f.status)}" aria-label="${esc(f.status)}"></span></a>`).join('') : '<div class="empty">没有找到对应字段。<br>试试字段编号，或放宽筛选条件。<br><button class="text-button" id="clear-filters" style="margin-top:12px">清除筛选</button></div>';
    document.getElementById('clear-filters')?.addEventListener('click',()=> { filter.query='';filter.kind='全部类型';filter.status='全部进展';filter.bookmarks=false;renderFields(selected); });
  }
  function renderFields(id) {
    const f = fields.get(id);
    if (!f) { notFound('没有找到这个字段。'); return; }
    const kinds = ['全部类型', ...new Set(D.fields.map(x=>x.kind))];
    const statuses = ['全部进展','用途已知','有作用线索','含义待解'];
    const index = D.fields.indexOf(f);
    main.innerHTML = `<div class="field-layout"><aside class="field-index" aria-label="字段索引"><div class="index-head"><h2>字段索引</h2><button class="text-button" id="bookmark-filter" aria-pressed="${filter.bookmarks}" title="只看收藏字段">${filter.bookmarks?'★ 只看收藏':'☆ 稍后再看'}</button></div><label class="search-box">${searchIcon}<input type="search" id="field-search" placeholder="搜索编号或关键词…" aria-label="搜索字段" value="${esc(filter.query)}"></label><div class="filter-row"><select id="kind-filter" aria-label="按字段类型筛选">${kinds.map(k=>`<option ${filter.kind===k?'selected':''}>${k}</option>`).join('')}</select><select id="status-filter" aria-label="按研究进展筛选">${statuses.map(s=>`<option ${filter.status===s?'selected':''}>${s}</option>`).join('')}</select></div><p class="index-count" id="index-count" aria-live="polite"></p><nav class="field-list" id="field-list" aria-label="字段列表"></nav></aside>
      <article class="detail"><div class="breadcrumbs"><a href="#overview">手册</a><span>/</span><span>${esc(f.kind)}</span><span>/</span><span class="mono">${esc(f.id)}</span></div><div class="detail-header"><div><h1>${esc(f.id)}</h1><h2>${esc(f.title)}</h2></div>${badge(f.status)}</div><div class="detail-meta"><span>${esc(f.kind)}</span><span>·</span><span>更新 ${f.updated}</span><button class="text-button" id="copy-link">复制链接 ↗</button><button class="text-button" id="bookmark-field" aria-pressed="${bookmarks.has(id)}">${bookmarks.has(id)?'★ 已加入稍后再看':'☆ 稍后再看'}</button></div><p class="detail-lead">${esc(f.plain)}</p>
      <section class="note-block"><h3 class="block-title"><span class="block-index">01</span>已经知道</h3>${list(f.facts)}</section>
      <section class="note-block"><h3 class="block-title"><span class="block-index">02</span>目前怎么猜</h3>${f.guess?`<div class="guess-panel"><p class="tiny-label">研究假说，尚未确认</p><p>${esc(f.guess)}</p></div>`:'<p>这部分暂时没有需要额外补充的猜测。有些用途已知，有些还缺少足够线索。</p>'}</section>
      <section class="note-block"><h3 class="block-title"><span class="block-index">03</span>还不知道</h3>${f.unknown.length?`<ul class="unknown-list">${f.unknown.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'<p>这项接口用途已经明确；不把它当作市场信号解释。</p>'}</section>
      ${f.claims.length?`<section class="note-block"><h3 class="block-title"><span class="block-index">04</span>对应到哪些结论</h3>${f.claims.map(cid=>{const c=claims.get(cid);return `<a class="mini-claim" href="#claims/${cid}"><small>${cid}</small><b>${esc(c.title)} ↗</b><p>${esc(c.summary)}</p></a>`;}).join('')}</section>`:''}
      <section class="note-block"><h3 class="block-title"><span class="block-index">${f.claims.length?'05':'04'}</span>这些判断来自哪里</h3>${sourceRows(f.evidence)}</section>
      ${f.related.length?`<section class="note-block"><h3 class="block-title">一起看更容易理解</h3>${tags(f.related)}</section>`:''}
      <details class="tech-details"><summary>展开数值、空值与原始标签</summary><p class="tiny muted" style="margin-top:13px">${f.stats?'下面是2026-11-01的全历史统计；它描述数字，不等于识别了含义。':'这个字段来自预测接口；当前条目没有把模拟数据当作完整历史统计。'}</p><div class="stats-grid"><div class="stat-small"><label>数据类型</label><strong>${esc(f.dataType)}</strong></div>${f.stats?`<div class="stat-small"><label>最小值</label><strong>${fmt(f.stats.min,6)}</strong></div><div class="stat-small"><label>最大值</label><strong>${fmt(f.stats.max,6)}</strong></div><div class="stat-small"><label>平均值</label><strong>${fmt(f.stats.mean,6)}</strong></div><div class="stat-small"><label>空值比例</label><strong>${fmt(f.stats.null_pct,4)}%</strong></div><div class="stat-small"><label>空值数量</label><strong>${fmt(f.stats.null,0)}</strong></div>`:''}</div><p class="tiny muted" style="margin-top:17px">出现位置：${f.files.map(esc).join('、')}</p>${f.tags.length?`<p class="tiny muted" style="margin-top:12px">原始匿名标签：${f.tags.map(esc).join(' · ')}。这些标签没有公开的经济含义字典。</p>`:''}${f.categoryValues?`<p class="tiny muted" style="margin-top:12px">全部观察到的编码：${f.categoryValues.map(esc).join('、')}</p>`:''}</details>
      <section class="note-block"><h3 class="block-title">我的阅读笔记</h3><textarea class="note-editor" id="field-note" aria-label="${esc(f.id)}的个人阅读笔记" placeholder="记下你对这个字段的疑问，或下次想核对的内容…"></textarea><div class="note-tools"><span id="note-state">只保存在当前浏览器；换设备前可导出备份。</span><button class="text-button" id="export-notes">导出全部笔记</button></div></section>
      <div class="field-pagination">${index>0?`<a href="#fields/${D.fields[index-1].id}">← 上一个字段<code>${D.fields[index-1].id}</code></a>`:'<span></span>'}${index<D.fields.length-1?`<a href="#fields/${D.fields[index+1].id}" style="text-align:right">下一个字段 →<code>${D.fields[index+1].id}</code></a>`:'<span></span>'}</div></article></div>`;
    updateFieldList(id);
    document.getElementById('field-search').addEventListener('input', e=>{filter.query=e.target.value;updateFieldList(id);});
    document.getElementById('kind-filter').addEventListener('change', e=>{filter.kind=e.target.value;updateFieldList(id);});
    document.getElementById('status-filter').addEventListener('change', e=>{filter.status=e.target.value;updateFieldList(id);});
    document.getElementById('bookmark-filter').addEventListener('click',()=>{filter.bookmarks=!filter.bookmarks;renderFields(id);});
    document.getElementById('bookmark-field').addEventListener('click',e=>{ if(bookmarks.has(id))bookmarks.delete(id);else bookmarks.add(id);const saved=storage.set('js-field-guide-bookmarks',[...bookmarks]);e.currentTarget.textContent=bookmarks.has(id)?'★ 已加入稍后再看':'☆ 稍后再看';e.currentTarget.setAttribute('aria-pressed',String(bookmarks.has(id)));if(!saved)toast('浏览器未允许保存，当前页面仍可使用。');if(filter.bookmarks)updateFieldList(id);});
    document.getElementById('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('字段链接已复制');}catch{toast('复制未完成，可直接复制浏览器地址。');}});
    const note=document.getElementById('field-note');note.value=notes[id]??'';
    note.addEventListener('input',()=>{notes[id]=note.value;const ok=storage.set('js-field-guide-notes',notes);document.getElementById('note-state').textContent=ok?'已保存在当前浏览器；可导出备份。':'浏览器没有允许保存，请导出笔记备份。';});
    document.getElementById('export-notes').addEventListener('click',()=>download({schemaVersion:1,exportedAt:new Date().toISOString(),notes,bookmarks:[...bookmarks]},'JaneStreet-阅读笔记.json'));
    const selected=document.querySelector('.field-item.active');const scroll=document.getElementById('field-list');if(selected&&scroll)scroll.scrollTop=Math.max(0,selected.offsetTop-scroll.offsetTop-60);
  }
  function relations() {
    main.innerHTML=`<div class="page">${intro('RELATIONSHIPS · 先认关系，再找名字','哪些标的，经常一起变化？','我们比较的是匿名参考答案之间的关系。一起变化，并不等于已经认出了真实品种，也不代表谁导致了谁。')}
      <div class="relation-layout"><section class="paper-card"><span class="eyebrow">优先追查的一对</span><div class="pair-big">25<em>↔</em>29</div><p>目前最稳定的正向关联候选。两者各自扣除其他标的平均变化的影响后，仍经常同步变化。</p><div class="pair-facts"><div><b>1,179</b><span>共同出现的日期</span></div><div><b>0.506</b><span>日相关的中位数</span></div><div><b>99.83%</b><span>呈正相关的日期</span></div></div><div style="margin-top:21px"><a class="text-link" href="#claims/C05">查看这个结论与证据 →</a></div></section><section class="paper-card"><span class="eyebrow">分类字段也出现了对应</span><h2>关系和“身份标签”对上了。</h2><div class="group-list"><div class="group"><code>0 / 1 / 9 / 16 / 33</code><p>09、10、11三列都固定为 11 / 7 / 76。</p></div><div class="group"><code>3 / 19</code><p>三列都固定为 4 / 3 / 11。</p></div><div class="group"><code>25 / 29</code><p>09、10相同；11分别为230、336。</p></div></div></section></div>
      <div class="reading-banner"><b>前面发现，后面再看。</b> 下表先用 date_id &lt; 1190 的数据筛选关系，再看之后是否仍然存在。数值是逐日相关的中位数；它们不是预测收益。</div>
      <div class="section-heading"><div><h2>值得继续追查的组合</h2><p>只控制了一个共同序列，没有消除所有市场或行业影响。</p></div><button class="text-button" data-source="E04">查看核对口径 ↗</button></div><div class="table-container"><table><thead><tr><th>标的组合</th><th>前段关系</th><th>后段关系</th><th>前段共同日期</th><th>后段共同日期</th></tr></thead><tbody>${D.pairs.map(p=>`<tr><td><button class="symbol-button" data-symbol="${p.symbol_a}">${p.symbol_a}</button> / <button class="symbol-button" data-symbol="${p.symbol_b}">${p.symbol_b}</button></td><td class="mono">${fmt(p.residual_median)}</td><td class="mono">${fmt(p.late_residual_median)}</td><td>${fmt(p.days,0)}</td><td>${fmt(p.late_days,0)}</td></tr>`).join('')}</tbody></table></div>
      <div class="section-heading" style="margin-top:44px"><div><h2>39个标的查询</h2><p>真实名称全部保留未知。点编号可查看分类编码与最近邻。</p></div></div><label class="search-box table-search">${searchIcon}<input type="search" id="symbol-search" placeholder="搜索标的编号，例如25" aria-label="搜索标的编号"></label><div class="table-container"><table><thead><tr><th>匿名编号</th><th>真实身份</th><th>出现日期数</th><th>前段选出的最近邻</th><th>后段关系</th></tr></thead><tbody id="symbol-rows"></tbody></table></div></div>`;
    updateSymbols('');document.getElementById('symbol-search').addEventListener('input',e=>updateSymbols(e.target.value));
  }
  function updateSymbols(q) { const data=D.symbols.filter(s=>String(s.id).includes(q.trim()));document.getElementById('symbol-rows').innerHTML=data.length?data.map(s=>`<tr><td><button class="symbol-button" data-symbol="${s.id}">symbol_${s.id}</button></td><td class="muted">真实名称未知</td><td>${fmt(s.days,0)}</td><td>${s.neighbor==null?'<small class="muted">前段覆盖不足，暂不选择</small>':`<button class="symbol-button" data-symbol="${s.neighbor}">symbol_${s.neighbor}</button>`}</td><td class="mono">${s.laterRelation==null?'—':fmt(s.laterRelation)}</td></tr>`).join(''):'<tr><td colspan="5" class="empty">没有这个编号。现有编号为0至38。</td></tr>'; }
  function renderClaims(selected) {
    main.innerHTML=`<div class="page">${intro('FINDINGS & EVIDENCE · 每句话都有来处','知道的，猜测的，分开记。','点开一条结论，可以看到它证明了什么、还不能说明什么，以及它关联的字段和证据。')}
      <div class="legend" style="margin-bottom:25px">${badge('已核对的现象')}${badge('有线索')}${badge('仍未知')}${badge('候选未通过')}</div><div class="claims-grid">${D.claims.map(c=>`<article class="claim-card" id="claim-${c.id}"><div class="claim-top"><span class="claim-id">${c.id}</span>${badge(c.state)}</div><h2>${esc(c.title)}</h2><p>${esc(c.summary)}</p><details ${selected===c.id?'open':''}><summary>展开判断和证据</summary><span class="claim-label">已经观察到</span>${list(c.facts)}<span class="claim-label">目前的解释</span><p>${esc(c.hypothesis)}</p><span class="claim-label">还没回答</span><p>${esc(c.unknown)}</p><span class="claim-label">对应字段</span>${tags(c.fields)}<span class="claim-label">证据记录</span>${sourceRows(c.evidence)}</details></article>`).join('')}</div>
      <div class="section-heading" style="margin-top:44px"><div><h2>证据目录</h2><p>原始记录的日期、覆盖范围和文件指纹都保留在这里。</p></div></div><div class="paper-card">${sourceRows(D.sources.map(s=>s.id))}</div></div>`;
    if(selected&&claims.has(selected))requestAnimationFrame(()=>document.getElementById(`claim-${selected}`)?.scrollIntoView({block:'start',behavior:'instant'}));
  }
  function questions() {
    main.innerHTML=`<div class="page">${intro('OPEN QUESTIONS · 未知也是记录的一部分','还有哪些，我们没弄清楚？','现在逐步认出了数字怎样变化、跟谁一起变化；真实名字、具体含义和计算方法，还有很多空白。')}
      <div class="question-list">${D.questions.map((q,i)=>`<section class="question"><span>${String(i+1).padStart(2,'0')}</span><div><h2>${esc(q.title)}</h2><p>${esc(q.text)}</p><div style="margin-top:13px">${tags(q.fields)}</div></div><div class="next"><small>下一条值得核对的线索</small><p>${esc(q.next)}</p></div></section>`).join('')}</div></div>`;
  }
  function history() {
    main.innerHTML=`<div class="page">${intro('RESEARCH LOG · 不把旧猜测改成新事实','让这份手册，持续更新。','每次有新证据，就补充字段条目与结论，并保留更新记录。没有通过的猜测也留下来，方便知道研究走到哪里。')}
      <div class="reading-banner"><b>当前版本 ${esc(D.revision)}</b> · 已整理103个字段。阅读笔记是你在当前浏览器的个人备注；正式研究结论以本手册和GitHub版本记录为准。</div><div class="history-panel">${D.history.map(h=>`<article class="history-item"><time>${h.date} · ${esc(h.revision)}</time><h2>${esc(h.title)}</h2><p>${esc(h.text)}</p></article>`).join('')}</div>
      <section class="paper-card" style="max-width:790px"><span class="eyebrow">带走你的阅读记录</span><h2>笔记可以导出，也可以带回来。</h2><p>笔记只保存在当前浏览器。换设备或清理浏览器前，先导出备份；在新设备上导入即可继续看。正式研究内容不受个人笔记影响。</p><div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap"><button class="button" id="history-export-notes">导出阅读笔记 ↓</button><button class="button outline" id="import-notes">导入备份 ↑</button><input type="file" accept="application/json,.json" id="notes-file" hidden></div></section></div>`;
    document.getElementById('history-export-notes').addEventListener('click',()=>download({schemaVersion:1,exportedAt:new Date().toISOString(),notes,bookmarks:[...bookmarks]},'JaneStreet-阅读笔记.json'));
    document.getElementById('import-notes').addEventListener('click',()=>document.getElementById('notes-file').click());
    document.getElementById('notes-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_000_000){toast('备份文件过大，请检查是否选对了文件。');return;}try{const v=JSON.parse(await file.text());if(v.schemaVersion!==1||!v.notes||typeof v.notes!=='object'||Array.isArray(v.notes))throw Error();let count=0;for(const [key,value]of Object.entries(v.notes)){if(fields.has(key)&&typeof value==='string'){notes[key]=value;count++;}}for(const key of Array.isArray(v.bookmarks)?v.bookmarks:[])if(fields.has(key))bookmarks.add(key);const a=storage.set('js-field-guide-notes',notes),b=storage.set('js-field-guide-bookmarks',[...bookmarks]);toast(a&&b?`已导入${count}条字段笔记。`:'已读入当前页面；浏览器不允许持久保存，请保留备份。');}catch{toast('这不是有效的阅读笔记备份。');}e.target.value='';});
  }
  function notFound(message) { main.innerHTML=`<div class="page">${intro('NOT FOUND','这里暂时没有对应记录。',esc(message))}<a class="button" href="#overview">回到研究概览</a></div>`; }
  function openDialog(html, eyebrow='研究资料') { document.getElementById('dialog-content').innerHTML=html;document.getElementById('dialog-eyebrow').textContent=eyebrow;document.getElementById('detail-dialog').showModal(); }
  function showSource(id) { const s=sources.get(id);if(!s)return;openDialog(`<section class="source-details"><h2 id="dialog-title">${esc(s.title)}</h2><p class="tiny muted">${s.id} · 记录日期 ${esc(s.date)}</p><p class="scope" style="margin-top:17px">覆盖范围：${esc(s.scope)}</p><h3>这份记录告诉我们什么</h3>${list(s.findings)}<h3>原始记录位置</h3><div class="file-name">${esc(s.file)}</div><p>这是本地研究档案中的相对位置。网页整理了记录摘要；完整原件保留在研究目录，没有上传原始行情数据。</p><details style="margin-top:17px"><summary class="tiny muted">展开原件文件指纹</summary><div class="file-name">SHA-256<br>${esc(s.sha256)}</div><p>原件内容改变时，这串指纹也会变化，用于核对使用的是哪一份记录。</p></details>${s.url?`<p style="margin-top:17px"><a class="text-link" href="${esc(s.url)}" target="_blank" rel="noopener">官方数据说明 ↗</a></p>`:''}</section>`,'EVIDENCE / 对应到原始记录'); }
  function showSymbol(id) { const s=D.symbols.find(x=>x.id===Number(id));if(!s)return;openDialog(`<h2 id="dialog-title">symbol_${s.id}</h2><p class="muted" style="font-size:12px">真实名称未知 · 共出现${fmt(s.days,0)}个日期</p><p class="reading-banner">从 date_id ${s.firstDate} 到 ${s.lastDate}。这些编号不是已经确认的真实年月日。</p><h3 style="font-size:13px;margin-bottom:12px">全历史观察到的分类编码</h3><div class="tag-links">${Object.entries(s.codes).map(([k,v])=>`<a class="field-tag dialog-field-link" href="#fields/${k}">${k} : ${v.join(' / ')}</a>`).join('')}</div><h3 style="font-size:13px;margin:24px 0 10px">与谁比较接近</h3><p class="muted" style="font-size:12px">${s.neighbor==null?'前段共同日期不足门槛，暂不强行选择最近邻。':`前段选出的最近邻是 symbol_${s.neighbor}，共同${s.fitDays}天，日残差相关中位数${fmt(s.fitRelation)}。后段共同${s.laterDays}天，对应数值${fmt(s.laterRelation)}。`}</p><p class="tiny muted" style="margin-top:16px">这是匿名目标的统计关系，不能据此指定真实产品名称。</p>`,'SYMBOL / 匿名标的卡片'); }
  function route() {
    let parts;try{parts=decodeURIComponent(location.hash.slice(1)).split('/');}catch{parts=['overview'];}
    const section=parts[0]||'overview';
    document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===section;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    const dialog=document.getElementById('detail-dialog');if(dialog.open)dialog.close();
    if(section==='overview')overview();else if(section==='fields')renderFields(parts[1]||'feature_61');else if(section==='relations')relations();else if(section==='claims')renderClaims(parts[1]);else if(section==='questions')questions();else if(section==='history')history();else notFound('可以从字段索引或研究概览重新开始。');
    document.title=(section==='fields'&&fields.has(parts[1])?`${parts[1]} · `:'')+'Jane Street · 字段研究手册';
    if(section!=='claims'||!parts[1])window.scrollTo({top:0,behavior:'instant'});
  }
  document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView({block:'start'});});
  document.addEventListener('click',e=>{const s=e.target.closest('[data-source]');if(s)showSource(s.dataset.source);const sym=e.target.closest('[data-symbol]');if(sym)showSymbol(sym.dataset.symbol);if(e.target.closest('.dialog-field-link'))document.getElementById('detail-dialog').close();});
  document.querySelector('.close-dialog').addEventListener('click',()=>document.getElementById('detail-dialog').close());
  document.getElementById('detail-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();}});
  document.getElementById('help-button').addEventListener('click',()=>openDialog(`<h2 id="dialog-title">先把几个词说清楚</h2>${D.glossary.map(g=>`<div class="glossary-row"><b>${esc(g.word)}</b><p>${esc(g.meaning)}</p></div>`).join('')}`,'A SMALL GLOSSARY / 不需要先懂术语'));
  document.getElementById('export-catalog').addEventListener('click',()=>download(D,`JaneStreet-字段档案-${D.revision}.json`));
  window.addEventListener('hashchange',route);
  route();
})();

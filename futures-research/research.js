/* Sealed research summaries only. This file never schedules computation. */
'use strict';
const researchView={namespace:'all',mode:'cs',factor:null,horizon:'5',metric:'spearman',left:null,right:null,compareFactor:null};
const dimensionNames={arithmetic:'计算正确性',data_applicability:'数据适用性',statistics:'预测统计证据',out_of_sample:'盲样本外'};
const evidenceNames={passed:'通过（声明范围）',failed:'失败',insufficient_evidence:'证据不足',not_run:'未执行',not_applicable:'不适用'};
const numberText=v=>v==null?'—':typeof v==='number'?v.toLocaleString('zh-CN',{maximumFractionDigits:5}):String(v);
const nsName=n=>n==='real_contract'?'正式实约':'连续课程';
const researchData=()=>state.data?.research;
const dimensionBadge=d=>`<span class="evidence-state ${d?.status==='passed'?'ok':d?.status==='failed'?'bad':'unknown'}" title="${esc(d?.reason||'')}">${esc(evidenceNames[d?.status]||'待取得证据')}</span>`;
function researchSources(ids){const data=researchData();return `<details class="research-sources"><summary>来源与摘要身份</summary>${ids.map(id=>{const s=data.sources.find(s=>s.id===id);return s?`<div><strong>${esc(s.title)}</strong><p>${esc(s.run_id)} / ${esc(s.file)}</p><code>${esc(s.sha256)}</code></div>`:'';}).join('')}<p>本地原件封存；公开页面只含汇总。校验身份不代表独立数据来源。</p></details>`;}
function researchTable(headers,records){return `<div class="table-scroll"><table class="research-table"><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${records.join('')||`<tr><td colspan="${headers.length}">没有符合条件的记录</td></tr>`}</tbody></table></div>`;}
function renderResearch(){
 const d=researchData();if(!d)return heading('因子检验','尚未发布当前封存研究摘要。');
 const shown=d.factors.filter(f=>researchView.namespace==='all'||f.namespace===researchView.namespace);
 let f=shown.find(f=>f.namespace+'/'+f.id===researchView.factor)||shown[0];if(f)researchView.factor=f.namespace+'/'+f.id;
 const mode=researchView.mode;
 return heading('因子检验',`${d.formal_count}个实约定义与${d.continuous_count}个连续课程公式各自验收；选择行查看同一模式的结果与证据。`,button('读取发布快照','refresh','','refresh'))+
 `<div class="research-overview"><span><b>${d.formal_count}</b> 正式实约</span><span><b>${d.continuous_count}</b> 连续实验</span><span><b>${d.statistics.q_le_005}</b> / ${d.statistics.current_hypotheses} 实约检验 q≤0.05</span><span>盲样本外：<b>未执行</b></span></div>
 ${d.course_coverage?`<div class="scope-band">课程量价：${d.course_coverage.price_names}个名称，去重${d.course_coverage.distinct_price_formulas}个公式；振幅10/60为20日窗口别名。新增批次可用CI/TTS：${d.statistics.new_course_ci_usable}/${d.statistics.new_course_hypotheses}，其余保留未执行。</div>`:''}<section class="panel"><div class="toolbar"><label>定义范围 <select id="research-namespace" aria-label="定义范围"><option value="all" ${researchView.namespace==='all'?'selected':''}>全部已验收定义</option><option value="real_contract" ${researchView.namespace==='real_contract'?'selected':''}>正式实约</option><option value="continuous_course" ${researchView.namespace==='continuous_course'?'selected':''}>连续课程</option></select></label><div class="segmented" aria-label="检验模式"><button data-research-mode="cs" class="${mode==='cs'?'active':''}">截面 CS</button><button data-research-mode="ts" class="${mode==='ts'?'active':''}">时序 TS</button></div></div>
 ${researchTable(['因子 / 版本','口径',...Object.values(dimensionNames)],shown.map(x=>`<tr class="selectable ${x===f?'research-selected':''}"><td><button class="link-button" data-research-factor="${esc(x.namespace+'/'+x.id)}">${esc(x.name)}</button><div class="factor-id">${esc(x.id)} · ${esc(String(x.version).startsWith('v')?x.version:'v'+x.version)}</div></td><td>${nsName(x.namespace)}</td>${Object.keys(dimensionNames).map(k=>`<td>${dimensionBadge(x.modes[mode]?.dimensions[k])}</td>`).join('')}</tr>`))}</section>
 ${f?researchDetail(f,mode):''}`;
}
function researchDetail(f,mode){
 const summary=mode==='cs'?f.metrics.cs:f.metrics.ts;
 const stats=f.inference.filter(r=>r.mode===mode&&String(r.horizon)===researchView.horizon&&r.metric===researchView.metric);
 const selected=mode==='cs'?summary.filter(r=>String(r.horizon)===researchView.horizon):summary.filter(r=>String(r.horizon)===researchView.horizon);
 const columns=mode==='cs'?['horizon','valid_ic_days','mean_ic','mean_rank_ic','mean_high_minus_low']:['product','horizon','n','raw_ic','ic','rank_ic','mean_signed_forward_return'];
 const labels=mode==='cs'?['期限（日）','IC天数','平均IC','平均Rank IC','高组−低组标签均值']:['品种','期限（日）','配对日数','原值IC','历史分数IC','历史分数Rank IC','状态×标签均值'];
 return `<section class="panel research-detail"><div class="panel-toolbar"><div><h2>${esc(f.name)} · ${mode.toUpperCase()}</h2><p>${esc(f.scope)}</p></div><label>预测期限 <select id="research-horizon" aria-label="预测期限">${['1','5','10','20'].map(h=>`<option value="${h}" ${researchView.horizon===h?'selected':''}>${h}日</option>`).join('')}</select></label></div>
 <div class="research-copy"><p><strong>价格：</strong>${esc(f.price)}</p><p><strong>研究建议：</strong>保留观察，等待研究者评审。当前没有用户采纳或交易批准。</p></div>
 ${researchTable(labels,selected.map(r=>`<tr>${columns.map(k=>`<td>${esc(numberText(r[k]))}</td>`).join('')}</tr>`))}
 <div class="research-copy"><p>以上是因子与未来标签的描述统计。标签均值未计手续费、滑点、保证金和仓位，不是账户收益。</p><label>条件区间指标 <select id="research-metric" aria-label="条件区间指标"><option value="spearman" ${researchView.metric==='spearman'?'selected':''}>Spearman 秩相关</option><option value="pearson" ${researchView.metric==='pearson'?'selected':''}>Pearson 线性相关</option></select></label><h3>95% 条件置信区间</h3><p>区间宽度反映估计不确定性。方法只通过声明模拟设计的校准，真实市场覆盖率及TTS平稳性假设尚未认证。BY修正使用联合${researchData().statistics.family_positions}位置；q值不表示有效性通过。</p></div>
 ${forestChart(stats)}
 ${researchTable(['范围','估计值','95%区间','配对数','TTS p','联合BY q','区间状态'],stats.map(r=>`<tr><td>${esc(r.product)}</td><td>${numberText(r.estimate)}</td><td>${r.ci_usable?`${numberText(r.ci_low)} ～ ${numberText(r.ci_high)}`:'不可估计'}</td><td>${numberText(r.n_pairs)}</td><td>${numberText(r.p_tts)}</td><td>${numberText(r.q_by)}</td><td>${esc(r.ci_usable?'条件校准通过':'缺失/退化；未执行')}</td></tr>`))}
 ${researchDiagnostics(f,mode)}<div class="research-copy"><h3>适用范围与未完成项</h3><ul>${f.limitations.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>${researchSources(f.sources)}</section>`;
}
function researchDiagnostics(f,mode){
 const d=f.diagnostics;if(!d)return '';
 const h=researchView.horizon;const scenarios=(mode==='cs'?d.cs_summary:d.ts_aggregate).filter(r=>String(r.horizon)===h);
 const value=mode==='cs'?'mean_rank_ic':'mean_product_rank_ic';const count=mode==='cs'?'valid_ic_days':'valid_products';
 const stability=d.directional_stability.filter(r=>r.mode===mode&&String(r.horizon)===h);
 const similarity=d.similarity.filter(r=>r.mode===mode);
 return `<div class="research-copy"><h3>稳健性与风险</h3><p>以下为完整预定诊断网格的汇总，保留所有场景；不能用表现最好的场景替代主检验。未执行或样本不足保持为空。</p></div>
 <details class="research-sources"><summary>场景与参数邻域（${scenarios.length}项，${h}日）</summary>${researchTable(['场景','Rank IC','有效天数/品种数'],scenarios.map(r=>`<tr><td>${esc(r.scenario)}</td><td>${numberText(r[value])}</td><td>${numberText(r[count])}</td></tr>`))}</details>
 <details class="research-sources"><summary>时间稳定性与方向</summary>${researchTable(['范围','频率','有效期间数','正方向占比','负方向占比','Rank IC中位数'],stability.map(r=>`<tr><td>${esc(r.product)}</td><td>${esc(r.frequency)}</td><td>${numberText(r.valid_periods)}</td><td>${numberText(r.positive_fraction)}</td><td>${numberText(r.negative_fraction)}</td><td>${numberText(r.median_rank_ic)}</td></tr>`))}</details>
 ${mode==='cs'?`<details class="research-sources"><summary>两组/三组与风险回归</summary><p>形成组数独立于标签是否可用；回归秩不足日保留为跳过，未强行正则化。</p>${researchTable(['场景','组数','形成天数','可得标签天数','高−低标签均值'],d.group_count_split.filter(r=>String(r.horizon)===h).map(r=>`<tr><td>${esc(r.scenario)}</td><td>${numberText(r.groups_used)}</td><td>${numberText(r.formed_days)}</td><td>${numberText(r.realized_spread_days)}</td><td>${numberText(r.mean_high_minus_low)}</td></tr>`))}${researchTable(['回归模型','状态','全窗口估计日数'],d.neutralization.map(r=>`<tr><td>${esc(r.model)}</td><td>${esc(r.status)}</td><td>${numberText(r.days)}</td></tr>`))}</details>`:''}
 <details class="research-sources"><summary>相似因子与冗余诊断</summary><p>同一模式及输入类型下，对已保存相关系数观察汇总。CS按日期、TS按品种；观察数不是独立交易机会数，不自动去重。</p>${researchTable(['另一因子','输入类型','观察数','平均相关','中位相关'],similarity.map(r=>`<tr><td>${esc(r.left===f.id?r.right:r.left)}</td><td>${esc(r.input)}</td><td>${numberText(r.count)}</td><td>${numberText(r.mean)}</td><td>${numberText(r.median)}</td></tr>`))}</details>
 <details class="research-sources"><summary>数据质量与排除原因</summary><p>计数单位为日期×品种单元格。连续实验的标记是全读取窗口，实约另列是否落在评价窗口；有效标记不代表供应商独立认证。</p>${researchTable(['来源标记/排除原因','评价窗口','单元格数'],f.quality.map(r=>`<tr><td>${esc(r.reason)}</td><td>${r.in_evaluation==null?'全读取窗口':r.in_evaluation?'是':'否'}</td><td>${numberText(r.cells)}</td></tr>`))}</details>`;
}
function forestChart(records){
 const position=x=>(Math.max(-1,Math.min(1,x))+1)*50;
 return `<figure class="forest" aria-label="相关系数条件区间；横轴负1至1，零点为中线"><figcaption>相关系数区间（−1 至 1）</figcaption>${records.map(r=>`<div class="forest-row"><span>${esc(r.product)}</span><div class="forest-track"><i class="forest-zero"></i>${r.ci_usable&&r.ci_low!=null?`<i class="forest-range" style="left:${position(r.ci_low)}%;width:${position(r.ci_high)-position(r.ci_low)}%" title="${numberText(r.ci_low)} ～ ${numberText(r.ci_high)}"></i><i class="forest-dot" style="left:${position(r.estimate)}%" title="${numberText(r.estimate)}"></i>`:'<span class="forest-missing">未执行</span>'}</div></div>`).join('')}<div class="forest-axis"><span>−1</span><span>0</span><span>1</span></div></figure>`;
}
function flattenInputs(value,prefix='',out={}){for(const [key,item] of Object.entries(value)){const k=prefix?prefix+'.'+key:key;if(item&&typeof item==='object'&&!Array.isArray(item))flattenInputs(item,k,out);else out[k]=JSON.stringify(item);}return out;}
function comparisonRows(a,b,factor){
 const key=r=>[r.factor,r.mode,r.horizon].join('|');const right=new Map(b.metrics.map(r=>[key(r),r]));const same=a.namespace===b.namespace;
 return a.metrics.filter(r=>r.factor===factor).map(r=>{const other=right.get(key(r));const field=r.mode==='cs'?'mean_rank_ic':'mean_product_rank_ic';const spread=r.mode==='cs'?'mean_high_minus_low':null;return {mode:r.mode,horizon:r.horizon,left:r[field],right:other?.[field],delta:same&&other&&r[field]!=null&&other[field]!=null?other[field]-r[field]:null,spreadLeft:spread?r[spread]:null,spreadRight:spread?other?.[spread]:null};});
}
function renderCompare(){
 const d=researchData();if(!d)return heading('版本比较','尚无当前研究摘要。');const runs=d.runs;
 const a=runs.find(r=>r.id===researchView.left)||runs.find(r=>r.label==='course20_cold')||runs.find(r=>r.label==='full_cold')||runs[0];const b=runs.find(r=>r.id===researchView.right)||runs.at(-1);
 researchView.left=a.id;researchView.right=b.id;
 const fids=a.inputs.factor_ids;const fid=fids.includes(researchView.compareFactor)?researchView.compareFactor:fids[0];researchView.compareFactor=fid;
 const ai=flattenInputs(a.inputs),bi=flattenInputs(b.inputs);const keys=[...new Set([...Object.keys(ai),...Object.keys(bi)])];const changed=keys.filter(k=>ai[k]!==bi[k]);const metrics=comparisonRows(a,b,fid);
 const options=selected=>runs.map(r=>`<option value="${esc(r.id)}" ${selected.id===r.id?'selected':''}>${esc(r.label)} · ${nsName(r.namespace)}</option>`).join('');
 return heading('版本比较','比较冻结输入与保存的描述统计；修改评价不重新计算因子。')+
 `<section class="panel"><div class="compare-controls"><label>运行 A<select id="compare-left" aria-label="运行 A">${options(a)}</select></label><label>运行 B<select id="compare-right" aria-label="运行 B">${options(b)}</select></label></div><div class="research-copy"><p>输入变化：<strong>${changed.length} 项</strong>。${a.namespace===b.namespace?'相同数据语义可逐项比较。':'数据语义不同，不能把数值差解释为改进。'}</p></div>
 ${researchTable(['输入字段','运行 A','运行 B'],changed.map(k=>`<tr><td>${esc(k)}</td><td>${esc(ai[k]??'不存在')}</td><td>${esc(bi[k]??'不存在')}</td></tr>`))}
 <div class="research-copy"><label>因子 <select id="compare-factor" aria-label="比较因子">${fids.map(id=>`<option value="${esc(id)}" ${fid===id?'selected':''}>${esc(id)}</option>`).join('')}</select></label><p>CS显示平均同日Rank IC；TS显示逐品种Rank IC的均值，两种量分别比较，不能混合。变化列为 B−A。</p></div>
 ${researchTable(['模式','期限','A Rank IC','B Rank IC','变化','A 高−低标签','B 高−低标签'],metrics.map(r=>`<tr><td>${r.mode.toUpperCase()}</td><td>${r.horizon}日</td><td>${numberText(r.left)}</td><td>${numberText(r.right)}</td><td>${numberText(r.delta)}</td><td>${numberText(r.spreadLeft)}</td><td>${numberText(r.spreadRight)}</td></tr>`))}
 ${researchSources([...new Set([...a.sources,...b.sources])])}</section>
 <section class="panel research-detail"><div class="research-copy"><h2>协议历史</h2><p>保留修正和退役版本。十二个因子的v1公式未改变，协议版本记录统计范围修正。</p></div>${researchTable(['版本','状态','变更与限制'],d.protocol_versions.map(r=>`<tr><td>${esc(r.version)}</td><td>${r.status==='current'?'当前':'保留；范围已退役'}</td><td>${esc(r.note)}</td></tr>`))}${researchSources(d.protocol_versions.map(r=>r.source))}</section>`;
}
function renderProduction(){
 const d=researchData();if(!d)return heading('批量任务','尚无已发布任务收据。');
 return heading('批量任务','展示已封存的本地任务；本页不提供远程运行或实时进度。')+
 `<section class="panel"><div class="research-copy"><p>任务按各批次配置限制并发；新增课程增量验证使用单线程。资源预检、公式/标签分区、缓存和恢复保留逐次证据。进程树RSS为20ms采样峰值。</p></div>${researchTable(['任务批次','结果','任务数','命中','重算','耗时秒','峰值MiB'],d.jobs.map(j=>`<tr><td>${esc(j.label)}<div class="factor-id">${esc(j.id)}</div></td><td>已封存完成</td><td>${j.tasks}</td><td>${j.cache_hits}</td><td>${j.cache_misses}</td><td>${numberText(j.seconds)}</td><td>${numberText(j.peak_rss_mib)}</td></tr>`))}<div class="research-copy"><p><strong>性能限制：</strong>两连续因子直接计算8.90秒，月分区冷启动73.33秒，全部命中26.73秒。小任务的封存和校验开销高，整体没有加速。复杂动量P3阶段104.57秒降至14.02秒；这都是单次观测。</p><p><strong>故障验收：</strong>中断前11项完成，恢复复用11项；故意损坏隔离缓存后任务失败且成功指针不变。失败证据保留，不能隐藏为正常完成。</p>${(d.engineering_diagnostics||[]).map(x=>`<p><strong>保留故障：</strong>${esc(x.reason)}</p>`).join('')}<h2>接下来做什么</h2><ul>${d.next_tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><p>正式信号、组合权重、期货账户、独立对账、分钟因子和每日模拟仍属后续项目。</p></div>${researchSources(d.jobs.map(j=>j.source))}</section>`;
}
document.addEventListener('click',event=>{const target=event.target.closest('[data-research-mode],[data-research-factor]');if(!target)return;if(target.dataset.researchMode)researchView.mode=target.dataset.researchMode;if(target.dataset.researchFactor)researchView.factor=target.dataset.researchFactor;render();});
document.addEventListener('change',event=>{const fields={'research-namespace':'namespace','research-horizon':'horizon','research-metric':'metric','compare-left':'left','compare-right':'right','compare-factor':'compareFactor'};const key=fields[event.target.id];if(key){researchView[key]=event.target.value;render();}});

window.RESEARCH_CATALOG = {
  "schemaVersion": 1,
  "revision": "2026-11-08.4",
  "updated": "2026-11-08",
  "title": "Jane Street 字段研究手册",
  "counts": {
    "trainingFields": 92,
    "features": 79,
    "responders": 9,
    "symbols": 39,
    "dates": 1699,
    "rows": 47127338
  },
  "fields": [
    {
      "id": "date_id",
      "title": "这是第几天",
      "kind": "标识",
      "status": "用途已知",
      "plain": "把数据按天排好顺序的编号。",
      "facts": [
        "从0到1698，共1,699个编号。",
        "没有真实年月日，不能直接查到某个编号是星期几。",
        "849到968点的变化发生在676→677号日期；本轮尚未找到可确认的真实日历锚点。"
      ],
      "guess": "如果每天都是一个完整交易日，跨度可能接近7年；这只是有前提的估算。",
      "unknown": [
        "真实起止日期。",
        "是否删过日期、重新编号，或包含非通常交易日。"
      ],
      "evidence": [
        "E01",
        "E07",
        "E11",
        "E13",
        "E14",
        "E15"
      ],
      "related": [
        "time_id",
        "feature_61"
      ],
      "claims": [
        "C07",
        "C02",
        "C10",
        "C12",
        "C13"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int16",
        "min": 0,
        "max": 1698,
        "mean": 1005.4793892241485,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [],
      "dataType": "int16"
    },
    {
      "id": "time_id",
      "title": "一天里的第几个观察点",
      "kind": "标识",
      "status": "用途已知",
      "plain": "表示一天里观察的先后顺序，不能直接当分钟。",
      "facts": [
        "前677个日期每天849步，之后1,022个日期每天968步。",
        "官方没有保证相邻编号之间实际经过的时间相同。",
        "切换恰在676号日期之后；676和677两天都有同样29个标的，分类编码09/10/11没有变化。",
        "前677天，每天从369号点起，四组字段分别共同空1、10、60点；后1022天这三档中间空白都消失。",
        "同一行里，短档字段可以已有值，长档字段仍为空；不能把整个60点都解释为市场停市。"
      ],
      "guess": "观察安排与部分字段的可用性同时改变。可能涉及计算重启、来源或市场时段变化；30秒、1分钟仍只是候选。",
      "unknown": [
        "每步实际间隔多少秒；同一编号对应哪个真实钟点。",
        "369号附近是否为真实场次切换，还是来源或计算规则变化。",
        "交易所、市场及真实起止日期；本轮开盘匹配没有确认身份。"
      ],
      "evidence": [
        "E01",
        "E07",
        "E11",
        "E12",
        "E13",
        "E14",
        "E15"
      ],
      "related": [
        "date_id",
        "feature_39",
        "feature_40",
        "feature_41"
      ],
      "claims": [
        "C07",
        "C08",
        "C10",
        "C11",
        "C12",
        "C13"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int16",
        "min": 0,
        "max": 967,
        "mean": 468.70572218613324,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [],
      "dataType": "int16"
    },
    {
      "id": "symbol_id",
      "title": "这是哪一个匿名标的",
      "kind": "标识",
      "status": "用途已知",
      "plain": "相当于给每个研究对象取了一个代号。",
      "facts": [
        "全历史共有39个编号，范围0到38。",
        "编号没有公开的真实品种名称。",
        "本轮已比较全部741对标的的关系。"
      ],
      "guess": "可以先把关系紧密的标的放在一起研究；不能据此指定股票或期货代码。",
      "unknown": [
        "39个标的的真实名称、资产类别与交易场所。",
        "为什么有关联的标的会一起变化。"
      ],
      "evidence": [
        "E01",
        "E04",
        "E05",
        "E15"
      ],
      "related": [
        "feature_09",
        "feature_10",
        "feature_11",
        "responder_8"
      ],
      "claims": [
        "C01",
        "C05",
        "C08",
        "C13"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int8",
        "min": 0,
        "max": 38,
        "mean": 18.102393837733842,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [],
      "dataType": "int8"
    },
    {
      "id": "weight",
      "title": "这条记录在评分里有多重要",
      "kind": "权重",
      "status": "用途已知",
      "plain": "同样的预测错误，有些记录在评分里算得更重，这一列控制这个轻重。",
      "facts": [
        "它是评分权重，不是已知的仓位或成交量。",
        "全历史同一标的当天固定，跨日期变化。"
      ],
      "guess": "它可能与每日风险、活跃程度或其他因素有关；目前没有哪一个解释得到证实。",
      "unknown": [
        "为什么某条记录权重更大。",
        "这些权重是如何计算出来的。"
      ],
      "evidence": [
        "E01",
        "E02",
        "E07"
      ],
      "related": [
        "symbol_id",
        "date_id",
        "responder_6"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": 0.14996665716171265,
        "max": 10.240419387817383,
        "mean": 2.009445338750884,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "feature_00",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.794128894805908,
        "max": 6.477002143859863,
        "mean": 0.5738325954623784,
        "null": 3182052,
        "null_pct": 6.752030000081906,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_14",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_00",
        "null_share": 0.0643430958115095,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.07086614173228346
      },
      "dataType": "float"
    },
    {
      "id": "feature_01",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.7415924072265625,
        "max": 6.292391300201416,
        "mean": 0.010192000491838353,
        "null": 3182052,
        "null_pct": 6.752030000081906,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_13",
        "tag_14",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_01",
        "null_share": 0.0643430958115095,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.07086614173228346
      },
      "dataType": "float"
    },
    {
      "id": "feature_02",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.726009845733643,
        "max": 6.490264892578125,
        "mean": 0.5731024942357341,
        "null": 3182052,
        "null_pct": 6.752030000081906,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_12",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_02",
        "null_share": 0.0643430958115095,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.07086614173228346
      },
      "dataType": "float"
    },
    {
      "id": "feature_03",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.601889610290527,
        "max": 6.69562292098999,
        "mean": 0.5727449399542576,
        "null": 3182052,
        "null_pct": 6.752030000081906,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_13",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_03",
        "null_share": 0.0643430958115095,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.07086614173228346
      },
      "dataType": "float"
    },
    {
      "id": "feature_04",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.799879550933838,
        "max": 6.164159774780273,
        "mean": -0.000852231062004896,
        "null": 3182052,
        "null_pct": 6.752030000081906,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_12",
        "tag_13",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_04",
        "null_share": 0.0643430958115095,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.07086614173228346
      },
      "dataType": "float"
    },
    {
      "id": "feature_05",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -25.350399017333984,
        "max": 35.72622299194336,
        "mean": -0.03837982325796058,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_14",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_05",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_06",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -58.60436248779297,
        "max": 93.64405822753906,
        "mean": -0.005057962964325711,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_12",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_06",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_07",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -39.085357666015625,
        "max": 54.94160842895508,
        "mean": -0.013839288677167997,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_13",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_07",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_08",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -15.566864967346191,
        "max": 21.695173263549805,
        "mean": 0.08246720270865134,
        "null": 300247,
        "null_pct": 0.637097304328965,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_08",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_09",
      "title": "像产品的分类标签",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "这列通常跟着标的走，像一张分类标签，编码本身没有已知大小含义。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "全历史同一标的当天不变。",
        "同一标的全历史只出现1至3种编码。",
        "部分关联标的共用这些编码。"
      ],
      "guess": "优先作为分类属性研究；还不知道具体分的是哪种类别。",
      "unknown": [
        "分类的真实名称与层级。",
        "少数编码发生变化的原因。"
      ],
      "evidence": [
        "E01",
        "E02",
        "E05"
      ],
      "related": [
        "symbol_id",
        "feature_10",
        "feature_11"
      ],
      "claims": [
        "C01",
        "C05"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int8",
        "min": 2,
        "max": 82,
        "mean": 32.76299157826398,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_1"
      ],
      "sampleRole": {
        "feature": "feature_09",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "categoryValues": [
        2,
        4,
        9,
        11,
        12,
        14,
        15,
        25,
        26,
        30,
        34,
        42,
        44,
        46,
        49,
        50,
        57,
        64,
        68,
        70,
        81,
        82
      ],
      "dataType": "int8"
    },
    {
      "id": "feature_10",
      "title": "像产品的分类标签",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "这列通常跟着标的走，像一张分类标签，编码本身没有已知大小含义。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "全历史同一标的当天不变。",
        "同一标的全历史只出现1至3种编码。",
        "部分关联标的共用这些编码。"
      ],
      "guess": "优先作为分类属性研究；还不知道具体分的是哪种类别。",
      "unknown": [
        "分类的真实名称与层级。",
        "少数编码发生变化的原因。"
      ],
      "evidence": [
        "E01",
        "E02",
        "E05"
      ],
      "related": [
        "symbol_id",
        "feature_09",
        "feature_11"
      ],
      "claims": [
        "C01",
        "C05"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int8",
        "min": 1,
        "max": 12,
        "mean": 4.875799350262474,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_1"
      ],
      "sampleRole": {
        "feature": "feature_10",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "categoryValues": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        10,
        12
      ],
      "dataType": "int8"
    },
    {
      "id": "feature_11",
      "title": "像产品的分类标签",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "这列通常跟着标的走，像一张分类标签，编码本身没有已知大小含义。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "全历史同一标的当天不变。",
        "同一标的全历史只出现1至3种编码。",
        "部分关联标的共用这些编码。"
      ],
      "guess": "优先作为分类属性研究；还不知道具体分的是哪种类别。",
      "unknown": [
        "分类的真实名称与层级。",
        "少数编码发生变化的原因。"
      ],
      "evidence": [
        "E01",
        "E02",
        "E05"
      ],
      "related": [
        "symbol_id",
        "feature_09",
        "feature_10"
      ],
      "claims": [
        "C01",
        "C05"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "int16",
        "min": 9,
        "max": 539,
        "mean": 170.6931200527388,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_1"
      ],
      "sampleRole": {
        "feature": "feature_11",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "categoryValues": [
        9,
        11,
        13,
        16,
        24,
        25,
        34,
        40,
        48,
        50,
        59,
        62,
        63,
        66,
        76,
        150,
        158,
        159,
        171,
        195,
        214,
        230,
        261,
        297,
        336,
        376,
        388,
        410,
        522,
        534,
        539
      ],
      "dataType": "int16"
    },
    {
      "id": "feature_12",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.9130783081054688,
        "max": 139.4184112548828,
        "mean": -0.038973227028864584,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_12",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_13",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.9216116666793823,
        "max": 381.2022399902344,
        "mean": -0.0266424304458731,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_13",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_14",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.3991261720657349,
        "max": 169.1188201904297,
        "mean": -0.041218235944248734,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_14",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_15",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.6887439489364624,
        "max": 111.07955169677734,
        "mean": -0.2512185918393804,
        "null": 1209299,
        "null_pct": 2.566024416655997,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_15",
        "null_share": 0.02566770683213077,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_16",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.760566234588623,
        "max": 220.13247680664062,
        "mean": -0.20489007826421204,
        "null": 261,
        "null_pct": 0.0005538186773884831,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_16",
        "null_share": 1.2029669978033824e-06,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_17",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.731826663017273,
        "max": 134.50064086914062,
        "mean": -0.2428079022446312,
        "null": 201838,
        "null_pct": 0.4282822000258109,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_17",
        "null_share": 0.004280156578184434,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_18",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -6.000733852386475,
        "max": 5.8253703117370605,
        "mean": -0.008926521454905195,
        "null": 226,
        "null_pct": 0.00047955180494175164,
        "nan": 0
      },
      "tags": [
        "tag_4",
        "tag_7"
      ],
      "sampleRole": {
        "feature": "feature_18",
        "null_share": 1.2029669978033824e-06,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_19",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.772067070007324,
        "max": 5.972392559051514,
        "mean": -0.03189372681586154,
        "null": 226,
        "null_pct": 0.00047955180494175164,
        "nan": 0
      },
      "tags": [
        "tag_5",
        "tag_7"
      ],
      "sampleRole": {
        "feature": "feature_19",
        "null_share": 1.2029669978033824e-06,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_20",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -4.620031356811523,
        "max": 5.421158790588379,
        "mean": -0.20970445188839845,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0",
        "tag_16"
      ],
      "sampleRole": {
        "feature": "feature_20",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_21",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，81.33%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.5586370229721069,
        "max": 161.4867706298828,
        "mean": 0.03768653486548483,
        "null": 8435985,
        "null_pct": 17.900406341643993,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_21",
        "null_share": 0.17011156315937628,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.813273340832396,
        "entity_days_all_null": 0.18672665916760406
      },
      "dataType": "float"
    },
    {
      "id": "feature_22",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -2.602897882461548,
        "max": 4.128448963165283,
        "mean": 0.06790624239250591,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_22",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_23",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -2.5850107669830322,
        "max": 3.243720054626465,
        "mean": 0.072202823483028,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_23",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_24",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -3.2349352836608887,
        "max": 10.744451522827148,
        "mean": 0.5722866335750466,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_24",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_25",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -2.178431272506714,
        "max": 4.136297225952148,
        "mean": 0.09257649658829713,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_25",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_26",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，81.33%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -3.4510562419891357,
        "max": 4.862732887268066,
        "mean": -0.049243963317346005,
        "null": 8435985,
        "null_pct": 17.900406341643993,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_26",
        "null_share": 0.17011156315937628,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.813273340832396,
        "entity_days_all_null": 0.18672665916760406
      },
      "dataType": "float"
    },
    {
      "id": "feature_27",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，81.33%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -3.4755444526672363,
        "max": 2.643550395965576,
        "mean": -0.234434221731445,
        "null": 8435985,
        "null_pct": 17.900406341643993,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_27",
        "null_share": 0.17011156315937628,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.813273340832396,
        "entity_days_all_null": 0.18672665916760406
      },
      "dataType": "float"
    },
    {
      "id": "feature_28",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -4.063898086547852,
        "max": 2.8809099197387695,
        "mean": -0.15554294525752677,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_28",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_29",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.5957297086715698,
        "max": 7.534705638885498,
        "mean": -0.2153134200543792,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_29",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_30",
      "title": "每天设置一次的标的信息",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "每个标的当天一直使用同一个数，换一天再变化。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已对全部50,382个标的—日期组合核对，没有日内变化。"
      ],
      "guess": "更像每日参数或每日状态；暂不能命名为波动率、成交量或风险预算。",
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E02"
      ],
      "related": [
        "date_id",
        "symbol_id",
        "weight"
      ],
      "claims": [
        "C03"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.6706933975219727,
        "max": 9.410682678222656,
        "mean": -0.257600054275877,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_30",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_31",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，81.33%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.5034983158111572,
        "max": 127.9803695678711,
        "mean": 0.03616547818268942,
        "null": 8435985,
        "null_pct": 17.900406341643993,
        "nan": 0
      },
      "tags": [
        "tag_0"
      ],
      "sampleRole": {
        "feature": "feature_31",
        "null_share": 0.17011156315937628,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.813273340832396,
        "entity_days_all_null": 0.18672665916760406
      },
      "dataType": "float"
    },
    {
      "id": "feature_32",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.841329097747803,
        "max": 6.007875919342041,
        "mean": 0.4205492665295348,
        "null": 478457,
        "null_pct": 1.0152429997213082,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_32",
        "null_share": 0.01017589783441881,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_33",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.449079990386963,
        "max": 5.9967570304870605,
        "mean": -0.01520866303653552,
        "null": 478457,
        "null_pct": 1.0152429997213082,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_13",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_33",
        "null_share": 0.01017589783441881,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_34",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.3013410568237305,
        "max": 5.069967269897461,
        "mean": 0.4469281778009173,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_34",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_35",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -4.889822483062744,
        "max": 5.371406078338623,
        "mean": 0.4450888394981181,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_35",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_36",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.161081314086914,
        "max": 5.700727462768555,
        "mean": 0.0018062694632816842,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_12",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_36",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_37",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -14.927837371826172,
        "max": 31.505529403686523,
        "mean": 0.03725363416057751,
        "null": 849,
        "null_pct": 0.0018015021344935714,
        "nan": 0
      },
      "tags": [
        "tag_3"
      ],
      "sampleRole": {
        "feature": "feature_37",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_38",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -29.195837020874023,
        "max": 26.22109031677246,
        "mean": 0.04561945258215477,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3"
      ],
      "sampleRole": {
        "feature": "feature_38",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_39",
      "title": "中间空白较长的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..428号点，所有标的都为空，共60点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_40",
        "feature_41"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.605367660522461,
        "max": 5.585662841796875,
        "mean": 0.030083719404584375,
        "null": 4300649,
        "null_pct": 9.125592877747518,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_14",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_39",
        "null_share": 0.09242034554024045,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_40",
      "title": "中间空白最短的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天在日内中段的共同空白只有369号点，共1点；后1022天没有这一中间共同空值。日初的少数例外另计。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_39",
        "feature_41"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.280773162841797,
        "max": 5.473479270935059,
        "mean": 0.015741177832677093,
        "null": 67856,
        "null_pct": 0.14398436847844026,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_12",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_40",
        "null_share": 0.0025442752003541533,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_41",
      "title": "中间空白为10点的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..378号点，所有标的都为空，共10点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_39",
        "feature_40"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.018599510192871,
        "max": 5.24800968170166,
        "mean": 0.041923748840988484,
        "null": 1093012,
        "null_pct": 2.3192737939070525,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_13",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_41",
        "null_share": 0.024202493028806248,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_42",
      "title": "中间空白较长的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..428号点，所有标的都为空，共60点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_43",
        "feature_44"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.358384609222412,
        "max": 5.1484832763671875,
        "mean": -0.06303919734572984,
        "null": 4300649,
        "null_pct": 9.125592877747518,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_14",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_42",
        "null_share": 0.09242034554024045,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_43",
      "title": "中间空白最短的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天在日内中段的共同空白只有369号点，共1点；后1022天没有这一中间共同空值。日初的少数例外另计。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_42",
        "feature_44"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.158490180969238,
        "max": 5.151496887207031,
        "mean": -0.05390560505502046,
        "null": 67856,
        "null_pct": 0.14398436847844026,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_12",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_43",
        "null_share": 0.0025442752003541533,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_44",
      "title": "中间空白为10点的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..378号点，所有标的都为空，共10点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_42",
        "feature_43"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.854245662689209,
        "max": 4.940858364105225,
        "mean": -0.08035094149432151,
        "null": 1093012,
        "null_pct": 2.3192737939070525,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_13",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_44",
        "null_share": 0.024202493028806248,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_45",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.72733211517334,
        "max": 5.223100662231445,
        "mean": 0.023377143528386823,
        "null": 317163,
        "null_pct": 0.672991544737791,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_45",
        "null_share": 0.0062289631146259135,
        "batches_with_one_nonnull_value": 3.621613791105316e-05,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_46",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.315288066864014,
        "max": 4.685758590698242,
        "mean": -0.04295474741310255,
        "null": 317163,
        "null_pct": 0.672991544737791,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_46",
        "null_share": 0.0062289631146259135,
        "batches_with_one_nonnull_value": 3.621613791105316e-05,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_47",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -49.94655990600586,
        "max": 1019.1138305664062,
        "mean": -0.010571207245951139,
        "null": 87,
        "null_pct": 0.00018460622579616104,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_14",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_47",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_48",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -311.418212890625,
        "max": 487.6096496582031,
        "mean": -0.00171951145534982,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_12",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_48",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_49",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -109.71406555175781,
        "max": 147.35853576660156,
        "mean": -0.004012641300571713,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_13",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_49",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_50",
      "title": "中间空白较长的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..428号点，所有标的都为空，共60点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_51",
        "feature_52"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.3156585693359375,
        "max": 5.9398674964904785,
        "mean": -0.07570816119989415,
        "null": 4254098,
        "null_pct": 9.026815815482724,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_50",
        "null_share": 0.09047755383878799,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_51",
      "title": "中间空白最短的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天在日内中段的共同空白只有369号点，共1点；后1022天没有这一中间共同空值。日初的少数例外另计。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_50",
        "feature_52"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.316484451293945,
        "max": 5.809254169464111,
        "mean": -0.09757485884014441,
        "null": 13805,
        "null_pct": 0.02929297640363222,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_51",
        "null_share": 0.000295929881459632,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_52",
      "title": "中间空白为10点的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..378号点，所有标的都为空，共10点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_50",
        "feature_51"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.356530666351318,
        "max": 5.672062873840332,
        "mean": -0.10389180262928237,
        "null": 1044898,
        "null_pct": 2.2171801853098514,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_52",
        "null_share": 0.022209176713446042,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_53",
      "title": "中间空白较长的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..428号点，所有标的都为空，共60点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_54",
        "feature_55"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.353856086730957,
        "max": 5.705533504486084,
        "mean": 0.07496076360163277,
        "null": 4254098,
        "null_pct": 9.026815815482724,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_53",
        "null_share": 0.09047755383878799,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_54",
      "title": "中间空白最短的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天在日内中段的共同空白只有369号点，共1点；后1022天没有这一中间共同空值。日初的少数例外另计。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_53",
        "feature_55"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.606055736541748,
        "max": 5.173213958740234,
        "mean": 0.048526780308027984,
        "null": 13805,
        "null_pct": 0.02929297640363222,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_54",
        "null_share": 0.000295929881459632,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_55",
      "title": "中间空白为10点的一档输入",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "发现了稳定的空值和恢复规律；现实中描述什么仍没有认出来。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。",
        "前677天，每天369..378号点，所有标的都为空，共10点；后1022天这一中间共同空白消失。",
        "这一组三列的其他匿名标签相同，差别是tag_12/13/14；另外三组也有对应的1/10/60点空白。",
        "这里描述所有标的同时为空的区间；不表示其他位置没有零星空值。"
      ],
      "guess": "像同类信息的不同计算窗口：某个时点重新开始后，需要等待的记录数不同。公式、原始来源与实际秒数尚未确定。",
      "unknown": [
        "它的经济含义、原始单位与准确计算公式。",
        "空白来自场次切换、来源变化还是计算规则；不能直接当成休市。"
      ],
      "evidence": [
        "E01",
        "E08",
        "E12"
      ],
      "related": [
        "time_id",
        "feature_53",
        "feature_54"
      ],
      "claims": [
        "C11"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.69846773147583,
        "max": 5.216464519500732,
        "mean": 0.08681382156173545,
        "null": 1044898,
        "null_pct": 2.2171801853098514,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_55",
        "null_share": 0.022209176713446042,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_56",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.528082370758057,
        "max": 5.696933746337891,
        "mean": -0.028327847033931982,
        "null": 226,
        "null_pct": 0.00047955180494175164,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4"
      ],
      "sampleRole": {
        "feature": "feature_56",
        "null_share": 1.2029669978033824e-06,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_57",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.369931221008301,
        "max": 5.5147247314453125,
        "mean": 0.027874287785121892,
        "null": 226,
        "null_pct": 0.00047955180494175164,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_5"
      ],
      "sampleRole": {
        "feature": "feature_57",
        "null_share": 1.2029669978033824e-06,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_58",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -36.40674591064453,
        "max": 58.441505432128906,
        "mean": -0.015197687262075257,
        "null": 478452,
        "null_pct": 1.0152323901681015,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_58",
        "null_share": 0.01017589783441881,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_59",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -169.92288208007812,
        "max": 256.86737060546875,
        "mean": -0.002545318810802175,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_59",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_60",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -62.63672637939453,
        "max": 120.78543090820312,
        "mean": -0.006650385341054273,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_60",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_61",
      "title": "每天大家共用的一个值",
      "kind": "输入特征",
      "status": "有作用线索",
      "plain": "同一天，所有标的、所有时刻看到的都是同一个数。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "已核对全部1,699天；每天一个公共值，不同日期取值不同。",
        "它不是随time_id变化的日内钟表。",
        "前段约20.47日期的周期，没有通过固定参数的后段检查。"
      ],
      "guess": "日级公共状态或日期相关变量，都是仍待核对的候选。",
      "unknown": [
        "这个公共值到底来自什么。",
        "能否找到真实日历的对应关系。"
      ],
      "evidence": [
        "E01",
        "E02",
        "E06"
      ],
      "related": [
        "date_id",
        "time_id"
      ],
      "claims": [
        "C02",
        "C06"
      ],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.740418434143066,
        "max": 5.746196746826172,
        "mean": 0.012387778637040804,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_61",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 1.0,
        "entity_days_with_one_nonnull_value": 1.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_62",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.9324980974197388,
        "max": 392.2069091796875,
        "mean": -0.1795782579600978,
        "null": 292827,
        "null_pct": 0.621352727370258,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_14",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_62",
        "null_share": 0.005305084460312916,
        "batches_with_one_nonnull_value": 0.0005794582065768506,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_63",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.8344459533691406,
        "max": 162.32070922851562,
        "mean": -0.14525416810254047,
        "null": 227566,
        "null_pct": 0.48287471700608253,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_12",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_63",
        "null_share": 0.00401550383866769,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_64",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.9524887204170227,
        "max": 159.49893188476562,
        "mean": -0.1665562828495275,
        "null": 237663,
        "null_pct": 0.5042996487516439,
        "nan": 0
      },
      "tags": [
        "tag_6",
        "tag_13",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_64",
        "null_share": 0.004212790426307444,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_65",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.220600605010986,
        "max": 5.786397933959961,
        "mean": -0.04315234572878325,
        "null": 317163,
        "null_pct": 0.672991544737791,
        "nan": 0
      },
      "tags": [
        "tag_4",
        "tag_7",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_65",
        "null_share": 0.0062289631146259135,
        "batches_with_one_nonnull_value": 3.621613791105316e-05,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_66",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.906377792358398,
        "max": 5.66807746887207,
        "mean": -0.05011756283731034,
        "null": 317163,
        "null_pct": 0.672991544737791,
        "nan": 0
      },
      "tags": [
        "tag_5",
        "tag_7",
        "tag_15"
      ],
      "sampleRole": {
        "feature": "feature_66",
        "null_share": 0.0062289631146259135,
        "batches_with_one_nonnull_value": 3.621613791105316e-05,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_67",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.6981940269470215,
        "max": 93.8479232788086,
        "mean": -0.04260350862660556,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_11",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_67",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_68",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.7404090166091919,
        "max": 336.0369567871094,
        "mean": -0.023995330982962193,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_11",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_68",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_69",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.3218590021133423,
        "max": 121.07611083984375,
        "mean": -0.040502003244919545,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_11",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_69",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_70",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.8945375680923462,
        "max": 167.66854858398438,
        "mean": -0.03299150251363527,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_10",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_70",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_71",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -0.8259843587875366,
        "max": 735.5928955078125,
        "mean": -0.021157147100957507,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_10",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_71",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_72",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -1.4011220932006836,
        "max": 216.2628936767578,
        "mean": -0.036681962307495576,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_9",
        "tag_10",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_72",
        "null_share": 0.0,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_73",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -7.017024517059326,
        "max": 200.9487762451172,
        "mean": -0.016558904641928447,
        "null": 483759,
        "null_pct": 1.0264933699416674,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_73",
        "null_share": 0.010266120359254064,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_74",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -6.107175827026367,
        "max": 228.66139221191406,
        "mean": -0.02310251072440126,
        "null": 483759,
        "null_pct": 1.0264933699416674,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_14"
      ],
      "sampleRole": {
        "feature": "feature_74",
        "null_share": 0.010266120359254064,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_75",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -6.27980375289917,
        "max": 213.31382751464844,
        "mean": -0.002237489849368904,
        "null": 58430,
        "null_pct": 0.12398323877321482,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_75",
        "null_share": 0.0010910910670076676,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_76",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.73065710067749,
        "max": 260.91119384765625,
        "mean": -0.008022412459440437,
        "null": 58430,
        "null_pct": 0.12398323877321482,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_12"
      ],
      "sampleRole": {
        "feature": "feature_76",
        "null_share": 0.0010910910670076676,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_77",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.920878887176514,
        "max": 208.1276092529297,
        "mean": -0.006589707340341225,
        "null": 20043,
        "null_pct": 0.042529454984281095,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_77",
        "null_share": 0.0002851031784794016,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "feature_78",
      "title": "具体含义还没认出来的输入",
      "kind": "输入特征",
      "status": "含义待解",
      "plain": "我们知道它是模型的输入，也查过它怎样变化，但还不知道它在现实中代表什么。",
      "facts": [
        "这是提供给模型的一列匿名输入。",
        "已统计全历史的数值范围、平均值和空值。",
        "在30天样本中，0.00%的标的—日期组合只有一个非空取值；全空组合另计。",
        "这列有空值；空值不能直接当成真实的零。"
      ],
      "guess": null,
      "unknown": [
        "它在现实中具体描述什么。",
        "原始单位，以及计算时做过什么处理。"
      ],
      "evidence": [
        "E01",
        "E08"
      ],
      "related": [],
      "claims": [],
      "files": [
        "训练数据",
        "预测时的输入"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -6.159514904022217,
        "max": 257.4540100097656,
        "mean": -0.012558891872987352,
        "null": 20043,
        "null_pct": 0.042529454984281095,
        "nan": 0
      },
      "tags": [
        "tag_8",
        "tag_13"
      ],
      "sampleRole": {
        "feature": "feature_78",
        "null_share": 0.0002851031784794016,
        "batches_with_one_nonnull_value": 0.0,
        "entity_days_with_one_nonnull_value": 0.0,
        "entity_days_all_null": 0.0
      },
      "dataType": "float"
    },
    {
      "id": "responder_0",
      "title": "一个偏中的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏中的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第一套的中窗口位置。"
      ],
      "guess": "候选长度约20个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_2",
        "responder_1",
        "responder_0_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.0015451487021928257,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0",
        "tag_2"
      ],
      "windowLabel": "中",
      "windowSteps": 20,
      "family": "第一套",
      "dataType": "float"
    },
    {
      "id": "responder_1",
      "title": "一个偏长的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏长的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第一套的长窗口位置。"
      ],
      "guess": "候选长度约120个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_2",
        "responder_0",
        "responder_1_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.0008655999344793668,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0",
        "tag_3"
      ],
      "windowLabel": "长",
      "windowSteps": 120,
      "family": "第一套",
      "dataType": "float"
    },
    {
      "id": "responder_2",
      "title": "一个偏短的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏短的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第一套的短窗口位置。"
      ],
      "guess": "候选长度约4个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_0",
        "responder_1",
        "responder_2_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.00014196034344957464,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_0",
        "tag_1"
      ],
      "windowLabel": "短",
      "windowSteps": 4,
      "family": "第一套",
      "dataType": "float"
    },
    {
      "id": "responder_3",
      "title": "一个偏中的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏中的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第二套的中窗口位置。"
      ],
      "guess": "候选长度约20个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_5",
        "responder_4",
        "responder_3_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.016380087513844874,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_2",
        "tag_4"
      ],
      "windowLabel": "中",
      "windowSteps": 20,
      "family": "第二套",
      "dataType": "float"
    },
    {
      "id": "responder_4",
      "title": "一个偏长的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏长的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第二套的长窗口位置。"
      ],
      "guess": "候选长度约120个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_5",
        "responder_3",
        "responder_4_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.012441983288891586,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3",
        "tag_4"
      ],
      "windowLabel": "长",
      "windowSteps": 120,
      "family": "第二套",
      "dataType": "float"
    },
    {
      "id": "responder_5",
      "title": "一个偏短的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏短的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第二套的短窗口位置。"
      ],
      "guess": "候选长度约4个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_3",
        "responder_4",
        "responder_5_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.016624210821555248,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_1",
        "tag_4"
      ],
      "windowLabel": "短",
      "windowSteps": 4,
      "family": "第二套",
      "dataType": "float"
    },
    {
      "id": "responder_6",
      "title": "比赛要求预测的答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "比赛只对这一列的预测评分。它看起来对应中等远近的一段变化。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第三套的中窗口位置。"
      ],
      "guess": "候选长度约20个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_8",
        "responder_7",
        "responder_6_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.002140649066501282,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_2"
      ],
      "windowLabel": "中",
      "windowSteps": 20,
      "family": "第三套",
      "dataType": "float"
    },
    {
      "id": "responder_7",
      "title": "一个偏长的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏长的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第三套的长窗口位置。"
      ],
      "guess": "候选长度约120个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_8",
        "responder_6",
        "responder_7_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": 0.0014761093123976659,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_3"
      ],
      "windowLabel": "长",
      "windowSteps": 120,
      "family": "第三套",
      "dataType": "float"
    },
    {
      "id": "responder_8",
      "title": "一个偏短的参考答案",
      "kind": "目标答案",
      "status": "有作用线索",
      "plain": "它像是在描述未来偏短的一段变化；现在的真实答案要事后才知道。",
      "facts": [
        "训练数据提供这一列；预测当前时刻时没有当前真实答案。",
        "数值位于-5到5之间，不能直接解释为涨跌百分比。",
        "原始标签分组可把它放在第三套的短窗口位置。"
      ],
      "guess": "候选长度约4个观测步。这个长度来自关系检查，准确计算公式与每步秒数未知。",
      "unknown": [
        "原始计算公式与单位。",
        "三套答案之间的现实区别。"
      ],
      "evidence": [
        "E01",
        "E03",
        "E07",
        "E10"
      ],
      "related": [
        "responder_6",
        "responder_7",
        "responder_8_lag_1"
      ],
      "claims": [
        "C04",
        "C09"
      ],
      "files": [
        "训练数据；当前真实值只用于事后核对"
      ],
      "updated": "2026-11-08",
      "stats": {
        "type": "float",
        "min": -5.0,
        "max": 5.0,
        "mean": -0.0011136206184106975,
        "null": 0,
        "null_pct": 0.0,
        "nan": 0
      },
      "tags": [
        "tag_1"
      ],
      "windowLabel": "短",
      "windowSteps": 4,
      "family": "第三套",
      "dataType": "float"
    },
    {
      "id": "row_id",
      "title": "把预测结果对回原来那一行",
      "kind": "接口字段",
      "status": "用途已知",
      "plain": "交答案时，用它告诉系统这份答案属于哪一行。",
      "facts": [
        "模拟预测数据与提交示例里都有这一列。",
        "不是资产编号，也不提供涨跌信息。"
      ],
      "guess": null,
      "unknown": [],
      "evidence": [
        "E07"
      ],
      "related": [
        "symbol_id",
        "responder_6"
      ],
      "claims": [],
      "files": [
        "预测输入",
        "提交结果"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "int64"
    },
    {
      "id": "is_scored",
      "title": "这一行是否算分",
      "kind": "接口字段",
      "status": "用途已知",
      "plain": "告诉我们这一行是否计入评估。",
      "facts": [
        "出现在预测输入中。",
        "不能把它当成上涨、下跌或交易信号。"
      ],
      "guess": null,
      "unknown": [],
      "evidence": [
        "E07"
      ],
      "related": [
        "weight"
      ],
      "claims": [],
      "files": [
        "预测输入"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "bool"
    },
    {
      "id": "responder_0_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_0，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_0",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_1_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_1，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_1",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_2_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_2，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_2",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_3_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_3，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_3",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_4_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_4，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_4",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_5_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_5，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_5",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_6_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_6，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_6",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_7_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_7，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_7",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    },
    {
      "id": "responder_8_lag_1",
      "title": "上一天已经公布的参考答案",
      "kind": "前日答案",
      "status": "用途已知",
      "plain": "它是前一天的responder_8，不是“上一个时间点”的答案。",
      "facts": [
        "新一天开始时，接口提供上一天的答案。",
        "下载包里的lags只有39行模拟数据，不是完整历史测试答案。"
      ],
      "guess": null,
      "unknown": [
        "它所对应的原始经济单位，跟同名目标一样仍未确定。"
      ],
      "evidence": [
        "E07"
      ],
      "related": [
        "responder_8",
        "date_id"
      ],
      "claims": [],
      "files": [
        "前日答案文件；新一天开始时提供"
      ],
      "updated": "2026-11-08",
      "stats": null,
      "tags": [],
      "dataType": "float"
    }
  ],
  "claims": [
    {
      "id": "C01",
      "title": "有些字段像产品的“身份标签”",
      "summary": "09/10/11日内不变，同一个标的全历史也只出现少量编码。",
      "state": "有线索",
      "fields": [
        "feature_09",
        "feature_10",
        "feature_11",
        "symbol_id"
      ],
      "facts": [
        "每个标的全历史分别只有1至3种取值。",
        "几组关系紧密的标的，也共用这些编码。"
      ],
      "hypothesis": "可先当作分类属性研究，但还不知道是地区、品种、行业、交易场所还是其他分类。",
      "unknown": "具体分类名称与层级。",
      "evidence": [
        "E02",
        "E05"
      ]
    },
    {
      "id": "C02",
      "title": "feature_61是每天共享的一个值",
      "summary": "同一天，所有时刻、所有标的都共用它；换一天就换一个值。",
      "state": "已核对的现象",
      "fields": [
        "feature_61",
        "date_id"
      ],
      "facts": [
        "全历史1,699天，每天只有一个公共值。",
        "1,699个日期对应1,699个不同值。"
      ],
      "hypothesis": "可能是日级公共状态，也可能与经过加工的日期有关。",
      "unknown": "这个数字到底在描述什么。",
      "evidence": [
        "E02",
        "E06"
      ]
    },
    {
      "id": "C03",
      "title": "这些列是“每天设置一次”的信息",
      "summary": "weight与部分特征在同一标的当天不变，但跨日期变化。",
      "state": "已核对的现象",
      "fields": [
        "weight",
        "feature_20",
        "feature_22",
        "feature_23",
        "feature_24",
        "feature_25",
        "feature_28",
        "feature_29",
        "feature_30"
      ],
      "facts": [
        "全部50,382个标的—日期组合里，都没有日内变化。"
      ],
      "hypothesis": "这些特征更像每日参数或每日状态；weight是已知的评分权重。",
      "unknown": "这些每日数值的现实来源，以及weight为什么这样设定。",
      "evidence": [
        "E02"
      ]
    },
    {
      "id": "C04",
      "title": "9个答案似乎有短、中、长之分",
      "summary": "可以排成三套，每套都有一个短窗口、一个中窗口、一个长窗口。",
      "state": "有线索",
      "fields": [
        "responder_0",
        "responder_1",
        "responder_2",
        "responder_3",
        "responder_4",
        "responder_5",
        "responder_6",
        "responder_7",
        "responder_8"
      ],
      "facts": [
        "短段向前拼起来，能较好地对应较长一段的答案。",
        "三套分别是2/0/1、5/3/4、8/6/7（从短到长）。"
      ],
      "hypothesis": "候选长度约4、20、120个观测步；这不是已确认的分钟数。",
      "unknown": "三套到底有什么经济区别，以及答案的准确计算方法。",
      "evidence": [
        "E03",
        "E10"
      ]
    },
    {
      "id": "C05",
      "title": "25号和29号有稳定的同步关联",
      "summary": "在两者共同出现的1,179天，去除一个共同序列后，日相关中位数约0.506。",
      "state": "已核对的现象",
      "fields": [
        "symbol_id",
        "responder_8",
        "feature_09",
        "feature_10",
        "feature_11"
      ],
      "facts": [
        "两者在本轮满足覆盖门槛的正向关系中，前段、后段都排第一。",
        "相关峰值在同一时刻，尚未看出稳定的领先方向。"
      ],
      "hypothesis": "可以优先把它们当作一组有关联的资产候选继续查。",
      "unknown": "它们各自是谁，以及为什么相关；单个共同序列也不能去除所有共同影响。",
      "evidence": [
        "E04",
        "E05"
      ]
    },
    {
      "id": "C06",
      "title": "暂时没有找到feature_61的日期公式",
      "summary": "前段找到的约20.47日期周期，没有通过固定参数的后段检查。",
      "state": "候选未通过",
      "fields": [
        "feature_61",
        "date_id"
      ],
      "facts": [
        "简单日期趋势、五日期循环也未解释后段变化。"
      ],
      "hypothesis": "保留日期代理的可能性，但不能用现有周期指定真实日历。",
      "unknown": "是否存在更复杂的日期加工，或它其实来自其他日级状态。",
      "evidence": [
        "E06"
      ]
    },
    {
      "id": "C07",
      "title": "还不能说这些数据是哪几年的",
      "summary": "只有日期顺序编号，没有真实年月日。",
      "state": "仍未知",
      "fields": [
        "date_id",
        "time_id"
      ],
      "facts": [
        "日期编号0至1698，共1,699个。",
        "日内有849步或968步两种长度。"
      ],
      "hypothesis": "若每天对应一个完整交易日、每年约250至252天，跨度约6.7至6.8年；这些前提尚未证实。",
      "unknown": "真实起止年月日、是否删日、相邻时间步隔多少秒。",
      "evidence": [
        "E01",
        "E07"
      ]
    },
    {
      "id": "C08",
      "title": "615个分钟点没有认出资产身份",
      "summary": "它只是本地2024年样本的时钟并集，不是国内市场的普遍上限。",
      "state": "适用范围有限",
      "fields": [
        "time_id",
        "symbol_id"
      ],
      "facts": [
        "本地样本最多615个时钟点，比赛后段每天968步。"
      ],
      "hypothesis": "不支持同样一分钟频率、同样交易日、直接改名的简单猜测。",
      "unknown": "比赛是否为期货、海外市场、更细采样或其他加工时钟。",
      "evidence": [
        "E09"
      ]
    },
    {
      "id": "C09",
      "title": "数值范围还不能告诉我们单位",
      "summary": "答案落在-5到5之间，但0.5不表示上涨50%。",
      "state": "已知边界",
      "fields": [
        "responder_0",
        "responder_1",
        "responder_2",
        "responder_3",
        "responder_4",
        "responder_5",
        "responder_6",
        "responder_7",
        "responder_8"
      ],
      "facts": [
        "官方说明目标经过截断，原始数据统计也位于这个范围。"
      ],
      "hypothesis": "可能经过缩放或其他处理，具体过程未知。",
      "unknown": "原始收益、价格单位以及能否逆向还原。",
      "evidence": [
        "E01",
        "E07"
      ]
    },
    {
      "id": "C10",
      "title": "849变968时，字段的空白安排也一起变了",
      "summary": "676→677号日期同时改变了每天的点数和12列的中间空白规律；真实原因仍未知。",
      "state": "已核对的现象",
      "fields": [
        "time_id",
        "date_id"
      ],
      "facts": [
        "前677天每天849点，后1022天每天968点。",
        "切换前后一天都是同样29个标的，分类编码没有变化。",
        "12列的中间共同空白也恰在这个边界消失。"
      ],
      "hypothesis": "可能涉及交易时段、数据来源或生产计算规则的同步变化。没有确认是交易所扩时。",
      "unknown": "实际钟点、固定采样秒数与真实日期。",
      "evidence": [
        "E11",
        "E12"
      ]
    },
    {
      "id": "C11",
      "title": "空60点，不等于市场休息了60分钟",
      "summary": "同一时点，有的字段只空1点，有的空10点，有的空60点；更像重新攒数据来计算。",
      "state": "有线索",
      "fields": [
        "time_id",
        "feature_39",
        "feature_40",
        "feature_41",
        "feature_42",
        "feature_43",
        "feature_44",
        "feature_50",
        "feature_51",
        "feature_52",
        "feature_53",
        "feature_54",
        "feature_55"
      ],
      "facts": [
        "全部前677天，四组字段都在369号点开始共同空1、10、60点；后1022天三档中间空白全部消失。",
        "40/43/51/54只空369；41/44/52/55空369..378；39/42/50/53空369..428。",
        "前段该60点区间共828,120行，其中814,318行feature_50为空而同一行feature_51已有值。",
        "每组三列的其他标签相同，tag_12/13/14与这三档空白对应。"
      ],
      "hypothesis": "同类信息按不同窗口计算，某个时点重启后短窗口先恢复，是较合理的候选。已有值也可能经过填充；不能据此证明市场开门。",
      "unknown": "触发原因、计算公式、真实窗口秒数；是否和午休或某个市场开盘有关。",
      "evidence": [
        "E12",
        "E14"
      ]
    },
    {
      "id": "C12",
      "title": "市场开盘与历史扩时：第一轮还没有匹配成功",
      "summary": "已对照美、港、日、新加坡、印度股票结构及多次历史扩时；没有哪个候选同时解释全部现象。",
      "state": "仍未知",
      "fields": [
        "date_id",
        "time_id",
        "symbol_id"
      ],
      "facts": [
        "Jane Street公开业务覆盖全球ETF、股票、债券和期权；现行官网不证明比赛资产身份。",
        "香港、日本、新加坡的午间休市，不能直接等同于字段分别缺失1、10、60点。",
        "美国Arca的16小时结构接近后段968个一分钟候选点，但前段849及同步重启没有解释。",
        "香港2019夜盘增加120分钟接近119点；整天点数未对齐，且倒推范围还覆盖2017另一轮扩时，训练点数没有对应第二次变化。",
        "对照是有前提的筛选，没有对任何市场给出确认身份或概率排名。"
      ],
      "hypothesis": "继续把全球ETF、关联股票及指数衍生品作为核对范围。香港2019仅保留为扩时增量接近的候选。",
      "unknown": "交易所、开盘钟点、固定频率及年月日。需要另一个独立的品种或日历特征才能确认。",
      "evidence": [
        "E13",
        "E14"
      ]
    },
    {
      "id": "C13",
      "title": "哪些标的值得先追查？总时长接近还没有认出身份",
      "state": "有线索",
      "summary": "恒指类期货的一分钟时段840→960，最值得做针对性核对；但午休与全历史仍不吻合。美股扩展时段要先额外扣60点才接近。常见商品没有通过完整交易日匹配，仍可能是截取或加工后的数据。",
      "facts": [
        "按一分钟且不扣空白，恒指历史净交易840→960分钟，与849→968相差9/8点。9/8点的来源尚无证据。",
        "如果真把前段60点当保留在编号中的午休，待解释净交易应改为789→968；恒指原来的近似就不成立。",
        "恒指日盘09:15到12:00仅165分钟，不能直接对应369号附近的空白；2019扩夜盘也未取消午休。完整连续历史还应包含2017年另一次75分钟扩时。",
        "Nasdaq 2013扩展时段由07:00–20:00改04:00–20:00，即780→960分钟；它只在额外扣掉前段60点后才与789→968相近，且没有固定午休。",
        "香港金属小型期货一分钟915→1035，分别比数据多66/67点；上期所基本金属按30秒约930点，后段仍少38点，120分钟午休也不是60个30秒点。",
        "巴西两库的7/8小时按30秒也能凑到840→960，但官方2020年3月又改回较短常规时段；不能用永久扩时解释后1022天固定长度。",
        "本轮读取139条时段记录，排除4条已发现口径问题的模型，以每条最常见样例做6种单段比较，共810项；未用少数提前收市日来改善匹配。"
      ],
      "hypothesis": "先核对恒指/国企指数相关期货的真实日内活跃位置；美股/ETF扩展时段保留为有额外假设的另一方向。此处是研究次序，不是概率排名，不给任何symbol_id命名。",
      "unknown": "还没有候选同时解释849→968、369起的1/10/60点恢复、整个1699天的历史变化与标的间关系。统一采样窗口和计算规则变化仍需调查；目前也不能排除只取一部分时段的商品期货数据。",
      "fields": [
        "time_id",
        "date_id",
        "symbol_id",
        "feature_39",
        "feature_40",
        "feature_41"
      ],
      "evidence": [
        "E15",
        "E12",
        "E13",
        "E14"
      ]
    }
  ],
  "sources": [
    {
      "id": "E01",
      "title": "全历史字段统计",
      "file": "reports/field_profile_20261101.json",
      "date": "2026-11-01",
      "scope": "全部47,127,338行、92个训练字段",
      "findings": [
        "记录每列的类型、数值范围、平均值和空值数量。",
        "这些统计不能直接告诉我们一列的经济含义。"
      ],
      "sha256": "364b63000c963b88d54baf4f2753a2290fee0b65dcb115010ba8cfbffa98b3b0"
    },
    {
      "id": "E02",
      "title": "日内是否变化：全历史核对",
      "file": "reports/data_structure_inference_20261108/full_daily_constants.json",
      "date": "2026-11-08",
      "scope": "全部50,382个“标的—日期”组合；针对13列",
      "findings": [
        "weight、09/10/11、20/22/23/24/25/28/29/30/61在同一标的当天都不变。",
        "feature_61每天还对所有标的取同一个值；1,699天有1,699个不同值。"
      ],
      "sha256": "5a33eefe028e295026c1354792eae6cac0fdcbeb77836e5bba0462e881293b0b"
    },
    {
      "id": "E03",
      "title": "长短窗口的关系检查",
      "file": "reports/data_structure_inference_20261108/results.json",
      "date": "2026-11-08",
      "scope": "分层抽取30天，共831,278行；前21天拟合，后9天检查",
      "findings": [
        "三组目标都呈现短段向前拼成长段的关系。",
        "这里用到事后才知道的真实答案，不是预测成绩。",
        "日期分层抽样，不代表对全历史每一天都证明了准确窗口。"
      ],
      "sha256": "769eda739591cf3d1f78fa5730e96908e59fb4352150b1f0d57718cd6505b9ec"
    },
    {
      "id": "E04",
      "title": "标的关系：全历史检查",
      "file": "reports/role_relation_mapping_20261108_v001/results.json",
      "date": "2026-11-08",
      "scope": "全部1,699天、741对标的；使用responder_8",
      "findings": [
        "逐日比较标的关系，并控制其他标的平均变化的影响。",
        "25/29共同出现1,179天，日残差相关中位数约0.506。",
        "历史答案之间的关系，不能证明真实品种或可交易收益。"
      ],
      "sha256": "91991ce26307a7a6468ac21ebab4045faf3e2f1b7fc74b680a250d4e564799e2"
    },
    {
      "id": "E05",
      "title": "分类编码与关联标的交叉检查",
      "file": "reports/role_relation_mapping_20261108_v001/symbol_role_lookup.csv",
      "date": "2026-11-08",
      "scope": "39个匿名标的的全历史属性与关系索引",
      "findings": [
        "0/1/9/16/33共用编码11/7/76；3/19共用4/3/11。",
        "25/29的09/10编码相同，11编码不同。",
        "编码对应什么现实分类，仍未公开。"
      ],
      "sha256": "1225454dcfb8fc534e569b3151c26497486357df81ad9b69cbb5098313dd2b17"
    },
    {
      "id": "E06",
      "title": "日期线索的后段检查",
      "file": "reports/role_relation_mapping_20261108_v001/feature61_spectral_check.json",
      "date": "2026-11-08",
      "scope": "前1,190天寻找周期；后509天固定参数检查",
      "findings": [
        "前段约20.47个日期的周期，固定参数后无法解释后段变化。",
        "没有据此找到真实日历，也不能排除更复杂的日期加工。"
      ],
      "sha256": "04f9220bcbaefd530ea63ad4184f1f406ef54190a93df110be01fba65fd35e5a"
    },
    {
      "id": "E07",
      "title": "官方字段说明的本地核对记录",
      "file": "reports/数据字段说明_20261101.txt",
      "date": "2026-11-01",
      "scope": "本地官方文件、原始CSV与评估接口的字段说明",
      "findings": [
        "date_id/time_id提供先后顺序，真实年月日和相邻时间间隔未公开。",
        "目标答案截断在-5到5，不能直接解释为涨跌百分比。",
        "新一天开始时提供前一日的目标答案。"
      ],
      "sha256": "9a7c56f9dacedb75daa8cc4ed6fcbaeeb03e9b1679feb00d47dbf871b811b7f2",
      "url": "https://www.kaggle.com/competitions/jane-street-real-time-market-data-forecasting/data"
    },
    {
      "id": "E08",
      "title": "日内字段的样本观察",
      "file": "reports/data_structure_inference_20261108/feature_roles.csv",
      "date": "2026-11-08",
      "scope": "30个日期、831,278行；只描述样本中的变化方式",
      "findings": [
        "按同一天同一标的，以及同一天同一时刻，检查各特征是否重复取相同值。",
        "样本中的变化方式不是全历史证明，也不能用来给指标起名。"
      ],
      "sha256": "feed01d2462d3783c9a192f861ff5d7d3c56d116fafeb90fc43f0793a60af6c9"
    },
    {
      "id": "E09",
      "title": "国内分钟时钟的本地对照",
      "file": "reports/cta_comparison_20261101_v001/比对结论.txt",
      "date": "2026-11-01",
      "scope": "本地2024年76个国内期货品种；独立时钟对照",
      "findings": [
        "本地样本的时钟并集最多615点。",
        "只反对同样分钟频率、同样交易日、直接改名的简单猜测；不是国内期货的普遍上限。"
      ],
      "sha256": "74faa1151ffab47a713a66e4b9d8ac3cb40f13b37ec34aeef3268b987c732980"
    },
    {
      "id": "E10",
      "title": "匿名标签的原始分组",
      "file": "data/raw/responders.csv",
      "date": "原始文件",
      "scope": "9个目标、5个匿名布尔标签",
      "findings": [
        "文件内的组合允许把9个目标排成3行3列。",
        "标签没有经济含义字典；不表示已经确认三种具体收益定义。"
      ],
      "sha256": "1640d47c6ca937a7a0e131fed0c740f2348a7b5cb48804634b99ed04ade4b8e4"
    },
    {
      "id": "E11",
      "title": "849→968切换前后的原始数据核对",
      "file": "reports/clock_break_20261108_v001/results.json",
      "date": "2026-11-08",
      "scope": "637..676与677..716，各40天，共2,060,787行；分布比较固定22个共同标的",
      "findings": [
        "切换前后一天标的集合、分类编码相同。",
        "每日点数新增119；这不是实际增加119分钟的证明。",
        "日内形状的简单对齐属于探索，不能据此还原钟点。"
      ],
      "sha256": "f10eadcefe83dbff695c2779f8f11ed70f3f7e600b9394e4f8b0dc7e98c0e502"
    },
    {
      "id": "E12",
      "title": "12列共同空白：全历史逐日检查",
      "file": "reports/clock_break_20261108_v001/session_reset_summary.json",
      "date": "2026-11-08",
      "scope": "全部1,699天、所有标的、12列；空白仅指该点所有标的均为空",
      "findings": [
        "前677天，每天同一内部位置出现1/10/60点三档共同空白；后1022天全部消失。",
        "四组三列的匿名标签也与三档对应。",
        "同一行短档已有值而长档为空，不能把整段解释为所有市场数据缺失。",
        "少数日初例外与零星缺失保留在原件。"
      ],
      "sha256": "c3800953d29b99afbc9bb4ae79b14f19ea6d8de5793a533b04b3ea266b903e25"
    },
    {
      "id": "E13",
      "title": "历史交易时长变化：候选与反证",
      "file": "reports/clock_break_20261108_v001/market_hour_candidates.json",
      "date": "2026-11-08",
      "scope": "HKEX、JPX、Eurex、Nasdaq原始资料及主办方原帖索引；不代表穷尽所有事件",
      "findings": [
        "核对香港2011/2017/2019、日本大阪2016、Eurex2018、Nasdaq2013等事件。",
        "香港2019在增量上接近，但整天点数及2017另一轮扩时没有同时对上。",
        "主办方答复只读到原帖搜索索引摘录，未取得完整原帖。",
        "没有确认真实年份或市场。"
      ],
      "sha256": "fa4931bc72ca0bf19dd773cc4e21d7ca2b7b25b52b412d251993bd17e6f76272",
      "links": [
        {
          "title": "港交所：夜盘由凌晨1点延长至3点",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Circulars-and-Notices/Participant-and-Members-Circulars/HKFE/2019/MO_DT_080_19_e.pdf"
        },
        {
          "title": "港交所：2017年夜盘由23:45延长至01:00",
          "url": "https://www.hkex.com.hk/News/Market-Communications/2017/171012news?sc_lang=en"
        },
        {
          "title": "港交所：2011年第一阶段交易时间延长",
          "url": "https://www.hkex.com.hk/News/Regulatory-Announcements/2011/1101243news?sc_lang=en"
        },
        {
          "title": "大阪交易所：2016年夜盘延长至05:30",
          "url": "https://www.jpx.co.jp/english/news/20170719-01.html"
        },
        {
          "title": "Eurex：2018年扩展至亚洲时段",
          "url": "https://www.eurex.com/resource/blob/1412768/e61a2c41d65ad165af7909002223b943/data/er18088e.pdf"
        },
        {
          "title": "纳斯达克：2013年盘前从07:00提前到04:00",
          "url": "https://www.nasdaqtrader.com/TraderNews.aspx?id=ETA2013-21"
        },
        {
          "title": "比赛主办方关于time_id时钟变化的答复",
          "url": "https://www.kaggle.com/competitions/jane-street-real-time-market-data-forecasting/discussion/540436"
        }
      ]
    },
    {
      "id": "E14",
      "title": "缺失时段与市场开盘：第一轮对照",
      "file": "reports/clock_break_20261108_v001/opening_match_candidates.json",
      "date": "2026-11-08",
      "scope": "美、港、日、新加坡、印度股票时段结构；30秒/1分钟均匀采样仅作候选假设",
      "findings": [
        "全球业务说明只用于选择核对范围，不作为比赛品种身份。",
        "常规股票、午休和延长时段均未同时解释点数与三档恢复规律。",
        "对照当前与历史规则分开；日本2024年11月之前用15:00收市。",
        "没有确认开盘钟点、固定采样秒数或真实日期；也没有排除这些市场的所有产品。"
      ],
      "sha256": "34021e6b4f2cf68a260c76b564863a31b7813c8da4c07f16c46cc7d4143e7ea3",
      "links": [
        {
          "title": "Jane Street公开业务概览",
          "url": "https://www.janestreet.com/what-we-do/overview/"
        },
        {
          "title": "Jane Street客户业务",
          "url": "https://www.janestreet.com/what-we-do/client-offering/"
        },
        {
          "title": "NYSE交易时段",
          "url": "https://www.nyse.com/trade/hours-calendars"
        },
        {
          "title": "HKEX证券交易时段",
          "url": "https://www.hkex.com.hk/Services/Trading-hours-and-Severe-Weather-Arrangements/Trading-Hours/Securities-Market?sc_lang=en"
        },
        {
          "title": "JPX股票交易时段",
          "url": "https://www.jpx.co.jp/english/equities/trading/domestic/01.html"
        },
        {
          "title": "JPX2024年延长交易的原通告",
          "url": "https://www.jpx.co.jp/english/corporate/news/news-releases/1030/20230920-01.html"
        },
        {
          "title": "SGX8.2.1交易时段通知",
          "url": "https://rulebook.sgx.com/rulebook/regulatory-notice-821-trading-hours-market-phases-application-market-phases-and-principles"
        },
        {
          "title": "NSE市场时段",
          "url": "https://www.nseindia.com/static/market-data/market-timings"
        }
      ]
    },
    {
      "id": "E15",
      "title": "全球时段候选初筛与口径复核",
      "date": "2026-11-08",
      "scope": "139条时段记录，6种频率/点数情景的810项有效单段比较，7组候选解释；复用既有全历史空白检查，未新增原始行情全量扫描。",
      "file": "reports/instrument_candidates_20261108_v001/screen.json",
      "sha256": "c0a8e2aff3cb4d64d720b8f094e013128f8744469db35fe54701f7e1d2929a71",
      "findings": [
        "没有候选同时通过总时长、空白位置与完整历史核对；恒指类时钟值得针对性检查但不是身份确认。",
        "Nasdaq的近似依赖扣除60点，巴西的近似受到随后改时的反证；不能把多余点或缺失字段随意解释成交易阶段。",
        "XSES未扣午休、XKLS午休口径待核、BMF/BVMF历史模型不完整，均保留原始库值并暂停点数排名。",
        "所有symbol真实身份仍未知；单段排序是差值，不是属于某市场的概率。"
      ],
      "links": [
        {
          "title": "港交所恒指/国企指数及相关小型股指期货 · 核对资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Circulars-and-Notices/Participant-and-Members-Circulars/HKFE/2019/MO_DT_080_19_e.pdf"
        },
        {
          "title": "港交所恒指/国企指数及相关小型股指期货 · 核对资料",
          "url": "https://www.hkex.com.hk/News/Market-Communications/2017/171012news?sc_lang=en"
        },
        {
          "title": "美国股票/ETF扩展交易，特别是Nasdaq 2013规则 · 核对资料",
          "url": "https://www.nasdaqtrader.com/TraderNews.aspx?id=ETA2013-21"
        },
        {
          "title": "香港伦敦金属小型/铁矿石期货 · 核对资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/HKFE/Rule-Update_Rules-Regulations-and-Procedures-of-the-Futures-Exchange/56_19_HKFE_Trading_Hours_Extension_3am_e_markup.pdf"
        },
        {
          "title": "上期所铜铝等基本金属 · 核对资料",
          "url": "https://www.shfe.com.cn/services/calenderandholidays/tradinghours/"
        },
        {
          "title": "印度MCX天然气等非农商品 · 核对资料",
          "url": "https://www.jainam.in/wp-content/uploads/2024/08/circular-497-2024.pdf"
        },
        {
          "title": "COMEX标准黄金，类似23小时电子盘商品 · 核对资料",
          "url": "https://www.cmegroup.com/content/dam/cmegroup/market-regulation/files/gold-futures-and-options-fact-card.pdf"
        },
        {
          "title": "巴西B3股票：两套日历凑出的表面吻合 · 核对资料",
          "url": "https://www.b3.com.br/data/files/EC/B1/BD/2D/A8B4D6107C4D14D6AC094EA8/OC%20070-2019%20Novos%20Hor%C3%A1rios%20de%20Negocia%C3%A7%C3%A3o%20-%20Segmento%20BMF%20e%20Bovespa%20%28ING%29.pdf"
        },
        {
          "title": "巴西B3股票：两套日历凑出的表面吻合 · 核对资料",
          "url": "https://ww69.itau.com.br/fileserver/relatorios/b3_oficio_circular_06022020.pdf"
        }
      ]
    }
  ],
  "symbols": [
    {
      "id": 0,
      "firstDate": 1,
      "lastDate": 1698,
      "days": 1592,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 1,
      "fitDays": 1098,
      "fitRelation": 0.2797011857672883,
      "laterDays": 485,
      "laterRelation": 0.4543018994457276,
      "identity": "真实名称未知"
    },
    {
      "id": 1,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1678,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 0,
      "fitDays": 1098,
      "fitRelation": 0.2797011857672883,
      "laterDays": 485,
      "laterRelation": 0.4543018994457276,
      "identity": "真实名称未知"
    },
    {
      "id": 2,
      "firstDate": 1,
      "lastDate": 1698,
      "days": 1606,
      "codes": {
        "feature_09": [
          81
        ],
        "feature_10": [
          2
        ],
        "feature_11": [
          59
        ]
      },
      "neighbor": 30,
      "fitDays": 1028,
      "fitRelation": 0.06714769899200534,
      "laterDays": 500,
      "laterRelation": 0.3041544750582893,
      "identity": "真实名称未知"
    },
    {
      "id": 3,
      "firstDate": 2,
      "lastDate": 1698,
      "days": 1565,
      "codes": {
        "feature_09": [
          4
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          11
        ]
      },
      "neighbor": 19,
      "fitDays": 1063,
      "fitRelation": 0.24163011880637025,
      "laterDays": 495,
      "laterRelation": 0.40649000994281753,
      "identity": "真实名称未知"
    },
    {
      "id": 4,
      "firstDate": 952,
      "lastDate": 1698,
      "days": 706,
      "codes": {
        "feature_09": [
          15
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          9
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 5,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1116,
      "codes": {
        "feature_09": [
          2
        ],
        "feature_10": [
          10
        ],
        "feature_11": [
          171
        ]
      },
      "neighbor": 19,
      "fitDays": 616,
      "fitRelation": 0.13762728792591866,
      "laterDays": 492,
      "laterRelation": 0.03492842154389701,
      "identity": "真实名称未知"
    },
    {
      "id": 6,
      "firstDate": 1063,
      "lastDate": 1698,
      "days": 632,
      "codes": {
        "feature_09": [
          12
        ],
        "feature_10": [
          4
        ],
        "feature_11": [
          34,
          48
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 7,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1680,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 1,
      "fitDays": 1182,
      "fitRelation": 0.12164817325415361,
      "laterDays": 484,
      "laterRelation": 0.39598626548977156,
      "identity": "真实名称未知"
    },
    {
      "id": 8,
      "firstDate": 4,
      "lastDate": 1698,
      "days": 1523,
      "codes": {
        "feature_09": [
          15
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          62
        ]
      },
      "neighbor": 13,
      "fitDays": 995,
      "fitRelation": 0.08682349533639246,
      "laterDays": 489,
      "laterRelation": 0.09503267239455514,
      "identity": "真实名称未知"
    },
    {
      "id": 9,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1658,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 33,
      "fitDays": 1145,
      "fitRelation": 0.21071410832565052,
      "laterDays": 476,
      "laterRelation": 0.4849741999574663,
      "identity": "真实名称未知"
    },
    {
      "id": 10,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1643,
      "codes": {
        "feature_09": [
          42
        ],
        "feature_10": [
          5
        ],
        "feature_11": [
          150
        ]
      },
      "neighbor": 34,
      "fitDays": 1070,
      "fitRelation": 0.08848845056219663,
      "laterDays": 502,
      "laterRelation": 0.23287545444692248,
      "identity": "真实名称未知"
    },
    {
      "id": 11,
      "firstDate": 13,
      "lastDate": 1698,
      "days": 1578,
      "codes": {
        "feature_09": [
          46
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          261
        ]
      },
      "neighbor": 8,
      "fitDays": 935,
      "fitRelation": 0.0492016248691158,
      "laterDays": 499,
      "laterRelation": 0.0797350321205544,
      "identity": "真实名称未知"
    },
    {
      "id": 12,
      "firstDate": 3,
      "lastDate": 1698,
      "days": 1643,
      "codes": {
        "feature_09": [
          70
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          410
        ]
      },
      "neighbor": 35,
      "fitDays": 457,
      "fitRelation": 0.10615448286375849,
      "laterDays": 471,
      "laterRelation": 0.049302290176304685,
      "identity": "真实名称未知"
    },
    {
      "id": 13,
      "firstDate": 1,
      "lastDate": 1698,
      "days": 1636,
      "codes": {
        "feature_09": [
          50
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          522
        ]
      },
      "neighbor": 38,
      "fitDays": 1058,
      "fitRelation": 0.1082387483400899,
      "laterDays": 490,
      "laterRelation": 0.43950263173997905,
      "identity": "真实名称未知"
    },
    {
      "id": 14,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1576,
      "codes": {
        "feature_09": [
          44
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          16
        ]
      },
      "neighbor": 15,
      "fitDays": 950,
      "fitRelation": 0.069598337472868,
      "laterDays": 501,
      "laterRelation": 0.07172773592353185,
      "identity": "真实名称未知"
    },
    {
      "id": 15,
      "firstDate": 1,
      "lastDate": 1698,
      "days": 1469,
      "codes": {
        "feature_09": [
          9
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          25
        ]
      },
      "neighbor": 28,
      "fitDays": 462,
      "fitRelation": 0.12047599322730043,
      "laterDays": 501,
      "laterRelation": 0.2570906085222661,
      "identity": "真实名称未知"
    },
    {
      "id": 16,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1672,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 1,
      "fitDays": 1182,
      "fitRelation": 0.19240663500611702,
      "laterDays": 480,
      "laterRelation": 0.3853715259885726,
      "identity": "真实名称未知"
    },
    {
      "id": 17,
      "firstDate": 4,
      "lastDate": 1698,
      "days": 1594,
      "codes": {
        "feature_09": [
          64
        ],
        "feature_10": [
          6
        ],
        "feature_11": [
          376
        ]
      },
      "neighbor": 8,
      "fitDays": 953,
      "fitRelation": 0.056916637810518214,
      "laterDays": 494,
      "laterRelation": 0.11485666941874394,
      "identity": "真实名称未知"
    },
    {
      "id": 18,
      "firstDate": 1063,
      "lastDate": 1698,
      "days": 578,
      "codes": {
        "feature_09": [
          15
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          66
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 19,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1684,
      "codes": {
        "feature_09": [
          4
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          11
        ]
      },
      "neighbor": 3,
      "fitDays": 1063,
      "fitRelation": 0.24163011880637025,
      "laterDays": 495,
      "laterRelation": 0.40649000994281753,
      "identity": "真实名称未知"
    },
    {
      "id": 20,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1207,
      "codes": {
        "feature_09": [
          30,
          42
        ],
        "feature_10": [
          5,
          10
        ],
        "feature_11": [
          50,
          150
        ]
      },
      "neighbor": 2,
      "fitDays": 702,
      "fitRelation": 0.0550714285016804,
      "laterDays": 499,
      "laterRelation": 0.0378727202658517,
      "identity": "真实名称未知"
    },
    {
      "id": 21,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 994,
      "codes": {
        "feature_09": [
          34
        ],
        "feature_10": [
          4
        ],
        "feature_11": [
          214
        ]
      },
      "neighbor": 23,
      "fitDays": 426,
      "fitRelation": 0.07611432405274968,
      "laterDays": 500,
      "laterRelation": 0.17794884145673337,
      "identity": "真实名称未知"
    },
    {
      "id": 22,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1203,
      "codes": {
        "feature_09": [
          30
        ],
        "feature_10": [
          10
        ],
        "feature_11": [
          13
        ]
      },
      "neighbor": 3,
      "fitDays": 684,
      "fitRelation": 0.15234813088048343,
      "laterDays": 495,
      "laterRelation": 0.2877508420586633,
      "identity": "真实名称未知"
    },
    {
      "id": 23,
      "firstDate": 487,
      "lastDate": 1698,
      "days": 1140,
      "codes": {
        "feature_09": [
          34
        ],
        "feature_10": [
          4
        ],
        "feature_11": [
          214
        ]
      },
      "neighbor": 37,
      "fitDays": 449,
      "fitRelation": 0.10384513038825113,
      "laterDays": 498,
      "laterRelation": 0.21260288708725028,
      "identity": "真实名称未知"
    },
    {
      "id": 24,
      "firstDate": 952,
      "lastDate": 1698,
      "days": 730,
      "codes": {
        "feature_09": [
          14
        ],
        "feature_10": [
          10
        ],
        "feature_11": [
          40
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 25,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1187,
      "codes": {
        "feature_09": [
          57
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          230
        ]
      },
      "neighbor": 29,
      "fitDays": 697,
      "fitRelation": 0.4539265257414125,
      "laterDays": 482,
      "laterRelation": 0.5875316213199113,
      "identity": "真实名称未知"
    },
    {
      "id": 26,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1209,
      "codes": {
        "feature_09": [
          26
        ],
        "feature_10": [
          12
        ],
        "feature_11": [
          158,
          159
        ]
      },
      "neighbor": 37,
      "fitDays": 470,
      "fitRelation": 0.038680021940087586,
      "laterDays": 499,
      "laterRelation": 0.04000179922957831,
      "identity": "真实名称未知"
    },
    {
      "id": 27,
      "firstDate": 713,
      "lastDate": 1698,
      "days": 890,
      "codes": {
        "feature_09": [
          15,
          82
        ],
        "feature_10": [
          1,
          3
        ],
        "feature_11": [
          63,
          539
        ]
      },
      "neighbor": 29,
      "fitDays": 414,
      "fitRelation": 0.062155937757920554,
      "laterDays": 458,
      "laterRelation": 0.004285164241042853,
      "identity": "真实名称未知"
    },
    {
      "id": 28,
      "firstDate": 713,
      "lastDate": 1698,
      "days": 968,
      "codes": {
        "feature_09": [
          9
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          25
        ]
      },
      "neighbor": 15,
      "fitDays": 462,
      "fitRelation": 0.12047599322730043,
      "laterDays": 501,
      "laterRelation": 0.2570906085222661,
      "identity": "真实名称未知"
    },
    {
      "id": 29,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1189,
      "codes": {
        "feature_09": [
          57
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          336
        ]
      },
      "neighbor": 25,
      "fitDays": 697,
      "fitRelation": 0.4539265257414125,
      "laterDays": 482,
      "laterRelation": 0.5875316213199113,
      "identity": "真实名称未知"
    },
    {
      "id": 30,
      "firstDate": 20,
      "lastDate": 1698,
      "days": 1541,
      "codes": {
        "feature_09": [
          81
        ],
        "feature_10": [
          2
        ],
        "feature_11": [
          534
        ]
      },
      "neighbor": 2,
      "fitDays": 1028,
      "fitRelation": 0.06714769899200534,
      "laterDays": 500,
      "laterRelation": 0.3041544750582893,
      "identity": "真实名称未知"
    },
    {
      "id": 31,
      "firstDate": 952,
      "lastDate": 1698,
      "days": 740,
      "codes": {
        "feature_09": [
          44
        ],
        "feature_10": [
          3
        ],
        "feature_11": [
          24
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 32,
      "firstDate": 1063,
      "lastDate": 1698,
      "days": 615,
      "codes": {
        "feature_09": [
          26
        ],
        "feature_10": [
          12
        ],
        "feature_11": [
          158
        ]
      },
      "neighbor": null,
      "fitDays": null,
      "fitRelation": null,
      "laterDays": null,
      "laterRelation": null,
      "identity": "真实名称未知"
    },
    {
      "id": 33,
      "firstDate": 0,
      "lastDate": 1698,
      "days": 1637,
      "codes": {
        "feature_09": [
          11
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76
        ]
      },
      "neighbor": 9,
      "fitDays": 1145,
      "fitRelation": 0.21071410832565052,
      "laterDays": 476,
      "laterRelation": 0.4849741999574663,
      "identity": "真实名称未知"
    },
    {
      "id": 34,
      "firstDate": 8,
      "lastDate": 1698,
      "days": 1584,
      "codes": {
        "feature_09": [
          42
        ],
        "feature_10": [
          5
        ],
        "feature_11": [
          150
        ]
      },
      "neighbor": 10,
      "fitDays": 1070,
      "fitRelation": 0.08848845056219663,
      "laterDays": 502,
      "laterRelation": 0.23287545444692248,
      "identity": "真实名称未知"
    },
    {
      "id": 35,
      "firstDate": 713,
      "lastDate": 1698,
      "days": 942,
      "codes": {
        "feature_09": [
          11,
          25
        ],
        "feature_10": [
          7
        ],
        "feature_11": [
          76,
          195
        ]
      },
      "neighbor": 12,
      "fitDays": 457,
      "fitRelation": 0.10615448286375849,
      "laterDays": 471,
      "laterRelation": 0.049302290176304685,
      "identity": "真实名称未知"
    },
    {
      "id": 36,
      "firstDate": 484,
      "lastDate": 1698,
      "days": 1201,
      "codes": {
        "feature_09": [
          26,
          49,
          68
        ],
        "feature_10": [
          6,
          7,
          12
        ],
        "feature_11": [
          158,
          297,
          388
        ]
      },
      "neighbor": 12,
      "fitDays": 694,
      "fitRelation": 0.0823151800801554,
      "laterDays": 493,
      "laterRelation": 0.07857011645841006,
      "identity": "真实名称未知"
    },
    {
      "id": 37,
      "firstDate": 713,
      "lastDate": 1698,
      "days": 974,
      "codes": {
        "feature_09": [
          34
        ],
        "feature_10": [
          4
        ],
        "feature_11": [
          214
        ]
      },
      "neighbor": 23,
      "fitDays": 449,
      "fitRelation": 0.10384513038825113,
      "laterDays": 498,
      "laterRelation": 0.21260288708725028,
      "identity": "真实名称未知"
    },
    {
      "id": 38,
      "firstDate": 1,
      "lastDate": 1698,
      "days": 1602,
      "codes": {
        "feature_09": [
          50
        ],
        "feature_10": [
          1
        ],
        "feature_11": [
          522
        ]
      },
      "neighbor": 13,
      "fitDays": 1058,
      "fitRelation": 0.1082387483400899,
      "laterDays": 490,
      "laterRelation": 0.43950263173997905,
      "identity": "真实名称未知"
    }
  ],
  "pairs": [
    {
      "symbol_a": 25,
      "symbol_b": 29,
      "period": "fit",
      "days": 697,
      "first_date": 484,
      "last_date": 1189,
      "raw_median": 0.4793169827446417,
      "raw_time_weighted_mean": 0.48230273388408673,
      "residual_median": 0.4539265257414125,
      "residual_q25": 0.37793301625172904,
      "residual_q75": 0.5326259235178553,
      "residual_positive_days_share": 1.0,
      "late_rank": 1,
      "late_days": 482,
      "late_raw_median": 0.6108663748313499,
      "late_residual_median": 0.5875316213199113,
      "late_positive_share": 0.995850622406639
    },
    {
      "symbol_a": 0,
      "symbol_b": 1,
      "period": "fit",
      "days": 1098,
      "first_date": 1,
      "last_date": 1189,
      "raw_median": 0.3604954181720762,
      "raw_time_weighted_mean": 0.36400939228011997,
      "residual_median": 0.2797011857672883,
      "residual_q25": 0.2051068153505236,
      "residual_q75": 0.3505196586690135,
      "residual_positive_days_share": 0.9981785063752276,
      "late_rank": 5,
      "late_days": 485,
      "late_raw_median": 0.5094999682646051,
      "late_residual_median": 0.4543018994457276,
      "late_positive_share": 0.9979381443298969
    },
    {
      "symbol_a": 3,
      "symbol_b": 19,
      "period": "fit",
      "days": 1063,
      "first_date": 2,
      "last_date": 1189,
      "raw_median": 0.2971936743367584,
      "raw_time_weighted_mean": 0.3265274187351769,
      "residual_median": 0.24163011880637025,
      "residual_q25": 0.15686162313416324,
      "residual_q75": 0.37311721956999366,
      "residual_positive_days_share": 0.9830667920978363,
      "late_rank": 8,
      "late_days": 495,
      "late_raw_median": 0.44776027849991135,
      "late_residual_median": 0.40649000994281753,
      "late_positive_share": 1.0
    },
    {
      "symbol_a": 9,
      "symbol_b": 33,
      "period": "fit",
      "days": 1145,
      "first_date": 0,
      "last_date": 1189,
      "raw_median": 0.31298322915394106,
      "raw_time_weighted_mean": 0.3181308350696396,
      "residual_median": 0.21071410832565052,
      "residual_q25": 0.13868058993799404,
      "residual_q75": 0.29245613760755196,
      "residual_positive_days_share": 0.9816593886462882,
      "late_rank": 3,
      "late_days": 476,
      "late_raw_median": 0.5454535951496342,
      "late_residual_median": 0.4849741999574663,
      "late_positive_share": 1.0
    },
    {
      "symbol_a": 1,
      "symbol_b": 16,
      "period": "fit",
      "days": 1182,
      "first_date": 0,
      "last_date": 1189,
      "raw_median": 0.29159944939525806,
      "raw_time_weighted_mean": 0.2934964609893853,
      "residual_median": 0.19240663500611702,
      "residual_q25": 0.1258724390795721,
      "residual_q75": 0.2674890336215122,
      "residual_positive_days_share": 0.9813874788494078,
      "late_rank": 10,
      "late_days": 480,
      "late_raw_median": 0.4516176309906183,
      "late_residual_median": 0.3853715259885726,
      "late_positive_share": 0.9916666666666667
    },
    {
      "symbol_a": 1,
      "symbol_b": 33,
      "period": "fit",
      "days": 1150,
      "first_date": 0,
      "last_date": 1189,
      "raw_median": 0.2938542020952156,
      "raw_time_weighted_mean": 0.29527948679412924,
      "residual_median": 0.18719935163371024,
      "residual_q25": 0.12174212858186255,
      "residual_q75": 0.2666634225564098,
      "residual_positive_days_share": 0.9791304347826087,
      "late_rank": 18,
      "late_days": 477,
      "late_raw_median": 0.3785736229382035,
      "late_residual_median": 0.3147844831249551,
      "late_positive_share": 0.9937106918238994
    },
    {
      "symbol_a": 1,
      "symbol_b": 9,
      "period": "fit",
      "days": 1178,
      "first_date": 0,
      "last_date": 1189,
      "raw_median": 0.2816725689785542,
      "raw_time_weighted_mean": 0.2798690441603058,
      "residual_median": 0.1844619641249362,
      "residual_q25": 0.1205443371231458,
      "residual_q75": 0.2564211385335047,
      "residual_positive_days_share": 0.9804753820033956,
      "late_rank": 20,
      "late_days": 472,
      "late_raw_median": 0.37519259355793216,
      "late_residual_median": 0.29422648374037785,
      "late_positive_share": 0.9915254237288136
    },
    {
      "symbol_a": 0,
      "symbol_b": 16,
      "period": "fit",
      "days": 1097,
      "first_date": 1,
      "last_date": 1189,
      "raw_median": 0.2814983709189028,
      "raw_time_weighted_mean": 0.28838834564084204,
      "residual_median": 0.1820127057470213,
      "residual_q25": 0.11265902020011279,
      "residual_q75": 0.261220397371785,
      "residual_positive_days_share": 0.9790337283500455,
      "late_rank": 4,
      "late_days": 483,
      "late_raw_median": 0.5254863014922088,
      "late_residual_median": 0.4755000641446405,
      "late_positive_share": 1.0
    },
    {
      "symbol_a": 16,
      "symbol_b": 33,
      "period": "fit",
      "days": 1150,
      "first_date": 0,
      "last_date": 1189,
      "raw_median": 0.2813173192492764,
      "raw_time_weighted_mean": 0.2819609713977032,
      "residual_median": 0.16958620355403836,
      "residual_q25": 0.10960435580925816,
      "residual_q75": 0.23872750583096483,
      "residual_positive_days_share": 0.9739130434782609,
      "late_rank": 13,
      "late_days": 472,
      "late_raw_median": 0.4010015262822832,
      "late_residual_median": 0.32853105435717495,
      "late_positive_share": 1.0
    },
    {
      "symbol_a": 0,
      "symbol_b": 33,
      "period": "fit",
      "days": 1068,
      "first_date": 1,
      "last_date": 1189,
      "raw_median": 0.27098316452528126,
      "raw_time_weighted_mean": 0.272392431013267,
      "residual_median": 0.16350727246792648,
      "residual_q25": 0.09758161810273788,
      "residual_q75": 0.2260058030063218,
      "residual_positive_days_share": 0.9653558052434457,
      "late_rank": 11,
      "late_days": 478,
      "late_raw_median": 0.4140355016740153,
      "late_residual_median": 0.34634874750257305,
      "late_positive_share": 0.997907949790795
    },
    {
      "symbol_a": 3,
      "symbol_b": 22,
      "period": "fit",
      "days": 684,
      "first_date": 484,
      "last_date": 1189,
      "raw_median": 0.23783041286637363,
      "raw_time_weighted_mean": 0.2506157895936698,
      "residual_median": 0.15234813088048343,
      "residual_q25": 0.027785376042661757,
      "residual_q75": 0.38272100681770826,
      "residual_positive_days_share": 0.8128654970760234,
      "late_rank": 21,
      "late_days": 495,
      "late_raw_median": 0.34708347113674043,
      "late_residual_median": 0.2877508420586633,
      "late_positive_share": 0.9959595959595959
    },
    {
      "symbol_a": 19,
      "symbol_b": 22,
      "period": "fit",
      "days": 697,
      "first_date": 484,
      "last_date": 1189,
      "raw_median": 0.26419636077538683,
      "raw_time_weighted_mean": 0.2539574758579448,
      "residual_median": 0.15041184471950025,
      "residual_q25": 0.008032316508246824,
      "residual_q75": 0.3700962892224287,
      "residual_positive_days_share": 0.7661406025824964,
      "late_rank": 15,
      "late_days": 500,
      "late_raw_median": 0.37406273792885797,
      "late_residual_median": 0.3204604534413482,
      "late_positive_share": 0.988
    }
  ],
  "questions": [
    {
      "title": "这些标的到底是谁？",
      "text": "股票、期货、ETF还是其他产品；39个真实名字目前都未知。",
      "fields": [
        "symbol_id"
      ],
      "next": "优先追查25/29及类别编码相同的几组标的。"
    },
    {
      "title": "对应真实的什么时候？",
      "text": "起止年月日、每步秒数、交易时段都还不知道。",
      "fields": [
        "date_id",
        "time_id",
        "feature_61"
      ],
      "next": "寻找能在独立日期重复核对的日历线索。"
    },
    {
      "title": "每一列具体描述什么？",
      "text": "多数匿名输入尚未对应价格、活跃程度、盘口或具体指标。",
      "fields": [
        "feature_20",
        "feature_61"
      ],
      "next": "先确认变化层级，再比较候选含义；没有证据就保留未知。"
    },
    {
      "title": "9个参考答案怎么计算？",
      "text": "有短、中、长关系线索，但三套答案的差别与原始单位仍未知。",
      "fields": [
        "responder_6",
        "responder_8",
        "responder_7"
      ],
      "next": "检查三套答案之间是否有稳定的差值或其他加工关系。"
    },
    {
      "title": "为什么有些记录算得更重？",
      "text": "weight用途已知，但权重的计算来源未知。",
      "fields": [
        "weight"
      ],
      "next": "比较与每日特征的关系，不把相关直接当成定义。"
    },
    {
      "title": "有关联的标的，为什么有关联？",
      "text": "同步变化可能来自共同产品、市场或其他因素，身份与原因仍未确认。",
      "fields": [
        "symbol_id",
        "feature_09",
        "feature_10",
        "feature_11"
      ],
      "next": "把分类属性与关系网络交叉核对，再寻找外部身份线索。"
    }
  ],
  "history": [
    {
      "date": "2026-11-08",
      "revision": "2026-11-08.4",
      "title": "根据全球时段筛选标的候选，保留反证",
      "text": "比较两段点数、午休位置与实际扩时历史；新增C13。恒指类时钟值得追查但不确认身份；美股需额外假设，商品未匹配完整日。另标注4条开源日历的午休或历史口径问题，暂停其点数排名。"
    },
    {
      "date": "2026-11-08",
      "revision": "2026-11-08.3",
      "title": "新增全球市场时段对照",
      "text": "新增主要市场开市时段查询，区分开源2024样例、官方历史资料与现行规则；支持按地区、资产、休息结构筛选，试算不同采样频率下的849/968点匹配。保存来源与提取失败，不把时长接近当成身份确认。"
    },
    {
      "date": "2026-11-08",
      "title": "新增时钟切换、三档空白与市场开盘对照",
      "text": "全历史核对12列的1/10/60点恢复规律；更新14个字段。保留市场匹配未成功及历史扩时的反证。",
      "revision": "2026-11-08.2"
    },
    {
      "date": "2026-11-08",
      "title": "建立逐字段研究手册",
      "text": "整理103个字段、39个标的、9条结论及10份证据；保留事实、推测与未知的区别。",
      "revision": "2026-11-08.1"
    },
    {
      "date": "2026-11-08",
      "title": "补做全历史标的关系与日级常量检查",
      "text": "核对日内固定字段、741对标的关系；保留feature_61日期候选未通过的记录。",
      "revision": "研究记录"
    },
    {
      "date": "2026-11-01",
      "title": "完成原始数据核验与第一轮探索",
      "text": "归档字段统计、匿名标签分组、窗口关系与本地时钟对照。",
      "revision": "研究记录"
    }
  ],
  "glossary": [
    {
      "word": "字段",
      "meaning": "表里的一列。"
    },
    {
      "word": "标的",
      "meaning": "一个被观察的对象；现实里可能是某种金融产品。"
    },
    {
      "word": "观测步",
      "meaning": "往后看一次记录。实际隔了几秒，我们还不知道。"
    },
    {
      "word": "相关",
      "meaning": "两个数字经常一起变化；不表示谁导致了谁。"
    },
    {
      "word": "中位数",
      "meaning": "把每天的结果从小到大排好，取中间那个。"
    },
    {
      "word": "后段检查",
      "meaning": "前面找到的规律，拿后面的数据再看看还成立不成立。"
    }
  ],
  "builtAt": "2026-11-08T15:13:02.302057+08:00"
};

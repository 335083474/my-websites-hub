window.MARKET_HOURS = {
  "schemaVersion": 1,
  "updated": "2026-11-08",
  "referenceYear": 2024,
  "versions": {
    "pandas_market_calendars": "5.6.0",
    "exchange_calendars": "4.13.2"
  },
  "samplingWindows": [
    [
      "2024-01-08",
      "2024-01-19"
    ],
    [
      "2024-07-08",
      "2024-07-19"
    ],
    [
      "2024-11-11",
      "2024-11-22"
    ]
  ],
  "registeredNames": 295,
  "calendarDefinitions": 121,
  "rows": [
    {
      "id": "ASX",
      "name": "澳大利亚证券交易所",
      "aliases": [
        "ASX"
      ],
      "asset": "股票与 ETF",
      "region": "大洋洲",
      "timezone": "Australia/Sydney",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:10",
              "overnight": false,
              "night": false,
              "minutes": 370.0
            }
          ],
          "minutes": 370.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 05:10"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 13:10"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 06:10"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 14:10"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 05:10"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 13:10"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:10:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / asx.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/asx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "BMF",
      "name": "巴西 B3",
      "aliases": [
        "BMF",
        "B3"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/Sao_Paulo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 420.0
            }
          ],
          "minutes": 420.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 13:00",
                  "2024-01-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 21:00",
                  "2024-01-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 13:00",
                  "2024-11-11 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 21:00",
                  "2024-11-12 04:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / bmf.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/bmf.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "BSE",
      "name": "印度孟买证券交易所",
      "aliases": [
        "BSE",
        "XBOM"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Calcutta",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:15",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 375.0
            }
          ],
          "minutes": 375.0,
          "samples": 27,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 03:45",
                  "2024-01-08 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 11:45",
                  "2024-01-08 18:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 03:45",
                  "2024-07-08 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 11:45",
                  "2024-07-08 18:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 03:45",
                  "2024-11-11 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 11:45",
                  "2024-11-11 18:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:15:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / bse.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/bse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "NSE",
      "name": "印度国家证券交易所",
      "aliases": [
        "NSE",
        "XNSE"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Calcutta",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:15",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 375.0
            }
          ],
          "minutes": 375.0,
          "samples": 27,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 03:45",
                  "2024-01-08 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 11:45",
                  "2024-01-08 18:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 03:45",
                  "2024-07-08 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 11:45",
                  "2024-07-08 18:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 03:45",
                  "2024-11-11 10:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 11:45",
                  "2024-11-11 18:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ],
          [
            "1997-07-30",
            "09:30:00"
          ],
          [
            "1997-08-07",
            "09:00:00"
          ],
          [
            "1997-08-14",
            "09:30:00"
          ],
          [
            "1998-07-01",
            "10:00:00"
          ],
          [
            "1998-11-18",
            "09:55:00"
          ],
          [
            "2010-01-04",
            "09:00:00"
          ],
          [
            "2010-10-18",
            "09:15:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ],
          [
            "1997-07-30",
            "15:00:00"
          ],
          [
            "1997-08-07",
            "14:30:00"
          ],
          [
            "1997-08-14",
            "15:00:00"
          ],
          [
            "1997-09-29",
            "15:30:00"
          ],
          [
            "1997-10-10",
            "16:00:00"
          ],
          [
            "1998-05-18",
            "15:30:00"
          ],
          [
            "1998-11-18",
            "15:45:00"
          ],
          [
            "1999-06-09",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / nse.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/nse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CFE",
      "name": "美国 Cboe 波动率期货（日历模型）",
      "aliases": [
        "CFE",
        "CBOE_Futures"
      ],
      "asset": "股指与波动率期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "15:15",
              "overnight": false,
              "night": false,
              "minutes": 405.0
            }
          ],
          "minutes": 405.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:15"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cboe.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cboe.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CBOE_Equity_Options",
      "name": "美国 Cboe 股票期权",
      "aliases": [
        "CBOE_Equity_Options"
      ],
      "asset": "期权",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cboe.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cboe.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CBOE_Index_Options",
      "name": "美国 Cboe 指数期权",
      "aliases": [
        "CBOE_Index_Options"
      ],
      "asset": "期权",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "15:15",
              "overnight": false,
              "night": false,
              "minutes": 405.0
            }
          ],
          "minutes": 405.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:15"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cboe.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cboe.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME_Equity",
      "name": "美国 CME 股指期货",
      "aliases": [
        "CME_Equity",
        "CBOT_Equity"
      ],
      "asset": "股指与波动率期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "12:00",
              "overnight": true,
              "night": false,
              "minutes": 1140.0
            }
          ],
          "minutes": 1140.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ],
          [
            "2005-09-12",
            "15:30:00",
            "-1"
          ],
          [
            "2012-11-19",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ],
          [
            "2005-09-12",
            "15:15:00"
          ],
          [
            "2012-11-19",
            "16:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "15:15:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "15:30:00"
          ],
          [
            "2005-09-12",
            "15:15:00"
          ],
          [
            "2012-11-19",
            "15:30:00"
          ],
          [
            "2021-06-28",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME_Agriculture",
      "name": "美国 CME 农产品（日历旧模型）",
      "aliases": [
        "CME_Agriculture",
        "CBOT_Agriculture",
        "COMEX_Agriculture",
        "NYMEX_Agriculture"
      ],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "存在口径差异",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "19:00",
              "close": "07:45",
              "overnight": true,
              "night": false,
              "minutes": 765.0
            },
            {
              "open": "08:30",
              "close": "13:20",
              "overnight": false,
              "night": false,
              "minutes": 290.0
            }
          ],
          "minutes": 1055.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 13:45"
                ],
                [
                  "2024-01-08 14:30",
                  "2024-01-08 19:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 21:45"
                ],
                [
                  "2024-01-08 22:30",
                  "2024-01-09 03:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 12:45"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 18:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 20:45"
                ],
                [
                  "2024-07-08 21:30",
                  "2024-07-09 02:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 13:45"
                ],
                [
                  "2024-11-11 14:30",
                  "2024-11-11 19:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 21:45"
                ],
                [
                  "2024-11-11 22:30",
                  "2024-11-12 03:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "19:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "13:20:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "07:45:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "08:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "库内收盘13:20；CME 2013历史公告主要谷物收盘13:15。不能将此库模型当作2013公告的复现。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME_Rate",
      "name": "美国 CME 利率期货",
      "aliases": [
        "CME_Rate",
        "CBOT_Rate",
        "CME_InterestRate",
        "CBOT_InterestRate",
        "CME_Bond",
        "CBOT_Bond"
      ],
      "asset": "利率与债券期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "12:00",
              "overnight": true,
              "night": false,
              "minutes": 1140.0
            }
          ],
          "minutes": 1140.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SSE",
      "name": "上海证券交易所",
      "aliases": [
        "SSE"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            },
            {
              "open": "13:00",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            }
          ],
          "minutes": 240.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / sse.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/sse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SHFE",
      "name": "上期所商品（日盘）",
      "aliases": [
        "SHFE",
        "SHFE_Day"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 225.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "INE",
      "name": "上海能源中心（日盘）",
      "aliases": [
        "INE",
        "INE_Day",
        "INE_EC"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 225.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "DCE",
      "name": "大商所商品（日盘）",
      "aliases": [
        "DCE",
        "DCE_Day",
        "DCE_LH"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 225.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CZCE",
      "name": "郑商所商品（日盘）",
      "aliases": [
        "CZCE",
        "ZCE",
        "CZCE_Day",
        "CZCE_AP",
        "CZCE_SF",
        "CZCE_SM",
        "CZCE_UR"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 225.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "GFEX",
      "name": "广期所商品（日盘）",
      "aliases": [
        "GFEX",
        "GFEX_SI",
        "GFEX_LC",
        "GFEX_PS",
        "GFEX_PT"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 225.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CFFEX",
      "name": "中金所股指期货",
      "aliases": [
        "CFFEX",
        "CFFEX_Equity",
        "CFFEX_IF",
        "CFFEX_IH",
        "CFFEX_IC",
        "CFFEX_IM"
      ],
      "asset": "股指与波动率期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            },
            {
              "open": "13:00",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            }
          ],
          "minutes": 240.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CFFEX_Bond",
      "name": "中金所国债期货",
      "aliases": [
        "CFFEX_Bond",
        "CFFEX_TS",
        "CFFEX_TF",
        "CFFEX_T",
        "CFFEX_TL"
      ],
      "asset": "利率与债券期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            },
            {
              "open": "13:00",
              "close": "15:15",
              "overnight": false,
              "night": false,
              "minutes": 135.0
            }
          ],
          "minutes": 255.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 07:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 15:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 07:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 15:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 07:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 15:15"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SHFE_BaseMetals",
      "name": "上期所铜铝等基本金属",
      "aliases": [
        "SHFE_BaseMetals",
        "SHFE_CU",
        "SHFE_AL",
        "SHFE_ZN",
        "SHFE_PB",
        "SHFE_NI",
        "SHFE_SN",
        "SHFE_SS",
        "SHFE_AO"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "01:00",
              "overnight": true,
              "night": true,
              "minutes": 240.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 465.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 17:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-06 01:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 17:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-06 01:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 17:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-09 01:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2013-12-20",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2013-12-20",
            "01:00:00",
            "0"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SHFE_PreciousMetals",
      "name": "上期所黄金白银",
      "aliases": [
        "SHFE_PreciousMetals",
        "SHFE_AU",
        "SHFE_AG"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "02:30",
              "overnight": true,
              "night": true,
              "minutes": 330.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 555.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 18:30"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-06 02:30"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 18:30"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-06 02:30"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 18:30"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-09 02:30"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2013-07-05",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2013-07-05",
            "02:30:00",
            "0"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SHFE_Industrials",
      "name": "上期所螺纹橡胶等工业品",
      "aliases": [
        "SHFE_Industrials",
        "SHFE_RB",
        "SHFE_HC",
        "SHFE_RU",
        "SHFE_BU",
        "SHFE_FU",
        "SHFE_SP"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "23:00",
              "overnight": false,
              "night": true,
              "minutes": 120.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 345.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 15:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-05 23:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 15:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-05 23:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 15:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-08 23:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-12-26",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-12-26",
            "23:00:00",
            "-1"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "INE_Crude",
      "name": "上海能源中心原油",
      "aliases": [
        "INE_Crude",
        "INE_SC"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "02:30",
              "overnight": true,
              "night": true,
              "minutes": 330.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 555.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 18:30"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-06 02:30"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 18:30"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-06 02:30"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 18:30"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-09 02:30"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2018-03-26",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2018-03-26",
            "02:30:00",
            "0"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "INE_Copper",
      "name": "上海能源中心国际铜",
      "aliases": [
        "INE_Copper",
        "INE_BC"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "01:00",
              "overnight": true,
              "night": true,
              "minutes": 240.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 465.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 17:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-06 01:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 17:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-06 01:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 17:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-09 01:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2020-11-19",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2020-11-19",
            "01:00:00",
            "0"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "INE_Industrials",
      "name": "上海能源中心低硫燃油等",
      "aliases": [
        "INE_Industrials",
        "INE_LU",
        "INE_NR"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "23:00",
              "overnight": false,
              "night": true,
              "minutes": 120.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 345.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 15:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-05 23:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 15:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-05 23:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 15:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-08 23:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2019-08-12",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2019-08-12",
            "23:00:00",
            "-1"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "DCE_Night",
      "name": "大商所夜盘商品",
      "aliases": [
        "DCE_Night",
        "DCE_A",
        "DCE_M",
        "DCE_Y",
        "DCE_P",
        "DCE_C",
        "DCE_I",
        "DCE_J",
        "DCE_JM",
        "DCE_L",
        "DCE_V",
        "DCE_PP",
        "DCE_EG",
        "DCE_EB",
        "DCE_PG"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "23:00",
              "overnight": false,
              "night": true,
              "minutes": 120.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 345.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 15:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-05 23:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 15:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-05 23:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 15:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-08 23:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-07-04",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-07-04",
            "23:00:00",
            "-1"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CZCE_Night",
      "name": "郑商所夜盘商品",
      "aliases": [
        "CZCE_Night",
        "CZCE_CF",
        "CZCE_SR",
        "CZCE_TA",
        "CZCE_MA",
        "CZCE_OI",
        "CZCE_RM",
        "CZCE_FG",
        "CZCE_SA",
        "CZCE_PF",
        "CZCE_PX",
        "CZCE_SH"
      ],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "23:00",
              "overnight": false,
              "night": true,
              "minutes": 120.0
            },
            {
              "open": "09:00",
              "close": "10:15",
              "overnight": false,
              "night": false,
              "minutes": 75.0
            },
            {
              "open": "10:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 60.0
            },
            {
              "open": "13:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 90.0
            }
          ],
          "minutes": 345.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-05 13:00",
                  "2024-01-05 15:00"
                ],
                [
                  "2024-01-08 01:00",
                  "2024-01-08 02:15"
                ],
                [
                  "2024-01-08 02:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:30",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-05 21:00",
                  "2024-01-05 23:00"
                ],
                [
                  "2024-01-08 09:00",
                  "2024-01-08 10:15"
                ],
                [
                  "2024-01-08 10:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:30",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-05 13:00",
                  "2024-07-05 15:00"
                ],
                [
                  "2024-07-08 01:00",
                  "2024-07-08 02:15"
                ],
                [
                  "2024-07-08 02:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:30",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-05 21:00",
                  "2024-07-05 23:00"
                ],
                [
                  "2024-07-08 09:00",
                  "2024-07-08 10:15"
                ],
                [
                  "2024-07-08 10:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-08 13:00",
                  "2024-11-08 15:00"
                ],
                [
                  "2024-11-11 01:00",
                  "2024-11-11 02:15"
                ],
                [
                  "2024-11-11 02:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:30",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-08 21:00",
                  "2024-11-08 23:00"
                ],
                [
                  "2024-11-11 09:00",
                  "2024-11-11 10:15"
                ],
                [
                  "2024-11-11 10:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:30",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-12-12",
            "21:00:00",
            "-1"
          ]
        ],
        "night_close": [
          [
            "None",
            "09:00:00"
          ],
          [
            "2014-12-12",
            "23:00:00",
            "-1"
          ]
        ],
        "day_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "pause_start": [
          [
            "None",
            "10:15:00"
          ]
        ],
        "pause_end": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / china_futures.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/china_futures.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CMEGlobex_Livestock",
      "name": "美国 CME 畜牧期货",
      "aliases": [
        "CMEGlobex_Livestock",
        "CMEGlobex_Live_Cattle",
        "CMEGlobex_Feeder_Cattle",
        "CMEGlobex_Lean_Hog",
        "CMEGlobex_Port_Cutout"
      ],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "13:05",
              "overnight": false,
              "night": false,
              "minutes": 275.0
            }
          ],
          "minutes": 275.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 19:05"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 03:05"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 18:05"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 02:05"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 19:05"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 03:05"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "13:05:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_agriculture.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_agriculture.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CMEGlobex_Grains",
      "name": "美国 CME 谷物与油籽期货",
      "aliases": [
        "CMEGlobex_Grains",
        "CMEGlobex_Oilseeds"
      ],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "存在口径差异",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "19:00",
              "close": "07:45",
              "overnight": true,
              "night": false,
              "minutes": 765.0
            },
            {
              "open": "08:30",
              "close": "13:20",
              "overnight": false,
              "night": false,
              "minutes": 290.0
            }
          ],
          "minutes": 1055.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 13:45"
                ],
                [
                  "2024-01-08 14:30",
                  "2024-01-08 19:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 21:45"
                ],
                [
                  "2024-01-08 22:30",
                  "2024-01-09 03:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 12:45"
                ],
                [
                  "2024-07-08 13:30",
                  "2024-07-08 18:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 20:45"
                ],
                [
                  "2024-07-08 21:30",
                  "2024-07-09 02:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 13:45"
                ],
                [
                  "2024-11-11 14:30",
                  "2024-11-11 19:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 21:45"
                ],
                [
                  "2024-11-11 22:30",
                  "2024-11-12 03:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "19:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "13:20:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "07:45:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "08:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "库内收盘13:20；CME 2013历史公告主要谷物收盘13:15。不能将此库模型当作2013公告的复现。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_agriculture.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_agriculture.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME Globex Cryptocurrencies",
      "name": "美国 CME 加密资产期货",
      "aliases": [
        "CME Globex Cryptocurrencies",
        "CME Globex Crypto"
      ],
      "asset": "加密资产",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "16:00:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_crypto.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_crypto.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CMEGlobex_EnergyAndMetals",
      "name": "美国 CME 能源与金属期货",
      "aliases": [
        "CMEGlobex_EnergyAndMetals",
        "CMEGlobex_Energy",
        "CMEGlobex_CrudeAndRefined",
        "CMEGlobex_NYHarbor",
        "CMEGlobex_HO",
        "HO",
        "CMEGlobex_Crude",
        "CMEGlobex_CL",
        "CL",
        "CMEGlobex_Gas",
        "CMEGlobex_RB",
        "RB",
        "CMEGlobex_MicroCrude",
        "CMEGlobex_MCL",
        "MCL",
        "CMEGlobex_NatGas",
        "CMEGlobex_NG",
        "NG",
        "CMEGlobex_Dutch_NatGas",
        "CMEGlobex_TTF",
        "TTF",
        "CMEGlobex_LastDay_NatGas",
        "CMEGlobex_NN",
        "NN",
        "CMEGlobex_CarbonOffset",
        "CMEGlobex_CGO",
        "CGO",
        "C-GEO",
        "CMEGlobex_NGO",
        "NGO",
        "CMEGlobex_GEO",
        "GEO",
        "CMEGlobex_Metals",
        "CMEGlobex_PreciousMetals",
        "CMEGlobex_Gold",
        "CMEGlobex_GC",
        "GC",
        "CMEGlobex_Silver",
        "CMEGlobex_SI",
        "SI",
        "CMEGlobex_Platinum",
        "CMEGlobex_PL",
        "PL",
        "CMEGlobex_BaseMetals",
        "CMEGlobex_Copper",
        "CMEGlobex_HG",
        "HG",
        "CMEGlobex_Aluminum",
        "CMEGlobex_ALI",
        "ALI",
        "CMEGlobex_QC",
        "QC",
        "CMEGlobex_FerrousMetals",
        "CMEGlobex_HRC",
        "HRC",
        "CMEGlobex_BUS",
        "BUS",
        "CMEGlobex_TIO",
        "TIO"
      ],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "13:30",
              "overnight": true,
              "night": false,
              "minutes": 1230.0
            }
          ],
          "minutes": 1230.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 19:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 03:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_energy_and_metals.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_energy_and_metals.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME Globex Equity",
      "name": "美国 CME 股指期货（另一模型）",
      "aliases": [
        "CME Globex Equity"
      ],
      "asset": "股指与波动率期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "12:00",
              "overnight": true,
              "night": false,
              "minutes": 1140.0
            }
          ],
          "minutes": 1140.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_equities.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_equities.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CMEGlobex_FX",
      "name": "美国 CME 外汇期货",
      "aliases": [
        "CMEGlobex_FX",
        "CME_FX",
        "CME_Currency"
      ],
      "asset": "外汇",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_fx.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_fx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CME Globex Fixed Income",
      "name": "美国 CME 固定收益期货",
      "aliases": [
        "CME Globex Fixed Income",
        "CME Globex Interest Rate Products"
      ],
      "asset": "利率与债券期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "night": false,
              "minutes": 1380.0
            }
          ],
          "minutes": 1380.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "12:00",
              "overnight": true,
              "night": false,
              "minutes": 1140.0
            }
          ],
          "minutes": 1140.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / cme_globex_fixed_income.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/cme_globex_fixed_income.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "EUREX",
      "name": "欧洲 Eurex 衍生品（日历模型）",
      "aliases": [
        "EUREX"
      ],
      "asset": "综合或通用模型",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 840.0
            }
          ],
          "minutes": 840.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / eurex.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/eurex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "EUREX_PrePost",
      "name": "欧洲 Eurex 衍生品（扩展模型）",
      "aliases": [
        "EUREX_PrePost",
        "EUREX_Extended"
      ],
      "asset": "综合或通用模型",
      "region": "欧洲",
      "timezone": "UTC",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 16:00",
                  "2024-07-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "pre": [
          [
            "None",
            "00:15:00"
          ]
        ],
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ],
        "post": [
          [
            "None",
            "21:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / eurex.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/eurex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "EUREX_Bond",
      "name": "欧洲 Eurex 债券期货",
      "aliases": [
        "EUREX_Bond"
      ],
      "asset": "利率与债券期货",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 840.0
            }
          ],
          "minutes": 840.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "01:10:00"
          ],
          [
            "2018-12-10",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / eurex_fixed_income.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/eurex_fixed_income.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "FOREX",
      "name": "场外外汇（通用周日到周五模型）",
      "aliases": [
        "FOREX",
        "FX",
        "Forex"
      ],
      "asset": "外汇",
      "region": "全球通用",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "17:00",
              "overnight": true,
              "night": false,
              "minutes": 1440.0
            }
          ],
          "minutes": 1440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 22:00",
                  "2024-01-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 06:00",
                  "2024-01-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 21:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 05:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 22:00",
                  "2024-11-11 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 06:00",
                  "2024-11-12 06:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / forex.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/forex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "HKEX",
      "name": "香港股票",
      "aliases": [
        "HKEX"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "12:00",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "13:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 180.0
            }
          ],
          "minutes": 330.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 04:00"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 12:00"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 16:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 04:00"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 12:00"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 16:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 04:00"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 12:00"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 16:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "12:00:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / hkex.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/hkex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "ICE",
      "name": "美国 ICE 期货（通用模型）",
      "aliases": [
        "ICE",
        "ICEUS",
        "NYFE"
      ],
      "asset": "综合或通用模型",
      "region": "北美",
      "timezone": "US/Eastern",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "20:01",
              "close": "18:00",
              "overnight": true,
              "night": false,
              "minutes": 1319.0
            }
          ],
          "minutes": 1319.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:01",
                  "2024-01-08 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:01",
                  "2024-01-09 07:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:01",
                  "2024-07-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:01",
                  "2024-07-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:01",
                  "2024-11-11 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:01",
                  "2024-11-12 07:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "20:01",
              "close": "13:00",
              "overnight": true,
              "night": false,
              "minutes": 1019.0
            }
          ],
          "minutes": 1019.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-15 01:01",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 09:01",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "20:01:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / ice.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/ice.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "NYSE",
      "name": "美国股票常规时段",
      "aliases": [
        "NYSE",
        "stock",
        "NASDAQ",
        "BATS",
        "DJIA",
        "DOW"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "pre": [
          [
            "None",
            "04:00:00"
          ]
        ],
        "market_open": [
          [
            "None",
            "10:00:00"
          ],
          [
            "1985-01-01",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ],
          [
            "1952-09-29",
            "15:30:00"
          ],
          [
            "1974-01-01",
            "16:00:00"
          ]
        ],
        "post": [
          [
            "None",
            "20:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / nyse.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/nyse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "IEX",
      "name": "美国 IEX 股票",
      "aliases": [
        "IEX",
        "Investors_Exchange"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "pre": [
          [
            "2013-03-25",
            "08:00:00"
          ]
        ],
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ],
        "post": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / iex.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/iex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "JPX",
      "name": "日本东京股票",
      "aliases": [
        "JPX",
        "XJPX"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "12:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            }
          ],
          "minutes": 300.0,
          "samples": 18,
          "examples": [
            {
              "date": "2024-01-09",
              "utc": [
                [
                  "2024-01-09 00:00",
                  "2024-01-09 02:30"
                ],
                [
                  "2024-01-09 03:30",
                  "2024-01-09 06:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-09 08:00",
                  "2024-01-09 10:30"
                ],
                [
                  "2024-01-09 11:30",
                  "2024-01-09 14:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 02:30"
                ],
                [
                  "2024-07-08 03:30",
                  "2024-07-08 06:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 10:30"
                ],
                [
                  "2024-07-08 11:30",
                  "2024-07-08 14:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "09:00",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "12:30",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 180.0
            }
          ],
          "minutes": 330.0,
          "samples": 10,
          "examples": [
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 00:00",
                  "2024-11-11 02:30"
                ],
                [
                  "2024-11-11 03:30",
                  "2024-11-11 06:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 10:30"
                ],
                [
                  "2024-11-11 11:30",
                  "2024-11-11 14:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ],
          [
            "2024-11-05",
            "15:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "12:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / jpx.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/jpx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "LSE",
      "name": "伦敦股票",
      "aliases": [
        "LSE"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/London",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / lse.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/lse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "OSE",
      "name": "挪威奥斯陆股票（不是日本大阪）",
      "aliases": [
        "OSE"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Oslo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:20",
              "overnight": false,
              "night": false,
              "minutes": 440.0
            }
          ],
          "minutes": 440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:20:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / ose.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/ose.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SIFMAUS",
      "name": "美国债券（SIFMA 日历模型）",
      "aliases": [
        "SIFMAUS",
        "SIFMA_US",
        "Capital_Markets_US",
        "Financial_Markets_US",
        "Bond_Markets_US"
      ],
      "asset": "债券现货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "07:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 630.0
            }
          ],
          "minutes": 630.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 12:00",
                  "2024-01-08 22:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 20:00",
                  "2024-01-09 06:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 11:00",
                  "2024-07-08 21:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 19:00",
                  "2024-07-09 05:30"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 12:00",
                  "2024-11-12 22:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 20:00",
                  "2024-11-13 06:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "07:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "SIFMA 是债券假期/提前收市建议；模型小时不能当成所有债券统一交易所时段。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / sifma.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/sifma.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SIFMAUK",
      "name": "英国债券（SIFMA 日历模型）",
      "aliases": [
        "SIFMAUK",
        "SIFMA_UK",
        "Capital_Markets_UK",
        "Financial_Markets_UK",
        "Bond_Markets_UK"
      ],
      "asset": "债券现货",
      "region": "欧洲",
      "timezone": "Europe/London",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 540.0
            }
          ],
          "minutes": 540.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 17:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 01:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-09 00:00"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 08:00",
                  "2024-11-12 17:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 16:00",
                  "2024-11-13 01:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "SIFMA 是债券假期/提前收市建议；模型小时不能当成所有债券统一交易所时段。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / sifma.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/sifma.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SIFMAJP",
      "name": "日本债券（SIFMA 日历模型）",
      "aliases": [
        "SIFMAJP",
        "SIFMA_JP",
        "Capital_Markets_JP",
        "Financial_Markets_JP",
        "Bond_Markets_JP"
      ],
      "asset": "债券现货",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "18:30",
              "overnight": false,
              "night": false,
              "minutes": 600.0
            }
          ],
          "minutes": 600.0,
          "samples": 26,
          "examples": [
            {
              "date": "2024-01-09",
              "utc": [
                [
                  "2024-01-08 23:30",
                  "2024-01-09 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-09 07:30",
                  "2024-01-09 17:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 23:30",
                  "2024-07-08 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 07:30",
                  "2024-07-08 17:30"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-11 23:30",
                  "2024-11-12 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 07:30",
                  "2024-11-12 17:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "SIFMA 是债券假期/提前收市建议；模型小时不能当成所有债券统一交易所时段。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / sifma.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/sifma.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "SIX",
      "name": "瑞士股票",
      "aliases": [
        "SIX"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Zurich",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / six.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/six.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "TASE",
      "name": "以色列股票",
      "aliases": [
        "TASE"
      ],
      "asset": "股票与 ETF",
      "region": "中东",
      "timezone": "Asia/Jerusalem",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "15:59",
              "overnight": false,
              "night": false,
              "minutes": 359.0
            }
          ],
          "minutes": 359.0,
          "samples": 27,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 13:59"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 21:59"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 12:59"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 20:59"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 13:59"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 21:59"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:59:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / tase.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/tase.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "TSX",
      "name": "加拿大多伦多股票",
      "aliases": [
        "TSX",
        "TSXV"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "Canada/Eastern",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "pandas_market_calendars / tsx.py",
          "url": "https://github.com/rsheftel/pandas_market_calendars/blob/master/pandas_market_calendars/calendars/tsx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "AIXK",
      "name": "哈萨克斯坦 AIX",
      "aliases": [
        "AIXK"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Almaty",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "11:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 05:00",
                  "2024-01-08 11:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 13:00",
                  "2024-01-08 19:00"
                ]
              ]
            },
            {
              "date": "2024-07-09",
              "utc": [
                [
                  "2024-07-09 06:00",
                  "2024-07-09 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-09 14:00",
                  "2024-07-09 20:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 06:00",
                  "2024-11-11 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 14:00",
                  "2024-11-11 20:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "11:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_aixk.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_aixk.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "ASEX",
      "name": "希腊雅典股票",
      "aliases": [
        "ASEX"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Athens",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "17:20",
              "overnight": false,
              "night": false,
              "minutes": 440.0
            }
          ],
          "minutes": 440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ],
          [
            "2008-09-29 00:00:00",
            "17:20:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_asex.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_asex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "BVMF",
      "name": "巴西 B3",
      "aliases": [
        "BVMF"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/Sao_Paulo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "18:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 13:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 21:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 13:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 21:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ],
          [
            "2019-11-04 00:00:00",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_bvmf.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_bvmf.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XCYS",
      "name": "塞浦路斯股票",
      "aliases": [
        "XCYS"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Nicosia",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:30",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:30",
                  "2024-01-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:30",
                  "2024-01-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:30",
                  "2024-07-08 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:30",
                  "2024-07-08 22:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:30",
                  "2024-11-11 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:30",
                  "2024-11-11 23:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xcys.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xcys.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "CMES",
      "name": "美国 CME（综合模型）",
      "aliases": [
        "CMES"
      ],
      "asset": "综合或通用模型",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "17:00",
              "overnight": true,
              "night": false,
              "minutes": 1440.0
            }
          ],
          "minutes": 1440.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 07:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 07:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "17:00",
              "close": "12:00",
              "overnight": true,
              "night": false,
              "minutes": 1140.0
            }
          ],
          "minutes": 1140.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-14 23:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 07:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "17:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_cmes.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_cmes.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "IEPA",
      "name": "美国 ICE（综合模型）",
      "aliases": [
        "IEPA"
      ],
      "asset": "综合或通用模型",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "20:00",
              "close": "18:00",
              "overnight": true,
              "night": false,
              "minutes": 1320.0
            }
          ],
          "minutes": 1320.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-09 07:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-12 07:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "20:00",
              "close": "13:00",
              "overnight": true,
              "night": false,
              "minutes": 1020.0
            }
          ],
          "minutes": 1020.0,
          "samples": 1,
          "examples": [
            {
              "date": "2024-01-15",
              "utc": [
                [
                  "2024-01-15 01:00",
                  "2024-01-15 18:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-15 09:00",
                  "2024-01-16 02:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "20:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_iepa.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_iepa.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XAMS",
      "name": "荷兰阿姆斯特丹股票",
      "aliases": [
        "XAMS"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Amsterdam",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xams.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xams.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XASX",
      "name": "澳大利亚股票",
      "aliases": [
        "XASX"
      ],
      "asset": "股票与 ETF",
      "region": "大洋洲",
      "timezone": "Australia/Sydney",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 05:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 13:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 06:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 14:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 05:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 13:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xasx.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xasx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBEL",
      "name": "塞尔维亚贝尔格莱德股票",
      "aliases": [
        "XBEL"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Belgrade",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "14:00",
              "overnight": false,
              "night": false,
              "minutes": 270.0
            }
          ],
          "minutes": 270.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-09",
              "utc": [
                [
                  "2024-01-09 08:30",
                  "2024-01-09 13:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-09 16:30",
                  "2024-01-09 21:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:30",
                  "2024-07-08 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:30",
                  "2024-07-08 20:00"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 08:30",
                  "2024-11-12 13:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 16:30",
                  "2024-11-12 21:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "14:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbel.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbel.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBDA",
      "name": "百慕大股票",
      "aliases": [
        "XBDA"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "Atlantic/Bermuda",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 450.0
            }
          ],
          "minutes": 450.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 13:00",
                  "2024-01-08 20:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 21:00",
                  "2024-01-09 04:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 12:00",
                  "2024-07-08 19:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 20:00",
                  "2024-07-09 03:30"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 13:00",
                  "2024-11-12 20:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 21:00",
                  "2024-11-13 04:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbda.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbda.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBKK",
      "name": "泰国股票",
      "aliases": [
        "XBKK"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Bangkok",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 03:00",
                  "2024-01-08 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 11:00",
                  "2024-01-08 17:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 03:00",
                  "2024-07-08 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 11:00",
                  "2024-07-08 17:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 03:00",
                  "2024-11-11 09:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 11:00",
                  "2024-11-11 17:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbkk.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbkk.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBOG",
      "name": "哥伦比亚股票",
      "aliases": [
        "XBOG"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-09",
              "utc": [
                [
                  "2024-01-09 14:30",
                  "2024-01-09 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-09 22:30",
                  "2024-01-10 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 14:30",
                  "2024-11-12 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 22:30",
                  "2024-11-13 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbog.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbog.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBRU",
      "name": "比利时布鲁塞尔股票",
      "aliases": [
        "XBRU"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Brussels",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbru.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbru.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBSE",
      "name": "罗马尼亚股票",
      "aliases": [
        "XBSE"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Bucharest",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "17:45",
              "overnight": false,
              "night": false,
              "minutes": 465.0
            }
          ],
          "minutes": 465.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:45"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:45"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:45"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:45:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbse.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBUD",
      "name": "匈牙利布达佩斯股票",
      "aliases": [
        "XBUD"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Budapest",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbud.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbud.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBUE",
      "name": "阿根廷股票",
      "aliases": [
        "XBUE"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/Argentina/Buenos_Aires",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "11:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:00",
                  "2024-01-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:00",
                  "2024-01-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 14:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 22:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:00",
                  "2024-11-11 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:00",
                  "2024-11-12 04:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "11:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbue.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbue.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XBRA",
      "name": "斯洛伐克股票",
      "aliases": [
        "XBRA"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Bratislava",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "11:00",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 270.0
            }
          ],
          "minutes": 270.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 10:00",
                  "2024-01-08 14:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 18:00",
                  "2024-01-08 22:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 13:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 17:00",
                  "2024-07-08 21:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 10:00",
                  "2024-11-11 14:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 18:00",
                  "2024-11-11 22:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "11:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xbra.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xbra.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XCBF",
      "name": "美国 Cboe 期货（另一模型）",
      "aliases": [
        "XCBF"
      ],
      "asset": "股指与波动率期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "15:15",
              "overnight": false,
              "night": false,
              "minutes": 405.0
            }
          ],
          "minutes": 405.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:15"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xcbf.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xcbf.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XCSE",
      "name": "丹麦哥本哈根股票",
      "aliases": [
        "XCSE"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Copenhagen",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xcse.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xcse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XDUB",
      "name": "爱尔兰都柏林股票",
      "aliases": [
        "XDUB"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Dublin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "16:28",
              "overnight": false,
              "night": false,
              "minutes": 508.0
            }
          ],
          "minutes": 508.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:28"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:28"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:28"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:28"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:28"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:28"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:28:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xdub.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xdub.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XDUS",
      "name": "德国杜塞尔多夫股票",
      "aliases": [
        "XDUS"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Brussels",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 840.0
            }
          ],
          "minutes": 840.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xdus.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xdus.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XEEE",
      "name": "欧洲能源交易所（日历模型）",
      "aliases": [
        "XEEE"
      ],
      "asset": "商品期货",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "18:00",
              "overnight": false,
              "night": false,
              "minutes": 600.0
            }
          ],
          "minutes": 600.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 17:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 01:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 00:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 17:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 01:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xeee.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xeee.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XFRA",
      "name": "德国法兰克福股票",
      "aliases": [
        "XFRA"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xfra.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xfra.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XETR",
      "name": "德国 Xetra 股票",
      "aliases": [
        "XETR"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xetr.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xetr.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XEUR",
      "name": "欧洲 Eurex（另一模型）",
      "aliases": [
        "XEUR"
      ],
      "asset": "综合或通用模型",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 840.0
            }
          ],
          "minutes": 840.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xeur.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xeur.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XHAM",
      "name": "德国汉堡股票",
      "aliases": [
        "XHAM"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Brussels",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 840.0
            }
          ],
          "minutes": 840.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:00",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xham.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xham.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XHEL",
      "name": "芬兰赫尔辛基股票",
      "aliases": [
        "XHEL"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Helsinki",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "18:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xhel.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xhel.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XHKG",
      "name": "香港股票",
      "aliases": [
        "XHKG"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Hong_Kong",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "12:00",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "13:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 180.0
            }
          ],
          "minutes": 330.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 04:00"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 12:00"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 16:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 04:00"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 12:00"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 16:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 04:00"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 08:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 12:00"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 16:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ],
          [
            "2011-03-07 00:00:00",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "12:00:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xhkg.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xhkg.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XICE",
      "name": "冰岛股票",
      "aliases": [
        "XICE"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Atlantic/Reykjavik",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 17:30",
                  "2024-01-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 17:30",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 17:30",
                  "2024-11-11 23:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xice.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xice.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XIDX",
      "name": "印度尼西亚股票",
      "aliases": [
        "XIDX"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Jakarta",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "15:50",
              "overnight": false,
              "night": false,
              "minutes": 410.0
            }
          ],
          "minutes": 410.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 02:00",
                  "2024-01-08 08:50"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 10:00",
                  "2024-01-08 16:50"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 02:00",
                  "2024-07-08 08:50"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 10:00",
                  "2024-07-08 16:50"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 02:00",
                  "2024-11-11 08:50"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 10:00",
                  "2024-11-11 16:50"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:50:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xidx.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xidx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XIST",
      "name": "土耳其股票",
      "aliases": [
        "XIST"
      ],
      "asset": "股票与 ETF",
      "region": "中东",
      "timezone": "Europe/Istanbul",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "18:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-11 23:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xist.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xist.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XJSE",
      "name": "南非约翰内斯堡股票",
      "aliases": [
        "XJSE"
      ],
      "asset": "股票与 ETF",
      "region": "非洲",
      "timezone": "Africa/Johannesburg",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-11 23:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xjse.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xjse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XKAR",
      "name": "巴基斯坦卡拉奇股票",
      "aliases": [
        "XKAR"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Karachi",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:32",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 358.0
            }
          ],
          "minutes": 358.0,
          "samples": 28,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 04:32",
                  "2024-01-08 10:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 12:32",
                  "2024-01-08 18:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 04:32",
                  "2024-07-08 10:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 12:32",
                  "2024-07-08 18:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 04:32",
                  "2024-11-11 10:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 12:32",
                  "2024-11-11 18:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:32:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xkar.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xkar.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XKLS",
      "name": "马来西亚股票",
      "aliases": [
        "XKLS"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Kuala_Lumpur",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 17:00"
                ]
              ]
            },
            {
              "date": "2024-07-09",
              "utc": [
                [
                  "2024-07-09 01:00",
                  "2024-07-09 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-09 09:00",
                  "2024-07-09 17:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 17:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xkls.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xkls.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XKRX",
      "name": "韩国股票",
      "aliases": [
        "XKRX"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Seoul",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 00:00",
                  "2024-01-08 06:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 14:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 06:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 14:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 00:00",
                  "2024-11-11 06:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 14:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ],
          [
            "1978-04-01 00:00:00",
            "10:00:00"
          ],
          [
            "1986-04-01 00:00:00",
            "09:40:00"
          ],
          [
            "1995-01-01 00:00:00",
            "09:30:00"
          ],
          [
            "1998-12-07 00:00:00",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ],
          [
            "1986-04-01 00:00:00",
            "15:20:00"
          ],
          [
            "1995-01-01 00:00:00",
            "15:00:00"
          ],
          [
            "2016-08-01 00:00:00",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xkrx.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xkrx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLIM",
      "name": "秘鲁股票",
      "aliases": [
        "XLIM"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/Lima",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 420.0
            }
          ],
          "minutes": 420.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:00",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:00",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 14:00",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 22:00",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:00",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:00",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlim.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlim.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLIS",
      "name": "葡萄牙里斯本股票",
      "aliases": [
        "XLIS"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Lisbon",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlis.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlis.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLIT",
      "name": "立陶宛股票",
      "aliases": [
        "XLIT"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Vilnius",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 22:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 13:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 21:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 22:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlit.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlit.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLJU",
      "name": "斯洛文尼亚股票",
      "aliases": [
        "XLJU"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Ljubljana",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:15",
              "close": "15:15",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:15",
                  "2024-01-08 14:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:15",
                  "2024-01-08 22:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:15",
                  "2024-07-08 13:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:15",
                  "2024-07-08 21:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:15",
                  "2024-11-11 14:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:15",
                  "2024-11-11 22:15"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:15:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlju.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlju.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLON",
      "name": "伦敦股票",
      "aliases": [
        "XLON"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/London",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "16:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlon.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlon.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XLUX",
      "name": "卢森堡股票",
      "aliases": [
        "XLUX"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Luxembourg",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:40",
              "overnight": false,
              "night": false,
              "minutes": 520.0
            }
          ],
          "minutes": 520.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:40"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:40"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:40"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:40:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xlux.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xlux.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XMAD",
      "name": "西班牙马德里股票",
      "aliases": [
        "XMAD"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Madrid",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xmad.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xmad.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XMEX",
      "name": "墨西哥股票",
      "aliases": [
        "XMEX"
      ],
      "asset": "股票与 ETF",
      "region": "拉丁美洲",
      "timezone": "America/Mexico_City",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 14:30",
                  "2024-07-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 22:30",
                  "2024-07-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "08:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xmex.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xmex.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XMIL",
      "name": "意大利米兰股票",
      "aliases": [
        "XMIL"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Rome",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xmil.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xmil.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XMOS",
      "name": "俄罗斯莫斯科股票",
      "aliases": [
        "XMOS"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Moscow",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "18:45",
              "overnight": false,
              "night": false,
              "minutes": 525.0
            }
          ],
          "minutes": 525.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 15:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-08 23:45"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:45"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 15:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-11 23:45"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:45:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xmos.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xmos.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XNYS",
      "name": "美国纽约股票",
      "aliases": [
        "XNYS"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xnys.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xnys.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XNZE",
      "name": "新西兰股票",
      "aliases": [
        "XNZE"
      ],
      "asset": "股票与 ETF",
      "region": "大洋洲",
      "timezone": "Pacific/Auckland",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:45",
              "overnight": false,
              "night": false,
              "minutes": 405.0
            }
          ],
          "minutes": 405.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 21:00",
                  "2024-01-08 03:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 05:00",
                  "2024-01-08 11:45"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 04:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-08 12:45"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 21:00",
                  "2024-11-11 03:45"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 05:00",
                  "2024-11-11 11:45"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:45:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xnze.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xnze.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XOSL",
      "name": "挪威奥斯陆股票",
      "aliases": [
        "XOSL"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Oslo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:20",
              "overnight": false,
              "night": false,
              "minutes": 440.0
            }
          ],
          "minutes": 440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:20:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xosl.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xosl.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XPAR",
      "name": "法国巴黎股票",
      "aliases": [
        "XPAR"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Paris",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xpar.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xpar.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XPHS",
      "name": "菲律宾股票",
      "aliases": [
        "XPHS"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Manila",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 07:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 15:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 07:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 15:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 07:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 15:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xphs.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xphs.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XPRA",
      "name": "捷克布拉格股票",
      "aliases": [
        "XPRA"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Prague",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:20",
              "overnight": false,
              "night": false,
              "minutes": 440.0
            }
          ],
          "minutes": 440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:20"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:20"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:20"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:20"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:20:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xpra.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xpra.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XRIS",
      "name": "拉脱维亚股票",
      "aliases": [
        "XRIS"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Riga",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 22:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 13:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 21:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 22:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xris.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xris.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSAU",
      "name": "沙特股票",
      "aliases": [
        "XSAU"
      ],
      "asset": "股票与 ETF",
      "region": "中东",
      "timezone": "Asia/Riyadh",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 300.0
            }
          ],
          "minutes": 300.0,
          "samples": 27,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:00",
                  "2024-01-08 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:00",
                  "2024-01-08 20:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 20:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:00",
                  "2024-11-11 12:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:00",
                  "2024-11-11 20:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xsau.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xsau.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSES",
      "name": "新加坡股票",
      "aliases": [
        "XSES"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Singapore",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 17:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 17:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 09:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 17:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xses.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xses.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSHG",
      "name": "上海股票",
      "aliases": [
        "XSHG"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Shanghai",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            },
            {
              "open": "13:00",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 120.0
            }
          ],
          "minutes": 240.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:30",
                  "2024-01-08 03:30"
                ],
                [
                  "2024-01-08 05:00",
                  "2024-01-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:30",
                  "2024-01-08 11:30"
                ],
                [
                  "2024-01-08 13:00",
                  "2024-01-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:30",
                  "2024-07-08 03:30"
                ],
                [
                  "2024-07-08 05:00",
                  "2024-07-08 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:30",
                  "2024-07-08 11:30"
                ],
                [
                  "2024-07-08 13:00",
                  "2024-07-08 15:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:30",
                  "2024-11-11 03:30"
                ],
                [
                  "2024-11-11 05:00",
                  "2024-11-11 07:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:30",
                  "2024-11-11 11:30"
                ],
                [
                  "2024-11-11 13:00",
                  "2024-11-11 15:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "13:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xshg.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xshg.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSTO",
      "name": "瑞典斯德哥尔摩股票",
      "aliases": [
        "XSTO"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Stockholm",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xsto.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xsto.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSTU",
      "name": "德国斯图加特股票",
      "aliases": [
        "XSTU"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Berlin",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "07:30",
              "close": "22:00",
              "overnight": false,
              "night": false,
              "minutes": 870.0
            }
          ],
          "minutes": 870.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 06:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 14:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 05:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 13:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 06:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 14:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "07:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "22:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xstu.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xstu.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XSWX",
      "name": "瑞士股票",
      "aliases": [
        "XSWX"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Zurich",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xswx.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xswx.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XTAE",
      "name": "以色列股票",
      "aliases": [
        "XTAE"
      ],
      "asset": "股票与 ETF",
      "region": "中东",
      "timezone": "Asia/Tel_Aviv",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:59",
              "close": "17:15",
              "overnight": false,
              "night": false,
              "minutes": 436.0
            }
          ],
          "minutes": 436.0,
          "samples": 24,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 07:59",
                  "2024-01-08 15:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 15:59",
                  "2024-01-08 23:15"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 06:59",
                  "2024-07-08 14:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 14:59",
                  "2024-07-08 22:15"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 07:59",
                  "2024-11-11 15:15"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 15:59",
                  "2024-11-11 23:15"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "09:59",
              "close": "15:40",
              "overnight": false,
              "night": false,
              "minutes": 341.0
            }
          ],
          "minutes": 341.0,
          "samples": 3,
          "examples": [
            {
              "date": "2024-01-14",
              "utc": [
                [
                  "2024-01-14 07:59",
                  "2024-01-14 13:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-14 15:59",
                  "2024-01-14 21:40"
                ]
              ]
            },
            {
              "date": "2024-07-14",
              "utc": [
                [
                  "2024-07-14 06:59",
                  "2024-07-14 12:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-14 14:59",
                  "2024-07-14 20:40"
                ]
              ]
            },
            {
              "date": "2024-11-17",
              "utc": [
                [
                  "2024-11-17 07:59",
                  "2024-11-17 13:40"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-17 15:59",
                  "2024-11-17 21:40"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:59:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:15:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xtae.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xtae.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XTAI",
      "name": "中国台湾股票",
      "aliases": [
        "XTAI"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Taipei",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "13:30",
              "overnight": false,
              "night": false,
              "minutes": 270.0
            }
          ],
          "minutes": 270.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 01:00",
                  "2024-01-08 05:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 09:00",
                  "2024-01-08 13:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 01:00",
                  "2024-07-08 05:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 09:00",
                  "2024-07-08 13:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 01:00",
                  "2024-11-11 05:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 09:00",
                  "2024-11-11 13:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "13:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xtai.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xtai.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XTAL",
      "name": "爱沙尼亚股票",
      "aliases": [
        "XTAL"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Tallinn",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "10:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 360.0
            }
          ],
          "minutes": 360.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 22:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 13:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 21:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 22:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "10:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xtal.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xtal.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XTKS",
      "name": "日本东京股票",
      "aliases": [
        "XTKS"
      ],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "12:30",
              "close": "15:00",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            }
          ],
          "minutes": 300.0,
          "samples": 18,
          "examples": [
            {
              "date": "2024-01-09",
              "utc": [
                [
                  "2024-01-09 00:00",
                  "2024-01-09 02:30"
                ],
                [
                  "2024-01-09 03:30",
                  "2024-01-09 06:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-09 08:00",
                  "2024-01-09 10:30"
                ],
                [
                  "2024-01-09 11:30",
                  "2024-01-09 14:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-08 02:30"
                ],
                [
                  "2024-07-08 03:30",
                  "2024-07-08 06:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-08 10:30"
                ],
                [
                  "2024-07-08 11:30",
                  "2024-07-08 14:00"
                ]
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "open": "09:00",
              "close": "11:30",
              "overnight": false,
              "night": false,
              "minutes": 150.0
            },
            {
              "open": "12:30",
              "close": "15:30",
              "overnight": false,
              "night": false,
              "minutes": 180.0
            }
          ],
          "minutes": 330.0,
          "samples": 10,
          "examples": [
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 00:00",
                  "2024-11-11 02:30"
                ],
                [
                  "2024-11-11 03:30",
                  "2024-11-11 06:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 10:30"
                ],
                [
                  "2024-11-11 11:30",
                  "2024-11-11 14:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "15:00:00"
          ],
          [
            "2024-11-05 00:00:00",
            "15:30:00"
          ]
        ],
        "break_start": [
          [
            "None",
            "11:30:00"
          ]
        ],
        "break_end": [
          [
            "None",
            "12:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xtks.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xtks.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XTSE",
      "name": "加拿大多伦多股票",
      "aliases": [
        "XTSE"
      ],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "America/Toronto",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:30",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 390.0
            }
          ],
          "minutes": 390.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 14:30",
                  "2024-01-08 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 22:30",
                  "2024-01-09 05:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 13:30",
                  "2024-07-08 20:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 21:30",
                  "2024-07-09 04:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 14:30",
                  "2024-11-11 21:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 22:30",
                  "2024-11-12 05:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:30:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xtse.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xtse.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XWAR",
      "name": "波兰华沙股票",
      "aliases": [
        "XWAR"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Warsaw",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:00",
              "overnight": false,
              "night": false,
              "minutes": 480.0
            }
          ],
          "minutes": 480.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-11-12",
              "utc": [
                [
                  "2024-11-12 08:00",
                  "2024-11-12 16:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-12 16:00",
                  "2024-11-13 00:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xwar.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xwar.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XWBO",
      "name": "奥地利维也纳股票",
      "aliases": [
        "XWBO"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Vienna",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "17:30",
              "overnight": false,
              "night": false,
              "minutes": 510.0
            }
          ],
          "minutes": 510.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-09 00:30"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 15:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 23:30"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 16:30"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-12 00:30"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "17:30:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xwbo.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xwbo.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "XZAG",
      "name": "克罗地亚股票",
      "aliases": [
        "XZAG"
      ],
      "asset": "股票与 ETF",
      "region": "欧洲",
      "timezone": "Europe/Zagreb",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:00",
              "overnight": false,
              "night": false,
              "minutes": 420.0
            }
          ],
          "minutes": 420.0,
          "samples": 29,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 08:00",
                  "2024-01-08 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 16:00",
                  "2024-01-08 23:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 07:00",
                  "2024-07-08 14:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 15:00",
                  "2024-07-08 22:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 08:00",
                  "2024-11-11 15:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 16:00",
                  "2024-11-11 23:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "09:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "16:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / exchange_calendar_xzag.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/exchange_calendar_xzag.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "us_futures",
      "name": "美国期货（通用模型）",
      "aliases": [
        "us_futures"
      ],
      "asset": "综合或通用模型",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "18:00",
              "close": "18:00",
              "overnight": true,
              "night": false,
              "minutes": 1440.0
            }
          ],
          "minutes": 1440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-07 23:00",
                  "2024-01-08 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 07:00",
                  "2024-01-09 07:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-07 22:00",
                  "2024-07-08 22:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 06:00",
                  "2024-07-09 06:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-10 23:00",
                  "2024-11-11 23:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 07:00",
                  "2024-11-12 07:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "18:00:00",
            "-1"
          ]
        ],
        "market_close": [
          [
            "None",
            "18:00:00"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / us_futures_calendar.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/us_futures_calendar.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "24/7",
      "name": "加密现货等全天候市场（通用模型）",
      "aliases": [
        "24/7"
      ],
      "asset": "加密资产",
      "region": "全球通用",
      "timezone": "UTC",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "00:00",
              "close": "00:00",
              "overnight": true,
              "night": false,
              "minutes": 1440.0
            }
          ],
          "minutes": 1440.0,
          "samples": 36,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 00:00",
                  "2024-01-09 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 08:00",
                  "2024-01-09 08:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-09 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-09 08:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 00:00",
                  "2024-11-12 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 08:00",
                  "2024-11-12 08:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "00:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "00:00:00",
            "1"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / always_open.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/always_open.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "24/5",
      "name": "每周五天全天市场（通用模型）",
      "aliases": [
        "24/5"
      ],
      "asset": "综合或通用模型",
      "region": "全球通用",
      "timezone": "UTC",
      "quality": "开源日历",
      "period": "2024样例 / 库规则，历史适用性待核实",
      "profiles": [
        {
          "segments": [
            {
              "open": "00:00",
              "close": "00:00",
              "overnight": true,
              "night": false,
              "minutes": 1440.0
            }
          ],
          "minutes": 1440.0,
          "samples": 30,
          "examples": [
            {
              "date": "2024-01-08",
              "utc": [
                [
                  "2024-01-08 00:00",
                  "2024-01-09 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-01-08 08:00",
                  "2024-01-09 08:00"
                ]
              ]
            },
            {
              "date": "2024-07-08",
              "utc": [
                [
                  "2024-07-08 00:00",
                  "2024-07-09 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-07-08 08:00",
                  "2024-07-09 08:00"
                ]
              ]
            },
            {
              "date": "2024-11-11",
              "utc": [
                [
                  "2024-11-11 00:00",
                  "2024-11-12 00:00"
                ]
              ],
              "hongKong": [
                [
                  "2024-11-11 08:00",
                  "2024-11-12 08:00"
                ]
              ]
            }
          ]
        }
      ],
      "rules": {
        "market_open": [
          [
            "None",
            "00:00:00"
          ]
        ],
        "market_close": [
          [
            "None",
            "00:00:00",
            "1"
          ]
        ]
      },
      "notes": [
        "开源模型输出；只抽取2024年1、7、11月各两周，未逐交易所核实全年或全部历史。",
        "别名是库中的映射，不证明全部产品在2024年已上市或一直使用同样时段。",
        "仅计算开市区间；未自动加入盘前、盘后、竞价及库未建模的中断。",
        "综合或通用模型；具体平台、合约与时段阶段需要另查。"
      ],
      "sources": [
        {
          "title": "exchange_calendars / weekday_calendar.py",
          "url": "https://github.com/gerrymanoim/exchange_calendars/blob/master/exchange_calendars/weekday_calendar.py"
        },
        {
          "title": "开源日历覆盖与定义说明",
          "url": "https://pandas-market-calendars.readthedocs.io/en/latest/calendars.html"
        }
      ]
    },
    {
      "id": "official-CBOT-2013",
      "name": "CBOT 玉米/大豆/小麦主要合约",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "官方资料",
      "period": "2013-04-08起的历史公告",
      "profiles": [
        {
          "segments": [
            {
              "open": "19:00",
              "close": "07:45",
              "overnight": true,
              "minutes": 765
            },
            {
              "open": "08:30",
              "close": "13:15",
              "overnight": false,
              "minutes": 285
            }
          ],
          "minutes": 1050,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "公告将21小时缩至17.5小时；中间休45分钟。迷你合约等例外不能直接沿用。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "CBOT 玉米/大豆/小麦主要合约 · 原始资料",
          "url": "https://www.cmegroup.com/media-room/press-releases/2013/3/05/cme_group_announcesreducedgrainandoilseedtradinghoursinresponset.html"
        }
      ]
    },
    {
      "id": "official-CME-GC-2023",
      "name": "COMEX 标准黄金期货 GC",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/Chicago",
      "quality": "官方资料",
      "period": "2023版官方产品卡",
      "profiles": [
        {
          "segments": [
            {
              "open": "17:00",
              "close": "16:00",
              "overnight": true,
              "minutes": 1380
            }
          ],
          "minutes": 1380,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "每天23小时，另有1小时日常维护；不是午休。不能套用2026新产品全天候规则。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "COMEX 标准黄金期货 GC · 原始资料",
          "url": "https://www.cmegroup.com/content/dam/cmegroup/market-regulation/files/gold-futures-and-options-fact-card.pdf"
        }
      ]
    },
    {
      "id": "official-LME-2022",
      "name": "LME Select 工业金属电子盘",
      "aliases": [],
      "asset": "商品期货",
      "region": "欧洲",
      "timezone": "Europe/London",
      "quality": "官方资料",
      "period": "2022官方指南",
      "profiles": [
        {
          "segments": [
            {
              "open": "01:00",
              "close": "19:00",
              "overnight": false,
              "minutes": 1080
            }
          ],
          "minutes": 1080,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "18小时；不是Ring公开喊价、电话市场或LME贵金属时段。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "LME Select 工业金属电子盘 · 原始资料",
          "url": "https://www.lme.com/-/media/Files/Education/Online-resources/Brochures/A-Guide-to-the-LME-2022.pdf"
        }
      ]
    },
    {
      "id": "official-HSI-before",
      "name": "香港恒指期货 · 扩时前",
      "aliases": [],
      "asset": "股指与波动率期货",
      "region": "亚洲",
      "timezone": "Asia/Hong_Kong",
      "quality": "官方资料",
      "period": "2019变更文件中的旧时段",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:15",
              "close": "12:00",
              "overnight": false,
              "minutes": 165
            },
            {
              "open": "13:00",
              "close": "16:30",
              "overnight": false,
              "minutes": 210
            },
            {
              "open": "17:15",
              "close": "01:00",
              "overnight": true,
              "minutes": 465
            }
          ],
          "minutes": 840,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "午休60分钟；另有日夜盘间45分钟。总开市840→960分钟。不能把股指时段套给商品。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "香港恒指期货 · 扩时前 · 原始资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/HKFE/Rule-Update_Rules-Regulations-and-Procedures-of-the-Futures-Exchange/56_19_HKFE_Trading_Hours_Extension_3am_e_markup.pdf"
        }
      ]
    },
    {
      "id": "official-HKmetal-before",
      "name": "香港伦敦金属小型/铁矿石期货 · 扩时前",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Hong_Kong",
      "quality": "官方资料",
      "period": "2019变更文件中的旧时段",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:30",
              "overnight": false,
              "minutes": 450
            },
            {
              "open": "17:15",
              "close": "01:00",
              "overnight": true,
              "minutes": 465
            }
          ],
          "minutes": 915,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "日盘没有午休，总开市915→1035分钟；2019文件口径，不是当前全部商品规则。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "香港伦敦金属小型/铁矿石期货 · 扩时前 · 原始资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/HKFE/Rule-Update_Rules-Regulations-and-Procedures-of-the-Futures-Exchange/56_19_HKFE_Trading_Hours_Extension_3am_e_markup.pdf"
        }
      ]
    },
    {
      "id": "official-HSI-after",
      "name": "香港恒指期货 · 扩时后",
      "aliases": [],
      "asset": "股指与波动率期货",
      "region": "亚洲",
      "timezone": "Asia/Hong_Kong",
      "quality": "官方资料",
      "period": "2019-06-17扩时后的历史时段",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:15",
              "close": "12:00",
              "overnight": false,
              "minutes": 165
            },
            {
              "open": "13:00",
              "close": "16:30",
              "overnight": false,
              "minutes": 210
            },
            {
              "open": "17:15",
              "close": "03:00",
              "overnight": true,
              "minutes": 585
            }
          ],
          "minutes": 960,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "午休60分钟；另有日夜盘间45分钟。总开市840→960分钟。不能把股指时段套给商品。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "香港恒指期货 · 扩时后 · 原始资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/HKFE/Rule-Update_Rules-Regulations-and-Procedures-of-the-Futures-Exchange/56_19_HKFE_Trading_Hours_Extension_3am_e_markup.pdf"
        }
      ]
    },
    {
      "id": "official-HKmetal-after",
      "name": "香港伦敦金属小型/铁矿石期货 · 扩时后",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Hong_Kong",
      "quality": "官方资料",
      "period": "2019-06-17扩时后的历史时段",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "16:30",
              "overnight": false,
              "minutes": 450
            },
            {
              "open": "17:15",
              "close": "03:00",
              "overnight": true,
              "minutes": 585
            }
          ],
          "minutes": 1035,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "日盘没有午休，总开市915→1035分钟；2019文件口径，不是当前全部商品规则。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "香港伦敦金属小型/铁矿石期货 · 扩时后 · 原始资料",
          "url": "https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/HKFE/Rule-Update_Rules-Regulations-and-Procedures-of-the-Futures-Exchange/56_19_HKFE_Trading_Hours_Extension_3am_e_markup.pdf"
        }
      ]
    },
    {
      "id": "official-MCX-2330",
      "name": "印度 MCX 非农商品 · 收市23:30",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Kolkata",
      "quality": "官方文件·第三方托管",
      "period": "2024天然气通告；美方季节时差对应两种收市",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "23:30",
              "overnight": false,
              "minutes": 870
            }
          ],
          "minutes": 870,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "MCX原始通告由券商托管；以天然气品种为依据。无固定1小时午休，其他合约需另核。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "印度 MCX 非农商品 · 收市23:30 · 原始资料",
          "url": "https://www.jainam.in/wp-content/uploads/2024/08/circular-497-2024.pdf"
        }
      ]
    },
    {
      "id": "official-MCX-2355",
      "name": "印度 MCX 非农商品 · 收市23:55",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Kolkata",
      "quality": "官方文件·第三方托管",
      "period": "2024天然气通告；美方季节时差对应两种收市",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "23:55",
              "overnight": false,
              "minutes": 895
            }
          ],
          "minutes": 895,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "MCX原始通告由券商托管；以天然气品种为依据。无固定1小时午休，其他合约需另核。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "印度 MCX 非农商品 · 收市23:55 · 原始资料",
          "url": "https://www.jainam.in/wp-content/uploads/2024/08/circular-497-2024.pdf"
        }
      ]
    },
    {
      "id": "official-Arca",
      "name": "美国 NYSE Arca 股票扩展时段",
      "aliases": [],
      "asset": "股票与 ETF",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "官网现行规则；旧年份起点另核",
      "profiles": [
        {
          "segments": [
            {
              "open": "04:00",
              "close": "20:00",
              "overnight": false,
              "minutes": 960
            }
          ],
          "minutes": 960,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "16小时包含盘前、正常盘、盘后。NYSE其他场所并非都采用04:00开盘；不是完整历史规则。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 NYSE Arca 股票扩展时段 · 原始资料",
          "url": "https://www.nyse.com/trade/hours-calendars"
        }
      ]
    },
    {
      "id": "official-SGXcash",
      "name": "新加坡股票常规交易",
      "aliases": [],
      "asset": "股票与 ETF",
      "region": "亚洲",
      "timezone": "Asia/Singapore",
      "quality": "官方资料",
      "period": "官网规则；历史适用起点另核",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "12:00",
              "overnight": false,
              "minutes": 180
            },
            {
              "open": "13:00",
              "close": "17:00",
              "overnight": false,
              "minutes": 240
            }
          ],
          "minutes": 420,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "午休60分钟，开市420分钟；不含竞价、午间竞价等阶段。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "新加坡股票常规交易 · 原始资料",
          "url": "https://rulebook.sgx.com/rulebook/regulatory-notice-821-trading-hours-market-phases-application-market-phases-and-principles"
        }
      ]
    },
    {
      "id": "official-ICE-SB",
      "name": "美国 ICE 11号糖期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "03:30",
              "close": "13:00",
              "overnight": false,
              "minutes": 570
            }
          ],
          "minutes": 570,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 11号糖期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-ICE-CT",
      "name": "美国 ICE 2号棉花期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "21:00",
              "close": "14:20",
              "overnight": true,
              "minutes": 1040
            }
          ],
          "minutes": 1040,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 2号棉花期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-ICE-KC",
      "name": "美国 ICE 咖啡C期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "04:15",
              "close": "13:30",
              "overnight": false,
              "minutes": 555
            }
          ],
          "minutes": 555,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 咖啡C期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-ICE-CC",
      "name": "美国 ICE 可可期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "04:45",
              "close": "13:30",
              "overnight": false,
              "minutes": 525
            }
          ],
          "minutes": 525,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 可可期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-ICE-OJ",
      "name": "美国 ICE 橙汁期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:00",
              "close": "14:00",
              "overnight": false,
              "minutes": 360
            }
          ],
          "minutes": 360,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 橙汁期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-ICE-RS",
      "name": "美国 ICE 油菜籽期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "北美",
      "timezone": "America/New_York",
      "quality": "官方资料",
      "period": "2026年9月官方表；不可直接套旧数据",
      "profiles": [
        {
          "segments": [
            {
              "open": "20:00",
              "close": "14:20",
              "overnight": true,
              "minutes": 1100
            }
          ],
          "minutes": 1100,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "使用常规日时段；到期日、临时通知及英美夏令时切换周可能另有安排。跨午夜品种从前一营业日开始。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "美国 ICE 油菜籽期货 · 原始资料",
          "url": "https://status.ice.com/publicdocs/futures_us/ICE_Futures_US_Regular_Trading_Hours.pdf"
        }
      ]
    },
    {
      "id": "official-JPX-metals",
      "name": "日本 JPX 贵金属/农产品/能源期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "官方资料",
      "period": "2026-11官网现行连续交易；旧年份另核",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:45",
              "close": "15:40",
              "overnight": false,
              "minutes": 415
            },
            {
              "open": "17:00",
              "close": "05:55",
              "overnight": true,
              "minutes": 775
            }
          ],
          "minutes": 1190,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "只加总连续交易（Zaraba），不把收盘前仅接单与收盘竞价时间算入。每段最后还有约5分钟到收盘竞价；统计完整场次会多约10分钟。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "日本 JPX 贵金属/农产品/能源期货 · 原始资料",
          "url": "https://www.jpx.co.jp/english/derivatives/rules/trading-hours/index.html"
        }
      ]
    },
    {
      "id": "official-JPX-rubber",
      "name": "日本 JPX 橡胶期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "官方资料",
      "period": "2026-11官网现行连续交易；旧年份另核",
      "profiles": [
        {
          "segments": [
            {
              "open": "09:00",
              "close": "15:40",
              "overnight": false,
              "minutes": 400
            },
            {
              "open": "17:00",
              "close": "18:55",
              "overnight": false,
              "minutes": 115
            }
          ],
          "minutes": 515,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "只加总连续交易（Zaraba），不把收盘前仅接单与收盘竞价时间算入。每段最后还有约5分钟到收盘竞价；统计完整场次会多约10分钟。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "日本 JPX 橡胶期货 · 原始资料",
          "url": "https://www.jpx.co.jp/english/derivatives/rules/trading-hours/index.html"
        }
      ]
    },
    {
      "id": "official-JPX-power",
      "name": "日本 JPX 电力期货",
      "aliases": [],
      "asset": "商品期货",
      "region": "亚洲",
      "timezone": "Asia/Tokyo",
      "quality": "官方资料",
      "period": "2026-11官网现行连续交易；旧年份另核",
      "profiles": [
        {
          "segments": [
            {
              "open": "08:45",
              "close": "15:40",
              "overnight": false,
              "minutes": 415
            },
            {
              "open": "16:30",
              "close": "18:55",
              "overnight": false,
              "minutes": 145
            }
          ],
          "minutes": 560,
          "samples": null,
          "examples": []
        }
      ],
      "rules": {},
      "notes": [
        "只加总连续交易（Zaraba），不把收盘前仅接单与收盘竞价时间算入。每段最后还有约5分钟到收盘竞价；统计完整场次会多约10分钟。",
        "手工摘录常规时段，未据此生成完整节假日日历。时段端点计数可能相差1点。"
      ],
      "sources": [
        {
          "title": "日本 JPX 电力期货 · 原始资料",
          "url": "https://www.jpx.co.jp/english/derivatives/rules/trading-hours/index.html"
        }
      ]
    }
  ],
  "failures": [
    {
      "name": "XSGO",
      "stage": "schedule",
      "error": "ValueError(\"'market_close' is not in list\")"
    }
  ],
  "excluded": [
    {
      "name": "CME_TradeDate",
      "reason": "业务日期模型，不代表实际开市时段"
    }
  ],
  "method": "同一Python日历类合并别名；保留两库对同一市场的不同模型。按开市区间相加，扣除库明确建模的休息；大陆夜盘与日盘分段，周末不算交易。样例保留各时段模式和实际UTC/香港日期。分钟数是区间长度，不是端点全包含的时间戳计数。",
  "limitations": [
    "不是全球每个交易所、每份合约的完整数据库。",
    "2024抽样不是匿名数据年份判断，也不证明库对旧年份完整准确。",
    "开市时间相近只能筛选候选，不能确认品种、频率或真实日期。",
    "股票ETF一般参考上市场所，但特定ETF、期权、债券、盘前盘后可能不同。",
    "尚待补齐：马来西亚棕榈油、新加坡商品分合约、日本衍生品历史旧规则、ICE欧洲能源分合约等。马来西亚官方2024年PDF搜索摘要可见，但本次正文读取被拒，未将摘要作为已核实记录。"
  ],
  "providers": [
    {
      "name": "TradingHours.com",
      "type": "商业数据库",
      "url": "https://www.tradinghours.com/data",
      "description": "提供全球多资产时段、假日、夏令时及历史数据；具体产品、历史起点与API权限需核对套餐。本表未购买或读取其付费数据。"
    },
    {
      "name": "pandas_market_calendars",
      "type": "免费开源",
      "url": "https://github.com/rsheftel/pandas_market_calendars",
      "description": "本表主要批量来源，含商品/股指/利率期货、外汇与股票等日历，也引入另一开源库。"
    },
    {
      "name": "exchange_calendars",
      "type": "免费开源",
      "url": "https://github.com/gerrymanoim/exchange_calendars",
      "description": "提供全球多地证券交易日历；本表经前一库读取其部分定义。"
    },
    {
      "name": "交易所产品规格与历史通告",
      "type": "官方原件",
      "url": "https://www.cmegroup.com/trading-hours.html",
      "description": "候选缩小后核实具体合约、时段阶段和历史生效日期。每条人工记录另附对应交易所原件。"
    }
  ]
};

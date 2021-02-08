export const Picker = {
  // pickertype：选择器类型
  gslx: {
    title: "公司类型",
    data: [ //公司类型
      {
        text: "政府机构",
        value: "1",
      }, {
        text: "国营企业",
        value: "2",
      }, {
        text: "私营企业",
        value: "3",
      }, {
        text: "外资企业",
        value: "4",
      }, {
        text: "个体工商户",
        value: "5",
      }, {
        text: "事业单位",
        value: "7",
      }
    ],
  },
  Yxq: {
    title: "有效期类型",
    data: [ // 有效期类型
      {
        text: "长期有效",
        value: "1",
      },
      {
        text: "非长期有效",
        value: "0",
      },
    ],
  },
  idNoLx: {
    title: "法人证件类型",
    data: [ //法人证件类型
      {
        text: "身份证",
        value: "00",
      },
      {
        text: "护照",
        value: "01",
      },
      {
        text: "军官证",
        value: "02",
      },
      {
        text: "士兵证",
        value: "03",
      },
      {
        text: "回乡证",
        value: "04",
      },
      {
        text: "户口本",
        value: "05",
      },
      {
        text: "外国护照",
        value: "06",
      },
      {
        text: "其他",
        value: "07",
      },
      {
        text: "暂住证",
        value: "08",
      },
      {
        text: "警官证",
        value: "09",
      },
      {
        text: "文职干部证",
        value: "10",
      },
      {
        text: "港澳同胞回乡证",
        value: "11",
      },
    ],
  },
  micro_biz_type: {
    title: "经营类型",
    data: [ // 经营类型
      {
        text: "门店场所",
        value: "MICRO_TYPE_STORE",
      }, {
        text: "流动经营/便民服务",
        value: "MICRO_TYPE_MOBILE",
      },{
        text: "线上商品/服务交易",
        value: "MICRO_TYPE_ONLINE",
      },
    ],
  },
  card_type: {
    title: "卡类型",
    data: [ //卡类型
      {
        text: "对公",
        value: "0",
      }, {
        text: "对私",
        value: "1",
      },
    ]
  }
}
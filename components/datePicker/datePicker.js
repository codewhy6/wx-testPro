const {
  default: toast
} = require("../../miniprogram_npm/@vant/weapp/toast/toast");

// components/datePicker/datePicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 当前选中的值
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    // 选择器类型
    currentkey: {
      type: String,
      value: ''
    },
    // 是否是红心标记
    required: {
      type: Boolean,
      value: false
    },
    // 错误信息
    errorMsg: {
      type: String,
      value: ''
    },
    // 是否显示错误信息
    errorMsgFlag: {
      type: Boolean,
      value: false
    },
    // 是否显示错误模块
    errFlag: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pickerDateVisible: false, //--时间选择器的显示和隐藏
    currentDate: new Date().getTime(), //--当前的时间
    formatter(type, value) { //--格式化时间
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      } else if (type === 'day') {
        return `${value}日`;
      }
      return value;
    },
    currentkey: '', // 当前选择的对象
    targetData: {}, // 选择器选中的新的数据的对象，需要传递给父组件
    formatTime(date, sym = '') {
      const year = date.getFullYear()
      const month = (date.getMonth() + 1 + '').padStart(2, '0')
      const day = (date.getDate() + '').padStart(2, '0')
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
      // return [year, month, day].map(this.data.formatNumber()).join(sym)
      if (sym.toLowerCase() == 'yyyy-mm-dd') {
        return year + '-' + month + '-' + day;
      } else {
        return `${year}${month}${day}`
      }
    },
    value1: '1',
    value2: '1',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击遮罩层，关闭弹窗
    onCloseDatePopup(e) {
      this.setData({
        pickerDateVisible: false,
      })
      this.closeDatePicker(e)
    },
    // 打开
    openDatePicker(e) {
      let {
        currentkey,
        currentconfig
      } = e.currentTarget.dataset
      this.setData({
        pickerDateVisible: true,
        currentkey: currentkey,
        currentconfig: currentconfig,
        currentDate: new Date().getTime()
      })
    },
    //关闭
    closeDatePicker(e) {
      this.setData({
        pickerDateVisible: false,
        errorMsg: `请填写${this.data.title}！`,
        errorMsgFlag: true, //--第一次没有值，点击取消后显示错误提示信息
      })
      let targetData = this.data.targetData
      let currentkey = this.data.currentkey || e.currentTarget.dataset.currentkey
      // console.log(currentkey); 有值之后第二次点击取消，不能显示错误信息
      if (targetData[currentkey] && targetData[currentkey].value != '') {
        this.setData({
          errorMsgFlag: false
        })
      }
    },
    //选择
    onSelectDate(e) {
      // console.log(e, 'e.detail')
      let targetData = this.data.targetData
      let currentkey = this.data.currentkey || e.currentTarget.dataset.currentkey
      let currentconfig = this.data.currentconfig || e.currentTarget.dataset.currentconfig
      if (currentconfig) {
        targetData[currentconfig][currentkey] = this.data.formatTime(new Date(e.detail))
      } else {
        targetData[currentkey] = this.data.formatTime(new Date(e.detail))
      }

      // 点击确定，有值，不显示错误提示
      if (e.detail.value) {
        this.setData({
          errorMsg: '',
        })
      }
      // detail对象，提供给事件监听函数,将数据传送给父组件
      var myEventDetail = {
        targetData: targetData
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('onDatePickerSelect', myEventDetail, myEventOption)
      // 选中一个值，就要关闭选择器
      this.setData({
        targetData: targetData,
        pickerDateVisible: false,
        // 选中的值
        value: this.data.formatTime(new Date(e.detail), 'yyyy-mm-dd'),
        value2: '0',
        errorMsgFlag: false
      })
      // console.log(this.data, "onSelect")
    },

    // 给字符串 添加/删除 修饰符
    formatStrSign(str, type, sign, signLength) {
      if (!str || str.trim().length == 0) return
      // 20201231
      if (type == 'del') {
        str = str.replace(/[\.-\/]/g, '')
        return str
      } else if (type == 'add') {
        str = str.replace(/[\.-\/]/g, '')
        str = `${str.substring(0,signLength[0])}${sign}${str.substring(signLength[0],signLength[1])}${sign}${str.substr(signLength[1],8)}`
        return str
      }
    },
    noop() {},
  },
  lifetimes: {
    attached() {
      // console.log(this.formatStrSign(this.data.value, 'add', '.', [4, 6]));
      // console.log(this.formatStrSign('2020.12.23','del'));
      if (!this.data.value || this.data.value.trim().length == 0 || this.data.value == '') {
        return
      } else {
        let val=this.formatStrSign(this.data.value, 'add', '.', [4, 6])
        this.setData({
          value: this.data.formatTime(new Date(val), "yyyy-mm-dd"),
          value2: '0',
          errFlag:false,
          errorMsg: '',
        })
      }
    },
  }
})
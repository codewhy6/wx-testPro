// pages/home/home.js
let app=getApp()
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:300,
    number:30
  },
  myOnPullDownRefresh: function (event) {
  	//模拟数据请求 
    setTimeout(() => {
      this.data.number+=10
      this.setData({
        number:this.data.number
      })
      event.detail.resolve();//告诉组件完成下拉刷新，如果超过5s不调用，下拉刷新效果也会消失
      Toast({
        message: '刷新成功！',
        position:'top'
      });
	}, 1000)
  },
  mylower:function(){
    //todo 这里会触发触底事件，可以处理自己的上拉加载逻辑
    this.data.number+=10
    this.setData({
      number:this.data.number
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
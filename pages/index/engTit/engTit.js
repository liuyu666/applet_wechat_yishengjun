// pages/index/engTit/engTit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['四级英语','六级英语','顺序单词','乱序单词']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choice:function(e){
    console.log(e.target.dataset.eng);
    let n = e.target.dataset.eng
    switch (n) {
      case 0:
        wx.navigateTo({
          url: '../english/english',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../english/english',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../english/english',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      case 3:
        wx.navigateTo({
          url: '../english/english',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      default:
        console.log(n);
        break;
        
    }
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
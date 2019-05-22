// pages/index/engTit/engTit.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['近代史', '思修', '军事理论', '毛概','马克思']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choice: function (e) {
    console.log(e.target.dataset.eng);
    let n = e.target.dataset.eng;
    let which = "";
    switch (n) {
      case 0:
        which = "questionbank";
        app.globalData.type = which;
        wx.navigateTo({
          url: '../title/title?type=' + which,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        break;
      case 1:
        which = "sixiu";
        app.globalData.type = which;
        wx.navigateTo({
          url: '../title/title?type=' + which,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        break;
      case 2:
        which = "militarytheory";
        app.globalData.type = which;
        wx.navigateTo({
          url: '../title/title?type=' + which,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      case 3:
        which = "maogai";
        app.globalData.type = which;
        wx.navigateTo({
          url: '../title/title?type=' + which,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      case 4:
        which = "marx";
        app.globalData.type = which;
        wx.navigateTo({
          url: '../title/title?type=' + which,
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
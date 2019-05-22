// pages/project/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:null,
    join:"立即参加"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      user_id: options.type
    })
    console.log(this.data.user_id);
    var id = this.data.user_id;
    wx.request({
      url: 'https://liuyuweb.cn/lbl/project/queryAll.do',  //这里''里面填写你的服务器API接口的路径  
      data: { pid: id },  //这里是可以填写服务器需要的参数 可以写变量id 
      //https://liuyuweb.cn/lbl_pkt/project/queryTitle.do?oppenId=o-QcJ41E6oAJtQ8iz0RhWdRzCvos
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log(JSON.stringify(res.data))//返回的会是对象，可以用JSON转字符串打印出来方便查看数据 
        that.setData({//获取数据成功后的数据绑定  
          dataList: res.data
        });
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
      },
      fail: function (fail) {
        // 这里是失败的回调，取值方法同上,把res改一下就行了  
      },
      complete: function (arr) {
        // 这里是请求以后返回的所以信息，请求方法同上，把res改一下就行了  
      }
    })
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
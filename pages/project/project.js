// pages/project/project.js
Page({
  data: {
    display_mine:'block',
    display_more:'none',
    border_mine:'4rpx solid lightgreen',
    border_more:'4rpx solid white',
    mine_color:'white',
    dataList:null,
    more_color:'orange',
    mine_pro_pic:[],
    more_pro_pic: [{
      pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/cOwpsjAgWuKSHQWxEXDdKpK9NWxJVSO16DKg207MqlE!/b/dEABAAAAAAAA&bo=BQNTAQAAAAADB3Y!&rf=viewer_4'
    }, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/dSHF0coLg48HIEGCHYIVkXOTFhUkUWCMyY4z6FTUYwE!/b/dDIBAAAAAAAA&bo=BQN4AQAAAAADF00!&rf=viewer_4'
      }, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/TMgpspSJsZ3afs5spbCoqRAVsj0PeqNT2qwcswc09jA!/b/dDIBAAAAAAAA&bo=BQN2AQAAAAADF0M!&rf=viewer_4'
      }]
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    // var id=1;//题号变量，之后作为传递给服务器的数据
    var openid = getApp().globalData.oppenId;
    console.log(openid);
    wx.request({
      url: 'https://liuyuweb.cn/lbl/project/queryTitle.do',  //这里''里面填写你的服务器API接口的路径  
      data: { oppenId: openid },  //这里是可以填写服务器需要的参数 可以写变量id 
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
  mine:function(){
    this.setData({
      display_mine: 'block',
      display_more: 'none',
      mine_color: 'white',
      more_color: 'orange',
    })
  },
  more: function () {
    this.setData({
      display_more: 'block',
      display_mine: 'none',
      mine_color: 'orange',
      more_color: 'white',
    })
  },
  image:function(e){
    var which = e.target.dataset.name;
    console.log(which);
    if (which == "num1") {
      var content = which;
      console.log(content);
      wx.navigateTo({
        url: 'news/news'
      })
    }
  },
  detail(e){
    console.log(e.target.dataset.pid);
    wx.navigateTo({
      url: 'detail/detail?type=' + 1
    })
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
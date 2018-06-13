// pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display_mine:'block',
    display_more:'none',
    border_mine:'4rpx solid lightgreen',
    border_more:'4rpx solid white',
    mine_color:'white',
    more_color:'orange',
    mine_pro_pic:[{
      pro_image:'http://m.qpic.cn/psb?/V10g3NZ433DhLq/cOwpsjAgWuKSHQWxEXDdKpK9NWxJVSO16DKg207MqlE!/b/dEABAAAAAAAA&bo=BQNTAQAAAAADB3Y!&rf=viewer_4'
    }, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/dSHF0coLg48HIEGCHYIVkXOTFhUkUWCMyY4z6FTUYwE!/b/dDIBAAAAAAAA&bo=BQN4AQAAAAADF00!&rf=viewer_4'
      }, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/TMgpspSJsZ3afs5spbCoqRAVsj0PeqNT2qwcswc09jA!/b/dDIBAAAAAAAA&bo=BQN2AQAAAAADF0M!&rf=viewer_4'
      }],
    more_pro_pic: [{
      pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/.01JNqUGMlLe5gMdxnPG41hll8Vezaa0nUA1VrcFx5E!/b/dEEBAAAAAAAA&bo=BgNNAQAAAAADB2s!&rf=viewer_4',id:'num1'}, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/82hH*WOvRsUxIyctS5NJ.XeGGcNZKbI3MVbj6rk6rPg!/b/dDEBAAAAAAAA&bo=BgN1AQAAAAADF0M!&rf=viewer_4', id: ''}, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/9viuWmgNCUrD1CEhfKKZgaezoG9VmZWCXRFZw7fDefE!/b/dGcBAAAAAAAA&bo=BgMPAQAAAAADFzk!&rf=viewer_4', id: ''}, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/Mt1pMJur90pNnPGKZeCWhHz0I.RZqtZIoCqqPx.JZas!/b/dIMAAAAAAAAA&bo=BgN4AQAAAAADF04!&rf=viewer_4', id: ''}, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/dSHF0coLg48HIEGCHYIVkXOTFhUkUWCMyY4z6FTUYwE!/b/dDIBAAAAAAAA&bo=BQN4AQAAAAADF00!&rf=viewer_4', id: ''}, {
        pro_image: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/TMgpspSJsZ3afs5spbCoqRAVsj0PeqNT2qwcswc09jA!/b/dDIBAAAAAAAA&bo=BQN2AQAAAAADF0M!&rf=viewer_4', id: ''}]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
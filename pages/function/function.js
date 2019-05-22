Page({
  data: {
    big_title: "益点益滴主要功能",
    more: "更多",
    course_con: [
      { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/ij*PATNRa3STfBgHMLR*mYbysvIjPyhn4Vg8RJGOLZw!/b/dEMBAAAAAAAA&bo=yADIAAAAAAADByI!&rf=viewer_4", text: "早起益点"},
      // { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/Jbm99fdiS*qFsaA4Mn8g1oQFqZerb6dkYc*HiZG*cfc!/b/dEQBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4", text: "益点杂货铺" },
      { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/g7CD9uqyzjpUGgXa1bn2ELh*xOXACeGwP.bjPjAUC0o!/b/dDABAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4", text: "益点答题" },
      { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/rzyMFY.umjHBZDrWaVBsHiuyqonpKe2iDJmwNCiRv74!/b/dDIBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4", text: "益点单词本"},
      // { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/uiROfleexdS1lwohg0vUNTHkhK2XdmJ0wtLPxBFeqD0!/b/dDABAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4", text: "轻松益点"},
      { url: "http://m.qpic.cn/psb?/V10g3NZ433DhLq/jA.Fu9.zXoo5yaL0ijQMz1ekTd3TiiXGfNIGG6qZaww!/b/dEEBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4", text: "益米粒社区" }
    ],
  },
  /**
   * 页面的初始数据
   * data-name='{{item.num}}
   */
  func:function(e){//首先判断点击了哪个功能
    var which = e.target.dataset.name;
    console.log(e.target.dataset.name);
    if (which == "早起益点") {
      console.log(which);
      wx.navigateTo({
        url: 'func1/func1?type='+which
      })
    } else if (which == "益点杂货铺") {
      console.log(which);
      wx.navigateTo({
        url: 'func2/func2?type=' + which
      })
    } else if (which == "益点答题") {
      console.log(which);
      wx.navigateTo({
        url: '../../../../index/title/title'
      })
    } else if (which == "益点单词本") {
      console.log(which);
      wx.navigateTo({
        url: '../../../../index/english/english'
      })
    } else if (which == "轻松益点") {
      console.log(which);
      wx.navigateTo({
        url: 'func1/func1?type=' + which
      })
    } else if (which == "益米粒社区") {
      console.log(which);
      wx.navigateTo({
        url: 'func1/func1?type=' + which
      })
    }
  }
})
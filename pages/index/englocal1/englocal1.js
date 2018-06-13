// pages/index/word/word.js
//引入本地json数据，这里引入的就是第一步定义的json数据  
var postData1 = require('../../../data/local_data1.js');
Page({
  data: {//data在onload执行之后执行  
    color: 'green',
    yes: "none",
    num: "none",
    disabled: false
  },
  onLoad: function () {
    console.log(postData1.postList);
    this.setData({//获取数据成功后的数据绑定  
      dataList: postData1.postList,
    });
  },
  reg: function (e) {
    //判断对错
    console.log(e.detail.value);
    var val = e.detail.value;//提交获得value
    console.log(val);
    this.setData({//只能提交一次
      disabled: true
    })
    if (val[1] == "A") {//判断是否正确
      this.setData({
        yes: "yes",
        you: val[1],
        num: "true",
        answer: "A"
      })
    }
    else {
      this.setData({
        yes: "yes",
        you: val[1],
        num: "false",
        answer: "A"
      })
    }
    // //判断对错，并且呈现出来 
  },
  next: function () {
    wx.redirectTo({
      url: '../englocal/englocal',
    })
  }
})
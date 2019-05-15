var app = getApp();
Page({
  data: {//在onload之后执行
    color: 'green',
    yes: "none",
    num: "none",
    disabled: false
  },
  onLoad: function () {
    var that = this;
    // var id=1;//题号变量，之后作为传递给服务器的数据
    var openid = getApp().globalData.oppenId;
    console.log(openid);
    wx.request({
      url: 'https://liuyuweb.cn/lbl/question/queryQuestionPro.do',  //这里''里面填写你的服务器API接口的路径  
      data: { oppenId: openid },  //这里是可以填写服务器需要的参数 可以写变量id 
      //https://liuyuweb.cn/lbl/question/queryQuestionPro.do?oppenId=o-QcJ41E6oAJtQ8iz0RhWdRzCvos
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        app.globalData.answer = res.data;//提升全局变量
        console.log("返回成功的数据:" + JSON.stringify(res.data))//返回的会是对象，可以用JSON转字符串打印出来方便查看数据 
        that.setData({//获取数据成功后的数据绑定  
          dataList: [res.data[0]]
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
  reg: function (e) {

    //判断对错
    var val = e.detail.value;//提交获得value
    console.log(JSON.stringify(val) + "数据数据a");
    var index = getApp().globalData.answer[0].id;
    console.log('success' + index);
    var ans = getApp().globalData.answer[0].answer;
    console.log(val[index] + "bsbx");
    this.setData({//只能提交一次
      disabled: true
    })
    if (val[index] == ans) {//判断是否正确
      this.setData({
        yes: "yes",
        you: val[index],
        num: "true",
        answer: ans
      })
    }
    else {
      this.setData({
        yes: "yes",
        you: val[index],
        num: "false",
        answer: ans
      })
    }
    // //判断对错，并且呈现出来

    // console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦 
  },
  next: function () {
    
        wx.redirectTo({
          url: '../title/title',
        })
  }

})












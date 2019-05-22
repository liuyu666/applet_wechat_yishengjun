var app = getApp();
Page({
  data: {//在onload之后执行
    color: 'green',
    tit:'',
    yes: "none",
    num: "none",
    disabled: false,
    dataList: [],
    nextEng:''
  },
  onLoad: function () {
    var that = this;
    var arr = [];
    var obj = {};
    var choice = [];
    var an = null;
    var num = null;
    var openid = getApp().globalData.oppenId;
    console.log(openid);
    // var id=1;//题号变量，之后作为传递给服务器的数据
    wx.request({
      url: 'https://liuyuweb.cn/lbl/word/queryWord.do',  //这里''里面填写你的服务器API接口的路径  
      data: { oppenId: openid},  //这里是可以填写服务器需要的参数 可以写变量id 
      //https://liuyuweb.cn/lbl/word/queryWord.do?oppenId=o-QcJ41E6oAJtQ8iz0RhWdRzCvos
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        var arr = res.data;
        console.log(arr)
        arr.forEach(function (item, index) {
          if(item.res=='true'){//正确，将第几个存入全局变量
            app.globalData.answer = item.answer;
          }
        });
        console.log("返回成功的数据:" + JSON.stringify(res.data)); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        // obj = res.data;
        that.setData({//获取数据成功后的数据绑定  
          dataList: res.data,
          tit: res.data[0].word,
          nextEng:"下一题"
        })
      },
      fail: function (fail) {
        // 这里是失败的回调，取值方法同上,把res改一下就行了  
      },
      complete: function (arr) {
        // 这里是请求以后返回的所以信息，请求方法同上，把res改一下就行了  
      }
    })
  },
  sub: function (e) {
      var choice = e.target.dataset.val;
        console.log(choice);
      // console.log(e);
      // console.log(e.currentTarget.dataset.val);
    //判断对错
    var ans = getApp().globalData.answer;
    // var choice = getApp().globalData.choice;
    this.setData({//只能提交一次
      disabled: true
    })
    if (choice == ans) {//判断是否正确
      this.setData({
        yes: "yes",
        you: choice,
        num: "true",
        answer: ans
      })
    }
    else {
      this.setData({
        yes: "yes",
        you: choice,
        num: "false",
        answer: ans
      })
    }
  },
  next: function () {
        wx.redirectTo({
          url: '../english/english'
        })
  }

})







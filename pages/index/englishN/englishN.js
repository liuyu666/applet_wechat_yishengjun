

// var id = id;
var app = getApp();
Page({
  data: {//在onload之后执行
    color: 'green',
    yes: "none",
    num: "none",
    disabled: false
  },
  onLoad: function (option) {
    console.log(option.type);
    var id = option.type;
    console.log(id);//接受上个页面传递回来的参数
    var that = this;
    var arr = [];
    var obj = {};
    var choice = [];
    var an = null;
    var num = null;
    // var id = 1;//题号变量，之后作为传递给服务器的数据
    wx.request({
      url: 'https://39.107.240.56:8443/lbl/word/selectWord.do',  //这里''里面填写你的服务器API接口的路径  
      data: { wechatid: 1 },  //这里是可以填写服务器需要的参数 可以写变量id 
      method: 'POST', // 声明GET请求  
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        app.globalData.answer = res.data;//提升全局变量
        console.log("返回成功的数据:" + res.data); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        obj = res.data;
        function toObj1(key1, val1, key2, val2) {
          var data = {};
          data[key1] = val1;
          data[key2] = val2;
          return data;
        }

        for (var Key in obj) {
          an = toObj1("ind", Key, "val", obj[Key]);
          // an = '{' + Key + ':' + obj[Key] + '}';
          console.log(an);
          num = arr.push(an);
        }
        console.log(arr);
        console.log(arr[2]);
        for (var i = 2; i < 6; i++) {
          choice.push(arr[i]);
        }
        console.log(choice);
        function shuffle(v) {
          for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
          return v;
        }
        shuffle(choice);
        app.globalData.choice = choice;//提升全局变量
        // console.log(choice[0][Object.keys(choice[0])]);
        that.setData({//获取数据成功后的数据绑定  
          dataList: choice,
          tit: res.data.word
        });
        console.log(res.data + 'uuu');
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
      },
      fail: function (fail) {
        // 这里是失败的回调，取值方法同上,把res改一下就行了  
      },
      complete: function (arr) {
        // 这里是请求以后返回的所有信息，请求方法同上，把res改一下就行了  
      }
    });
    console.log(id + "haha");
    return (id);
  },
  sub: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.val);
    //判断对错
    // console.log(e.detail.value + 'www');
    var val = e.currentTarget.dataset.val;//提交获得value
    console.log(val + "数据数据aaaa");
    console.log(JSON.stringify(val) + "数据数据a");
    var ans = getApp().globalData.answer.answer;
    var choice = getApp().globalData.choice;
    console.log(choice + '[[[[]]]');
    console.log(JSON.stringify(choice) + "数据数据aaaa");
    this.setData({//只能提交一次
      disabled: true
    })
    if (val == ans) {//判断是否正确
      this.setData({
        yes: "yes",
        you: val,
        num: "true",
        answer: ans
      })
    }
    else {
      this.setData({
        yes: "yes",
        you: val,
        num: "false",
        answer: ans
      })
    }
  },
  reg: function (e) {
    wx.getStorage({//得到上一个界面的题号
      key: 'id',
      success: function (res) {
        var id = res.data;//题号+1，传入下一个界面
        console.log(res.data);
        app.globalData.index = id;//提升全局变量

      }
    });
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

    wx.getStorage({//得到上一个界面的题号
      key: 'id',
      success: function (res) {
        var id = res.data + 1;//题号+1，传入下一个界面
        console.log(res.data);
        wx.setStorage({
          key: 'id',
          data: id,
          success: function (res) {
            wx.redirectTo({
              url: '../englishN/englishN?type=' + id
            })
          }
        })
      }
    });
  }

})
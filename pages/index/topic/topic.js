// pages/index/english/english.js

// var postData = require("../../../data/local_data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {//在onload之后执行
    color:'green',
    yes:"none",
    num:"none",
    disabled:false
  },
  onLoad: function () {
    var that = this; 
    wx.request({
      url: 'http://192.168.137.11:8081/QuestionBank/QuestionServlet',  //这里''里面填写你的服务器API接口的路径  
      data: {},  //这里是可以填写服务器需要的参数  
      method: 'GET', // 声明GET请求  
      // header: {}, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data) //返回的会是对象，可以用JSON转字符串打印出来方便查看数据 
        // var postData = res.data;
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
  reg: function (e) {
    wx.request({
      url: 'http://192.168.137.11:8081/QuestionBank/QuestionServlet',  //这里''里面填写你的服务器API接口的路径  
      data: Util.json2Form({ cityname: "吉林", key: "1234567890" }),  //这里是可以填写服务器需要的参数  
      method: 'POST', // 声明GET请求  
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data) //返回的会是对象，可以用JSON转字符串打印出来方便查看数据 
        postData = res.data;
        console.log(postData[0].answer);
        that.setData({//获取数据成功后的数据绑定  
          dataList: res.data
        });
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦 

        //判断对错
        var val = e.detail.value;//提交获得value
        var ans = postData[0].answer;
        console.log(val[1]);
        this.setData({//只能提交一次
          disabled: true
        })
        if (val[1] == ans) {//判断是否正确
          this.setData({
            yes: "yes",
            you: val[1],
            num: "true",
            answer: ans
          })
        }
        else {
          this.setData({
            yes: "yes",
            you: val[1],
            num: "false",
            answer: ans
          })
        }
      //判断对错，并且呈现出来


      }
    })
  },
  next:function(){
    wx.redirectTo({
      url: 'english'
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
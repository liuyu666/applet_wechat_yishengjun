//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picture: [
      { url: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/gDJII9PO.WtY0L6ijyHakfnloXAWNAzYtCj6HyVUPFQ!/b/dEMBAAAAAAAA&bo=FQQ5AgAAAAADBwg!&rf=viewer_4', num:'num1' },
      { url: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/cd*yyte.fvpCwNb1uw0N6vv18GMtCCu2ezx*iVO0QaQ!/b/dJUAAAAAAAAA&bo=igLnAQAAAAADB0w!&rf=viewer_4', num: 'num2' },
      { url: 'http://m.qpic.cn/psb?/V10g3NZ433DhLq/AZvdXml9WGSlGKGpRjwZYR*OzLsQebS1RjlJH8G6z5w!/b/dJUAAAAAAAAA&bo=TASAAgAAAAADB.g!&rf=viewer_4', num: 'num3' }
    ],
    step_num:'3024',
    step_word:'今日步数',
    step_com:'相当于绕标准田径场两圈的长度',
    english_num:'',
    english_word:'',
    english_click:'',
    learn: [{ english_word: '今日背单词', english_num: '30个', english_com: '去背单词' }, { english_word: '今日刷题', english_num: '20道', english_com: '去刷题' }],
    clock_in:'早起打卡',
    clock_click: '点击打卡',
    disabled:false
  },
  //事件处理函数
  onLoad:function(){
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://liuyuweb.cn/lbl/user/addUser.do',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res.data);
              app.globalData.oppenId = res.data.openid;
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  swiper:function(e){
    var which = e.target.dataset.name;
    console.log(which);
    if (which == "num1") {
      var con = which;
      console.log(con);
      wx.navigateTo({
        url: 'english/english'
      })
    } else if (which == "num2") {
      var con = which;
      console.log(con);
      wx.navigateTo({
        url: 'topic/topic'
    })
    } else if (which == "num3") {
      var con = which;
      console.log(con);
      wx.navigateTo({
        url: 'topic/topic'
      })
    };
  },
  clockClick: function () {
    var that = this;
    var openid = getApp().globalData.oppenId;
    console.log(openid);
    wx.request({
      url: 'https://liuyuweb.cn/lbl/word/queryWord.do',  //这里''里面填写你的服务器API接口的路径  
      data: { oppenId: openid },  //这里是可以填写服务器需要的参数 可以写变量id 
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
        if (res.data != -1) {
          wx.showToast({
            title: '已打卡',
            icon: 'success',
            duration: 2000
          });
          that.setData({
            clock_click: '点击打卡',
            disabled: true
          })
        } else if (res.data = -1){
          wx.showToast({
            title: '请勿重复打卡',
            icon: 'success',
            duration: 2000
          });
          that.setData({
            clock_click: '已打卡',
            disabled: true
          })
        }
      },
      fail: function (fail) {
        // 这里是失败的回调，取值方法同上,把res改一下就行了  
      },
      complete: function (arr) {
        // 这里是请求以后返回的所以信息，请求方法同上，把res改一下就行了  
      }
    })



  },
  //点击背单词或者刷题，跳转，后来加路由引入新页面
  englishClick: function(e) {
    var which = e.target.dataset.name;
    console.log(which);
    if (which == "去刷题") {
      var content = which;
      console.log(content);
      wx.navigateTo({
        url: 'title/title?type=' + content
      })
    } else if (which == "去背单词") {
      var content = which;
      console.log(content);
      wx.navigateTo({
        url: 'english/english'
      })
    };
    
  }
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})

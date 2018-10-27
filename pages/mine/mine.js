// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"http://m.qpic.cn/psb?/V10g3NZ433DhLq/pLZxDFOIe9slG96oui0SYyxP3TvCnKlZ9Ga*p6JXlRg!/b/dCEBAAAAAAAA&bo=vwO*AwAAAAARBzA!&rf=viewer_4",
    lv:'1',
    credit:'206',
    obj:[{
      url1:'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
      url2: '../../image/右.png',
      word:'我的消息'
    }, {
      url1: 'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
      url2: '../../image/右.png',
      word: '我的成果'
      }, {
        url1: 'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
        url2: '../../image/右.png',
        word: '邀请小伙伴'
    }, {
      url1: 'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
      url2: '../../image/右.png',
      word: '问题反馈'
      }, {
        url1: 'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
        url2: '../../image/右.png',
        word: '关于我们'
      },
      {
        url1: 'http://a4.qpic.cn/psb?/V10g3NZ433DhLq/Vk1Rw3UlQeX3CfV*NjRw0D3wLm6RO69WEEQaY7G6kKw!/m/dPMAAAAAAAAAnull&bo=QABAAAAAAAADByI!&rf=photolist&t=5',
        url2: '../../image/右.png',
        word: '更多'
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://39.107.240.56:8443/lbl/user/queryUser.do',  //这里''里面填写你的服务器API接口的路径  
      data: { wechatid: "1" },  //这里是可以填写服务器需要的参数 可以写变量id 
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
        console.log("返回成功益米粒:" + res.data.credit);
        that.setData({//获取数据成功后的数据绑定  
          credit: res.data.credit
        });
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
  onShow: function (options) {
    var that = this;
    wx.request({
      url: 'https://39.107.240.56:8443/lbl/user/queryUser.do',  //这里''里面填写你的服务器API接口的路径  
      data: { wechatid: "1" },  //这里是可以填写服务器需要的参数 可以写变量id 
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
        console.log("返回成功益米粒:" + res.data.credit);
        that.setData({//获取数据成功后的数据绑定  
          credit: res.data.credit
        });
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
  onPullDownRefresh: function (options) {
    var that = this;
    wx.request({
      url: 'https://39.107.240.56:8443/lbl/user/queryUser.do',  //这里''里面填写你的服务器API接口的路径  
      data: { wechatid: "1" },  //这里是可以填写服务器需要的参数 可以写变量id 
      method: 'POST', // 声明GET请求
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header，GET请求可以不填 
      success: function (res) {
        console.log("返回成功的数据:" + res.data); //返回的会是对象，可以用JSON转字符串打印出来方便查看数据
        console.log("返回成功的数据:" + JSON.stringify(res.data)) //这样就可以看到后台的数据啦  
        console.log("返回成功益米粒:" + res.data.credit);
        that.setData({//获取数据成功后的数据绑定  
          credit: res.data.credit
        });
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
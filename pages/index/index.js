// pages/login/login.js
Page({
  data: {
   
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    console.log("openid", getApp().globalData.openid);
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成


  }, 
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  
  showToast: function (content, duration) {
    content = content || this.data.toastContent;
    duration = duration || 3;
    this.setData({
      'toastContent': content,
      "toastShow": true
    });

    setTimeout(() => {
      this.setData({
        "toastShow": false
      })
    }, duration * 1000)

  },
  onShareAppMessage: function () {
    var that = this
    return {
      title: "妈宝，让订房更轻松",
      path: '/pages/loading/index',
      success: function (res) {
        wx.showShareMenu({
          shareTicket: '妈宝，让订房更轻松',
          withShareTicket: true
        })
      },
      fail: function (res) {
        console.log("转发失败")
      }
    }
  }
})

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // bindViewTap.log('bindViewTap', url)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goUrl: function(event) {
    console.log('goUrl', event)
    let url = event.currentTarget.dataset.url
    if (url) {
      wx.navigateTo({
        url: url
      })
    }
  },

  onLoad: function () {
    console.log('pages/list onLoad')
  }
})

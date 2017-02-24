/**
 * @fileoverview alert demo
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-24
 */

const CI = require('../../cafeinit/index')

Page(Object.assign({}, CI.Alert, {
  data: {
    isDebug: true,
    ciToastData: {
      text: 'hello cafeinit',
      isShow: false
    }
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onReady', this)
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  // methods
  showAlert() {
    this.ciAlertShow({
      title: 'Alert',
      content: 'Hello CafeInit',
      okText: 'Rock on!'
    })
  },

  // ci delegate methods
  ciAlertDidHide(data) {
    console.log('ciAlertDidHide', data)
  }
}))

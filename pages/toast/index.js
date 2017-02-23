/**
 * @fileoverview toast demo
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-22
 */

const CI = require('../../cafeinit/index')

Page(Object.assign({}, CI.Tabs, CI.Toast, {
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
  showToast() {
    this.ciToastShow({
      text: 'Hello CafeInit',
      // isLock: true,
      // duration: 0
    })
  },

  // ci delegate methods
  ciToastOnTap(data) {
    console.log('ciToastOnTap', data)
  }
}))

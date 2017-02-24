/**
 * @fileoverview alert demo
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-24
 */

const CI = require('../../cafeinit/index')

Page(Object.assign({}, CI.Alert, CI.Confirm, {
  data: {
    // isDebug: true
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
      title: 'Title',
      content: 'Hello CafeInit'
    })
  },

  showAlert1() {
    this.ciAlertShow({
      className: 'rock-alert',
      content: 'Let\'s Rock n\' Roll',
      okText: 'Come on!'
    })
  },

  showConfirm() {
    this.ciConfirmShow({
      cid: 'my-confirm',
      title: 'Confirm',
      content: 'Are you ready?',
      didCancel() {
        console.info('cancel')
      },
      didOK() {
        console.info('ok')
      }
    })
  },

  showConfirm1() {
    this.ciConfirmShow({
      content: "Let's Rock n' Roll",
      didCancel() {
        console.info('rock cancel')
      },
      didOK() {
        console.info("let's rock")
      }
    })
  },

  // ci delegate methods
  ciAlertDidHide(data) {
    console.log('ciAlertDidHide', data)
  },

  ciConfirmDidCancel(data) {
    console.log('ciConfirmDidCancel', data)
  },

  ciConfirmDidOK(data) {
    console.log('ciConfirmDidOK', data)
  }
}))

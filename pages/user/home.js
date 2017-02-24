// pages/user/home.js

const CI = require('../../cafeinit/index')

Page(Object.assign({}, CI.Tabs, {
  data: {
    orderNavs: [
      { title: '待付款', icon: 'order' },
      { title: '待发货', icon: 'order' },
      { title: '待收货', icon: 'order' },
      { title: '待评价', icon: 'order' }
    ],

    navs: [
      // {
      //   title: '我的天使店',
      //   icon: 'angel',
      //   url: '/user/angel/' + __customerId
      // },
      {
        title: '我的拼团',
        icon: 'tuan',
        to: '/user/tuan-list'   // vue 跳转
      },
      {
        title: '商品管理',
        icon: 'items',
        url: '/user/items'
      },
      {
        title: '我的关注',
        icon: 'collect',
        url: '/user/collect-angel'
      },
      {
        title: '商家合伙人',
        icon: 'partner',
        url: '/user/partner'
      },
      {
        title: '浏览历史',
        icon: 'history',
        url: '/user/history/angel'
      },
      {
        title: '邀请天使',
        icon: 'invite-angel',
        url: '/promotion/invite-angel?help_from=H5',
      },
      {
        title: '我是商家',
        icon: 'seller',
        action: 'showDownloadApp'
      },
      {
        title: '邀请商家',
        icon: 'invite-seller',
        url: '/promotion/invite-seller?help_from=H5'
      },
      {
        title: '我的设置',
        icon: 'set',
        url: '/user/set'
      },
      {
        title: '平台客服',
        icon: 'service',
        action: 'cennectService'
      },
      {
        title: '购物清单',
        icon: 'shopping',
        url: '/user/shop-list'
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad', options, this)
  },
  onReady() {
    // 页面渲染完成
    console.log('onReady', this)

    wx.showModal({
      // title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
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

  ciTabsOnChange(data) {
    console.log('ciTabsOnChange', data)
  }
}))

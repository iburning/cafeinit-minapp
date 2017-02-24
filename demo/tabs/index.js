/**
 * @fileoverview CITabs
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-22
 */

const CI = require('../../cafeinit/index')

Page(Object.assign({}, CI.Tabs, {
  data: {
    // isDebug: true,

    myTabs: [
      { title: 'Stores', icon: 'store' },
      { title: 'Items', icon: 'item' },
      { title: 'Orders', icon: 'order' }
    ],
    myTabsCurrent: 0,

    myTabs1: [
      { title: 'TAB 1' },
      { title: 'TAB 2' },
      { title: 'TAB 3' },
      { title: 'TAB 4' },
      { title: 'TAB 5' }
    ],
    myTabsCurrent1: 1
  },

  ciTabsOnChange(data, evt) {
    console.log('ciTabsOnChange', data, evt)
    if (data.pid == 1) {
      this.setData({
        myTabsCurrent1: data.cid
      })
    }
    else {
      this.setData({
        myTabsCurrent: data.cid
      })
    }
  },

  tabBarItemOnTap(evt) {
    console.log('tabBarItemOnTap', evt.currentTarget.dataset.cid)
  }
}))

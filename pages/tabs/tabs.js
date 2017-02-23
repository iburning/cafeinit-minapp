// pages/block/block.js
const CI = require('../../components/index')

Page(Object.assign({}, CI.Tabs, {
  data: {
    myTabs: [
      { title: 'TAB A' },
      { title: 'TAB B' },
      { title: 'TAB C' }
    ],
    myTabsCurrent: 1,

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
  }
}))

/**
 * @fileoverview CIToast
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-24
 */

module.exports = {
  ciAlertShow(data) {
    data = data || {}
    data.isShow = true
    this.setData({
      ciAlertData: data
    })
  },

  ciAlertHide(data) {
    this.setData({
      'ciAlertData.isShow': false
    })

    if (typeof this.ciAlertDidHide === 'function') {
      this.ciAlertDidHide(data)
    }
  },

  _ciAlertButtonOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    dataset.sender = 'button'
    this.data.isDebug && console.info('_ciAlertButtonOnTap', dataset)
    if (!dataset.cid) {
      console.warn('CIToast 缺少 cid 属性')
    }

    this.ciAlertHide(dataset)
  },

  _ciAlertDimmerOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    dataset.sender = 'dimmer'
    this.data.isDebug && console.info('_ciAlertDimmerOnTap', dataset)
    if (!dataset.cid) {
      console.warn('CIToast 缺少 cid 属性')
    }

    if (!this.data.ciAlertData.isLock) {
      this.ciAlertHide(dataset)
    }
  }
}

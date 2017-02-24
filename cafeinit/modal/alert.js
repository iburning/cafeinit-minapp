/**
 * @fileoverview CIAlert
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-24
 */

module.exports = {
  _ciAlertButtonOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    dataset.sender = 'button'
    this.data.isDebug && console.info('_ciAlertButtonOnTap', dataset)

    this.ciHideAlert()
    if (typeof this.ciAlertDidHide === 'function') {
      this.ciAlertDidHide(dataset, evt)
    }
  },

  _ciAlertDimmerOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    dataset.sender = 'dimmer'
    this.data.isDebug && console.info('_ciAlertDimmerOnTap', dataset)

    if (!this.data.ciAlertData.isStopDimmer) {
      this.ciHideAlert()
      if (typeof this.ciAlertDidHide === 'function') {
        this.ciAlertDidHide(dataset, evt)
      }
    }
  },

  ciShowAlert(data) {
    data = data || {}
    data.isShow = true
    this.setData({
      ciAlertData: data
    })

    if (typeof data.didHide !== 'function') {
      console.warn('缺少 didHide 回调方法')
    }
    else {
      this.ciAlertDidHide = data.didHide
    }
  },

  ciHideAlert() {
    this.setData({
      'ciAlertData.isShow': false
    })
  }
}

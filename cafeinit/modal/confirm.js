/**
 * @fileoverview CIConfirm
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-24
 */

module.exports = {
  _ciConfirmCancel(evt) {
    let dataset = evt.currentTarget.dataset
    this.data.isDebug && console.info('_ciConfirmCancel', dataset)

    this.ciConfirmHide()
    if (typeof this.ciConfirmDidCancel === 'function') {
      this.ciConfirmDidCancel(dataset, evt)
    }
  },

  _ciConfirmOK(evt) {
    let dataset = evt.currentTarget.dataset
    this.data.isDebug && console.info('_ciConfirmOK', dataset)

    this.ciConfirmHide()
    if (typeof this.ciConfirmDidOK === 'function') {
      this.ciConfirmDidOK(dataset, evt)
    }
  },

  ciConfirmShow(data) {
    data = data || {}
    data.isShow = true
    this.setData({
      ciConfirmData: data
    })

    if (!data.cid) {
      console.warn('CIConfirm 缺少 cid 属性')
    }

    if (typeof data.didCancel !== 'function') {
      console.warn(data.cid, ' 缺少 didCancel 回调方法')
    }
    else {
      this.ciConfirmDidCancel = data.didCancel
    }

    if (typeof data.didOK !== 'function') {
      console.warn(data.cid, ' 缺少 didOK 回调方法')
    }
    else {
      this.ciConfirmDidOK = data.didOK
    }
  },

  ciConfirmHide() {
    this.setData({
      'ciConfirmData.isShow': false
    })
  }
}

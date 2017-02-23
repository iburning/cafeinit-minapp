/**
 * @fileoverview CIToast
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-22
 */

module.exports = {
  ciToastShow(data) {
    let _data = this.data.ciToastData || {}
    data = data || {}
    _data.isShow = true
    _data.text = data.text || 'CI Toast'
    _data.icon = data.icon
    _data.isLock = data.isLock
    console.log('ciToastShow', data)

    this.setData({
      ciToastData: _data
    })

    _data.timer && clearTimeout(_data.timer)

    if (data.duration != 0) {
      let timer = setTimeout(() => {
        this.ciToastHide()
      }, parseInt(data.duration) || 2000)

      this.setData({
        'ciToastData.timer': timer
      })
    }
  },

  ciToastHide() {
    let data = this.data.ciToastData
    data.timer && clearTimeout(data.timer)

    this.setData({
      'ciToastData.isShow': false
    })
  },

  _ciToastOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    this.data.isDebug && console.info('_ciToastOnTap', this.data.ciToastData.isLock, dataset)
    // if (!dataset.cid) {
    //   console.warn('CIToast 缺少 cid 属性')
    // }

    if (!this.data.ciToastData.isLock) {
      this.ciToastHide()
    }

    if (typeof this.ciToastOnTap === 'function') {
      this.ciToastOnTap(dataset, evt)
    }
  }
}

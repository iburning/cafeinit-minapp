/**
 * @fileoverview CITabs
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-22
 */

module.exports = {
  _ciTabsItemOnTap(evt) {
    let dataset = evt.currentTarget.dataset
    this.data.isDebug && console.log('CITabs._itemOnTap', dataset)
    if (!dataset.pid) {
      console.warn('CITabs 缺少 pid 属性')
    }
    if (typeof this.ciTabsOnChange === 'function') {
      this.ciTabsOnChange(dataset, evt)
    }
    else {
      console.warn('页面缺少 ciTabsOnChange 回调函数')
    }
  }
}

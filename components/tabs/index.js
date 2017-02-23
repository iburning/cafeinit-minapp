/**
 * @fileoverview CITabs
 * @author: burning <www.cafeinit.com>
 * @version: 2017-02-22
 */

module.exports = {
  _onItemTap(evt) {
    let dataset = evt.currentTarget.dataset
    this.isDebug && console.log('CITabs._onItemTap', dataset)
    if (typeof this.ciTabsOnChange === 'function') {
      this.ciTabsOnChange(dataset, evt)
    }
    else {
      console.warn('页面缺少 ciTabsOnChange 回调函数')
    }
  }
}

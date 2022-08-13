export default {
  isWechat: function () {
    return /MicroMessenger/gi.test(navigator.userAgent)
  },

  isIOS: function () {
    return /iPhone|iPad|iPod/gi.test(navigator.userAgent)
  },

  isAndroid: function () {
    return /(Android|Linux)/gi.test(navigator.userAgent)
  },

  isArray: function (o) {
    if (!Array.isArray) {
      Array.isArray = function (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
      };
    }
    return Array.isArray(o)
  },

  isObject: function (o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  },

  isFunction: function (o) {
    return Object.prototype.toString.call(o) === '[object Function]'
  },

  // o === o 排除 NaN
  isNumber: function (o) {
    return Object.prototype.toString.call(o) === '[object Number]' && o === o
  },


  //随机获取数组中某一项
  getArray: function (arr) {
    if (!this.isArray(arr)) throw new Error('argument must be an Array')
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * 删除数组中指定元素
   * 
   * @param {array} arr 待删除的列表
   * @param {*} item 指定删除的元素
   * @return {array}
   */
  removeItem: function (arr, item) {
    if (!this.isArray(arr)) throw new Error('argument must be an Array')
    let index = arr.findIndex(el => JSON.stringify(item) === JSON.stringify(el))
    if (index >= 0) arr.splice(index, 1)
    return arr
  },

  //返回数组中的最大值和最小值
  getMaxMin: function (arr) {
    if (!this.isArray(arr)) throw new Error('argument must be an Array')
    return {
      max: Math.max.apply(Math, arr),
      min: Math.min.apply(Math, arr)
    };
  },


}

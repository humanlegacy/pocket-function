export default {

  /**
   * 生成指定范围内的随机数
   * 
   * @param {number}  min 数组包含最小值
  * @param {number} max 数组包含最大值
   * @return {number}
   */
  getRandom: function (min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  /**
   * 返回随机生成指定长度的数字字母组合
   * 
   * @param {number} length 生成的字符串长度 
   * @param {string} str 指定参与生成的字符串
   * @param {string} split 分隔位数
   * @param {string} join 分隔符 
   * @return {string}
   */
  getString: function ({ length, str = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789', split = 0, join = '-' }) {
    let string = ''
    for (let i = 0; i < length; i++) {
      if (split > 0 && i !== 0 && i % split === 0) {
        string += join
      }
      string += str[this.getRandom(0, str.length - 1)]
    }
    return string
  },

  /**
   * 返回随机色
   * 
   * @param {string} type    类型 hex / rgba
   * @param {number} opacity 透明度
   * @return {string}
   */
  getColor: function (type = 'hex', opacity = 1) {
    opacity = !Math.abs(opacity) || Math.abs(opacity) >= 1 ? 1 : Math.abs(opacity)
    if (type === 'hex' && opacity === 1) {
      return `#${((Math.random() * (0xFFFFFF).toString(10)).toString(16)).slice(-6)}`
    }
    return `rgba(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)},${opacity})`
  },

  /** 
   *  移除文本中的html标签
   * 
   * @param {string} str 字符串 
   * @return {string}
   */
  removeHTML(str) {
    if (!str) return ''
    return str.replace(/<.+?>/g, '')
  },





}


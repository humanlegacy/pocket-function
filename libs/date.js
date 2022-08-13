export default {
  formatNum: function (num) {
    return num >= 10 ? num : `0${num}`
  },

  //格式化时间：'今天是{year}年{month}月{day}日,周{week},第{quarter}季度 {hour}:{minute}:{second}:{ms} 时间戳:{ts}'
  formatDate: function (str) {
    const D = new Date(), item = {
      '{year}': D.getFullYear(),
      '{month}': this.formatNum(D.getMonth() + 1),
      '{day}': this.formatNum(D.getDate()),
      '{hour}': this.formatNum(D.getHours()),
      '{minute}': this.formatNum(D.getMinutes()),
      '{second}': this.formatNum(D.getSeconds()),
      '{quarter}': Math.floor((D.getMonth() + 3) / 3),
      '{ms}': D.getMilliseconds(),
      '{week}': '日一二三四五六'.charAt(D.getDay()),
      '{ts}': D.getTime()
    };
    for (let key in item) {
      str = str.replace(key, item[key])
    }
    return str
  },


  /**
   * 获取当月天数
   * @param {number} year 指定年份，不传即为当年
   * @param {number} month 指定月份，不传即为当月
   * @return {number} 天数
   */
  getThisMonthDays: function (year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    return new Date(year, month, 0).getDate()
  },


  /**
   * 当月1号是星期几
   * @param {number} year 指定年份，不传即为当年
   * @param {number} month 指定月份，不传即为当月
   * @return {number} 0（周日） 到 6（周六）
   */
  getFirstDay: function (year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    return new Date(year, month - 1, 1).getDay()
  },

  /**
   *  个性化显示时间
   * 
   * @param {string} date 时间'2022-08-06 12:12:12' 
   * @returns 
   */
  timeFormat: function (date) {
    let time = new Date().getTime() - new Date(date).getTime()
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let week = day * 7;
    let month = day * 30;
    let format = ''
    if (time < 0) {
      throw new Error('setting time cannot be earlier than the current time');
    }
    if (time / month >= 1) {
      return format = Math.ceil(time / month) + '月前';
    }
    if (time / week >= 1) {
      return format = Math.floor(time / week) + '周前';
    }
    if (time / day >= 1) {
      return format = Math.floor(time / day) + '天前';
    }
    if (time / hour >= 1) {
      return format = Math.floor(time / hour) + '小时前';
    }
    if (time / minute >= 1) {
      return format = Math.floor(time / minute) + '分钟前';
    }
    return format = '刚刚'
  }


}

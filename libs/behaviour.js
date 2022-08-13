export default {
  /**
   * 下载文件
   * @param {String} filename  下载文件名
   * @param {Object} blob 接口返回blob数据
   */
  download: function (filename, blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (e) => {
      const dom = document.createElement('a');
      dom.download = filename;
      dom.href = e.target.result;
      dom.click();
      reader = null
    };
  },

  /**
   * 
   * @param {object} node dom节点 
   * @function callback  图片加载完成后的回调
   */
  imgOnLoaded: function (node, callback) {
    const nodes = node.querySelectorAll('img')
    if (nodes.length > 0) {
      const promise = []
      for (let i = 0; i < nodes.length; i++) {
        promise.push(new Promise((resolve, reject) => {
          nodes[i].onload = () => {
            resolve(nodes[i])
          }
        }))
      }
      Promise.all(promise).then(img => {
        callback && callback(img)
      })
    } else {
      callback && callback([])
    }
  },

  /**
   * 元素拖拽
   * 
   * @param {element} node  
   * @param {function} callback  回调函数
   */
  dragMove: function (node, callback) {
    node.onmousedown = (e) => {
      let dx = e.clientX - node.offsetLeft
      let dy = e.clientY - node.offsetTop
      let elWidth = node.clientWidth
      let elHeight = node.clientHeight
      let windowWidth = window.innerWidth
      let windowHeight = window.innerHeight

      // 实时改变目标元素位置
      document.onmousemove = (el) => {
        let x = el.clientX, y = el.clientY;
        if (el.clientX <= dx) {
          x = dx
        }
        if (el.clientX >= windowWidth - elWidth + dx) {
          x = windowWidth - elWidth + dx
        }
        if (el.clientY <= dy) {
          y = dy
        }
        if (el.clientY >= windowHeight - elHeight + dy) {
          y = windowHeight - elHeight + dy
        }
        this.left = x - dx
        this.top = y - dy;
        node.style.cssText += `;position:fixed;left:${this.left}px;top:${this.top}px;`
        callback && callback({ top: this.top, left: this.left, x: el.clientX, y: el.clientY })
      }

      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },

  /**
   * 页面返回顶部
   * 
   * @param {element} node  
   * @param {function} callback  回调函数
   */
  returnTop: function (node, callback) {
    node.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      callback && callback()
    })
  }


}
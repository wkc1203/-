(function (window, document) {
  var rem = parseFloat(document.documentElement.style.fontSize)

  // 按照375的设计比例与实际尺寸做对比
  function pxScale (n) {
    return parseInt(rem / 37.5 * n)
  }

  // px 像素转换成 rem
  function pxToRem (n) {
    return parseFloat(n / 37.5) + 'rem'
  }

  // 创建一个热区
  // coords : [x0, y0, width, height]
  // to     : 跳转的地址
  function createArea(coords, to, title) {
    var $a = document.createElement('a')

    $a.href = to && ('./' + to) || '#'
    $a.className = 'hotarea'
    title && ($a.title = title)

    $a.style.left = pxToRem(coords[0])
    $a.style.top = pxToRem(coords[1])
    $a.style.width = pxToRem(coords[2])
    $a.style.height = pxToRem(coords[3])

    document.body.appendChild($a)
  }

  // 创建一个菜单
  function createNav (activeIndex) {
    var nav = [{
      text: '首页',
      to: './index.html'
    }, {
      text: '贷款',
      to: './贷款.html'
    }, {
      text: '发现',
      to: './发现.html'
    }, {
      text: '我的',
      to: './我的.html'
    }]

    var $nav = document.createElement('div')

    $nav.className = 'nav'

    for (var i = 0; i < nav.length; i ++) {
      var $a = document.createElement('a')

      if (activeIndex === i) {
        $a.classList.add('active')
      }

      $a.href = nav[i].to

      $a.innerHTML = '\
        <i></i>\
        <span>' + (nav[i].text) + '</span>\
      '

      $nav.appendChild($a)
    }

    document.body.appendChild($nav)
  }

  window.pxScale = pxScale
  window.pxToRem = pxToRem
  window.createArea = createArea
  window.createNav = createNav
})(window, document)

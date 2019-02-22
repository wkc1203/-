(function (window, document) {
  // px 像素转换成 rem
  function pxToRem (n) {
    return parseFloat(n / 37.5) + 'rem'
  }

  // 创建一个热区
  // coords : [x0, y0, width, height]
  // to     : 跳转的地址
  function createArea(coords, to, title) {
    var $a = document.createElement('a')

    $a.href = to || '#'
    $a.className = 'hotarea'
    $a.title = title

    $a.style.left = pxToRem(coords[0])
    $a.style.top = pxToRem(coords[1])
    $a.style.width = pxToRem(coords[2])
    $a.style.height = pxToRem(coords[3])

    document.body.appendChild($a)
  }

  window.createArea = createArea
})(window, document)

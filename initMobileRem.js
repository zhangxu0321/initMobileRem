export default function (){
    let __windowInnerWidth = window.screen.availWidth,
        maxInnerWidth = 500;
    function calcFontsize (innerWidth) {
        let $scale = 750
        let fontSize = (innerWidth) / $scale * 100 + 'px'
        if (parseFloat(fontSize) > 100) {
            fontSize = '100px'
        }
        document.documentElement.style.fontSize = fontSize
    }
    let _timer = null
    window.onresize = function () {
        /*过小或过大处理*/
        if (window.innerWidth <= 320) {
            __windowInnerWidth = 320
        } else if(__windowInnerWidth > maxInnerWidth){
            __windowInnerWidth = maxInnerWidth
        }else {
            __windowInnerWidth = window.screen.availWidth
        }
        if (_timer) clearTimeout(_timer)
        _timer = setTimeout(function () {
            calcFontsize(__windowInnerWidth)
        }, 1)
    }
    setTimeout(function () {
        window.onresize()
    }, 100)
}

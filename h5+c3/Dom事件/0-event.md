
      阻止事件冒泡：
            w3c的方法是e.stopPropagation()，IE则是使用e.cancelBubble = true

      取消默认事件 (如链接<a>，提交按钮<input type=”submit”>等)
            w3c的方法是e.preventDefault()，IE则是使用e.returnValue = false;

            return false
                javascript的return false只会阻止默认行为，而是用jQuery的话则既阻止默认行为又防止对象冒泡

      事件注意点
          event代表事件的状态，例如触发event对象的元素、鼠标的位置及状态、按下的键等等；
          event对象只在事件发生的过程中才有效。
          firefox里的event跟IE里的不同，IE里的是全局变量，随时可用；firefox里的要用参数引导才能用，是运行时的临时变量。
          在IE/Opera中是window.event，在Firefox中是event；而事件的对象，在IE中是window.event.srcElement，在Firefox中是event.target，Opera中两者都可用



      offsetX: 事件触发位置距离该事件触发元素 左边 距离
      offsetY:   事件触发位置距离该事件触发元素 上边 距离
      offsetWidth: 
      offsetHeight

      pageX: 事件触发时在页面上的坐标（滚动条会影响）
      pageY:

      screenX: 鼠标相对于 屏幕坐标系 的水平偏移量
      screenY:   

      clientX:  （浏览器端 坐标系）提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 clientX 值都将为 0
      clientY:  提供事件发生时的应用客户端区域的垂直坐标 (与页面坐标不同)。例如，当你点击客户端区域的左上角时，鼠标事件的 clientY 值为 0 ，这一值与页面是否有垂直滚动无关


  移动端event独有属性、方法 ：
    event.changedTouches     
    event.touches
    //->changedTouches 和 touches部是手指信息的集合（TouchList），touches获取到值的必备条件只有手指还在屏幕上才可以获取，所以在touchend事件中如果想获取离开的瞬间坐标！
        只能使用changedTouches获取


  event     *表示可读可写， 默认只读

    e.type   事件类型，比如click, moueseenter...

    event.target    事件触发目标元素 (就是用querySelector(), 或者document.getElementById()获取的元素上拥有的属性和方法)


childNodes   目标元素的孩子节点（包括文本节点），数组存储

childElementCount   目标元素的孩子元素的数量

children   目标元素的孩子元素(不包括文本节点)

classList    ["box", "wrap", value: "box wrap"]   目标元素class 的类名，数组方式依次存储，最后一位存储class在标签上的值

className   class在标签上的值，可读可写 （event.target.className = 'container box'），长用于增加标签class类名
clientHeight: 400        //
clientLeft: 0
clientTop: 0
clientWidth: 400
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
firstChild: text
firstElementChild: div.child
hidden: false
id: ""
innerHTML: "↵    box↵    <div class="child">child</div>↵  "
innerText: "box↵child"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: div.child
localName: "div"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: script
nextSibling: text
nodeName: "DIV"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 400
offsetLeft: 0
offsetParent: body
offsetTop: 0
offsetWidth: 400

// 是否有监听事件, 必须以 onclick, onmousedown....绑定监听事件，下面方法才不为null，若用addEventListener(),下面事件为null。
onabort: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
onvolumechange: null
onwaiting: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwheel: null


outerHTML: "<div class="box">↵    box↵    <div class="child">child</div>↵  </div>"
outerText: "box↵child"
ownerDocument: document
parentElement: body
parentNode: body
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 400
scrollLeft: 0
scrollTop: 0
scrollWidth: 400
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
tabIndex: -1
tagName: "DIV"
textContent: "↵    box↵    child↵  "
title: ""
translate: true
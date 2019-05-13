//寻找elem的兄弟子元素//
function next(elem) {
   do{ elem = elem.nextSibling ;
   } while (elem && elem.nodeType !== 1) ;
   return elem;
}
//寻找elem的第一个子元素//
function firstChild(elem) {
    elem = elem.firstChild ;
    return elem.nodeType === 1?elem : next(elem) ;
}
//解决绑定事件兼容性问题//
function addEvent(elem , type , handler) {
    if (elem.addEventListener){    // 标准
        elem.addEventListener(type , handler)
    } else if (elem.attachEvent){  // IE
        elem.attachEvent("on" + type , handler)
    } else{   // h1.onclick = function(){..}
       elem["on"+type] = handler;
    }
}
// 解决getElementByClassName（不支持IE8以下版本）兼容性问题//
function gteByClass(className, context) {
    var result = [];
    context = context || document ;  // 防止没有指定context的情况
    var arr = context.getElementsByClassName("*");
    for (var i=0 ; i < arr.length ; i++){
        if (arr[i].className.indexOf(className) !== 1){  //防止className="aa"时，class="aa bb"无法被选中的情况
            if (arr[i].className === className) {
                result.push(arr[i]);
            }
        }
    }
    return result ;
}


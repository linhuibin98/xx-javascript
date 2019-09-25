# zepto 1.2 源码解析

## 整体结构

```javascript
(function(global, factory) {
  if (typeof define === 'function' && define.amd)
    define(function() { return factory(global) })
  else
    factory(global)
}(this, function(window) {  // 自执行函数的外层参数为 this, function(window) {return Zepto}
  var Zepto = (function() {
    // 主要函数
  })()

  window.Zepto = Zepto  // 把Zepto变量挂载在全局 window上
  window.$ === undefined && (window.$ = Zepto)  // 当$变量没有被占用的时候，为Zepto设置别名为 $

  ;(function($){  // Event模块
    // Todo 函数体1
  })(Zepto)

  ;(function($){  // ajax模块
    // Todo 函数体2
  })(Zepto)

  ;(function($){  // 模块
    // Todo 函数体3
  })(Zepto)

  ;(function(){
    // getComputedStyle shouldn't freak out when called
    // without a valid element as argument  
    try {
      getComputedStyle(undefined)
    } catch(e) {
      var nativeGetComputedStyle = getComputedStyle
      window.getComputedStyle = function(element, pseudoElement){
        try {
          return nativeGetComputedStyle(element, pseudoElement)
        } catch(e) {
          return null
        }
      }
    }
  })()
  return Zepto
}))
```

## 主要函数Zepto

### 数组方法封装

#### 定义空数组emptyArray

```javascript
var Zepto = (function() {  // 对全局暴露Zepto变量
  // 定义一个空数组 emptyArray, 取得 concat、filter、slice方法
  var emptyArray = [],
      concat = emptyArray.concat,
      filter = emptyArray.filter,
      slice = emptyArray.slice
  })()
```

定义一个空数组 emptyArray, 取得 concat、filter、slice方法

#### compact方法: 删除数组中的undefined和null

```javascript
function compact(array) {
  // 利用filter方法
  return filter.call(array, function(item) {
    return item != null
  })
}
```

这里用的是数组的 filter 方法，过滤出 item != null 的元素，组成新的数组。这里删除掉 null 很容易理解，为什么还可以删除 undefined 呢？这是因为这里用了 != ，而不是用 !== ，用 != 时， null 各 undefined 都会先转换成 false 再进行比较

#### flatten方法: 数组扁平化

```javascript
function flatten(array) {
  return array.length > 0 ? $.fn.concat.apply([], array) : array
}
```

将数组扁平化，例如将数组 [1,[2,3],[4,5],6,[7,[89]] 变成 [1,2,3,4,5,6,7,[8,9]] ,这个方法只能展开一层，多层嵌套也只能展开一层。这里，我们先把 $.fn.concat 等价于数组的原生方法 concat，后面的章节也会分析  $.fn.concat 的。这里比较巧妙的是利用了 apply ，apply 会将 array 中的 item 当成参数，concat.apply([], [1,2,3,[4,5]]) 相当于 [].concat(1,2,3,[4,5])，这样数组就扁平化了

#### uniq方法: 数组去重

```javascript
uniq = function(array) {
  return filter.call(array, function(item, idx) {
    return array.indexOf(item) == idx
  })
}
```

数组去重的原理是检测 item 在数组中第一次出现的位置是否和 item 所处的位置相等，如果不相等，则证明不是第一次出现，将其过滤掉

### 字符串方法封装

#### camelize方法: 去除字符-, 并将-后面的第一个字母大写,驼峰命名法

```javascript
camelize = function(str) {
  return str.replace(/-+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : ''
  })
}
```

将 word-word 的形式的字符串转换成 wordWord 的形式， - 可以为一个或多个。正则表达式匹配了一个或多个 - ，捕获组是捕获 - 号后的第一个字母，并将字母变成大写

#### dasherize方法: 驼峰式的写法转换成连字符 - 的写法

```javascript
function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
```
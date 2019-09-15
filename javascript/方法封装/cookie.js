/*
    max-age用秒来设置cookie的生存期

    (已被max-age取代)expires属性——时间要转成GMT形式 ： toGMTString()； => 指定过期时间

     如果max-age属性为正数，则表示该cookie会在max-age秒之后自动失效。浏览器会将max-age为正数的cookie持久化，即 写到对应的cookie文件中。无论客户关闭了浏览器还是电脑，只要还在max-age秒之前，登录网站时该cookie仍然有效。

    如果max-age为负数，则表示该cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该cookie即失效。max-age 为负数的Cookie，为临时性cookie，不会被持久化，不会被写到cookie文件中。cookie信息保存在浏览器内存中，因此关闭浏览器该 cookie就消失了。cookie默认的max-age值为-1

    ‍如果max-age为0，则表示删除该cookie。cookie机制没有提供删除cookie的方法，因此通过设置该cookie即时失效实现删除cookie的效果。失效的Cookie会被浏览器从cookie文件或者内存中删除

    domain属性
 */

/*  cookie.set()只能设置单个cookie
let cookie = (function() {
    // key: cookie的name, val: 对应的值, time: 过期时间, 单位为天
    function set(key, val, time) { // 设置cookie
        return document.cookie = key + '=' + val + '; max-age=' +  time * 24 * 60 * 60;
    }

    function get(key) { // 获取cookie, 返回值得数组集合
        // 获取全部cookie, 并去除空格
        var cookies = document.cookie.replace(/[ ]/, '');
        var cookieArr = cookies.split(';'); //将获得的cookies以"分号"为标识 将cookie保存到cookieArr的数组中
        var arr = [];  // 保存获取的值
        for (var i = 0; i < cookieArr.length; i++) {
            var cookie = cookieArr[i].split('=');
            if (cookie[0] === key) {
                arr.push(cookie[1]);
                break;
            }
        }
        return arr;
        }
    function del(key) { // 删除cookie
        return document.cookie = key + '=del; max-age=0';
    }
    return {
        set: set,
        get: get,
        del: del
    }
})();
*/

// 改进 set同时设置多个cookie
let cookie = (function() {
    function set(key, val, time) { // 设置cookie
        return document.cookie = key + '=' + val + '; max-age=' +  time * 24 * 60 * 60;
    }

    function get(key) { // 获取cookie, 返回值得数组集合
        // 获取全部cookie, 并去除空格
        var cookies = document.cookie.replace(/[ ]/, '');
        var cookieArr = cookies.split(';'); //将获得的cookies以"分号"为标识 将cookie保存到cookieArr的数组中
        var arr = [];  // 保存获取的值
        for (var i = 0; i < cookieArr.length; i++) {
            var cookie = cookieArr[i].split('=');
            if (cookie[0] === key) {
                arr.push(cookie[1]);
                break;
            }
        }
        return arr;
    }
    function del(key) { // 删除cookie
        return document.cookie = key + '=del; max-age=0';
    }
    return {
        set: set,
        get: get,
        del: del
    }
})();

module.exports = cookie;
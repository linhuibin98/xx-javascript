// 仿ES6模板字符串 ${}

// 简单版 ${数字}

/*
function formatStr(str, ...rest) {
    return str.replace(/\${(\d+)}/g, function (item, i) {
        return typeof rest[i] !== 'undefined' ? rest[i] : item;
    })
};


let template = "世界如此${0}，你却如此${1}！";

console.log(formatStr(template, '美好', '暴躁'));   // 世界如此美好，你却如此暴躁！

*/

// 进阶版
function formatStr(str, data) {  // data 为数据对象
    return str.replace(/\${([\s\S]+?)}/g, function (item) {
        item = item.replace(/[ ]/g, '');
        let n = item.slice(2, item.length - 1);
        return typeof data[n] !== 'undefined' ? data[n] : item;
    })
}
let template = "世界如此${i}，你却如此${b}！";

console.log(formatStr(template, {i: '美好', b: '暴躁'}));
module.exports = formatStr;
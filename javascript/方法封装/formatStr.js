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
function formatStr(str, obj) {

}

module.exports = formatStr;
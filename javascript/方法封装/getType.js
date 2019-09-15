// 传入数据，返回判断结果

let getType = function (o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
};

module.exports = getType;
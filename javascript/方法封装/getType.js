let getType = function (o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
};

module.exports = getType;
// 接口       interface  接口声明
function printLabel(labelleObj) {
    console.log(labelleObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'red' });
let p1 = { x: 15, y: 10 };
// p1.x = 1; 修改会出错
// ReadonlyArray<number>  只读属性
let a = [1, 2, 3, 4];
let ro = a;
let tom = {
    name: 'Tom',
    gender: 'male'
};
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

// typescript中 当变量修改非指定类型时，会报错error TS2322: Type '12' is not assignable to type 'string'.等等， 但是还是会编译成功
// 布尔值
let isDone = false;
console.log(isDone); // false
// 字符串
let str = 'abc';
// str = 12；  // 报错： error TS2322: Type '12' is not assignable to type 'string'.
str = undefined; // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给任何类型的变量
// 数字
let num = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
// 数组
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
let list = [123, 1, 3]; // 由数字组成的数组
// 第二种方式是使用数组泛型，Array<元素类型>
let arr = [2, 3, 4]; // 不推荐使用
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组
let x; // 数组x中只能存在字符串和数字类型，而且前两位必须对应 字符串，数字
x = ['hello', 18];
// x = [18, 'world'];  // 报错 : 第一位必须是字符串，第二位必须是数字
// console.log(x[2]); 访问不存在的属性会报错
// @ts-ignore
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// @ts-ignore
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
// 枚举
var obj;
(function (obj) {
    obj[obj["red"] = 0] = "red";
    obj[obj["green"] = 1] = "green";
    obj[obj["yellow"] = 2] = "yellow";
})(obj || (obj = {}));
let c = obj.green;
console.log(c);
let objName = obj[1];
console.log(objName);
// any
// 可以是任何类型的值
let y = 'sss';
y = 13;
y = [323, 232];
// void
// 函数没有返回值的时候，void
function fn() {
    console.log(y);
}
let f = undefined;
// null 和 undefined
let d = undefined;
// tslint:disable-next-line:no-null-keyword
let e = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量
// never 类型:  报错 或者 死循环
function fn2(msg) {
    throw new Error(msg);
}
// 类型断言
let g = 'ni hao a';
let h = g.length;

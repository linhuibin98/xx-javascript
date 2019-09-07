// 推荐使用 let 、 const 取代 var 声明变量
// 若在node中使用 typescript 各个模块中有相同的变量名也会报错
// 官方文档 https://www.tslang.cn/docs/handbook/variable-declarations.html
// 默认值
// b?: string 表示b可以不传
function fn3(a, b) {
    console.log(a, b);
}
fn3(10);
let i = 12;
// 什么是类型推论
let myFavoriteNumber = 'seven'; // 推测为 string 类型
// myFavoriteNumber = 7;    error TS2322: Type 'number' is not assignable to type 'string'.
/* 事实上，它等价于：

    let myFavoriteNumber;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;

 */
// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
/*
    let myFavoriteNumber;    // 定义后未被赋值 推断为 any 类型
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
*/

// 「类型 + 方括号」表示法

let fi: number[] = [1, 2, 3, 4, 5, 6];  // 数组的项中不允许出现其他的类型

// 数组泛型

let fo: Array<number> = [1, 2, 3, 4, 5, 6];

// 用接口表示数组

interface IAr {
    [index: number]: number;
}

let fp: IAr = [1, 2, 3, 4, 5, , 7, 8];
fp[7] = 10;
console.log(fp);

// 类数组

// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let lis: any[] = ['cat', 25, { website: 'http://xcatliu.com' }];
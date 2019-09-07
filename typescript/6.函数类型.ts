// 函数声明
// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sums(x: number, y: number): number {
    return x + y;
}

// 注意，输入多余的（或者少于要求的）参数，是不被允许的
// sum(1, 2, 3);  // 报错：error TS2346: Supplied parameters do not match any signature of call target

// 函数表达式

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 用接口定义函数的形状

interface ISearchFunc {
    (source: string, substring: string): boolean
}

let mySearch: ISearchFunc;
mySearch = function (source: string, substring: string): boolean {
    return source.search(substring) !== -1;
};

// 可选参数

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let ton = buildName('Tom');

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：

// 参数默认值

// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

function build(firstName: string, lastName: string = 'Cat') { // 设了默认值。会自动识别为可选参数
    return firstName + ' ' + lastName;
}
let cal = build('Tom', 'Cat');
let tol = build('Tom');

// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buiName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tot = buiName('Tom', 'Cat');
let ct = buiName(undefined, 'Cat');

// 剩余参数

// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
/*
function push(array, ...rest) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let j = [];
push(j, 1, 2, 3);

 */

// 事实上，rest 是一个数组。所以我们可以用数组的类型来定义它：

function push(array: any[], ...rest: any[]) {
    rest.forEach(function(item) {
        array.push(item);
    });
}

let j = [];
push(j, 1, 2, 3);

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 精确输入number类型,输出number类型; 输入string类型，输出string类型
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
// 接口       interface  接口声明

function printLabel(labelleObj: {label: string}) {
    console.log(labelleObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };

printLabel(myObj);

// interface  接口声明

interface ISquareConfig {  // 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀
    color?: string,   // ? 表示可选属性
    width?: number
}

function createSquare(config: ISquareConfig): {color: string, area: number} {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: 'red'});

// 定义的变量比接口少了和多了一些属性是不允许的

interface IPerson {
    name: string;
    age: number;
}

/*  定义的变量比接口少了和多了一些属性是不允许的

let tom: IPerson = {   // error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'IPerson'
    name: 'Tom'
};

*/

// 可见, 赋值的时候，变量的形状必须和接口的形状保持一致

// 只读属性  readonly

interface IPoint {
    readonly x: number,
    readonly y: number
}

let p1: IPoint = { x: 15, y: 10};
 // p1.x = 1; 修改会出错

// ReadonlyArray<number>  只读属性
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
 // ro[0] = 11;  报错

// 任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

interface IPer {
    name: string;
    age?: number;
    [propName: string]: any;   // 任意属性
}

let tom: IPer = {
    name: 'Tom',
    gender: 'male'
};

// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
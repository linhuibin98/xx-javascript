// 联合类型使用 | 分隔每个类型

let my: string | number; // 这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型
my = 'seven';
my = 7;

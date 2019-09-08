// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
function createArray(length, value) {
    return [value];
}
function logging(value) {
    console.log(value.length);
    return value;
}

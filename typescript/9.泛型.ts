// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
function createArray<T>(length: number, value: T): Array<T> {
    return [value];
}

// 上例中，我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了

interface ILengthwise {
    length: number;
}

function logging<T extends ILengthwise>(value: T): T {  // 限制输入的值 必须有length属性
    console.log(value.length);
    return value;
}
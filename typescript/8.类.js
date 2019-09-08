// 类  类的继承
//public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问（只能在该类的内部访问，直接实例中也是无法访问的，子类中也无法访问）
//
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的（只能在子类中访问）
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        this.str = `${this.name} moved ${distance}`;
        console.log(this.str);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    say() {
        console.log(this.name);
        this.move(100);
    }
}
let jr = new Dog('jr');
jr.say();
//

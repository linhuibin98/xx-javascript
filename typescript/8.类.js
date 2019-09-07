// 类  类的继承
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

// 类  类的继承

class Animal {
    public name: string;
    public str: string;

    public constructor(name: string) {
        this.name = name;
    }

    public move(distance: number = 0) {
        this.str = `${this.name} moved ${distance}`;
        console.log(this.str);
    }
}

class Dog extends Animal{
    public constructor(name: string) {
        super(name);
    }

    public say() {
        console.log(this.name);
        this.move(100);
    }
}

let jr = new Dog('jr');
jr.say();
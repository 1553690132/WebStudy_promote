"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(this.name, this.age);
    }
}

new Person2('lwh', 18).sayHello()

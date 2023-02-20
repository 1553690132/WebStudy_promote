"use strict";
class Person {
    constructor(name, age) {
        // readonly开头 属性表示只读属性
        this.money = 10000;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('hello everyone');
    }
}
// 属性前加static可以定义类属性即静态属性
Person.sex = "male";
const p = new Person('lwh', 18);
console.log(Person.sex);

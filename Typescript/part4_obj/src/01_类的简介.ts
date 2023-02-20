class Person {
    // 定义实例属性
    name: string;
    age: number

    // 属性前加static可以定义类属性即静态属性
    static sex: string = "male"

    // readonly开头 属性表示只读属性
    readonly money: number = 10000

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('hello everyone');
    }
}

const p = new Person('lwh', 18)
console.log(Person.sex);

class Person2 {
    name: string
    age: number

    // constructor为构造函数，创建对象实例时调用
    // 实例方法中，this表示当前的实例。
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(this.name, this.age);
    }
}
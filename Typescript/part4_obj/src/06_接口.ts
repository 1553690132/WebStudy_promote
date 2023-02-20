(function () {
    // 描述对象类型
    type myType = {
        name: string;
        age: number;
    }

    // 接口设置类结构，也可作为类型声明使用。
    // 接口中所有的属性不能有实际值
    // 接口只定义对象的结构，而不考虑实际值
    // 接口中所有方法都为抽象方法
    interface myInterface {
        name: string
        age: number
        sayHello(): void
    }

    const obj: myInterface = {
        name: 'lwh',
        age: 18,
        sayHello() {
            console.log('hello');
        }
    }

    // 实现接口就是使类满足接口的要求

    class MyClass implements myInterface {
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('hello');
        }
    }
})()
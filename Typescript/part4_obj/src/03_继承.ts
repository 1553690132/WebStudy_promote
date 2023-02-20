(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('jiao');
        }
    }

    // 子类创建与父类相同的方法，相当于重写父类方法

    class Dog extends Animal {
        sayHello(): void {
            console.log('Wow');
        }
    }

    class Cat extends Animal {
        sayHello(): void {
            console.log('Miao');
        }
    }

    const d = new Dog('ab', 1);

    const c = new Cat('cd', 1);
})()
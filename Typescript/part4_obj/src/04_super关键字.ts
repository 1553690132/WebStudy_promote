(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('Hello');
        }
    }

    class Dog extends Animal {
        sex: string;

        constructor(name: string, age: number, sex: string) {
            super(name, age)
            this.sex = sex;
        }

        sayHello(): void {
            super.sayHello();
        }
    }

    class Cat extends Animal {
        constructor(name:string, age:number, public sex:string) {
            super(name, age);
            this.sex = sex;
        }
    }
})()
(function() {
    // abstract开头的类是抽象类，不能用于创建实例，用于被继承。
    // 抽象类可以添加抽象方法
    abstract class Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }

        // 抽象方法，没有方法体，只能定义在抽象类中，子类必须重写该方法。
        abstract sayHello():void;
    }


    class Dog extends Animal {
        sayHello(): void {
            console.log('Wow');
        }
    }

    
})()
(function () {
    class Person {
        // TS可在属性前添加属性的修饰符
        // public修饰的属性可以在任意位置访问或修改
        // private私有属性只能在类内部进行访问或修改
        // protected受保护的属性，只能在当前类内部或子类中访问和修改
        // 通过在类中添加方法，使外部进行访问和修改

        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // getter和setter被称为属性存储器
        // getName() {
        //     return this.name;
        // }
        // setName(name: string) {
        //     this.name = name;
        // }

        // TS中设置getter方法的方式
        get name(): string {
            return this.name;
        }

        set name(value) {
            this._name = value;
        }
    }

    const p = new Person('lwh', 20);
    // 属性直接在对象中设置，即属性可被任意修改！


})()
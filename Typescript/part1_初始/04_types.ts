// object表示一个js对象
let a: object;
a = {}
a = function () { }

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值}
// 属性名后加问号，表示属性是可选的。
let b: { name: string, age?: number }
b = { name: "lwh" }

// [propName: string]: any 表示任意类型的属性
let c: { name: string, [propName: string]: any }
c = { name: 'lwh', age: 18, xxx: 12321 }

// 设置函数结构的类型声明：
// 语法：（形参：类型，形参：类型）=>返回值
let d: (a: number, b: number) => number
d = function (n1, n2) {
    return n1 + n2
}

// string[]表示字符串数组
let e: string[];
e = ['a', 'bcd']
// 表示数值类型的数组
let f: Array<number>;
f = [1, 2, 3]

// tuple元组，即固定长度的数组。
let g: [string, number];
g = ['a', 100]

// enum枚举
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: 'lwh',
    gender: Gender.Male
}

// &表示同时
let j: { name: string } & { age: number }
j = { name: 'lwh', age: 18 }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: 1 | 2 | 3 | 4 | 5;
let l: myType;


enum Color {
    Red,
    Blue
}
let ghg: Color = Color.Red
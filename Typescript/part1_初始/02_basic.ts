// 声明一个变量a，指定类型为number
let a: number;

// 以后使用过程中，a的值只能为数字。

a = 1;
// a = 'h' 会报错！

let b: string;
b = 'hello'

// 直接对变量赋值
let c: boolean = false

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型监测
let d = false

// 此处会报错
// d = 1

// JS中的函数不考虑参数类型和个数
// TS中的函数可以设置函数返回值和参数的类型
function sum(a: number, b: number): number {
    return a + b;
}

sum(123, 456)
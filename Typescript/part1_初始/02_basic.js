// 声明一个变量a，指定类型为number
var a;
// 以后使用过程中，a的值只能为数字。
a = 1;
// a = 'h' 会报错！
var b;
b = 'hello';
// 直接对变量赋值
var c = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型监测
var d = false;
// 此处会报错
// d = 1
// JS中的函数不考虑参数类型和个数
function sum(a, b) {
    return a + b;
}

console.log(sum(123, 456));


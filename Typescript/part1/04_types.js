// object表示一个js对象
var a;
a = {};
a = function () { };
// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值}
// 属性名后加问号，表示属性是可选的。
var b;
b = { name: "lwh" };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: 'lwh', age: 18, xxx: 12321 };
// 设置函数结构的类型声明：
// 语法：（形参：类型，形参：类型）=>返回值
var d;
d = function (n1, n2) {
    return n1 + n2;
};
// string[]表示字符串数组
var e;
e = ['a', 'bcd'];
// 表示数值类型的数组
var f;
f = [1, 2, 3];
// tuple元组，即固定长度的数组。
var g;
g = ['a', 100];
// enum枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'lwh',
    gender: Gender.Male
};
// &表示同时
var j;
j = { name: 'lwh', age: 18 };
var k;
var l;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var ghg = Color.Red;
ghg = 2;

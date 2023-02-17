// 使用字面量进行类型声明
let a: 10; // 不能继续赋为其他值！

// 可以使用 | 连接多个类型
let b: "male" | "female";
b = "male"
b = "female"

// 联合类型
let c: boolean | string;
c = true
c = "abc"

// any表示任意类型，变量被设置为any后，相当于关闭了对此变量的类型检测。
// 声明变量若不指定类型，则TS会自动判断为any类型。
let d: any;
d = 10;
d = true;
d = "fa"

// unknown表示未知类型的值，unknown实际上就是类型安全的any。
let e: unknown;
e = 10
e = 'hello'

// any的值可以赋值给任意变量， unknown则不行。
let s: string;
s = d

// 类型断言，用于告诉解析器变量的实际类型。
/*
* 语法：
    变量 as 类型
    <类型> 变量
*/
s = e as string
s = <string>e

// void 用来表示空，(函数中void表示没用返回值)
function fn() {
}

// never代表永远不会返回结果
function fn1(): never {
    throw new Error('error')
}
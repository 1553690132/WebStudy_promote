// 使用any会关闭类型检查（不推荐）
// function fn(a: any): any {
//     return a;
// }

// 类型不明确时使用泛型
function fn<T>(a: T): T {
    return a;
}

// 直接调用泛型函数
let result = fn(10); // 不指定泛型，TS自动进行判断
let result1 = fn<string>('hello') // 指定泛型 

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    return a;
}

interface Inter {
    length: number;
}
// 泛型T可以继承接口的实现类
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

fn3('123')
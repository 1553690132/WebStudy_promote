// import hi from './app'

let c: string;
c = 'hello world'

let e: number;
e = 1000

function fn(a: number, b: number) {
    return a + b
}


function fn2(this: Window) {
    console.log(this);
}
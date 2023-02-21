// 定义食物类
class Food {
    element: HTMLElement;

    constructor() {
        // 获取页面food元素并将其赋值给element
        this.element = document.getElementById('food') as HTMLElement;
    }

    // 获取食物坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 食物坐标必须是十的倍数且在stage的范围内
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;
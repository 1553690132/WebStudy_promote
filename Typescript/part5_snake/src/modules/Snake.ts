class Snake {
    headEle: HTMLElement;
    bodysEle: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake') as HTMLElement;
        this.headEle = document.querySelector('#snake > div') as HTMLElement;
        this.bodysEle = this.element.getElementsByTagName('div') as HTMLCollection;
    }

    // 获取蛇头坐标
    get X() {
        return this.headEle.offsetLeft;
    }

    get Y() {
        return this.headEle.offsetTop;
    }

    set X(value: number) {
        this.configLoacion(this.X, value, 'x')
    }

    set Y(value: number) {
        this.configLoacion(this.Y, value, 'y')
    }

    configLoacion(coordinate: number, distance: number, direction: string) {
        if (coordinate === distance) return;
        if (coordinate < 0 || coordinate > 290) {
            throw new Error('撞墙!');
        }
        if (direction === 'x') {
            if (this.bodysEle[1] && (this.bodysEle[1] as HTMLElement).offsetLeft === distance) {
                distance > this.X ? distance = this.X - 10 : distance = this.X + 10;
            }
            this.moveBody();
            this.headEle.style.left = distance + 'px';
        } else {
            if (this.bodysEle[1] && (this.bodysEle[1] as HTMLElement).offsetTop === distance) {
                distance > this.Y ? distance = this.Y - 10 : distance = this.Y + 10;
            }
            this.moveBody();
            this.headEle.style.top = distance + 'px'
        }
        this.checkHeadBody();
    }


    // 蛇增加身体方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 身体移动方法
    moveBody() {
        // 将后边身体设置为前边身体的位置
        for (let i = this.bodysEle.length - 1; i > 0; i--) {
            let preX = (this.bodysEle[i - 1] as HTMLElement).offsetLeft;
            let preY = (this.bodysEle[i - 1] as HTMLElement).offsetTop;
            (this.bodysEle[i] as HTMLElement).style.left = preX + 'px';
            (this.bodysEle[i] as HTMLElement).style.top = preY + 'px';
        }
    }

    // 检查身体碰撞方法
    checkHeadBody() {
        for (let i = 1; i < this.bodysEle.length; i++) {
            let ele = this.bodysEle[i] as HTMLElement;
            if (this.X === ele.offsetLeft && this.Y === ele.offsetTop) {
                throw new Error('碰撞自身!');
            }
        }
    }
}

export default Snake;
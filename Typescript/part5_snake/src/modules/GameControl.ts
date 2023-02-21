import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

// 游戏控制器 控制其他所有类
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 存储蛇移动方向的属性
    direction: string = '';
    // 蛇的速度随等级变化
    speed: number = 330;
    // 记录游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏初始化方法
    init() {
        // 改变this指向为GameControl
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    // 键盘响应函数
    keydownHandler(event: KeyboardEvent) {
        // 检查是否合法后存储方向值

        this.direction = event.key;
    }

    // 控制蛇移动方法
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert('GAME OVER');
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), this.speed - this.scorePanel.level * 30);
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl
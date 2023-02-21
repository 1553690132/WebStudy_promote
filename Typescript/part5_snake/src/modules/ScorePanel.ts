// 定义计分类
class ScorePanel {
    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score') as HTMLElement
        this.levelEle = document.getElementById('level') as HTMLElement
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分过关方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
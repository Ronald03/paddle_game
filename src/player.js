export default class Player {
  constructor() {
    this.name = "";

    this.score = 0;

    this.highScore = 0;
  }

  setScore(newScore) {
    this.score += newScore;
  }
  setHighScore() {
    if (this.score > this.highScore) this.highScore = this.score;
  }
}

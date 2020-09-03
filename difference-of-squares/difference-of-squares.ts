export class Squares {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;

  constructor(num: number) {
    this.squareOfSum = this.calculateSquareOfSum(num);
    this.sumOfSquares = this.calculateSumOfSquares(num);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }

  calculateSquareOfSum(num: number) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total * total;
  }

  calculateSumOfSquares(num: number) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      let square = i * i;
      total += square;
    }
    return total;
  }
}

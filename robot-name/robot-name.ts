export class RobotName {
  name: string;
  usedNames: Set<string>;

  constructor() {
    this.name = "";
    this.usedNames = new Set();

    this.generateRobotName();
  }

  generateRobotName(): void {
    let letters = this.returnRandomLetters();
    let numbers = this.returnRandomNumbers(100, 999);
    let name = letters + numbers;

    if (this.usedNames.has(name)) {
      this.generateRobotName();
    } else {
      this.name = name;
      this.usedNames.add(name);
    }
  }

  private returnRandomNumbers(minVal: number, maxVal: number): string {
    var randVal = minVal + Math.random() * (maxVal - minVal);
    return Math.round(randVal).toString();
  }

  private returnRandomLetters(): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 2)
      .toUpperCase();
  }

  resetName() {
    this.generateRobotName();
  }
}

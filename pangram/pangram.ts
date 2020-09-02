export class Pangram {
  public sentence: string;
  constructor(sentence: string) {
    this.sentence = sentence;
  }
  isPangram() {
    return (
      new Set(this.sentence.toLowerCase().replace(/[^a-z]/g, "")).size === 26
    );
  }
}

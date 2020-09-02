import { stringify } from "querystring";

class Bob {
  private isYelling = (message: string): boolean =>
    message.toUpperCase() === message && message.toLowerCase() !== message;
  private isQuestion = (message: string): boolean =>
    message.trim().slice(-1) === "?";
  private isSilence = (message: string): boolean => message.trim().length === 0;

  hey(greeting: string) {
    if (this.isYelling(greeting) && this.isQuestion(greeting)) {
      return "Calm down, I know what I'm doing!";
    } else if (this.isQuestion(greeting)) {
      return "Sure.";
    } else if (this.isYelling(greeting)) {
      return "Whoa, chill out!";
    } else if (this.isSilence(greeting)) {
      return "Fine. Be that way!";
    } else {
      return "Whatever.";
    }
  }
}

export default Bob;

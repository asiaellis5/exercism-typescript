export class Words {
  count(sentence: string) {
    const count: Map<string, number> = new Map<string, number>();
    const sentenceArray = sentence.toLowerCase().match(/[^\s]+/g) || [];
    sentenceArray.forEach((word) => {
      let lower = word.toLowerCase();
      if (!count.has(lower)) {
        count.set(lower, 1);
      } else {
        let number = count.get(lower) || 1;
        number += 1;
        count.set(lower, number);
      }
    });
    return count;
  }
}

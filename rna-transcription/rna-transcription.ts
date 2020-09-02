type Rna = "G" | "C" | "U" | "A";
type Dna = "C" | "G" | "A" | "T";

class Transcriptor {
  rnaValues: Record<Dna, Rna> = {
    C: "G",
    G: "C",
    T: "A",
    A: "U",
  };

  toRna(dnaStrand: string) {
    const dnaArray = dnaStrand.split("");
    const rnaArray = dnaArray
      .map((element) => {
        if (this.isValidDna(element)) {
          return this.rnaValues[element];
        } else {
          throw new Error("Invalid input DNA.");
        }
      })
      .join("");
    return rnaArray;
  }

  isValidDna(maybeDna: string): maybeDna is Dna {
    return maybeDna in this.rnaValues;
  }
}

export default Transcriptor;

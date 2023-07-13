function additionSimple(a: number, b: number): number {
  if(a < 1 || a > 9 || b < 1 || b > 9) {
      throw new Error("Les nombres doivent être compris entre 1 et 9");
  }
  return a + b;
}
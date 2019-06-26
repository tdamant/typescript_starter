class Calculator {
  sum(n1: number, n2: number): number {
    return n1 + n2;
  }
}

describe("calculator", () => {
  it("adds", () => {
    const calculator = new Calculator();
    expect(calculator.sum(1,4)).toEqual(5)
  })
});
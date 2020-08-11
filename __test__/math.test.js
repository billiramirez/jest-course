import { add, substrack, multiply, divide } from "../math";

describe("Math Calc", () => {
  test("Testing the sum ", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("Testing the multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test("Testing the Substrack", () => {
    expect(substrack(2, 2)).toBe(0);
  });

  test("Testing the divide", () => {
    expect(divide(4, 2)).toBe(2);
  });
});

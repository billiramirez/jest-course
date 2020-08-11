import { numbers } from "../numbers";

describe("Compare numbers", () => {
  test("should be greater than", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test("should be grater or equal than ", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test("Should be lower than", () => {
    expect(numbers(2, 2)).toBeLessThan(6);
  });
  test("should be lower or equal than", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(5);
  });
  test("Float Numbers", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});

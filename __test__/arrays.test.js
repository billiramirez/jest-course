import { arrayColors, arrayFruits } from "../arrays";

describe("Check if an element exist", () => {
  test("Is banana in?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("not contains a platano", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test("check the length of an array", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test("check a color exist", () => {
    expect(arrayColors()).toContain("azul");
  });
});

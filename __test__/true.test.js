import { isFalse, isNull, isTrue, isUndefined } from "../true";

describe("Test null values", () => {
  test("null", () => {
    expect(isNull()).toBeNull();
  });
});

describe("Test truthness values", () => {
  test("value is true", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("Test false values", () => {
  test("value is false", () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("Test undefined values", () => {
  test("value is undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("Test values not truthness", () => {
  test("false or true", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});

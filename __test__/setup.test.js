// After each test

afterEach(() => console.log("after each test this is happening"));

// After all tests

afterAll(() => console.log("After all the test, this is happening"));

// Before all Test
beforeAll(() => console.log("before all test, this is happening"));

// Before each test
beforeEach(() => console.log("before each test, this is happening"));

describe("prepare this before execute", () => {
  test("is true", () => {
    expect(true).toBeTruthy();
  });
});

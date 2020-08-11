describe("Check strings", () => {
  const text = "hey this text";
  test("should contains the following text", () => {
    expect(text).toMatch(/this/);
  });
  test("no shoudl contain the following text", () => {
    expect(text).not.toMatch(/contains/);
  });
  test("check the length of a string", () => {
    expect(text).toHaveLength(13);
  });
});

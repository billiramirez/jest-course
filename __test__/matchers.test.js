describe("Common comparators", () => {
  const user = {
    name: "billi",
    lastname: "ramirez",
  };

  const user2 = {
    name: "billi",
    lastname: "ramirez",
  };

  const user3 = {
    name: "alexader",
    lastname: "ramirez",
  };

  test("same elements", () => {
    expect(user).toEqual(user2);
  });
  test("not equal", () => {
    expect(user).not.toEqual(user3);
  });
});

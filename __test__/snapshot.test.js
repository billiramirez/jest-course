import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("It's time to the instant", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test("always is gonna fail the instant", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });

  test("we allow an exception", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "billi ramirez obregon",
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});

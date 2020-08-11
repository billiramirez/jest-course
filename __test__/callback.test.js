import { callbackHell } from "../callbacks";

describe("testing a callback", () => {
  test("callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hello Js");
      done();
    }

    callbackHell(otherCallback);
  });
});

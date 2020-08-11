import { getDataFromApi } from "../promise";

describe("testing promises", () => {
  test("hiting an api ", (done) => {
    const apiURL = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(apiURL).then((data) => {
      expect(data.results).not.toHaveLength(0);
      done();
    });
  });
  test("this resolves a Hello", () => {
    return expect(Promise.resolve("Hello")).resolves.toBe("Hello");
  });

  test("this reject with an error", () => {
    return expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});

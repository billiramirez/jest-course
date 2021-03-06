import { getDataFromApi } from "../promise";

describe("Testing async/await", () => {
  test("make an api call", async () => {
    const apiURL = "https://rickandmortyapi.com/api/character/";
    const getRick = "https://rickandmortyapi.com/api/character/1";
    await getDataFromApi(apiURL).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRick).then((data) => {
      expect(data.name).toEqual("Rick Sanchez");
    });
  });

  test("making an api call with error", async () => {
    const apiErrorUrl = "http://httpstat.us/404";
    const request = getDataFromApi(apiErrorUrl);
    await expect(request).rejects.toEqual(
      Error("Request failed with status code 404")
    );
  });

  test("Resolve a Hello", async () => {
    await expect(Promise.resolve("Hello")).resolves.toBe("Hello");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});

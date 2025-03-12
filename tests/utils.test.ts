import { fetchPlatforms } from "../src/utils";

describe("fetchPlatforms", () => {
  it("should return an array of platforms", async () => {
    const result = await fetchPlatforms();
    expect(Array.isArray(result)).toBeTruthy();
  });
});

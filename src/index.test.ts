import { platforms } from "./index";

describe("Platforms", () => {
  it("should have a length greater than 0", () => {
    expect(platforms.length).toBeGreaterThan(0);
  });

  it("should have a length less than 5000", () => {
    expect(platforms.length).toBeLessThan(5000);
  });
});

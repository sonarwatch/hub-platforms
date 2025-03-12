import { platforms } from "./index";
import { z } from "zod";
import { fetchPlatforms } from "./index";

const PlatformSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().url(),
  links: z.object({
    website: z.string().url(),
    discord: z.string().url().optional(),
    telegram: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    medium: z.string().url().optional(),
    documentation: z.string().url().optional(),
  }),
});

describe("Platforms", () => {
  it("should have a length greater than 0", () => {
    expect(platforms.length).toBeGreaterThan(0);
  });

  it("should have a length less than 5000", () => {
    expect(platforms.length).toBeLessThan(5000);
  });

  it("should match the PlatformSchema", () => {
    platforms.forEach((platform) => {
      expect(() => PlatformSchema.parse(platform)).not.toThrow();
    });
  });

  // test for duplicates
  it("should not have duplicate ids", () => {
    const ids = platforms.map((platform) => platform.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });
});

describe("fetchPlatforms", () => {
  it("should return an array of platforms", async () => {
    const result = await fetchPlatforms();
    expect(Array.isArray(result)).toBeTruthy();
  });
});

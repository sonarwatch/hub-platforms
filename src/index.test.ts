import { platforms } from "./index";
import { z } from "zod";

describe("Platforms", () => {
  it("should have a length greater than 0", () => {
    expect(platforms.length).toBeGreaterThan(0);
  });

  it("should have a length less than 5000", () => {
    expect(platforms.length).toBeLessThan(5000);
  });

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

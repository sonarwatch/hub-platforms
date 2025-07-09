import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";
import { platforms } from "../src/index";

const PlatformSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().url(),
  tags: z.array(z.string()).min(1),
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

  it("should have a length less than 10000", () => {
    expect(platforms.length).toBeLessThan(10000);
  });

  it("should match the PlatformSchema", () => {
    platforms.forEach((platform) => {
      try {
        PlatformSchema.parse(platform);
      } catch (e) {
        throw new Error(
          `Platform does not match the schema (${platform.id}): ${e}`,
        );
      }
    });
  });

  // test for duplicates
  it("should not have duplicate ids", () => {
    const ids = platforms.map((platform) => platform.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });

  // test that all platforms have a webp image in the img folder
  it("should have webp images for all platforms", () => {
    const imgDir = join(__dirname, "..", "img");
    const missingImages = platforms
      .map((platform) => ({
        id: platform.id,
        hasImage: existsSync(join(imgDir, `${platform.id}.webp`)),
      }))
      .filter((result) => !result.hasImage);

    if (missingImages.length > 0) {
      throw new Error(
        `Missing webp images for platforms: ${missingImages
          .map((p) => p.id)
          .join(", ")}`,
      );
    }
  });

  // verify that the img folder has no extra images
  it("should not have extra images in the img folder", () => {
    const imgDir = join(__dirname, "..", "img");
    const extraImages = readdirSync(imgDir, { withFileTypes: true })
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .filter((file) => !platforms.some((p) => file === `${p.id}.webp`));

    if (extraImages.length > 0) {
      throw new Error(`Extra images in the img folder: ${extraImages}`);
    }
  });
});

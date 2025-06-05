import { platforms as platformsRaw } from "./platforms/index.js";
import { Platform } from "./types.js";

export { Platform } from "./types.js";
export * from "./utils.js";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/sonarwatch/hub-platforms/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

export { platforms };

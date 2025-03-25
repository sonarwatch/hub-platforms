import { platforms as platformsRaw } from "./platforms/index";
import { Platform } from "./types";

export { Platform } from "./types";
export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/sonarwatch/hub-platforms/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

export { platforms };

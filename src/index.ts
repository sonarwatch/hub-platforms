import platformsRaw from "./platforms";
import { Platform } from "./types";

export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/jup-ag/hub-platforms/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

export { platforms };

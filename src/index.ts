import platformsRaw from "./platforms";
import { Platform } from "./types";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/jup-ag/hub-platforms/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

export async function fetchPlatforms(): Promise<Platform[]> {
  const response = await fetch(
    "https://github.com/sonarwatch/hub-platforms/releases/latest/download/platforms.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch platforms");
  }
  const data: Platform[] = await response.json();
  return data;
}

export { platforms };

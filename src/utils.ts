import { Platform } from "./types.js";

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

import { writeFileSync } from "fs";
import { join } from "path";
import { platforms } from "../src";
import { services } from "../src";

const outputPlatformsPath = join(__dirname, "..", "dist", "platforms.json");
const outputServicesPath = join(__dirname, "..", "dist", "services.json");

writeFileSync(outputPlatformsPath, JSON.stringify(platforms, null, 2));
writeFileSync(outputServicesPath, JSON.stringify(services, null, 2));

console.log(`Generated platforms JSON at ${outputPlatformsPath}`);
console.log(`Generated services JSON at ${outputServicesPath}`);

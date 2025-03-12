import { writeFileSync } from "fs";
import { join } from "path";
import { platforms } from "../src";

const outputPath = join(__dirname, "..", "dist", "platforms.json");

writeFileSync(outputPath, JSON.stringify(platforms, null, 2));
console.log(`Generated platforms JSON at ${outputPath}`);

import { writeFileSync } from "fs";
import path from "node:path";
import { platforms } from "../src/index.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, "..", "dist", "platforms.json");

writeFileSync(outputPath, JSON.stringify(platforms, null, 2));
console.log(`Generated platforms JSON at ${outputPath}`);

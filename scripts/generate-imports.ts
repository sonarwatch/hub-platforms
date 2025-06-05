import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EOL } from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function isFirstCharNumber(str: string) {
  return /^\d/.test(str); // Checks if the first character is a digit (0-9)
}

function kebabToCamel(str: string) {
  const fStr = isFirstCharNumber(str) ? `_${str}` : str;
  return fStr
    .split("-") // Split by hyphen
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    ) // Capitalize except the first word
    .join(""); // Join without spaces
}

const targetDir = path.resolve(__dirname, "../src/platforms"); // Change to your directory
const indexFile = path.join(targetDir, "index.ts");

const files = fs
  .readdirSync(targetDir)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts")
  .map((file) => file.slice(0, -3)); // Remove .ts and convert to PascalCase

let indexData = `// ⚠️ This file is auto-generated. Do not modify it manually.${EOL}${EOL}`;
indexData += `import { PlatformRaw } from "../types.js";${EOL}${EOL}`;

indexData += files
  .map((platformId) => {
    return `import * as ${kebabToCamel(platformId)} from "./${platformId}.js";`;
  }) // Generate export statements
  .join(EOL);

indexData += `${EOL}${EOL}`;
indexData += `export const platforms: PlatformRaw[] = [${EOL}`;
indexData += files
  .map((platformId) => `  ${kebabToCamel(platformId)}.platform,`)
  .join(EOL);
indexData += `${EOL}];${EOL}`;

fs.writeFileSync(indexFile, indexData);

console.log(`✅ Generated index.ts with imports for ${files.length} files.`);

# Hub Platforms

A comprehensive registry of platforms in the Solana DeFi ecosystem. This package provides structured platform data including metadata, links, and token information.

## Installation

```bash
npm install @sonarwatch/hub-platforms
# or
yarn add @sonarwatch/hub-platforms
```

## Usage

Get platforms locally

```typescript
import { platforms } from "@sonarwatch/hub-platforms";

console.log(platforms);
```

Get platforms dynamically

```typescript
import { fetchPlatforms } from "@sonarwatch/hub-platforms";

fetchPlatforms()
  .then((fetchedPlatforms) => {
    console.log(fetchedPlatforms);
  })
  .catch((error) => {
    console.error("Error fetching platforms:", error);
  });
```

## Publishing

To publish a new version:

```bash
npm version patch
git push origin main --tags

# or
npm version patch && git push origin main --tags
```

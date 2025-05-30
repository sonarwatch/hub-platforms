export type Platform = {
  id: string;
  name: string;
  image: string;
  description?: string;
  defiLlamaId?: string;
  isDeprecated: boolean;
  tokens?: string[];
  tags: PlatformTag[];
  links: {
    website: string;
    discord?: string;
    telegram?: string;
    twitter?: string;
    github?: string;
    medium?: string;
    documentation?: string;
  };
};

export type PlatformTag =
  | "dapp"
  | "tool"
  | "cex"
  | "nft-collection"
  | "nft-marketplace"
  | "lst"
  | "gaming"
  | "bridge"
  | "dao"
  | "memecoin"
  | "stablecoin"
  | "wallet"
  | "launchpad"
  | "dex"
  | "social"
  | "depin"
  | "desci";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type PlatformRaw = Omit<Optional<Platform, "isDeprecated">, "image">;

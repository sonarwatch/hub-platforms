import { PlatformRaw } from "./types";
const platforms: PlatformRaw[] = [
  {
    id: "switchboard",
    name: "Switchboard",
    description:
      "Switchboard is a permissionless oracle network that seamlessly connects dapps to real-world data.",
    links: {
      website: "https://switchboard.xyz/",
      discord: "https://discord.gg/switchboardxyz",
      telegram: "https://t.me/switchboardxyz",
      twitter: "https://x.com/switchboardxyz",
      github: "https://github.com/switchboard-xyz",
      medium: "https://switchboardxyz.medium.com/",
      documentation: "https://docs.switchboard.xyz/",
    },
  },
  {
    id: "marinade",
    name: "Marinade",
    description:
      "Marinade connects SOL holders with the best staking rates on Solana.",
    defiLlamaId: "parent#marinade-finance",
    links: {
      website: "https://marinade.finance/",
      discord: "https://discord.gg/yTdH8YkYKg",
      twitter: "https://twitter.com/MarinadeFinance",
      github: "https://github.com/marinade-finance",
      documentation: "https://docs.marinade.finance/",
    },
  },
  {
    id: "marginfi",
    name: "Marginfi",
    description:
      "A liquidity layer built for finance. Access native yield, embedded risk systems, and off-chain data plug-ins.",
    defiLlamaId: "parent#marginfi",
    links: {
      website: "https://www.marginfi.com/",
      telegram: "https://t.me/mrgnteam",
      twitter: "https://twitter.com/marginfi",
      github: "https://github.com/mrgnlabs/",
      documentation: "https://docs.marginfi.com/",
    },
  },
  {
    id: "saber",
    name: "Saber",
    defiLlamaId: "saber",
    isDeprecated: true,
    links: { website: "https://saberdao.io/" },
  },
  {
    id: "save",
    name: "Save",
    description:
      "Solend is an algorithmic, decentralized protocol for lending and borrowing on Solana. ",
    defiLlamaId: "save",
    links: {
      website: "https://save.finance/",
      discord: "https://discord.com/invite/J7m48UUPkJ",
      twitter: "https://x.com/save_finance",
      github: "https://github.com/solendprotocol",
      documentation: "https://docs.save.finance/",
    },
  },
  {
    id: "dumpy",
    name: "Dumpy",
    links: { website: "https://dumpy.fun/" },
  },
  {
    id: "raydium",
    name: "Raydium",
    description:
      "Raydium is an automated market maker (AMM) built on the Solana blockchain which enables lightning-fast trades, permissionless pool creation, and new features for earning yield",
    defiLlamaId: "raydium",
    links: {
      website: "https://raydium.io/",
      discord: "https://discord.com/invite/raydium",
      telegram: "https://t.me/raydiumprotocol",
      github: "https://github.com/raydium-io",
      documentation: "https://docs.raydium.io/raydium/",
    },
  },
  {
    id: "orca",
    name: "Orca",
    description:
      "Orca is the go-to place to trade tokens and provide liquidity on Solana",
    defiLlamaId: "orca",
    links: {
      website: "https://www.orca.so/",
      discord: "https://discord.orca.so/",
      twitter: "https://twitter.com/orca_so",
      github: "https://github.com/orca-so",
      medium: "https://orca-so.medium.com/",
      documentation: "https://docs.orca.so/",
    },
  },
  {
    id: "orca-staking",
    name: "Orca Staking",
    links: { website: "https://v1.orca.so/staking" },
  },
  {
    id: "meteora",
    name: "Meteora",
    description: "Building the most dynamic liquidity protocols in DeFi.",
    defiLlamaId: "parent#meteora",
    links: {
      website: "https://meteora.ag/",
      discord: "https://discord.gg/WwFwsVtvpH",
      twitter: "https://x.com/MeteoraAG",
      github: "https://github.com/MeteoraAg",
      documentation: "https://docs.meteora.ag/",
    },
  },
  {
    id: "cetus",
    name: "Cetus",
    defiLlamaId: "parent#cetus",
    links: { website: "https://www.cetus.zone/" },
  },
  {
    id: "turbos",
    name: "Turbos",
    defiLlamaId: "turbos",
    links: { website: "https://app.turbos.finance/" },
  },
  {
    id: "thala",
    name: "Thala",
    defiLlamaId: "parent#thala-labs",
    links: { website: "https://www.thala.fi/" },
  },
  {
    id: "tensor",
    name: "Tensor",
    description: "Solana's Leading NFT Marketplace",
    links: {
      website: "https://www.tensor.trade/",
      discord: "https://discord.gg/tensor",
      twitter: "https://twitter.com/tensor_hq",
      github: "https://github.com/tensor-hq",
      documentation: "https://docs.tensor.trade/",
    },
  },
  {
    id: "openbook",
    name: "OpenBook",
    defiLlamaId: "openbook",
    links: { website: "https://www.openbook.ag/" },
  },
  {
    id: "serum",
    name: "Serum",
    defiLlamaId: "serum",
    isDeprecated: true,
    links: { website: "https://projectserum.com/" },
  },
  {
    id: "aave",
    name: "AAVE",
    defiLlamaId: "parent#aave",
    links: { website: "https://aave.com/" },
  },
  {
    id: "drift",
    name: "Drift",
    description:
      "Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade.",
    defiLlamaId: "parent#drift",
    links: {
      website: "https://www.drift.trade/",
      discord: "https://discord.com/invite/fMcZBH8ErM",
      twitter: "https://twitter.com/DriftProtocol",
      github: "https://github.com/drift-labs",
      documentation: "https://docs.drift.trade/",
    },
  },
  {
    id: "mango",
    name: "Mango",
    description: "Perps and spot trading on Solana",
    defiLlamaId: "parent#mango-markets",
    isDeprecated: true,
    links: {
      website: "mango-v4-ui.vercel.app ",
      discord: "https://discord.com/invite/pcSkP3yJMU",
      twitter: "https://twitter.com/mangomarkets",
      github: "https://discord.gg/pcSkP3yJMUs",
    },
  },
  {
    id: "yieldfan",
    name: "Yieldfan",
    isDeprecated: true,
    links: { website: "https://yield.fan/dashboard" },
  },
  {
    id: "seaswap",
    name: "Seaswap",
    defiLlamaId: "seaswap",
    links: { website: "https://seaswap.io/" },
  },
  {
    id: "astroport",
    name: "Astroport",
    defiLlamaId: "astroport",
    links: {
      website: "https://astroport.fi",
      twitter: "https://twitter.com/astroport_fi",
    },
  },
  {
    id: "pancakeswap",
    name: "PancakeSwap",
    defiLlamaId: "parent#pancakeswap",
    links: { website: "https://pancakeswap.finance/" },
  },
  {
    id: "aftermath",
    name: "Aftermath",
    defiLlamaId: "parent#aftermath-finance",
    links: { website: "https://aftermath.finance/" },
  },
  {
    id: "liquidswap",
    name: "Liquidswap",
    defiLlamaId: "liquidswap",
    links: { website: "https://liquidswap.com" },
  },
  {
    id: "auxexchange",
    name: "Aux Exchange",
    defiLlamaId: "aux-exchange",
    links: { website: "https://aux.exchange/" },
  },
  {
    id: "maker",
    name: "Maker DAO",
    defiLlamaId: "makerdao",
    links: { website: "https://makerdao.com/" },
  },
  {
    id: "kamino",
    name: "Kamino",
    description: "Borrow, Earn and Leverage on Solana",
    defiLlamaId: "parent#kamino-finance",
    links: {
      website: "https://kamino.finance/",
      discord: "https://discord.com/invite/kaminofinance",
      twitter: "https://x.com/KaminoFinance",
      github: "https://github.com/Kamino-Finance",
      documentation: "https://docs.kamino.finance/",
    },
  },
  {
    id: "bucket",
    name: "Bucket",
    defiLlamaId: "bucket-protocol",
    links: { website: "https://bucketprotocol.io/" },
  },
  {
    id: "navi",
    name: "NAVI",
    defiLlamaId: "parent#navi-protocol",
    links: {
      website: "https://www.naviprotocol.io/",
      twitter: "https://twitter.com/navi_protocol",
    },
  },
  {
    id: "scallop",
    name: "Scallop",
    defiLlamaId: "parent#scallop",
    links: { website: "https://app.scallop.io/" },
  },
  {
    id: "rocketpool",
    name: "Rocket Pool",
    defiLlamaId: "rocket-pool",
    links: { website: "https://rocketpool.net/" },
  },
  {
    id: "lido",
    name: "Lido",
    defiLlamaId: "lido",
    links: { website: "https://lido.fi/" },
  },
  {
    id: "curve",
    name: "Curve Finance",
    defiLlamaId: "parent#curve-finance",
    links: { website: "https://curve.fi/" },
  },
  {
    id: "compound",
    name: "Compound",
    defiLlamaId: "parent#compound-finance",
    links: { website: "https://compound.finance/" },
  },
  {
    id: "stargate",
    name: "Stargate",
    defiLlamaId: "stargate-v1",
    links: { website: "https://stargate.finance/" },
  },
  {
    id: "stader",
    name: "Stader",
    defiLlamaId: "stader",
    links: { website: "https://staderlabs.com/" },
  },
  {
    id: "uniswap",
    name: "Uniswap",
    defiLlamaId: "parent#uniswap",
    links: { website: "https://uniswap.org/" },
  },
  {
    id: "balancer",
    name: "Balancer",
    defiLlamaId: "parent#balancer",
    links: { website: "https://balancer.fi/" },
  },
  {
    id: "paraswap",
    name: "Paraswap",
    defiLlamaId: "paraswap",
    links: { website: "https://paraswap.io/" },
  },
  {
    id: "hawksight",
    name: "HawkFi",
    description:
      "Leading analytics & automation platform for on-chain market makers to get the smartest yield on Solana memecoins and altcoins.",
    defiLlamaId: "hawkfi",
    links: {
      website: "https://www.hawkfi.ag/",
      discord: "https://discord.gg/hawkfi",
      telegram: "https://t.me/hawkfi",
      twitter: "https://x.com/HawkFi_",
      documentation: "https://hawkfi.gitbook.io/whitepaper",
    },
  },
  {
    id: "realms",
    name: "Realms",
    description:
      "The home for on-chain communities in the Solana ecosystem. Helping ~3K Web3 organizations and their members thrive.",
    defiLlamaId: "spl-governance",
    links: {
      website: "https://app.realms.today/",
      discord: "https://discord.gg/6UZHcNJFr8",
      github: "https://github.com/Mythic-Project",
      documentation: "https://docs.realms.today/",
    },
  },
  {
    id: "helium",
    name: "Helium",
    links: {
      website: "https://heliumvote.com/",
      twitter: "https://twitter.com/helium",
    },
  },
  {
    id: "maple",
    name: "Maple",
    defiLlamaId: "parent#maple-finance",
    links: { website: "https://www.maple.finance/" },
  },
  {
    id: "flexlend",
    name: "LuLo",
    description:
      "Lulo is a decentralized lending aggregator, which automatically optimizes users deposits by migrating their deposits to the lending pool with the best yield, while allowing for personalized risk settings",
    defiLlamaId: "lulo",
    links: {
      website: "https://www.lulo.fi",
      discord: "https://discord.com/invite/lulo",
      telegram: "https://t.me/uselulo",
      twitter: "https://twitter.com/uselulo",
      github: "https://github.com/lulo-labs",
      documentation: "https://docs.lulo.fi/",
    },
  },
  {
    id: "fluxbeam",
    name: "Flux Beam",
    description: "Solana DEX, supporting innovation and Token-2022",
    defiLlamaId: "fluxbeam",
    links: {
      website: "https://fluxbeam.xyz/",
      discord: "https://discord.com/invite/DtyqTx97kz",
      telegram: "https://t.me/fluxbeam",
      twitter: "https://x.com/FluxBeamDEX",
      documentation: "https://docs.fluxbeam.xyz/",
    },
  },
  {
    id: "jupiter-launchpad",
    name: "Jupiter Launchpad",
    description: "Ultimate decentralised distribution stack",
    links: {
      website: "https://lfg.jup.ag/",
      twitter: "https://twitter.com/JupiterExchange",
    },
  },
  {
    id: "jupiter-governance",
    name: "Jupiter DAO",
    description: "The first voting platform for Cats in history.",
    links: {
      website: "https://vote.jup.ag/",
      twitter: "https://x.com/jup_dao",
    },
  },
  {
    id: "jupiter-exchange",
    name: "Jupiter Exchange",
    description:
      "The best decentralized liquidity platform, largest DAO & best community in crypto.",
    defiLlamaId: "parent#jupiter",
    links: {
      website: "https://jup.ag/",
      discord: "https://discord.gg/jup",
      twitter: "https://twitter.com/JupiterExchange",
      github: "https://github.com/jup-ag",
      documentation: "https://station.jup.ag/",
    },
  },
  {
    id: "zeta",
    name: "Zeta",
    description: "Zeta Markets is the premier derivatives protocol on Solana.",
    defiLlamaId: "zeta",
    links: {
      website: "https://www.zeta.markets/",
      discord: "https://discord.gg/Xn9HCJaDZd",
      telegram: "https://t.me/realzetamarkets",
      twitter: "https://x.com/ZetaMarkets",
      github: "https://github.com/zetamarkets",
      documentation: "https://docs.zeta.markets/",
    },
  },
  {
    id: "venus",
    name: "Venus",
    defiLlamaId: "venus-core-pool",
    links: { website: "https://app.venus.io/" },
  },
  {
    id: "sushiswap",
    name: "Sushiswap",
    defiLlamaId: "sushiswap",
    links: {
      website: "https://www.sushi.com/",
      twitter: "https://twitter.com/SushiSwap",
    },
  },
  {
    id: "yearn",
    name: "Yearn",
    defiLlamaId: "yearn-finance",
    links: { website: "https://yearn.fi/" },
  },
  {
    id: "atrix",
    name: "Atrix",
    defiLlamaId: "atrix",
    links: { website: "https://app.atrix.finance/liquidity" },
  },
  {
    id: "01",
    name: "01",
    description:
      "01 Exchange is a next-gen trading experience with the speed of centralized exchanges and the integrity of decentralized finance, powered by Nord Engine.",
    defiLlamaId: "01",
    isDeprecated: true,
    links: {
      website: "https://01-prod-git-main-monkeylanding.vercel.app/",
      discord: "https://discord.gg/JZwrrgMhGT",
      twitter: "https://x.com/01_exchange",
      documentation: "https://01.xyz/docs",
    },
  },
  {
    id: "goosefx",
    name: "GooseFX",
    description:
      "The best place to earn and farm yield on your assets with our AMMs. Simple, fast, and efficient.  ",
    defiLlamaId: "goosefx",
    links: {
      website: "https://app.goosefx.io/",
      discord: "https://discord.com/invite/cDEPXpY26q",
      telegram: "https://www.t.me/goosefx",
      twitter: "https://x.com/GooseFX1",
    },
  },
  {
    id: "rain",
    name: "Rain",
    description:
      "RainFi is a peer-to-peer (P2P) lending protocol built on the Solana blockchain, offering innovative ways for users to access and utilize financial resources.",
    defiLlamaId: "rain.fi",
    links: {
      website: "https://rain.fi/",
      discord: "discord.gg/rainfi",
      twitter: "https://twitter.com/RainFi_",
      github: "https://github.com/rain-foundation",
      medium: "https://medium.com/@rainfi_",
      documentation: "https://docs.rain.fi/",
    },
  },
  {
    id: "lifinity",
    name: "Lifinity",
    description:
      "Solana's oracle-based DEX, designed to improve capital efficiency and reverse impermanent loss.",
    defiLlamaId: "parent#lifinity",
    links: {
      website: "https://ido.lifinity.io/rewards",
      discord: "http://discord.gg/K2tvfcXwWr",
      twitter: "https://x.com/Lifinity_io",
      github: "https://github.com/Lifinity-Labs",
      medium: "https://medium.com/@lifinity.io",
      documentation: "https://docs.lifinity.io/",
    },
  },
  {
    id: "port",
    name: "Port",
    defiLlamaId: "port-finance",
    isDeprecated: true,
    links: {
      website: "https://mainnet.port.finance/lending",
      github: "https://github.com/port-finance",
    },
  },
  {
    id: "instadapp",
    name: "Instadapp",
    defiLlamaId: "instadapp",
    links: {
      website: "https://instadapp.io/",
      twitter: "https://twitter.com/instadapp",
    },
  },
  {
    id: "streamflow",
    name: "Streamflow",
    description:
      "Streamflow exponentially grows on-chain economies by providing infrastructure for creation, distribution, and incentive alignment of tokens.",
    defiLlamaId: "streamflow",
    links: {
      website: "https://app.streamflow.finance/",
      discord: "https://discord.com/invite/streamflow-851921970169511976",
      twitter: "https://twitter.com/streamflow_fi",
      github: "https://github.com/streamflow-finance",
      medium: "https://streamflow.medium.com/",
      documentation: "https://docs.streamflow.finance/en/",
    },
  },
  {
    id: "benqi",
    name: "Benqi",
    defiLlamaId: "benqi-lending",
    links: {
      website: "https://benqi.fi/",
      twitter: "https://twitter.com/BenqiFinance",
    },
  },
  {
    id: "parcl",
    name: "Parcl",
    description:
      "Making investing in real estate faster, simpler, and smarter. ",
    defiLlamaId: "parent#parcl",
    links: {
      website: "https://app.parcl.co/",
      discord: "https://discord.gg/parcl",
      twitter: "https://twitter.com/Parcl",
      github: "https://github.com/ParclFinance",
      documentation: "https://docs.parcl.co/",
    },
  },
  {
    id: "pyth",
    name: "Pyth",
    description:
      "Secure your smart contracts with reliable, low-latency market data from institutional sources. Build apps with high-fidelity oracle feeds designed for mission-critical systems.",
    defiLlamaId: "pyth-network",
    links: {
      website: "https://staking.pyth.network/",
      discord: "https://discord.com/invite/pythnetwork",
      twitter: "https://twitter.com/PythNetwork",
      github: "https://github.com/pyth-network",
      documentation: "https://docs.pyth.network/home",
    },
  },
  {
    id: "circuit",
    name: "Circuit",
    links: {
      website: "https://app.circuit.trade/",
      twitter: "https://twitter.com/CircuitTrading_",
      documentation: "https://docs.circuit.trade/",
    },
  },
  {
    id: "gauntlet",
    name: "Gauntlet",
    description:
      "Economic modeling for crypto. Research, optimization, and risk management for DEX, Lending, Perpetuals, (Re)staking, Stablecoins, and Ecosystems",
    links: {
      website:
        "https://app.drift.trade/vaults/CoHd9JpwfcA76XQGA4AYfnjvAtWKoBQ6eWBkFzR1A2ui",
      twitter: "https://twitter.com/gauntlet_xyz",
    },
  },
  {
    id: "hedgy",
    name: "Hedgy",
    description:
      "Hedgy is a decentralized hedge fund designed to provide innovative strategies for consistent yield while minimizing exposure to market risks.",
    links: {
      website: "https://hedgy.market/",
      twitter: "https://x.com/HedgyMarket",
      documentation: "https://docs.hedgy.market/",
    },
  },
  {
    id: "knightrade",
    name: "Knightrade",
    defiLlamaId: "knightrade",
    links: {
      website: "https://app.knightrade.io/",
      discord: "https://discord.gg/TKMrEJzCM4 ",
      telegram: "t.me/knightrade",
      twitter: "https://x.com/KnightradeTeam",
      documentation: "https://doc.knightrade.io/",
    },
  },
  {
    id: "m1capital",
    name: "M1 Capital",
    description:
      "M1 Capital is an Amsterdam-based hedge fund managing $50 million in Assets under Management (AuM). The firm specializes in market-neutral strategies.",
    links: {
      website: "https://m1-capital.com/",
      twitter: "https://x.com/M1Capital_",
    },
  },
  {
    id: "moose",
    name: "Moose Market",
    description:
      "Moose is a decentralized protocol on the Solana blockchain, designed to provide users with opportunities to generate yield by depositing USDC into various vaults.",
    defiLlamaId: "moose",
    links: {
      website: "https://moose.market/",
      twitter: "https://twitter.com/moose_market",
      documentation: "https://docs.moose.market/",
    },
  },
  {
    id: "neutral",
    name: "Neutral",
    description: "Hedge fund strategies for everyone.",
    defiLlamaId: "neutral-trade",
    links: {
      website: "https://www.app.neutral.trade/",
      discord: "https://discord.gg/neutraltrade",
      telegram: "https://t.me/neutraltrade/",
      twitter: "https://twitter.com/TradeNeutral",
      medium: "https://neutraltrade.medium.com/",
      documentation: "https://docs.neutral.trade/",
    },
  },
  {
    id: "vectis",
    name: "Vectis",
    description:
      "Vectis is the premier platform for high-yield, low-risk opportunities on Solana, designed for both seasoned DeFi enthusiasts and newcomers.",
    defiLlamaId: "vectis-finance",
    links: {
      website: "https://app.vectis.finance/",
      telegram: "https://t.me/vectisfi",
      twitter: "https://x.com/vectis_finance",
      medium: "https://medium.com/@vectisfinance",
      documentation: "https://docs.vectis.finance/",
    },
  },
  {
    id: "aries",
    name: "Aries",
    defiLlamaId: "aries-markets",
    links: {
      website: "https://app.ariesmarkets.xyz/",
      twitter: "https://twitter.com/AriesMarkets",
    },
  },
  {
    id: "flash",
    name: "FlashTrade",
    description: "Trade Perpetuals with instant fills and on demand liquidity.",
    defiLlamaId: "flashtrade",
    links: {
      website: "https://beast.flash.trade/",
      discord: "https://discord.com/invite/HqYDWnMP6J",
      twitter: "https://twitter.com/FlashTrade_",
      github: "https://github.com/flash-trade",
      documentation: "https://docs.flash.trade/flash-trade",
    },
  },
  {
    id: "bonkrewards",
    name: "Bonk Rewards",
    description: "Social layer and community meme coin of Solana.",
    defiLlamaId: "bonkswap",
    links: {
      website: "https://bonkrewards.com/",
      discord: "https://discord.com/invite/qaQa6M6mN2",
      telegram: "https://t.me/Official_Bonk_Inu",
      twitter: "https://twitter.com/bonk_inu",
      medium: "https://medium.com/@bonk_inu",
    },
  },
  {
    id: "accessprotocol",
    name: "Access Protocol",
    description:
      "Access is a content and service monetization protocol offering incentivized subscriptions by staking the native ACS token.",
    defiLlamaId: "access-protocol",
    links: {
      website: "https://hub.accessprotocol.co",
      discord: "https://discord.com/invite/access-protocol-1001837380044587118",
      twitter: "https://twitter.com/AccessProtocol",
      github: "https://github.com/Access-Labs-Inc",
      documentation: "https://docs.accessprotocol.co/guide",
    },
  },
  {
    id: "bskt",
    name: "BSKT",
    description:
      "Baskets of assets in a portfolio, bridging liquidity cross-chain.",
    links: {
      website: "https://claim.bskt.fi/",
      discord: "https://discord.gg/VdSdWqpqQ6",
      telegram: "t.me/BSKT_FI",
      twitter: "https://twitter.com/bsktfi",
      documentation: "https://www.bskt.fi/bskt-whitepaper.pdf",
    },
  },
  {
    id: "genesysgo",
    name: "Genesysgo",
    description:
      "The first & only decentralized data storage network powered exclusively by mobile devices. Scalable, secure, trustless.",
    links: {
      website: "https://www.shdwdrive.com/",
      discord: "https://discord.com/invite/shdwdrive",
      twitter: "https://twitter.com/genesysgo",
      github: "https://github.com/GenesysGo",
      documentation: "https://docs.shdwdrive.com/",
    },
  },
  {
    id: "aurory",
    name: "Aurory",
    description:
      "Seekers of Tokane by Aurory, is a free-to-play, immersive JRPG built by a team of +60 gaming industry veterans.",
    links: {
      website: "https://app.aurory.io",
      discord: "https://discord.gg/aurory",
      twitter: "https://twitter.com/AuroryProject",
      documentation: "https://docs.aurory.io/",
    },
  },
  {
    id: "flowmatic",
    name: "Flowmatic",
    links: {
      website: "https://www.flowmatic.xyz/",
      discord: "https://discord.gg/flowmatic",
      twitter: "https://twitter.com/FlowmaticXYZ",
      documentation: "https://docs.flowmatic.xyz/",
    },
  },
  {
    id: "yaku",
    name: "Yaku",
    links: {
      website: "https://staking.yaku.gg/",
      twitter: "https://twitter.com/YakuCorp",
    },
  },
  {
    id: "madbears",
    name: "MadBears",
    links: {
      website: "https://staking.madbears.club/",
      twitter: "https://twitter.com/madbearsclub",
    },
  },
  {
    id: "kishu",
    name: "Kishu",
    links: {
      website: "https://staking.kishuthedog.com/",
      twitter: "https://twitter.com/kishuthedog",
    },
  },
  {
    id: "armada",
    name: "Armada",
    description:
      "No code token staking setup on solana. Professionally managed and non custodial token liquidity strategies.",
    defiLlamaId: "armada-staking",
    isDeprecated: true,
    links: {
      website: "https://armada-alliance.com/",
      twitter: "https://x.com/armadafi",
      github: "https://github.com/mithraiclabs",
    },
  },
  {
    id: "gary",
    name: "Gary",
    links: {
      website: "https://gary.club/lock_gary",
      twitter: "https://twitter.com/GaryCoinOnSol",
    },
  },
  {
    id: "gecko",
    name: "Gecko",
    links: {
      website: "https://staking.geckocoin.xyz/",
      twitter: "https://twitter.com/GeckCoin",
    },
  },
  {
    id: "ore-refinery",
    name: "Ore Refinery",
    links: {
      website: "https://ore-refinery.netlify.app/",
      twitter: "https://twitter.com/OreSupply",
    },
  },
  {
    id: "brawl",
    name: "Brawl AI",
    links: { website: "https://staking.brawlailayer.org/" },
  },
  {
    id: "gofurs",
    name: "Gofurs",
    links: { website: "https://stake.gofursdelsol.com/" },
  },
  {
    id: "akuma",
    name: "Akuma",
    links: { website: "https://staking.theakuma.xyz" },
  },
  {
    id: "abex",
    name: "ABEx Finance",
    defiLlamaId: "abex-finance",
    links: {
      website: "https://abex.fi/",
      twitter: "https://twitter.com/ABExFinance",
    },
  },
  {
    id: "symmetry",
    name: "Symmetry",
    description: "Solana's on-chain asset management infrastructure layer",
    defiLlamaId: "symmetry",
    links: {
      website: "https://www.symmetry.fi/",
      discord: "http://discord.gg/ahdqBRgE7G",
      telegram: "https://t.me/symmetry_fi",
      twitter: "https://twitter.com/symmetry_fi",
      github: "https://github.com/symmetry-protocol",
      medium: "https://symmetry-fi.medium.com/",
      documentation: "https://docs.symmetry.fi/",
    },
  },
  {
    id: "staratlas",
    name: "Star Atlas",
    description:
      "A grand strategy game of space exploration, territorial conquest, political domination, and more.",
    links: {
      website: "https://staratlas.com/",
      discord: "https://discord.com/invite/StarAtlas",
      telegram: "https://t.me/staratlasgame",
      twitter: "https://twitter.com/staratlas",
      github: "https://github.com/staratlasmeta",
      documentation: "https://staratlas.com/newsroom/game-manuals",
    },
  },
  {
    id: "tulip",
    name: "Tulip",
    description: "The Efficient Solana Yield Aggregator",
    defiLlamaId: "tulip-protocol",
    isDeprecated: true,
    links: {
      website: "https://tulip.garden/",
      discord: "https://discord.gg/tulipgarden",
      telegram: "https://t.me/TulipProtocol",
      twitter: "https://twitter.com/TulipProtocol",
      github: "https://github.com/sol-farm",
      medium: "https://medium.com/tulipprotocol",
      documentation: "https://tulip-protocol.gitbook.io/tulip-protocol",
    },
  },
  {
    id: "phoenix",
    name: "Phoenix",
    description:
      "Phoenix is a decentralized limit order book on Solana, supporting markets for spot assets.",
    defiLlamaId: "phoenix",
    links: {
      website: "https://www.phoenix.trade/",
      discord: "discord.gg/ESaTYGzqpd",
      twitter: "https://twitter.com/PhoenixTrade",
      github: "https://github.com/Ellipsis-Labs",
      documentation:
        "https://ellipsis-labs.gitbook.io/phoenix-dex/tRIkEFlLUzWK9uKO3W2V",
    },
  },
  {
    id: "uxd",
    name: "UXD",
    description:
      "Decentralized stablecoin stabilized by an asset liability management module",
    defiLlamaId: "uxd",
    isDeprecated: true,
    links: {
      website: "https://uxd.fi/",
      discord: "https://discord.gg/CAuFvvd5qw",
      twitter: "https://twitter.com/UXDProtocol",
      github: "https://github.com/uxdprotocol",
      medium: "https://uxdprotocol.medium.com/",
      documentation: "https://docs.uxd.fi/uxdprotocol",
    },
  },
  {
    id: "wormhole",
    name: "Wormhole",
    description:
      "Future-proof, permissionless tooling to empower multichain builders",
    links: {
      website: "https://w.wormhole.com/",
      discord: "https://discord.com/invite/wormholecrypto",
      telegram: "https://t.me/wormholecrypto",
      twitter: "https://twitter.com/wormhole",
      github: "https://github.com/wormhole-foundation",
      documentation: "https://wormhole.com/docs/",
    },
  },
  {
    id: "banx",
    name: "Banx",
    description:
      "Borrow, Lend, Multiply, Hedge Solana tokens and NFTs with no expiration, no price liquidation.",
    defiLlamaId: "banx",
    links: {
      website: "https://banx.gg/",
      discord: "https://discord.com/invite/banxfromfrakt",
      twitter: "https://twitter.com/banx_gg",
      github: "https://github.com/frakt-solana",
      documentation: "https://docs.banx.gg/",
    },
  },
  {
    id: "nosana",
    name: "Nosana",
    description:
      "Nosana is your go-to GPU marketplace for AI inference. Save up to 6x on compute costs and scale your AI workloads effortlessly.",
    links: {
      website: "https://app.nosana.io/",
      discord: "http://discord.gg/nosana-ai",
      telegram: "http://t.me/NosanaCompute",
      twitter: "https://x.com/nosana_ai",
      github: "https://github.com/nosana-ci",
      documentation: "https://docs.nosana.com/",
    },
  },
  {
    id: "jito",
    name: "Jito",
    description: "Earn MEV rewards through Jito's Solana Liquid Staking pool.",
    defiLlamaId: "jito",
    links: {
      website: "https://jito.network/harvest",
      discord: "https://discord.gg/jito",
      twitter: "https://twitter.com/jito_sol",
      github: "https://github.com/jito-foundation",
      medium: "https://medium.com/@Jito-Foundation",
      documentation: "https://www.jito.network/docs/jitosol/overview/",
    },
  },
  {
    id: "renzo",
    name: "Renzo",
    description:
      "Renzo is a restaking protocol that abstracts and manages AVS strategies for Liquid Restaking Tokens (LRTs), making Ethereum and Solana restaking ezpz and accessible to everyone.",
    defiLlamaId: "renzo",
    links: {
      website: "https://app.renzoprotocol.com/discover",
      discord: "https://discord.gg/renzoprotocol",
      telegram: "https://t.me/RenzoProtocolChat",
      twitter: "https://x.com/RenzoProtocol",
      github: "https://github.com/Renzo-Protocol",
      documentation: "https://docs.renzoprotocol.com/docs/",
    },
  },
  {
    id: "kyros",
    name: "Kyros",
    links: {
      website: "https://app.kyros.fi/",
      twitter: "https://x.com/kyrosfi",
    },
  },
  {
    id: "magiceden",
    name: "MagicEden",
    description: "The NFT Marketplace.",
    links: {
      website: "https://magiceden.io/solana",
      discord: "https://discord.gg/magiceden",
      twitter: "https://twitter.com/MagicEden",
      github: "https://github.com/magiceden",
      documentation: "https://community.magiceden.io/learn",
    },
  },
  {
    id: "clone",
    name: "Clone",
    defiLlamaId: "clone-protocol",
    isDeprecated: true,
    links: {
      website: "https://clone.so/",
      twitter: "https://twitter.com/CloneProtocol",
      documentation: "https://docs.clone.so/",
    },
  },
  {
    id: "sandglass",
    name: "Sandglass",
    links: {
      website: "https://sandglass.so/",
      discord: "https://discord.gg/jSNe84QZ67",
      twitter: "https://twitter.com/sandglass_so",
      medium:
        "https://medium.com/@lifinity.io/introducing-sandglass-a-yield-trading-protocol-on-solana-9b5ee5b33aff",
    },
  },
  {
    id: "kriya",
    name: "Kriya",
    defiLlamaId: "parent#kriyadex",
    links: {
      website: "https://www.app.kriya.finance/",
      twitter: "https://twitter.com/KriyaDEX",
    },
  },
  {
    id: "haedal",
    name: "Haedal",
    defiLlamaId: "haedal-protocol",
    links: {
      website: "https://haedal.xyz/stake",
      twitter: "https://twitter.com/HaedalProtocol",
    },
  },
  {
    id: "flowx",
    name: "FlowX Finance",
    defiLlamaId: "flowx-v2",
    links: {
      website: "https://flowx.finance",
      twitter: "https://twitter.com/FlowX_finance",
    },
  },
  {
    id: "typus",
    name: "Typus",
    defiLlamaId: "parent#typus-finance",
    links: {
      website: "https://typus.finance/",
      twitter: "https://twitter.com/TypusFinance",
    },
  },
  {
    id: "mole",
    name: "Mole",
    defiLlamaId: "mole",
    links: {
      website: "https://app.mole.fi/",
      twitter: "https://twitter.com/moledefi",
    },
  },
  {
    id: "bonfida",
    name: "Bonfida (SNS)",
    description: "Web3 Identity for Everyone",
    defiLlamaId: "solana-name-service",
    links: {
      website: "https://www.sns.id/",
      discord: "https://discord.com/invite/bonfida-778660171265474572",
      telegram: "https://t.me/snsdotsol",
      twitter: "https://twitter.com/bonfida",
      github: "https://github.com/Bonfida",
      documentation: "https://docs.sns.id/collection",
    },
  },
  {
    id: "cropper",
    name: "Cropper",
    defiLlamaId: "cropper-clmm",
    links: {
      website: "https://cropper.finance/",
      twitter: "https://twitter.com/CropperFinance",
    },
  },
  {
    id: "hedgehog",
    name: "Hedgehog Markets",
    description: "Prediction markets on Solana",
    defiLlamaId: "hedgehog-markets",
    links: {
      website: "https://hedgehog.markets",
      discord: "http://discord.gg/2KusaG9wH7",
      twitter: "https://twitter.com/HedgehogMarket",
      github: "https://github.com/Hedgehog-Markets",
      medium: "https://hedgehogmarkets.substack.com/",
    },
  },
  {
    id: "whalesmarket",
    name: "Whales Market",
    description:
      "Trade like a pro with advanced tools and features at your fingertips",
    defiLlamaId: "whales-market",
    links: {
      website: "https://app.whales.market/",
      discord: "https://discord.com/invite/whalesmarket",
      twitter: "https://twitter.com/WhalesMarket",
      github: "https://github.com/Whales-Market/",
      documentation: "https://docs.whales.market/",
    },
  },
  {
    id: "futarchy",
    name: "Futarchy",
    description:
      "Futarchy is a DAO that uses prediction markets to make decisions.",
    links: {
      website: "https://futarchy.metadao.fi/",
      discord: "https://discord.com/invite/metadao",
      twitter: "https://x.com/MetaDAOProject",
      github: "https://github.com/metaDAOproject",
      documentation: "https://docs.metadao.fi/",
    },
  },
  {
    id: "elixir",
    name: "Elixir",
    links: {
      website: "https://agg.elixir.xyz/",
      twitter: "https://x.com/elixir",
    },
  },
  {
    id: "moonwalk",
    name: "Moonwalk",
    description: "Gamify your Fitness Journey",
    links: {
      website: "https://app.moonwalk.fit/",
      discord: "https://discord.com/invite/jBhgHWUJ9U",
      telegram: "https://t.me/+x0hEQqQP1GpjZGZh",
      twitter: "https://twitter.com/moonwalkfitness",
      documentation: "https://moonwalk.fit/faq",
    },
  },
  {
    id: "bluefin",
    name: "Bluefin",
    defiLlamaId: "parent#bluefin",
    links: {
      website: "https://trade.bluefin.io/",
      twitter: "https://x.com/bluefinapp",
    },
  },
  {
    id: "citrus",
    name: "Citrus",
    description:
      "Solana's most feature packed and friendly NFT lending platform, brought to you by the Famous Fox Federation.",
    defiLlamaId: "citrus",
    links: {
      website: "https://citrus.famousfoxes.com/",
      discord: "https://discord.com/invite/famousfoxes",
      twitter: "https://twitter.com/FamousFoxFed",
      documentation: "https://citrus.famousfoxes.com/faq",
    },
  },
  {
    id: "sharky",
    name: "Sharky",
    description:
      "Sharky is the first escrowless NFT lending and borrowing protocol on Solana. Users can borrow SOL against their NFTs or Lend SOL and earn a high % APY.",
    defiLlamaId: "sharky",
    links: {
      website: "https://sharky.fi/",
      discord: "https://discord.gg/sharkyfi",
      twitter: "https://twitter.com/SharkyFi",
      github: "https://github.com/SharkyFi",
    },
  },
  {
    id: "sanctum",
    name: "Sanctum",
    description:
      "Sanctum is a new primitive built on Solana to power liquid staking and bring Solana into an infinite-LST future. Sanctum enables users that stake SOL natively or with a liquid staking token (LST) to tap into a powerful unified liquidity layer.",
    defiLlamaId: "parent#sanctum",
    links: {
      website: "https://www.sanctum.so/",
      discord: "discord.gg/sanctumso",
      twitter: "https://twitter.com/sanctumso",
      github: "https://github.com/igneous-labs",
      documentation: "https://learn.sanctum.so/docs",
    },
  },
  {
    id: "allbridge",
    name: "Allbridge",
    description:
      "Allbridge is a cross-chain bridge that enables seamless asset transfers between different blockchains.",
    defiLlamaId: "allbridge-core",
    links: {
      website: "https://core.allbridge.io/pools",
      discord: "https://discord.com/invite/ASuPY8d3E6",
      twitter: "https://twitter.com/Allbridge_io",
      github: "https://github.com/allbridge-io",
      documentation: "https://docs-core.allbridge.io/",
    },
  },
  {
    id: "famousfoxfederation",
    name: "Famous Fox Federation",
    links: {
      website: "https://famousfoxes.com",
      discord: "https://discord.com/invite/famousfoxes",
      twitter: "https://twitter.com/famousfoxfed",
    },
  },
  {
    id: "nxfinance",
    name: "NX Finance",
    defiLlamaId: "nx-finance",
    links: {
      website: "https://nxfinance.io/",
      discord: "https://discord.com/invite/nxfinance",
      twitter: "https://twitter.com/NX_Finance",
    },
  },
  {
    id: "solayer",
    name: "Solayer",
    description:
      "Solayer is the restaking protocol on Solana, securing both endogenous AVS (dApps) through stake-weighted quality of service and exogenous AVS via Solana-based POS primitives",
    defiLlamaId: "parent#solayer",
    links: {
      website: "https://solayer.org/",
      discord: "https://discord.com/invite/solayerlabs",
      telegram: "https://t.me/solayer_discussion",
      twitter: "https://x.com/solayer_labs",
      github: "https://github.com/solayer-labs",
      documentation:
        "https://docs.solayer.org/documentation/get-started/introduction",
    },
  },
  {
    id: "picasso",
    name: "Picasso",
    description:
      "Picasso L1 Protocol enables secure bridging and multi-asset restaking through cross-chain Inter-Blockchain-Communication (IBC).",
    links: {
      website: "https://app.picasso.network/solana-staking/",
      discord: "https://discord.com/invite/composable",
      telegram: "https://t.me/composablechat",
      twitter: "https://x.com/picasso_network",
      github: "https://github.com/ComposableFi",
      medium: "https://medium.com/@Picasso_Network",
      documentation: "https://docs.picasso.network/",
    },
  },
  {
    id: "quarry",
    name: "Quarry",
    defiLlamaId: "quarry",
    isDeprecated: true,
    links: {
      website: "https://app.quarry.so/",
      github: "https://github.com/QuarryProtocol",
    },
  },
  {
    id: "thevault",
    name: "The Vault",
    defiLlamaId: "the-vault",
    links: {
      website: "https://thevault.finance/",
      discord: "https://discord.gg/aQC53CGgQY",
      twitter: "https://twitter.com/thevaultfinance",
      github: "https://github.com/SolanaVault",
      documentation: "https://docs.thevault.finance/",
    },
  },
  {
    id: "debridge",
    name: "deBridge",
    description:
      "Cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains.",
    defiLlamaId: "debridge",
    links: {
      website: "https://debridge.finance/",
      discord: "https://discord.gg/debridge",
      telegram: "https://t.me/deBridge_finance",
      twitter: "https://x.com/deBridgeFinance",
      github: "https://github.com/debridge-finance/",
      documentation: "https://docs.debridge.finance/",
    },
  },
  {
    id: "stabble",
    name: "stabble",
    description: "Solana's first frictionless liquidity and trading layer",
    defiLlamaId: "stabble",
    links: {
      website: "https://app.stabble.org/",
      discord: "https://discord.com/invite/SfkybtttdC",
      telegram: "https://t.me/+XWwNwDja8Oo4M2Y8",
      twitter: "https://x.com/stabbleorg",
      github: "https://github.com/stabbleorg",
      documentation: "https://docs.stabble.org/",
    },
  },
  {
    id: "francium",
    name: "Francium",
    description:
      "Francium is a DeFi yield strategy Platform on Solana, providing leveraged/hedged farming, DeFi strategies & on-chain trading strategies.",
    defiLlamaId: "francium",
    isDeprecated: true,
    links: {
      website: "https://francium.io/",
      discord: "discord.gg/francium",
      telegram: "https://t.me/franciumprotocol",
      twitter: "https://x.com/Francium_Defi",
      github: "https://github.com/Francium-DeFi",
      medium: "https://francium-defi.medium.com/",
    },
  },
  {
    id: "adrastea",
    name: "Adrastea",
    description:
      "Adrastea is a composable leverage protocol that facilitates isolated boosting, with a primary mission to simplify the process and amplify the yield.",
    defiLlamaId: "adrastea",
    links: {
      website: "https://app.adrastea.fi/",
      discord: "https://discord.gg/adrasteafinance",
      twitter: "https://x.com/AdrasteaFinance",
      github: "https://github.com/adrasteafinance",
      documentation: "https://docs.adrastea.fi/",
    },
  },
  {
    id: "elemental",
    name: "Elemental",
    description:
      "Solana-based crypto fund dedicated to making DeFi investing simple",
    links: {
      website: "https://elemental.fund/",
      telegram: "https://tg.elemental.fund",
      twitter: "https://twitter.com/elementaldefi",
      github: "https://github.com/elementalfund",
      documentation: "https://docs.elemental.fund/",
    },
  },
  {
    id: "adrena",
    name: "Adrena",
    description:
      "Adrena is a decentralized protocol for borrowing and lending on Solana.",
    defiLlamaId: "adrena-protocol",
    links: {
      website: "https://app.adrena.xyz/",
      discord: "https://discord.gg/adrena",
      twitter: "https://x.com/AdrenaProtocol",
      github: "https://github.com/orgs/AdrenaFoundation",
      documentation: "https://docs.adrena.xyz/",
    },
  },
  {
    id: "joule",
    name: "Joule",
    defiLlamaId: "joule-finance",
    links: {
      website: "https://app.joule.finance/",
      twitter: "https://twitter.com/JouleFinance",
    },
  },
  {
    id: "meso",
    name: "Meso",
    defiLlamaId: "meso-finance",
    links: {
      website: "https://app.meso.finance/",
      twitter: "https://x.com/Meso_Finance",
    },
  },
  {
    id: "loopscale",
    name: "Loopscale",
    description:
      "Loopscale is a new way to lend and borrow onchain with the best rates, any asset, and less risk.",
    links: {
      website: "https://app.loopscale.com/",
      discord: "https://discord.gg/loopscale",
      twitter: "https://x.com/LoopscaleLabs",
      github: "https://github.com/bridgesplit",
      documentation: "https://docs.loopscale.com/",
    },
  },
  {
    id: "vaultka",
    name: "Vaultka",
    description: "Liquidity optimization layer for yield bearing tokens.",
    defiLlamaId: "vaultka",
    links: {
      website: "https://solana.vaultka.com/",
      discord: "https://discord.com/invite/hXagEmhN8F",
      twitter: "https://x.com/Vaultkaofficial",
      github: "https://github.com/Vaultka-Project",
      medium: "https://medium.com/@Vaultka",
      documentation: "https://docs.vaultka.com/",
    },
  },
  {
    id: "zelo",
    name: "Zelo Finance",
    description: "Solana's Lossless Lottery Savings Protocol ",
    links: {
      website: "https://www.zelofi.io/",
      discord: "https://discord.gg/blocksmithlabs",
      twitter: "https://x.com/zelofinance",
      github: "https://github.com/Blocksmith-Labs",
      documentation: "https://blocksmithlabs-1.gitbook.io/zelo-docs",
    },
  },
  {
    id: "hxro",
    name: "Hxro",
    description:
      "Hxro Network protocols power a diverse set of community–built derivatives trading and betting applications on Solana. The network aims to create the most liquid markets for Solana-based assets while enabling its ecosystem to participate in the value it accrues.",
    defiLlamaId: "hxro-network",
    links: {
      website: "https://app.hxro.finance/",
      discord: "https://discord.com/invite/8rWajs2Dqu",
      twitter: "https://twitter.com/HxroNetwork",
      github: "https://github.com/Hxro-Network",
      documentation: "https://docs.hxro.network/",
    },
  },
  {
    id: "spdr",
    name: "Spiderswap",
    description: "Aggregator for Everyone",
    links: {
      website: "https://www.spiderswap.io/staking",
      discord: "https://discord.com/invite/spiderswap",
      telegram: "https://t.me/Tolysspider",
      twitter: "https://twitter.com/spdrswap",
      github: "https://github.com/itsmodsiw/spidy",
      documentation: "https://webpaper.spiderswap.io/whitepaper",
    },
  },
  {
    id: "grass",
    name: "Grass",
    description: "Get rewarded for your unused internet",
    links: {
      website: "https://www.grassfoundation.io/stake",
      discord: "https://discord.com/invite/getgrass",
      twitter: "https://twitter.com/getgrass_io",
      documentation: "https://grass-foundation.gitbook.io/grass-docs",
    },
  },
  {
    id: "cyberfrogs",
    name: "CyberFrogs",
    links: {
      website: "https://legacy.cyberfrogs.io/faction-contracts-v3",
      twitter: "https://twitter.com/CyberFrogsNFT",
    },
  },
  {
    id: "metaplex",
    name: "Metaplex",
    description: "Build decentralizedapplications on Solana and the SVM",
    links: {
      website: "https://resize.metaplex.com",
      discord: "discord.gg/metaplex",
      twitter: "https://x.com/metaplex",
      github: "https://github.com/metaplex-foundation",
      documentation: "https://www.metaplex.com/guides",
    },
  },
  {
    id: "ensofi",
    name: "EnsoFi",
    description:
      "Cross-chain DeFi Hub. Lend, Borrow, LSTs, Earn & more with stable returns.",
    links: {
      website: "https://app.ensofi.xyz",
      discord: "https://discord.com/invite/ensofi",
      telegram: "https://t.me/ensofiapp_bot/ensofi?startapp=mainnet",
      twitter: "https://twitter.com/Ensofi_xyz",
      github: "https://github.com/Ensofi-xyz",
      documentation: "https://ensofi.gitbook.io/ensofi",
    },
  },
  {
    id: "coinmarketcap",
    name: "CoinMarketCap",
    links: { website: "https://coinmarketcap.com/" },
  },
  {
    id: "doubleup",
    name: "DoubleUp",
    defiLlamaId: "doubleup",
    links: {
      website: "https://www.doubleup.fun/",
      twitter: "https://x.com/doubleup_app",
    },
  },
  {
    id: "photofinish",
    name: "Photo Finish",
    description:
      "Experience the thrill of owning a race horse without any of the hassle.",
    links: {
      website: "https://photofinish.live/",
      discord: "https://discord.com/invite/AsEMTAnJaS",
      twitter: "https://x.com/photofinishgame",
    },
  },
  {
    id: "pudgy",
    name: "Pudgy Penguins",
    links: {
      website: "https://pudgypenguins.com/",
      discord: "discord.gg/pudgypenguins",
      twitter: "https://x.com/pudgypenguins",
    },
  },
  {
    id: "gpool",
    name: "GPool",
    links: { website: "https://stake.gpool.cloud/" },
  },
  {
    id: "defiland",
    name: "Defiland",
    description:
      " multi-chain agriculture-simulation game created to gamify Decentralized Finance",
    links: {
      website: "https://staking.defiland.app/",
      discord: "https://discord.gg/defiland",
      telegram: "https://t.me/official_defiland",
      twitter: "https://x.com/DeFi_Land",
      documentation: "https://docs.defiland.app/",
    },
  },
  {
    id: "perena",
    name: "Perena",
    description:
      "Perena is building the infrastructure for stablecoins on Solana, starting with a novel AMM, Numéraire.",
    defiLlamaId: "perena",
    links: {
      website: "https://perena.org/numeraire",
      discord: "https://discord.com/invite/vaNnNBqXMt",
      telegram: "https://t.me/perena_community",
      twitter: "https://x.com/Perena__",
      documentation:
        "https://perena.notion.site/Product-Documentation-15fa37a29ca48060afd9cabb21b44d5c",
    },
  },
  {
    id: "fragmetric",
    name: "Fragmetric",
    description:
      "Fragmetric is a native liquid restaking protocol on Solana that aims to improve the economic potential and security of the Solana ecosystem.",
    defiLlamaId: "fragmetric",
    links: {
      website: "https://fragmetric.xyz/",
      discord: "https://discord.gg/fragmetric",
      twitter: "https://x.com/fragmetric",
      github: "https://github.com/fragmetric-labs",
      documentation: "https://docs.fragmetric.xyz/",
    },
  },
  {
    id: "divvy",
    name: "Divvy",
    description:
      "Frictionless betting experience powered by Solana with no signups or deposits",
    defiLlamaId: "divvy.bet",
    links: {
      website: "https://app.divvy.bet/",
      discord: "https://discord.com/invite/divvybet",
      twitter: "https://twitter.com/DivvyBet",
      documentation:
        "https://divvy.bet/wp-content/uploads/2022/12/Divvy_Knowledge_Hub_06.pdf",
    },
  },
  {
    id: "exponent",
    name: "Exponent",
    description:
      "Building Solana’s DeFi yield exchange — Choose between fixed or leveraged yields.",
    defiLlamaId: "exponent",
    links: {
      website: "https://www.exponent.finance",
      telegram: "https://t.me/exponentcitizens",
      twitter: "https://x.com/exponentfinance",
      github: "https://github.com/exponent-finance",
      documentation: "https://docs.exponent.finance/",
    },
  },
  {
    id: "ratex",
    name: "RateX",
    description:
      "RateX Protocol is a decentralized exchange (DEX) built on Solana, specializing in leveraged yield trading.",
    defiLlamaId: "ratex",
    links: {
      website: "https://rate-x.io/",
      discord: "https://discord.com/invite/ratex",
      telegram: "https://t.me/RateXofficial",
      twitter: "https://x.com/RateX_Dex",
      github: "https://github.com/RateX-Protocol",
      documentation: "https://docs.rate-x.io/ratex",
    },
  },
  {
    id: "defituna",
    name: "DefiTuna",
    description: "A comprehensive toolkit for Liquidity Providers",
    links: {
      website: "https://defituna.com",
      discord: "https://discord.gg/vNWwVWbnzs",
      twitter: "https://x.com/DeFiTuna",
      documentation: "https://defituna.gitbook.io/defituna-docs",
    },
  },
  {
    id: "iloop",
    name: "ILoop",
    description: "The first AI-optimized Vault for LST and Defi on Solana",
    defiLlamaId: "iloop",
    links: {
      website: "https://app.iloop.finance/",
      discord: "https://discord.com/invite/ffDUZZ4kuu",
      telegram: "https://t.me/iloophq",
      twitter: "https://twitter.com/iLoop_HQ",
      documentation: "https://iloop-1.gitbook.io/docs.iloop.finance",
    },
  },
  {
    id: "sonic",
    name: "Sonic",
    description:
      "Sonic is the first atomic SVM chain designed to enable sovereign game economies on Solana. By utilizing the HyperGrid framework, Sonic offers unparalleled speed and scalability for on-chain gaming experiences.",
    links: {
      website: "https://www.sonic.game/",
      discord: "https://discord.com/invite/joinmirrorworld",
      twitter: "https://x.com/SonicSVM",
      github: "https://github.com/mirrorworld-universe",
      documentation: "https://docs.sonic.game/",
    },
  },
  {
    id: "pluto",
    name: "Pluto",
    description: "Leveraged Yield Machine on Solana",
    defiLlamaId: "pluto",
    links: {
      website: "https://pluto.so/",
      discord: "https://discord.com/invite/plutoleverage",
      telegram: "https://t.me/PlutoLeverage",
      twitter: "https://x.com/plutoleverage",
      github: "https://github.com/plutoleverage/",
      documentation: "https://docs.pluto.so/",
    },
  },
  {
    id: "layer3",
    name: "Layer3",
    description: "Powering the next generation of consumer attention.",
    links: {
      website: "https://solana.layer3.xyz/",
      discord: "https://discord.gg/layer3",
      twitter: "https://twitter.com/layer3xyz",
      github: "https://github.com/layer3xyz",
      documentation: "https://docs.layer3.xyz/",
    },
  },
  {
    id: "puffcoin",
    name: "Puff",
    links: { website: "https://staking.puffcoin.fun/" },
  },
  {
    id: "triad",
    name: "Triad",
    description:
      "Prediction markets on Solana. Trade politics, crypto, sports & culture.",
    links: {
      website: "https://app.triadfi.co/",
      discord: "http://discord.gg/triadfi",
      telegram: "https://t.me/triad369",
      twitter: "https://x.com/triadfi",
      github: "https://github.com/triadxyz",
      documentation: "https://docs.triadfi.co/",
    },
  },
  {
    id: "baskt",
    name: "baskt",
    description: "Tokenizing on-chain narratives.",
    links: {
      website: "https://www.baskt.fun/",
      telegram: "https://t.me/basktfun",
      twitter: "https://x.com/basktdotfun",
      documentation: "https://www.baskt.fun/about#features",
    },
  },
  {
    id: "guano",
    name: "Guano",
    links: {
      website: "https://www.guanocoin.com/",
      twitter: "https://x.com/guanocoin",
    },
  },
  {
    id: "tortuga",
    name: "Tortuga",
    defiLlamaId: "tortuga",
    links: { website: "https://app.tortuga.finance/" },
  },
  {
    id: "ditto",
    name: "Ditto",
    defiLlamaId: "ditto",
    links: { website: "https://stake.dittofinance.io/" },
  },
  {
    id: "binancestakedeth",
    name: "Binance staked ETH",
    defiLlamaId: "binance-staked-eth",
    links: { website: "https://www.binance.com/en/wbeth" },
  },
  {
    id: "stusdt",
    name: "stUSDT",
    defiLlamaId: "stusdt",
    links: { website: "https://stusdt.io/#/home" },
  },
  {
    id: "coinbasestakedeth",
    name: "Coinbase Staked ETH",
    defiLlamaId: "coinbase-wrapped-staked-eth",
    links: {
      website: "https://www.coinbase.com/price/coinbase-wrapped-staked-eth",
    },
  },
  {
    id: "blaze",
    name: "Blaze Staked SOL",
    defiLlamaId: "blazestake",
    links: { website: "https://stake.solblaze.org/" },
  },
  {
    id: "frax",
    name: "Frax Staked ETH",
    defiLlamaId: "frax-ether",
    links: { website: "https://frax.finance/" },
  },
  {
    id: "stakewise",
    name: "StakeWise Staked ETH",
    defiLlamaId: "stakewise",
    links: { website: "https://stakewise.io/" },
  },
  {
    id: "ondo-finance",
    name: "Ondo Finance",
    defiLlamaId: "ondo-finance",
    links: { website: "https://ondo.finance/" },
  },
  {
    id: "carrot",
    name: "Carrot",
    defiLlamaId: "carrot",
    links: { website: "https://use.deficarrot.com/" },
  },
  {
    id: "stepfinance",
    name: "Step Finance",
    defiLlamaId: "step-finance",
    links: {
      website: "https://app.step.finance/",
      twitter: "https://twitter.com/StepFinance_",
    },
  },
  {
    id: "ligma",
    name: "Ligma",
    links: {
      website: "https://stake.ligmanode.com/",
      twitter: "https://twitter.com/ligmanode",
    },
  },
  {
    id: "asgardfi",
    name: "Asgard",
    links: { website: "https://asgardfi.com/" },
  },
  {
    id: "zeta",
    name: "Zeta",
    description: "Zeta Markets is the premier derivatives protocol on Solana.",
    defiLlamaId: "zeta",
    links: {
      website: "https://www.zeta.markets/",
      discord: "https://discord.gg/Xn9HCJaDZd",
      telegram: "https://t.me/realzetamarkets",
      twitter: "https://x.com/ZetaMarkets",
      github: "https://github.com/zetamarkets",
      documentation: "https://docs.zeta.markets/",
    },
  },
];
export default platforms;

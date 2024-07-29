import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/types";
import { readdirSync } from "fs";
import { join } from "path";

import "hardhat-gas-reporter";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-contract-sizer";

const dotenv = require("dotenv");
dotenv.config();

try {
  readdirSync(join(__dirname, "types"));
  require("./tasks");
} catch {
  //
}

const {
  PRIVATE_KEY,
  BSC_API_KEY,
  ETH_API_KEY,
  POL_API_KEY,
  INFURA_KEY,
  NETWORK,
} = process.env;

const config: HardhatUserConfig & { namedAccounts: any } = {
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
  },
  solidity: {
    version: "0.7.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey:
      NETWORK === "eth"
        ? ETH_API_KEY
        : NETWORK === "bsc"
        ? BSC_API_KEY
        : NETWORK === "pol"
        ? POL_API_KEY
        : "",
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
  },
  mocha: {
    timeout: 599999,
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    bscTestnet: {
      accounts: [PRIVATE_KEY as string],
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    },
    polygonAmoy: {
      accounts: [PRIVATE_KEY as string],
      chainId: 80002,
      url: "https://polygon-amoy.infura.io/v3/" + INFURA_KEY,
      verify: {
        etherscan: {
          apiUrl: "https://api-amoy.polygonscan.com",
          apiKey: POL_API_KEY,
        },
      },
    },
    ethSepolia: {
      accounts: [PRIVATE_KEY as string],
      chainId: 11155111,
      url: "https://sepolia.infura.io/v3/" + INFURA_KEY,
    },
    bscMainnet: {
      accounts: [PRIVATE_KEY as string],
      chainId: 56,
      url: "https://bsc-dataseed.binance.org/",
    },
    ethMainnet: {
      accounts: [PRIVATE_KEY as string],
      chainId: 1,
      url: "https://mainnet.infura.io/v3/" + INFURA_KEY,
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
};

export default config;

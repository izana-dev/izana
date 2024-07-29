# IzanaNFT

IzanaNFT is an NFT marketplace project developed by SotaTek. This README provides instructions on how to deploy the smart contract and set up the project.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Networks](#networks)
- [Deployment](#deployment)
- [Tasks](#tasks)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

IzanaNFT is a decentralized marketplace for NFTs built on blockchain.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/)
- [Metamask](https://metamask.io/) wallet

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:sotatek-dev/izananft-sc.git
   cd izananft-sc
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn
   ```

## Networks

Mainnet:

- Binance smart chain (bscMainnet)

Testnet:

- Ethereum Sepolia (ethSepolia)
- Binance smart chain Testnet (bscTestnet)
- Polygon Amoy (polygonAmoy)

## Deployment

1. Make sure to set your VARIABLES in a .env file:

   ```sh
   cp .env.development .env
   ```

2. Compile Contracts

   ```sh
   npm run compile
   ```

   or

   ```sh
   yarn compile
   ```

3. Run deploy scripts: `NETWORK` refer by [Networks](#networks)

   ```sh
   npm run ${NETWORK}:deploy
   ```

   or

   ```sh
   yarn ${NETWORK}:deploy
   ```

   Check deployments in `deployments/${NETWORK}` folder

4. Verify contracts (Optional)

   ```sh
   npm run ${NETWORK}:verify
   ```

   or

   ```sh
   yarn ${NETWORK}:verify
   ```

## Tasks
   Run task
   ```sh
   npx hardhat --network ${NETWORK} ${TASK_NAME}

   ```
    Check `TASK_NAME` in `tasks` folder
## Testing

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

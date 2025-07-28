# Avalanche Adamur NOC Smart Contracts

This repository contains smart contracts and scripts for the Avalanche Adamur NOC project, built using [Foundry](https://book.getfoundry.sh/)—a blazing fast, portable, and modular toolkit for Ethereum application development written in Rust.

---

## Tools & Languages Used

- **Smart Contracts:** Solidity
- **Development Framework:** Foundry (forge, cast, anvil)
- **Front End:** React, Node.js, Python
- **Backend:** Node.js, Python
- **Subgraph/Indexing:** The Graph
- **Libraries:** OpenZeppelin Contracts, forge-std
- **Other:** Ethers.js, Hardhat (optional), Infura (RPC provider), AI (for some modules)
- **Testing:** Foundry, Mocha/Chai (optional for JS integration)
- **Deployment:** Foundry scripts, Anvil (local blockchain)

---

## Team Information

| First Name | Last Name  | What are you building?           | Team Name | Team Lead      | Stack (Front end, Backend, Smart Contracts) | Email                        | Personal Github   | Project Github Link                |
|------------|------------|----------------------------------|-----------|---------------|---------------------------------------------|------------------------------|-------------------|-------------------------------------|
| Simon      | Muchemi    | Creator staking application      | Pledgr    |               | Python, Node.JS                            | Muchemi.developer@gmail.com  | SymonMuchemi      | https://github.com/Pledger-DAO      |
| Shramee    | Srivastav  | Creator staking application      | Pledgr    |               | Arch/Crypto math                           | shramee.srivastav@gmail.com  | shramee           | https://github.com/Pledger-DAO      |
| Mozart     | Kandie     | Creator staking application      | Pledger   |               | React, Node                                | MozzartKandie@gmail.com      | legacymoz         | https://github.com/Pledger-DAO      |
| Jim        | Leston     | Creator staking application      | Pledgr    | Team Lead      | node/web/mobile app                        | jimlestonosoi42@gmail.com    | lestonEth         | https://github.com/Pledger-DAO      |
| Tonny      | Murithi    | Creator staking application      | Pledger   |               | Solidity, AI                               | tonnymurithi.tg@gmail.com    | metonniex         | https://github.com/Pledger-DAO      |
| Cynthia    | Wanjiru    | Creator staking application      | Pledger   |               | Full-stack                                 | cynthiamuemi@gmail.com       | Preciousmuemi      | https://github.com/Pledger-DAO      |
| Ian        | Macharia   | Creator staking application      | Pledger   |               | Py, Solidity, Node JS                      | Macharia.gichoya@gmail.com   | I-Macharia         | https://github.com/Pledger-DAO      |


---

## Table of Contents
- [Overview](#overview)
- [Contracts](#contracts)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Interacting with Contracts](#interacting-with-contracts)
- [Resources](#resources)

## Overview

This codebase provides a modular registry for creators, staking, and perks on Avalanche, with extensible smart contracts and a robust testing/deployment pipeline using Foundry.

## Contracts

- **CreatorRegistry**: Register, update, and manage creator profiles on-chain. Each creator has metadata (name, bio, avatar), activity status, and stats (total staked, fan count, creation time).
- **Staking**: (WIP) Staking logic for fans to support creators.
- **Perks**: (WIP) Perks and rewards for fans and creators.

Contracts are located in `contracts/`.

## Project Structure

```
contracts/
  creator.sol         # CreatorRegistry contract
  staking.sol         # Staking contract (WIP)
  perks.sol           # Perks contract (WIP)
  CreatorRegistryABI.json # ABI for front-end integration
script/
  DeployCreatorRegistry.s.sol # Deployment script for CreatorRegistry
  ...
test/
  Creator.t.sol       # Foundry tests for CreatorRegistry
lib/
  openzeppelin-contracts/     # OpenZeppelin library for security and standards
  forge-std/                  # Foundry standard library
```

## Getting Started

### Prerequisites

- [Foundry](https://book.getfoundry.sh/getting-started/installation) (forge, cast, anvil)
- Node.js (for front-end or integration scripts)

### Install Dependencies

```sh
forge install
```

## Development

### Build Contracts

```sh
forge build
```

### Format Code

```sh
forge fmt
```

## Testing

### Run All Tests

```sh
forge test
```

### Gas Snapshots

```sh
forge snapshot
```

## Local Blockchain

### Start Local Node

```sh
anvil
```

## Deployment

### Deploy CreatorRegistry Locally

1. Start Anvil in a terminal:
   ```sh
   anvil
   ```
2. Deploy contract using Foundry script:
   ```sh
   forge script script/DeployCreatorRegistry.s.sol --rpc-url http://localhost:8545 --broadcast --private-key <PRIVATE_KEY>
   ```
   Replace `<PRIVATE_KEY>` with one from Anvil output.

### 🛠 Deployment Details

- **Deployer:** `0x1255bB52BbcfE1bD8B7Bcd9F61b4327aef54045e`  
- **Deployed Contract Address:** `0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be`  
- **Transaction Hash:** [`0xc625a77c70031507bd9eb05ba197d36f9ed161d80da76d2345bbb0b57aa032a6`](https://testnet.snowtrace.io/tx/0xc625a77c70031507bd9eb05ba197d36f9ed161d80da76d2345bbb0b57aa032a6)

## Interacting with Contracts

### Using Cast (CLI)

- Register a creator:
  ```sh
  cast send <CONTRACT_ADDRESS> "registerCreator(string,string,string)" "Alice" "My bio" "https://avatar.url" --private-key <PRIVATE_KEY> --rpc-url http://localhost:8545
  ```
- Fetch creator profile:
  ```sh
  cast call <CONTRACT_ADDRESS> "creators(address)" <YOUR_ADDRESS> --rpc-url http://localhost:8545
  ```
- Update profile:
  ```sh
  cast send <CONTRACT_ADDRESS> "updateProfile(string,string,string)" "Alice2" "New bio" "https://avatar2.url" --private-key <PRIVATE_KEY> --rpc-url http://localhost:8545
  ```

### Using Node.js (Ethers.js)

See `testCreatorRegistry.js` for example integration scripts.

## Resources

- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [Ethers.js](https://docs.ethers.org/)

---

**For more details, see the documentation in the `docs/` folder.**

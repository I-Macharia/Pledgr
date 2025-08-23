# 🚀 Pledgr - Decentralized Creator Staking Platform

> Empowering creators through community-driven staking and exclusive perks on Avalanche

[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.19-363636?style=flat-square&logo=solidity)](https://soliditylang.org/)
[![Avalanche](https://img.shields.io/badge/Avalanche-E84142?style=flat-square&logo=avalanche&logoColor=white)](https://www.avax.network/)
[![Foundry](https://img.shields.io/badge/Foundry-gray?style=flat-square&logo=ethereum&logoColor=white)](https://getfoundry.sh/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)

## 🎯 What is Pledgr?

Pledgr revolutionizes creator monetization by enabling fans to stake tokens directly to their favorite creators. Built on Avalanche's fast and low-cost network, creators can offer exclusive perks, build stronger communities, and generate sustainable income through decentralized staking mechanisms.

### 🔥 Key Features

- **Creator Registry**: On-chain creator profiles with metadata and analytics
- **Community Staking**: Fans stake AVAX to support creators and unlock exclusive content
- **Dynamic Perks System**: Tier-based rewards and exclusive access for top stakers
- **Real-time Analytics**: Track staking performance and community growth
- **Cross-platform Integration**: Seamless Web3 wallet integration

## 🛠️ Tech Stack

**Smart Contracts**
- Solidity ^0.8.19
- Foundry (Development & Testing)
- OpenZeppelin Contracts

**Frontend**
- React 18 with TypeScript
- Vite (Build Tool)
- Ethers.js (Web3 Integration)
- TailwindCSS (Styling)

**Backend & Infrastructure**
- Node.js
- The Graph (Indexing)
- Avalanche C-Chain
- Python (Analytics)

## 📋 Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) package manager
- [Foundry](https://book.getfoundry.sh/getting-started/installation) toolkit
- [Core Wallet](https://core.app/) or MetaMask with Avalanche network

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Pledger-DAO/avalanche-adamur-noc.git
cd avalanche-adamur-noc
```

### 2. Install Dependencies

**Smart Contracts:**
```bash
forge install
```

**Frontend:**
```bash
cd app-registerUI
pnpm install
```

### 3. Set Up Environment

Create `.env` files in both root and frontend directories:

**Root `.env`:**
```bash
PRIVATE_KEY=your_private_key_here
AVALANCHE_RPC_URL=https://api.avax-test.network/ext/bc/C/rpc
ETHERSCAN_API_KEY=your_snowtrace_api_key
```

**Frontend `.env`:**
```bash
VITE_CONTRACT_ADDRESS=0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be
VITE_AVALANCHE_RPC=https://api.avax-test.network/ext/bc/C/rpc
```

### 4. Build & Test Smart Contracts

```bash
# Compile contracts
forge build

# Run tests
forge test

# Deploy locally
anvil # In separate terminal
forge script script/DeployCreatorRegistry.s.sol --rpc-url http://localhost:8545 --broadcast --private-key $PRIVATE_KEY
```

### 5. Start Frontend

```bash
cd app-registerUI
pnpm dev
```

Visit `http://localhost:5173` to see the app in action! 🎉

## 🔗 Deployed Contracts

### Fuji Testnet

| Contract | Address | Verified |
|----------|---------|----------|
| CreatorRegistry | [`0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be`](https://testnet.snowtrace.io/address/0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be) | ✅ |
| Staking | Coming Soon | - |
| Perks | Coming Soon | - |

**Deployment Transaction**: [`0xc625a77c70031507bd9eb05ba197d36f9ed161d80da76d2345bbb0b57aa032a6`](https://testnet.snowtrace.io/tx/0xc625a77c70031507bd9eb05ba197d36f9ed161d80da76d2345bbb0b57aa032a6)

## 🔌 Wallet Setup

### Adding Avalanche Fuji Testnet to Core Wallet

1. Open [Core Wallet](https://core.app/)
2. Click "Add Network" 
3. Select "Avalanche Fuji Testnet" or add manually:

```
Network Name: Avalanche Fuji Testnet
RPC URL: https://api.avax-test.network/ext/bc/C/rpc
Chain ID: 43113
Symbol: AVAX
Explorer: https://testnet.snowtrace.io/
```

4. Get testnet AVAX from the [Avalanche Faucet](https://faucet.avax.network/)

## 🎮 Usage Examples

### Register as a Creator

```solidity
// Using cast CLI
cast send $CONTRACT_ADDRESS "registerCreator(string,string,string)" \
  "Alice Creator" \
  "Digital artist creating NFT collections" \
  "https://ipfs.io/ipfs/QmYour...Avatar" \
  --private-key $PRIVATE_KEY \
  --rpc-url https://api.avax-test.network/ext/bc/C/rpc
```

### Query Creator Profile

```javascript
// Using ethers.js
const creator = await creatorRegistry.creators(creatorAddress);
console.log(`Name: ${creator.name}, Total Staked: ${creator.totalStaked}`);
```

## 📁 Project Structure

```
📦 Pledgr
├── 📂 contracts/              # Smart contracts
│   ├── creator.sol           # Creator registry
│   ├── staking.sol          # Staking logic (WIP)
│   └── perks.sol            # Perks system (WIP)
├── 📂 script/               # Deployment scripts
├── 📂 test/                 # Foundry tests
├── 📂 app-registerUI/       # React frontend
│   ├── 📂 src/
│   │   ├── 📂 components/   # UI components
│   │   ├── 📂 pages/        # Page components
│   │   ├── 📂 services/     # Web3 services
│   │   └── 📂 utils/        # Helper functions
├── 📂 lib/                  # Dependencies
└── 📂 docs/                 # Documentation
```

## 🧪 Testing

```bash
# Run all tests with gas reports
forge test --gas-report

# Test specific contract
forge test --match-contract CreatorTest

# Test with verbosity
forge test -vvv
```

## 🚢 Deployment

### Local Development

```bash
# Start local blockchain
anvil

# Deploy to local network
forge script script/DeployCreatorRegistry.s.sol \
  --rpc-url http://localhost:8545 \
  --broadcast \
  --private-key $PRIVATE_KEY
```

### Fuji Testnet

```bash
forge script script/DeployCreatorRegistry.s.sol \
  --rpc-url $AVALANCHE_RPC_URL \
  --broadcast \
  --private-key $PRIVATE_KEY \
  --verify \
  --etherscan-api-key $ETHERSCAN_API_KEY
```

## 🤝 Contributing

We welcome contributions from the community! Please check out our [Contributing Guidelines](contributing.md) before getting started.

### Quick Contribution Steps

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

| Name | Role | GitHub | Email |
|------|------|--------|--------|
| Jim Leston | Team Lead | [@lestonEth](https://github.com/lestonEth) | jimlestonosoi42@gmail.com |
| Simon Muchemi | Backend Developer | [@SymonMuchemi](https://github.com/SymonMuchemi) | Muchemi.developer@gmail.com |
| Shramee Srivastav | Cryptography | [@shramee](https://github.com/shramee) | shramee.srivastav@gmail.com |
| Mozart Kandie | Frontend Developer | [@legacymoz](https://github.com/legacymoz) | MozzartKandie@gmail.com |
| Tonny Murithi | Smart Contract Developer | [@metonniex](https://github.com/metonniex) | tonnymurithi.tg@gmail.com |
| Cynthia Wanjiru | Full-stack Developer | [@Preciousmuemi](https://github.com/Preciousmuemi) | cynthiamuemi@gmail.com |
| Ian Macharia | Backend Developer | [@I-Macharia](https://github.com/I-Macharia) | Macharia.gichoya@gmail.com |

## 📊 Roadmap

- [x] **Phase 1**: Creator Registry & Basic Frontend
- [ ] **Phase 2**: Staking Mechanism Implementation
- [ ] **Phase 3**: Dynamic Perks System
- [ ] **Phase 4**: Mobile App Development
- [ ] **Phase 5**: Mainnet Launch
- [ ] **Phase 6**: Creator Analytics Dashboard

## 📚 Resources

- [Avalanche Documentation](https://docs.avax.network/)
- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [React Documentation](https://react.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](license.md) file for details.


---

<div align="center">

**Built with ❤️ by the Pledgr team for the Avalanche ecosystem**

<!-- [Website](https://pledgr.app) • [Docs](https://docs.pledgr.app)  -->
</div>
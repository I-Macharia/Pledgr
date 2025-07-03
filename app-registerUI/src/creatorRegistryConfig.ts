// Minimal ABI for CreatorRegistry
export const CREATOR_REGISTRY_ABI = [
  {
    "type": "function",
    "name": "creatorList",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "creators",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "creator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "bio",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "avatar",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "isActive",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "totalStaked",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fanCount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "createdAt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isCreator",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "registerCreator",
    "inputs": [
      {
        "name": "_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_bio",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_avatar",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateProfile",
    "inputs": [
      {
        "name": "_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_bio",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_avatar",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "CreatorRegistered",
    "inputs": [
      {
        "name": "creator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CreatorUpdated",
    "inputs": [
      {
        "name": "creator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
];

// Replace with your deployed contract address
export const CREATOR_REGISTRY_ADDRESS = "0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be";

// Network configuration
export const SUPPORTED_NETWORKS = {
  43113: {
    name: "Avalanche Fuji Testnet",
    rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
    blockExplorer: "https://testnet.snowtrace.io",
  },
  43114: {
    name: "Avalanche Mainnet",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    blockExplorer: "https://snowtrace.io",
  },
}


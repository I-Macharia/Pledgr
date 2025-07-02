// Minimal ABI for CreatorRegistry
export const CREATOR_REGISTRY_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "string", "name": "_bio", "type": "string" },
      { "internalType": "string", "name": "_avatar", "type": "string" }
    ],
    "name": "registerCreator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "string", "name": "_bio", "type": "string" },
      { "internalType": "string", "name": "_avatar", "type": "string" }
    ],
    "name": "updateProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "creators",
    "outputs": [
      { "internalType": "address", "name": "creator", "type": "address" },
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "bio", "type": "string" },
      { "internalType": "string", "name": "avatar", "type": "string" },
      { "internalType": "bool", "name": "isActive", "type": "bool" },
      { "internalType": "uint256", "name": "totalStaked", "type": "uint256" },
      { "internalType": "uint256", "name": "fanCount", "type": "uint256" },
      { "internalType": "uint256", "name": "createdAt", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Replace with your deployed contract address
export const CREATOR_REGISTRY_ADDRESS = "0xYourDeployedContractAddress";

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

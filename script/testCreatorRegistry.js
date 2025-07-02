const { ethers } = require("ethers");
const abi = require("./CreatorRegistryABI.json");

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const signer = provider.getSigner(0); // Use the first Anvil account
const contractAddress = "<DEPLOYED_CONTRACT_ADDRESS>";
const contract = new ethers.Contract(contractAddress, abi, signer);

async function main() {
  // Register
  await contract.registerCreator("Alice", "My bio", "https://avatar.url");
  // Fetch
  const address = await signer.getAddress();
  const profile = await contract.creators(address);
  console.log(profile);
  // Update
  await contract.updateProfile("Alice2", "New bio", "https://avatar2.url");
  const updated = await contract.creators(address);
  console.log(updated);
}

main();
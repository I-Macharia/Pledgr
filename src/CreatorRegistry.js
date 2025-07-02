// src/CreatorRegistry.js
import { ethers } from "ethers";
import CreatorRegistryABI from "./CreatorRegistryABI.json";
import { CREATOR_REGISTRY_ADDRESS } from "./config";

export function getCreatorRegistryContract(signerOrProvider) {
  return new ethers.Contract(
    CREATOR_REGISTRY_ADDRESS,
    CreatorRegistryABI,
    signerOrProvider
  );
}
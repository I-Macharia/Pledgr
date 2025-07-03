import { ethers } from "ethers";
import contractABI from "../abi/YourContract.json";

const CONTRACT_ADDRESS = "0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be"; // <-- update this

export function getContract(signerOrProvider) {
    try {
        return new ethers.Contract(CONTRACT_ADDRESS, contractABI, signerOrProvider);
    } catch (err) {
        console.error("Contract load error:", err);
        return null;
    }
}

export async function isContractAvailable(provider) {
    try {
        const code = await provider.getCode(CONTRACT_ADDRESS);
        return code && code !== "0x";
    } catch (err) {
        return false;
    }
}

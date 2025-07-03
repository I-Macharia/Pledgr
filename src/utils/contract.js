import { ethers } from "ethers";
import contractABI from "../abi/YourContract.json";

const CONTRACT_ADDRESS = "0xD41DAE3e2E81B041076FAC92407e3F51e02DF9ee"; // <-- update this

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

import { useState } from "react";
import { BrowserProvider } from "ethers";

// Custom React hook to handle wallet connection and signing logic
export function useWallet() {
  // State to store the connected wallet address
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  // State to store the signature returned from signing a message
  const [signature, setSignature] = useState<string | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Function to connect to the user's wallet and request a signature
  const connectWallet = async () => {
    try {
      // Detect Core Wallet or MetaMask
      if (!window.ethereum) {
        setError("No wallet found. Please install Core Wallet or MetaMask and refresh the page.");
        return;
      }
      // Create provider
      const provider = new BrowserProvider(window.ethereum);
      // Request account access
      await provider.send("eth_requestAccounts", []);
      // Network switching to Fuji testnet
      const { chainId } = await provider.getNetwork();
      if (Number(chainId) !== 43113) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xa869" }], // Fuji testnet
          });
        } catch (switchErr: any) {
          setError("Please switch your wallet to Avalanche Fuji testnet (43113) and try again.");
          return;
        }
      }
      // Get signer and address
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      // Sign message
      const message = `Sign in with Core Wallet: ${address}`;
      let signedMessage = "";
      try {
        signedMessage = await signer.signMessage(message);
      } catch (signErr: any) {
        setError("Signature request was rejected. Please approve the signature to continue.");
        return;
      }
      setWalletAddress(address);
      setSignature(signedMessage);
      setError(null);
    } catch (err: any) {
      if (err.message && err.message.includes("user rejected")) {
        setError("Wallet connection was rejected. Please approve the connection request.");
      } else {
        setError(err.message || "Wallet connection failed. Please try again.");
      }
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setSignature(null);
    setError(null);
    // Optionally clear localStorage/sessionStorage if used
  };

  // Return the wallet state and connect function for use in components
  return {
    walletAddress,
    signature,
    error,
    connectWallet,
    disconnectWallet, // <-- export this
  };
}
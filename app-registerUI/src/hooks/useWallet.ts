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
      // Check if the Core Wallet extension is available
      if (!window.ethereum) {
        setError("Core Wallet not found. Please install the extension.");
        return;
      }
      // Create a new provider using the injected ethereum object
      const provider = new BrowserProvider(window.ethereum);

      // Request account access from the user
      await provider.send("eth_requestAccounts", []);

      // Get the signer (the user's wallet)
      const signer = await provider.getSigner();

      // Get the wallet address
      const address = await signer.getAddress();

      // Create a message for the user to sign
      const message = `Sign in with Core Wallet: ${address}`;

      // Ask the user to sign the message
      const signedMessage = await signer.signMessage(message);

      // Update state with the wallet address and signature
      setWalletAddress(address);
      setSignature(signedMessage);
      setError(null);
    } catch (err: any) {
      // Handle errors and display a message to the user
      setError(err.message || "Something went wrong");
    }
  };

  // Return the wallet state and connect function for use in components
  return { walletAddress, signature, error, connectWallet };
}
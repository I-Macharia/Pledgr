import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export interface WalletState {
  account: string | null;
  provider: ethers.Provider | null;
  signer: ethers.Signer | null;
  isConnected: boolean;
  isConnecting: boolean;
}

export const useWallet = () => {
  const [account, set_account] = useState<string | null>(null);
  const [provider, set_provider] = useState<ethers.Provider | null>(null);
  const [signer, set_signer] = useState<ethers.Signer | null>(null);
  const [isConnected, set_isConnected] = useState(false);
  const [isConnecting, set_isConnecting] = useState(false);

  const wallet = {
    account,
    provider,
    signer,
    isConnected,
    isConnecting,
  };

  const setWallet = (newState: WalletState) => {
    const {
      account,
      provider,
      signer,
      isConnected,
      isConnecting,
    } = newState;
    set_account(account);
    set_provider(provider);
    set_signer(signer);
    set_isConnected(isConnected);
    set_isConnecting(isConnecting);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install Core Wallet to continue');
      return;
    }

    setWallet({ ...wallet, isConnecting: true });

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const account = accounts[0];

      setWallet({
        account,
        provider,
        signer,
        isConnected: true,
        isConnecting: false
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWallet({ ...wallet, isConnecting: false });
    }
  };

  const disconnectWallet = () => {
    setWallet({
      account: null,
      provider: null,
      signer: null,
      isConnected: false,
      isConnecting: false
    });
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();

          if (accounts.length > 0) {
            const signer = await provider.getSigner();
            const account = accounts[0].address;

            setWallet({
              account,
              provider,
              signer,
              isConnected: true,
              isConnecting: false
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };

    checkConnection();
  }, []);

  return {
    account,
    provider,
    signer,
    isConnected,
    isConnecting,
    connectWallet,
    disconnectWallet,
    pay: async (amount: string, to: string) => {
      if (!signer) {
        console.error("Wallet not connected");
        return;
      }
      try {
        const tx = await signer.sendTransaction({
          to,
          value: ethers.parseEther(amount), // Amount in AVAX
        });
        await tx.wait();
      } catch (error) {
        console.error("Transaction failed:", error);
        if (`${error}`.includes("Error: insufficient funds")) {
          alert("Error: insufficient funds! You poor poor man.");
        } else if (`${error}`.includes("Error: user rejected action")) {
          alert("Error: user rejected action.");
        } else {
          alert(error);
        }
      }
    }
  };
};
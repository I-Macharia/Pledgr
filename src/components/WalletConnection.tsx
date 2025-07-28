import React from 'react';
import { Wallet, User } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const WalletConnection: React.FC<{ title?: string, connectedContent?: React.ReactElement }> = ({ connectedContent, title = 'Connect Wallet' }) => {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWallet();

  if (isConnected && account) {
    if (connectedContent) {
      return connectedContent;
    }
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse hover:animate-none">
          <User className="w-4 h-4 text-white" />
          <span className="text-white font-medium">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        </div>
        <button
          onClick={disconnectWallet}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse hover:animate-none"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => connectWallet()}
        disabled={isConnecting}
        className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
      >
        <Wallet className="w-5 h-5" />
        {isConnecting ? 'Connecting...' : title}
      </button>
    </div>
  );
};

export default WalletConnection;
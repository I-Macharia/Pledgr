import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWallet } from '../hooks/useWallet';
import { CreatorContract } from '../utils/contract';
import { Creator } from '../types/creator';
import CreatorProfile from '../components/CreatorProfile';
import { Loader, AlertCircle, User2 } from 'lucide-react';

const CreatorPage: React.FC = () => {
  const { address } = useParams<{ address: string }>();
  const { provider } = useWallet();
  const [creator, setCreator] = useState<Creator | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCreatorData();
  }, []);

  const loadCreatorData = async () => {
    if (!address) {
      setIsLoading(false);
      console.error('Creator id missing:');
      setError('Creator id missing.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const contract = new CreatorContract(provider as Provider);
      let creatorData = await contract.getCreator(address);

      if (!creatorData) {
        creatorData = {
          creator: address,
          name: `${address.slice(0, 6)}...${address.slice(-4)}`,
          bio: '',
          avatar: '',
        };
      }

      setCreator(creatorData);
      const balanceData = await contract.getBalance(address);
      setBalance(balanceData);
    } catch (error) {
      console.error('Error loading creator data:', error);
      setError('Failed to load creator data');
    }
    setIsLoading(false);
  };

  if (!address) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Invalid Address</h1>
          <p className="text-gray-600">Please provide a valid creator address</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-sky-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading creator profile...</p>
        </div>
      </div>
    );
  }

  if (error || !creator) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Creator Not Found</h1>
          <p className="text-gray-600">The creator with address {address} was not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-blue-50 to-white py-8">
      <CreatorProfile creator={creator} balance={balance} />
    </div>
  );
};

export default CreatorPage;
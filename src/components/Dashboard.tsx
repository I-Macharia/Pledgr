import React, { useState, useEffect } from 'react';
import { useWallet } from '../hooks/useWallet';
import { CreatorContract } from '../utils/contract';
import { Creator, CreatorFormData } from '../types/creator';
import CreatorForm from './CreatorForm';
import CreatorProfile from './CreatorProfile';
<<<<<<< HEAD
import { Loader, RefreshCw, Copy, ExternalLink, AlertCircle, CheckCircle, Link2, Link } from 'lucide-react';
=======
import { Loader, RefreshCw, Copy, ExternalLink, AlertCircle, CheckCircle, Link2 } from 'lucide-react';
>>>>>>> ft-dashboard

const Dashboard: React.FC = () => {
  const { account, provider, signer } = useWallet();
  const [creator, setCreator] = useState<Creator | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (account && provider) {
      loadCreatorData();
    } else {
      setIsLoading(false);
    }
  }, [account, provider]);

  const loadCreatorData = async () => {
    if (!account || !provider) return;

    setIsLoading(true);
    setError(null);
    try {
      const contract = new CreatorContract(provider);
      const creatorData = await contract.getCreator(account);
      setCreator(creatorData);

      if (creatorData) {
        const balanceData = await contract.getBalance(account);
        setBalance(balanceData);
      }
    } catch (error) {
      console.error('Error loading creator data:', error);
      setError('Failed to load creator data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadCreatorData();
    setIsRefreshing(false);
  };

  const handleRegistration = async (formData: CreatorFormData) => {
    if (!provider || !signer) return;

    setIsRegistering(true);
    setError(null);
    try {
      const contract = new CreatorContract(provider);
      const success = await contract.registerCreator(
        formData.name,
        formData.bio,
        formData.avatar,
        signer
      );

      if (success) {
        // Reload creator data after successful registration
        await loadCreatorData();
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please check your wallet and try again.');
    } finally {
      setIsRegistering(false);
    }
  };

<<<<<<< HEAD
  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="mx-auto text-center p-8">
=======
  const copyLink = async () => {
    if (!account) return;

    const link = `${location.origin}/c/${account}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const openLink = () => {
    if (!account) return;
    const link = `${location.origin}/c/${account}`;
    window.open(link, '_blank');
  };

  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
>>>>>>> ft-dashboard
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-sky-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Connect Your Wallet</h1>
          <p className="text-gray-600 mb-6">
            Please connect your wallet to access your creator dashboard.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader className="w-10 h-10 animate-spin text-sky-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading Dashboard</h2>
          <p className="text-gray-600">Fetching your creator data...</p>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  const link = `${location.origin}/#/c/${account}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
=======
  const link = `${location.origin}/c/${account}`;
>>>>>>> ft-dashboard

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-thin text-gray-800">
                Welcome to <span className="font-bold text-sky-600">Pledgr</span>
              </h1>
              <p className="text-gray-600 mt-1">Your decentralized creator platform</p>
            </div>
            {creator && (
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Creator Link Section */}
<<<<<<< HEAD
        <div className="mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 mt-1 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                <Link className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Your Creator Link</h3>
                <p className="text-sm text-gray-600">Share this link with your audience to receive pledges.</p>
=======
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                <Link2 className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Your Creator Link</h3>
                <p className="text-sm text-gray-600">Share this link with your audience</p>
>>>>>>> ft-dashboard
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <div className="flex-1 font-mono text-sm text-gray-700 break-all">
<<<<<<< HEAD
                <a className='line-clamp-1' href={link} target="_blank" rel="noopener noreferrer">
                  {link.replace('http://', '').replace('https://', '')}
                </a>
=======
                {link}
>>>>>>> ft-dashboard
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyLink}
<<<<<<< HEAD
                  className="flex items-center gap-2 text-sm"
=======
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
>>>>>>> ft-dashboard
                >
                  {copySuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
<<<<<<< HEAD
=======
                      Copied!
>>>>>>> ft-dashboard
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
<<<<<<< HEAD
                    </>
                  )}
                </button>
=======
                      Copy
                    </>
                  )}
                </button>
                <button
                  onClick={openLink}
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open
                </button>
>>>>>>> ft-dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
<<<<<<< HEAD
          <div className="mx-auto mb-8">
=======
          <div className="max-w-4xl mx-auto mb-8">
>>>>>>> ft-dashboard
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-800">Error</h4>
                <p className="text-sm text-red-600">{error}</p>
              </div>
              <button
                onClick={handleRefresh}
                className="ml-auto px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
<<<<<<< HEAD
        <div className="mx-auto">
          {!creator ? (
            <div className="space-y-6">
              {/* Welcome Message for New Users */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 mb-8">
                <div className="flex gap-3 mb-10">
                  <div className="w-10 h-10 mt-1 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Create Your Profile</h3>
                    <p className="text-sm text-gray-600">You haven't created a creator profile yet. Set up your profile to start receiving support from your audience.</p>
                  </div>
                </div>
                <CreatorForm onSubmit={handleRegistration} isLoading={isRegistering} />
              </div>

              {/* Creator Registration Form */}
            </div>
          ) : (
            <div className="space-y-6 mb-8">
=======
        <div className="max-w-4xl mx-auto">
          {!creator ? (
            <div className="space-y-6">
              {/* Welcome Message for New Users */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-sky-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Profile</h2>
                <p className="text-gray-600 mb-6">
                  You haven't created a creator profile yet. Set up your profile to start receiving support from your audience.
                </p>
              </div>

              {/* Creator Registration Form */}
              <CreatorForm onSubmit={handleRegistration} isLoading={isRegistering} />
            </div>
          ) : (
            <div className="space-y-6">
>>>>>>> ft-dashboard
              {/* Success Message */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800">Profile Active</h4>
                  <p className="text-sm text-green-600">Your creator profile is live and ready to receive support!</p>
                </div>
              </div>

              {/* Creator Profile */}
              <CreatorProfile creator={creator} balance={balance} />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
<<<<<<< HEAD
      <div className="bg-white/50 backdrop-blur-sm border-t border-white/20 py-6">
=======
      <div className="bg-white/50 backdrop-blur-sm border-t border-white/20 py-6 mt-12">
>>>>>>> ft-dashboard
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            {creator ? 'Your creator profile is active' : 'Complete your profile to get started'}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Connected: {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not connected'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
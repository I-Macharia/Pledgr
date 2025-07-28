import React from 'react';
import { Users, Calendar, Coins, Star, User2, Wallet } from 'lucide-react';
import { Creator } from '../types/creator';
import { useWallet } from '../hooks/useWallet';
import WalletConnection from './WalletConnection';

interface CreatorProfileProps {
  creator: Creator;
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({ creator }) => {

  const { account, pay } = useWallet();

  const formatDate = (timestamp: bigint) => {
    return new Date(Number(timestamp)).toLocaleDateString('en-US');
  };

  return <div className="w-full max-w-md mx-auto">
    <div className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 rounded-3xl p-[1px] shadow-2xl shadow-sky-500/30">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-inner">
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-sky-100/50 to-blue-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header */}
        <div className="relative p-8 text-center">
          <div className="w-24 h-24 mx-auto mb-6 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-400/40 group-hover:shadow-xl group-hover:shadow-sky-500/60 transition-all duration-300">
              {creator.avatar ? (
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
              ) : (
                <User2 className="w-12 h-12 text-white" />
              )}
            </div>
            {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div> */}
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-gray-800 via-sky-600 to-blue-600 bg-clip-text text-transparent">
            {creator.name}
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-sky-100/80 backdrop-blur-sm border border-sky-200/50 rounded-2xl p-4 text-center hover:bg-sky-100/80 hover:transform hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{creator.fanCount || 0}</div>
              <div className="text-sky-600 text-xs font-medium">Fans</div>
            </div>

            <div className="bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-4 text-center hover:bg-blue-100/80 hover:transform hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {parseFloat(creator.totalStaked || 0) / 1e18}
              </div>
              <div className="text-blue-600 text-xs font-medium">Staked</div>
            </div>

            <div className="bg-blue-100/80 backdrop-blur-sm border border-sky-200/50 rounded-2xl p-4 text-center hover:bg-sky-100/80 hover:transform hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{0}</div>
              <div className="text-sky-600 text-xs font-medium">Stakeholders</div>
            </div>

            <div className="bg-sky-100/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-4 text-center hover:bg-blue-100/80 hover:transform hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-sky-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-1">
                {formatDate(creator.createdAt || Date.now())}
              </div>
              <div className="text-blue-600 text-xs font-medium">Joined</div>
            </div>
          </div>

          <p className="text-sky-600 text-sm leading-relaxed px-4">
            {creator.bio || 'This creator prefers to have an air of mystery around them.'}
          </p>

          {/* separator */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Payment Button */}
          {!account ? (
            <div className="my-1">
              <WalletConnection title="Connect Wallet to Support Creator" />
            </div>
          ) : (
            <div className="my-1">
              <button
                onClick={() => pay('0.001', creator.creator)}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-500/40 hover:transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <Star className="w-5 h-5" />
                  Support Creator
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>;
};

export default CreatorProfile;
# Web3 Integration Guide

## 🚀 Overview

Your Pledgr application now includes full Web3 integration with prioritized Core Wallet support for Avalanche. Here's what has been implemented:

## 🔧 Components Added

### 1. **WalletConnect Component**
- **Location**: `src/components/WalletConnect.tsx`
- **Features**:
  - Prioritizes Core Wallet (recommended for Avalanche)
  - Dropdown menu with wallet details when connected
  - Balance display
  - Proper disconnect functionality
  - Network switching capabilities

### 2. **Web3Provider Context**
- **Location**: `src/providers/Web3Provider.tsx`
- **Features**:
  - Manages wallet connection state
  - Handles network switching
  - Error handling and user feedback
  - Core Wallet prioritization

### 3. **Creator Registry Hook**
- **Location**: `src/hooks/useCreatorRegistry.ts`
- **Features**:
  - Register as creator
  - Update creator profile
  - Fetch creator data
  - Contract interaction handling

### 4. **Creator Components**
- **CreatorRegistration**: `src/components/CreatorRegistration.tsx`
- **CreatorProfile**: `src/components/CreatorProfile.tsx`
- **CreatorDashboard**: `src/pages/CreatorDashboard.tsx`

## 🌐 Web3 Configuration

### Wallet Priority (in order):
1. **Core Wallet** (Recommended for Avalanche)
2. Injected wallet (MetaMask, etc.)
3. MetaMask
4. WalletConnect

### Supported Networks:
- Avalanche Fuji Testnet (Primary)
- Avalanche Mainnet

## 🔑 Environment Variables

Create a `.env` file in the `app-registerUI` directory:

```bash
VITE_CONTRACT_ADDRESS=0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be
VITE_AVALANCHE_RPC=https://api.avax-test.network/ext/bc/C/rpc
VITE_WALLETCONNECT_PROJECT_ID=your-project-id
```

## 🎯 Key Features

### ✅ Wallet Connection
- **Core Wallet Prioritized**: Automatically suggests Core Wallet for best Avalanche experience
- **Multiple Wallet Support**: Fallback to MetaMask and other injected wallets
- **Connection Status**: Visual indicators for connection and network status

### ✅ Network Management
- **Auto-detection**: Detects wrong network and prompts user to switch
- **Network Switching**: One-click switch to Avalanche Fuji
- **Network Addition**: Automatically adds Avalanche network if not present

### ✅ Creator Features
- **Creator Registration**: Register as a creator with name, bio, and avatar
- **Profile Management**: Update creator information
- **Dashboard**: Full creator dashboard with stats and management

### ✅ User Experience
- **Responsive Design**: Works on all screen sizes
- **Error Handling**: Clear error messages and recovery suggestions
- **Loading States**: Proper loading indicators during transactions

## 🚀 Usage Examples

### Basic Wallet Connection
```tsx
import { WalletConnect } from '@/components/WalletConnect'

// Simple connect button
<WalletConnect />

// With balance display
<WalletConnect showBalance />

// Custom styling
<WalletConnect variant="hero" size="lg" />
```

### Creator Registration
```tsx
import { CreatorRegistration } from '@/components/CreatorRegistration'

// Full registration form
<CreatorRegistration />
```

### Web3 Context Usage
```tsx
import { useWeb3 } from '@/providers/Web3Provider'

function MyComponent() {
  const { isConnected, address, disconnect } = useWeb3()
  
  if (!isConnected) {
    return <div>Please connect your wallet</div>
  }
  
  return (
    <div>
      Connected as: {address}
      <button onClick={disconnect}>Disconnect</button>
    </div>
  )
}
```

### Creator Registry Hook
```tsx
import { useCreatorRegistry } from '@/hooks/useCreatorRegistry'

function CreatorComponent() {
  const { isCreator, creator, registerCreator } = useCreatorRegistry()
  
  const handleRegister = async () => {
    await registerCreator("My Name", "My Bio", "avatar-url")
  }
  
  return (
    <div>
      {isCreator ? (
        <div>Welcome, {creator?.name}!</div>
      ) : (
        <button onClick={handleRegister}>Register as Creator</button>
      )}
    </div>
  )
}
```

## 🛠️ Routes

- `/` - Landing page with wallet connection
- `/dashboard` - Creator dashboard (requires wallet connection)

## 🎨 UI Components

All Web3 components integrate seamlessly with your existing UI:
- Consistent styling with shadcn/ui
- Responsive design
- Dark/light mode support
- Accessible design patterns

## 🔧 Development

### Start Development Server
```bash
cd app-registerUI
pnpm dev
```

### Build for Production
```bash
pnpm build
```

## 📱 Core Wallet Integration

The integration specifically prioritizes Core Wallet because:
- **Native Avalanche Support**: Built specifically for Avalanche ecosystem
- **Optimized Performance**: Better transaction handling on Avalanche
- **Enhanced Security**: Advanced security features for Avalanche
- **Seamless UX**: Best user experience for Avalanche dApps

### Core Wallet Installation
Users can download Core Wallet from: https://core.app/

## 🚨 Error Handling

The integration includes comprehensive error handling for:
- Wallet connection failures
- Network switching issues
- Transaction rejections
- Contract interaction errors
- Invalid network detection

## 📊 Next Steps

Your Web3 integration is now complete! You can:

1. **Test the Connection**: Try connecting with Core Wallet and MetaMask
2. **Register as Creator**: Test the creator registration flow
3. **Deploy Contract**: Deploy your CreatorRegistry contract to Avalanche Fuji
4. **Update Contract Address**: Update the contract address in your environment variables
5. **Add Staking Features**: Extend with staking functionality for supporters

## 🎉 Success!

Your Pledgr application now has full Web3 functionality with Core Wallet prioritization for the best Avalanche experience!

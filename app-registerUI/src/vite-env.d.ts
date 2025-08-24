/// <reference types="vite/client" />

// Extend Window interface for wallet providers
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
      on?: (event: string, handler: (args: any) => void) => void
      removeListener?: (event: string, handler: (args: any) => void) => void
      isMetaMask?: boolean
      isCoreWallet?: boolean
    }
    avalanche?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
      on?: (event: string, handler: (args: any) => void) => void
      removeListener?: (event: string, handler: (args: any) => void) => void
      isCoreWallet?: boolean
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDRESS: string
  readonly VITE_AVALANCHE_RPC: string
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  readonly VITE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

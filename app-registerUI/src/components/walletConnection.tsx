"use client"

import type React from "react"

import "../styles/walletConnection.css"
import { useWallet } from "../hooks/useWallet"
import { useNavigate } from "react-router-dom"

/**
 * React component for handling Core Wallet connection and login flow.
 *
 * - If the user is not connected, displays a welcome message, wallet connection button, and feature highlights.
 * - If the user is connected, shows wallet address, signature, and a button to proceed to registration.
 * - Displays error messages if wallet connection fails.
 *
 * Utilizes `useWallet` for wallet state and actions, and `useNavigate` for navigation.
 *
 * @component
 */
const LoginWithCoreWallet: React.FC = () => {
  const { walletAddress, signature, error, connectWallet, disconnectWallet } = useWallet()
  const navigate = useNavigate()

  return (
    <div className="wallet-connection-container">
      {!walletAddress ? (
        <div className="wallet-login-section">
          <div className="wallet-hero">
            <h1>Welcome to Pledgr</h1>
            <p>Connect your Core Wallet or MetaMask to start supporting your favorite creators and building your community.</p>
            <ul className="wallet-guidance">
              <li>✅ Make sure you have <a href="https://core.app/" target="_blank" rel="noopener noreferrer">Core Wallet</a> or <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">MetaMask</a> installed.</li>
              <li>✅ Switch your wallet to Avalanche Fuji testnet (43113).</li>
              <li>✅ Approve connection and signature requests when prompted.</li>
            </ul>
          </div>
          <button onClick={connectWallet} className="wallet-login-button">
            🔗 Connect Wallet
          </button>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">👥</div>
              <h3>Support Creators</h3>
              <p>Directly support your favorite content creators</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Exclusive Perks</h3>
              <p>Get access to exclusive content and rewards</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Decentralized</h3>
              <p>Built on blockchain for transparency and security</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="wallet-info-section">
          <h2>🎉 Connection Successful!</h2>
          <div className="wallet-details">
            <div className="wallet-address">
              <strong>Wallet Address:</strong>
              <div className="address-value">{walletAddress}</div>
            </div>
            <div className="wallet-signature">
              <strong>Signature:</strong>
              <div className="signature-value">{signature}</div>
            </div>
          </div>
          <button className="wallet-register-button" onClick={() => navigate("/register")}> 
            🚀 Get Started - Register Now
          </button>
          <button
            className="wallet-disconnect-button"
            onClick={() => {
              disconnectWallet()
              navigate("/")
            }}
            style={{ marginTop: "1rem" }}
          >
            🔌 Disconnect Wallet
          </button>
        </div>
      )}
      {error && (
        <div className="wallet-error-message">
          <strong>Connection Error:</strong> {error}
          {error.includes("No wallet found") && (
            <div className="wallet-install-guidance">
              <p>
                Please install <a href="https://core.app/" target="_blank" rel="noopener noreferrer">Core Wallet</a> or <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">MetaMask</a> and refresh the page.
              </p>
            </div>
          )}
          {error.includes("Fuji testnet") && (
            <div className="wallet-network-guidance">
              <p>
                <strong>How to switch network:</strong> Open your wallet and select Avalanche Fuji testnet (chainId 43113).
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LoginWithCoreWallet

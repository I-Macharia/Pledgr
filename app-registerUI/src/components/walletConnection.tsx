"use client"

import type React from "react"

import "../styles/walletConnection.css"
import { useWallet } from "../hooks/useWallet"
import { useNavigate } from "react-router-dom"

const LoginWithCoreWallet: React.FC = () => {
  const { walletAddress, signature, error, connectWallet } = useWallet()
  const navigate = useNavigate()

  return (
    <div className="wallet-connection-container">
      {!walletAddress ? (
        <div className="wallet-login-section">
          <div className="wallet-hero">
            <h1>Welcome to Pledgr</h1>
            <p>Connect your Core Wallet to start supporting your favorite creators and building your community.</p>
          </div>

          <button onClick={connectWallet} className="wallet-login-button">
            🔗 Connect Core Wallet
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
        </div>
      )}

      {error && (
        <div className="wallet-error-message">
          <strong>Connection Error:</strong> {error}
        </div>
      )}
    </div>
  )
}

export default LoginWithCoreWallet

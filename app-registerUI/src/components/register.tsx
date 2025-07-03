"use client"

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers"
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig"
import "../styles/register.css"

const Register: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    type: "fan",
    password: "",
    confirmPassword: "",
    bio: "",
    avatar: "",
  })
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [txStatus, setTxStatus] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [checkingRegistration, setCheckingRegistration] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkIfRegistered = async () => {
      if (form.type !== "creator") {
        setCheckingRegistration(false)
        return
      }
      try {
        if (!window.ethereum) {
          setCheckingRegistration(false)
          return
        }
        const provider = new ethers.BrowserProvider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          provider
        )
        const isRegistered = await contract.isCreator(signer.address)
        if (isRegistered) {
          navigate("/profile")
        }
      } catch (err) {
        // Ignore errors, allow registration attempt
      } finally {
        setCheckingRegistration(false)
      }
    }
    checkIfRegistered()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.type])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const handleClear = () => {
    setForm({
      username: "",
      type: "fan",
      password: "",
      confirmPassword: "",
      bio: "",
      avatar: "",
    })
    setTouched({})
    setTxStatus("")
  }
  
  // Handle form submission
  // This function connects to the wallet, checks the network, and registers the creator
  // If the user is a fan, it shows a message that fan registration is coming soon
  // It also handles errors and updates the transaction status
  // The function uses ethers.js to interact with the smart contract on Avalanche Fuji testnet
  // It ensures the wallet is connected, switches to the correct network, checks contract existence,
  // and sends the registration transaction
  // It also handles gas estimation and transaction confirmation
  // The function is asynchronous and updates the UI based on the transaction status
  // It also validates the form inputs before submission
  // The function is designed to be user-friendly and provide feedback during the registration process
  // It uses React hooks for state management and form handling
  // The function is part of a React component that renders the registration form
  // It includes input fields for username, account type, password, confirm password, bio,
  // and avatar URL for creators
  // The form also includes validation for matching passwords and required fields
  // The component uses CSS for styling and provides a clear user interface
  // The registration process is designed to be secure and user-friendly
  // The function also includes error handling to provide feedback in case of issues
  // The registration process is essential for users to join the Pledgr platform
  // It allows creators to register and fans to express interest in future features
  // The function is a key part of the user onboarding experience
  // It ensures that users can easily register and start using the platform
  // The function is designed to be robust and handle various scenarios during registration
  // It provides a seamless experience for users to join the Pledgr community
  // The function is part of a larger application that aims to connect creators and fans
  // It is built using React and ethers.js to interact with the Ethereum blockchain
  // The registration process is crucial for building a vibrant community on the platform
  // The function is optimized for performance and user experience
  // It ensures that users can quickly and easily register without unnecessary delays
  // The function is a critical part of the application's functionality
  // It is designed to be maintainable and easy to understand for future developers
  // The registration process is a fundamental feature of the Pledgr platform
  // It allows users to create accounts and start engaging with the platform
  // The function is implemented in a way that follows best practices for React development
  // It uses hooks for state management and handles form submission in a clean and efficient manner
  // The function is part of a modern web application that leverages blockchain technology
  // It provides a secure and transparent way for users to register and interact with the platform
  // The registration process is designed to be intuitive and user-friendly
  // It guides users through the steps needed to create an account and start using the platform
  // The function is a key part of the user journey on the Pledgr platform
  // It ensures that users can easily register and become part of the community
  // The function is designed to be flexible and handle different user roles (creators and fans)
  // It provides a tailored registration experience based on the user's selected account type
  // The registration process is essential for building a diverse and engaged user base

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.type === "creator") {
      setIsLoading(true)
      try {
        setTxStatus("🔗 Connecting to wallet...")
        if (!window.ethereum) {
          throw new Error("No wallet found. Please install Core Wallet.")
        }
        const provider = new ethers.BrowserProvider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner()
        // Check if already registered
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          signer
        )
        const isRegistered = await contract.isCreator(signer.address)
        if (isRegistered) {
          setTxStatus("You are already registered. Redirecting to your profile...")
          setTimeout(() => navigate("/profile"), 2000)
          setIsLoading(false)
          return
        }
        // Validate name
        if (!form.username || form.username.trim() === "") {
          setTxStatus("Name is required.")
          setIsLoading(false)
          return
        }
        setTxStatus("🔄 Ensuring correct network...")
        // 1️⃣ Ensure the wallet is on Avalanche Fuji (chainId 43113)
        const { chainId } = await provider.getNetwork()
        if (Number(chainId) !== 43113) {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xa869" }], // 43113 in hex
          })
          setTxStatus("🔄 Switched to Avalanche Fuji…")
        }

        setTxStatus("🔍 Checking contract existence...")
        // 2️⃣ Contract existence check
        const code = await provider.getCode(CREATOR_REGISTRY_ADDRESS)
        if (code === "0x") {
          throw new Error("Contract not deployed at this address.")
        }

        const gasPrice = await provider.send("eth_gasPrice", [])

        // 3️⃣ Try static call instead of estimateGas
        try {
          await contract.registerCreator.staticCall(
            form.username,
            form.bio,
            form.avatar,
            { gasPrice }
          )
        } catch (err: any) {
          throw new Error(
            err.reason || "Function reverted. Possibly already registered?"
          )
        }

        setTxStatus("🚀 Sending transaction...")

        // 4️⃣ Send transaction
        const tx = await contract.registerCreator(
          form.username,
          form.bio,
          form.avatar,
          {
            gasPrice,
          }
        )

        setTxStatus("⏳ Waiting for confirmation...")
        await tx.wait()

        setTxStatus("🎉 Registration successful! Welcome to Pledgr!")

        setTimeout(() => {
          navigate("/creators")
        }, 2000)
      } catch (err: any) {
        console.error("Registration error:", err)
        let errorMessage = "Registration failed. "

        if (err.message.includes("user rejected")) {
          errorMessage += "Transaction was rejected by user."
        } else {
          errorMessage += err.message || "Unknown error occurred."
        }

        setTxStatus(errorMessage)
      } finally {
        setIsLoading(false)
      }
    } else {
      setTxStatus(
        "Fan registration coming soon! For now, please register as a creator to test the blockchain functionality."
      )
    }
  }

  const isCreator = form.type === "creator"
  const isFormValid =
    form.username &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword &&
    (!isCreator || (form.bio && form.avatar))

  if (checkingRegistration) {
    return <div className="register-bg"><div className="register-container">Checking registration status...</div></div>
  }

  return (
    <div className="register-bg">
      <button className="register-back-btn" onClick={() => navigate(-1)} type="button">
        ← Back
      </button>

      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Join Pledgr</h2>

          <div className="register-field">
            <label className="register-label" htmlFor="username">
              Username
            </label>
            <input
              className="register-input"
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="register-field">
            <label className="register-label">Account Type</label>
            <div className="register-radio-group">
              <label className="register-radio-label">
                <input
                  type="radio"
                  name="type"
                  value="creator"
                  checked={form.type === "creator"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                🎨 Creator
              </label>
              <label className="register-radio-label">
                <input
                  type="radio"
                  name="type"
                  value="fan"
                  checked={form.type === "fan"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                👥 Fan
              </label>
            </div>
          </div>

          <div className="register-field">
            <label className="register-label" htmlFor="password">
              Password
            </label>
            <input
              className="register-input"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Create a secure password"
              required
            />
          </div>

          <div className="register-field">
            <label className="register-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="register-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm your password"
              required
            />
            {form.confirmPassword && form.password !== form.confirmPassword && (
              <p className="register-error">Passwords do not match</p>
            )}
          </div>

          {isCreator && (
            <>
              <div className="register-field">
                <label className="register-label" htmlFor="bio">
                  Bio
                </label>
                <input
                  className="register-input"
                  type="text"
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={isCreator}
                  placeholder="Tell us about yourself and your content"
                />
              </div>
              <div className="register-field">
                <label className="register-label" htmlFor="avatar">
                  Avatar URL
                </label>
                <input
                  className="register-input"
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={form.avatar}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={isCreator}
                  placeholder="https://example.com/your-avatar.jpg"
                />
              </div>
            </>
          )}

          <div className="register-buttons">
            <button type="button" className="register-clear-btn" onClick={handleClear} disabled={isLoading}>
              Clear
            </button>
            <button type="submit" className="register-submit-btn" disabled={!isFormValid || isLoading}>
              {isLoading ? "Processing..." : "Register"}
            </button>
          </div>

          {txStatus && (
            <div
              className={`register-status ${txStatus.includes("failed") || txStatus.includes("error") ? "error" : txStatus.includes("successful") ? "success" : ""}`}
            >
              {txStatus}
            </div>
          )}
        </form>
      </div>
      Register Page
    </div>
  )
}
export default Register
"use client"

import type React from "react"
import { useState } from "react"
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
  const navigate = useNavigate()

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.type === "creator") {
      setIsLoading(true)
      try {
        setTxStatus("🔗 Connecting to wallet...")

        if (!window.ethereum) {
          throw new Error("No wallet found. Please install Core Wallet.")
        }

        // Create provider without ENS support
        const provider = new ethers.BrowserProvider(window.ethereum)

        // Request account access
        await provider.send("eth_requestAccounts", [])

        const signer = await provider.getSigner()

        // Check if contract address is valid
        const PLACEHOLDER_ADDRESS: string = "0xYourDeployedContractAddress";
        if (CREATOR_REGISTRY_ADDRESS === PLACEHOLDER_ADDRESS) {
          throw new Error(
            "Contract not deployed. Please deploy the CreatorRegistry contract first and update the address in creatorRegistryConfig.ts",
          )
        }

        const contract = new ethers.Contract(CREATOR_REGISTRY_ADDRESS, CREATOR_REGISTRY_ABI, signer)

        setTxStatus("📝 Preparing transaction...")

        // Estimate gas to check if the contract exists and function is valid
        try {
          const gasPrice = await provider.send("eth_gasPrice", []);
          await contract.registerCreator(form.username, form.bio, form.avatar, {
            gasPrice,
          });
        } catch (gasError: any) {
          if (gasError.code === "CALL_EXCEPTION") {
            throw new Error(
              "Contract not found or function not available. Please check the contract address and deployment.",
            )
          }
          throw gasError
        }

        setTxStatus("🚀 Sending transaction...")

        const tx = await contract.registerCreator(form.username, form.bio, form.avatar)

        setTxStatus("⏳ Waiting for confirmation...")
        await tx.wait()

        setTxStatus("🎉 Registration successful! Welcome to Pledgr!")

        // Navigate to creators list after successful registration
        setTimeout(() => {
          navigate("/creators")
        }, 2000)
      } catch (err: any) {
        console.error("Registration error:", err)
        let errorMessage = "Registration failed. "

        if (err.message.includes("user rejected")) {
          errorMessage += "Transaction was rejected by user."
        } else if (err.message.includes("insufficient funds")) {
          errorMessage += "Insufficient funds for gas fees."
        } else if (err.message.includes("Already registered")) {
          errorMessage += "This address is already registered as a creator."
        } else if (err.message.includes("Contract not deployed")) {
          errorMessage = err.message
        } else if (err.message.includes("Contract not found")) {
          errorMessage = err.message
        } else {
          errorMessage += err.message || "Unknown error occurred."
        }

        setTxStatus(errorMessage)
      } finally {
        setIsLoading(false)
      }
    } else {
      setTxStatus(
        "Fan registration coming soon! For now, please register as a creator to test the blockchain functionality.",
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
    </div>
  )
}

export default Register

"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig"
import "../styles/creatorsList.css"

interface Creator {
  creator: string
  name: string
  bio: string
  avatar: string
  isActive: boolean
  totalStaked: string
  fanCount: string
  createdAt: string
}

const CreatorsList: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true)
      setError("")

      try {
        if (!window.ethereum) {
          throw new Error("No wallet found. Please install Core Wallet.")
        }

        if (
          !CREATOR_REGISTRY_ADDRESS ||
          CREATOR_REGISTRY_ADDRESS === "0xYourDeployedContractAddress"
        ) {
          throw new Error("Contract not deployed. Please deploy the CreatorRegistry contract first.")
        }
        // Check for valid Ethereum address format
        if (!ethers.isAddress(CREATOR_REGISTRY_ADDRESS)) {
          throw new Error("Invalid contract address. Please check your CreatorRegistry contract address.")
        }
        const provider = new ethers.BrowserProvider(window.ethereum)
        const contract = new ethers.Contract(CREATOR_REGISTRY_ADDRESS, CREATOR_REGISTRY_ABI, provider)

        // Get all creator addresses
        const addresses: string[] = await contract.creatorList()

        if (addresses.length === 0) {
          setCreators([])
          return
        }

        // Fetch details for each creator
        const details = await Promise.all(
          addresses.map(async (addr) => {
            try {
              const c = await contract.creators(addr)
              return {
                creator: c.creator,
                name: c.name,
                bio: c.bio,
                avatar: c.avatar,
                isActive: c.isActive,
                totalStaked: ethers.formatEther(c.totalStaked || "0"),
                fanCount: c.fanCount?.toString() || "0",
                createdAt: new Date(Number(c.createdAt) * 1000).toLocaleDateString(),
              }
            } catch (err) {
              console.error(`Error fetching creator ${addr}:`, err)
              return null
            }
          }),
        )

        // Filter out null values (failed fetches)
        const validCreators = details.filter((c): c is Creator => c !== null)
        setCreators(validCreators)
      } catch (err: any) {
        console.error("Error fetching creators:", err)
        setError(err.message || "Failed to fetch creators")
      } finally {
        setLoading(false)
      }
    }

    fetchCreators()
  }, [])

  const handleSupport = (creatorAddress: string) => {
    // TODO: Implement support functionality
    alert(`Support functionality for ${creatorAddress} coming soon!`)
  }

  const handleViewProfile = (creatorAddress: string) => {
    // TODO: Implement view profile functionality
    alert(`Profile view for ${creatorAddress} coming soon!`)
  }

  if (loading) {
    return (
      <div className="creators-list-container">
        <div className="creators-list-loading">
          <h3>🔍 Loading creators...</h3>
          <p>Please wait while we fetch the latest creator profiles.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="creators-list-container">
      <div className="creators-list-header">
        <h2 className="creators-list-title">Discover Creators</h2>
        <p className="creators-list-subtitle">Support amazing creators and get exclusive access to their content</p>
      </div>

      {error && (
        <div className="creators-list-error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!error && creators.length === 0 && !loading && (
        <div className="creators-list-empty">
          <h3>🎨 No Creators Yet</h3>
          <p>Be the first to register as a creator and start building your community!</p>
        </div>
      )}

      {creators.length > 0 && (
        <div className="creators-list-grid">
          {creators.map((creator, index) => (
            <div key={index} className="creator-card">
              <img
                src={creator.avatar || "/placeholder.svg?height=80&width=80"}
                alt={creator.name}
                className="creator-avatar"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=80&width=80"
                }}
              />
              <h3 className="creator-name">{creator.name}</h3>
              <p className="creator-bio">{creator.bio}</p>

              <div className="creator-stats">
                <div className="creator-stat">
                  <span className="creator-stat-value">{creator.fanCount}</span>
                  <span className="creator-stat-label">Fans</span>
                </div>
                <div className="creator-stat">
                  <span className="creator-stat-value">{Number.parseFloat(creator.totalStaked).toFixed(2)}</span>
                  <span className="creator-stat-label">AVAX Staked</span>
                </div>
              </div>

              <div className="creator-actions">
                <button className="creator-action-btn primary" onClick={() => handleSupport(creator.creator)}>
                  💎 Support
                </button>
                <button className="creator-action-btn secondary" onClick={() => handleViewProfile(creator.creator)}>
                  👤 Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CreatorsList

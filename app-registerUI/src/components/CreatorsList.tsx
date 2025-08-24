/**
 * file CreatorsList.tsx
 * description Displays a list of all registered creators on the platform.
 * author Pledgr Team
 * usage Used as the /creators route in App.tsx.
 * exports CreatorsList (React Functional Component)
 */

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig";
import "../styles/creatorsList.css";

// const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || "https://api.thegraph.com/subgraphs/name/YOUR_SUBGRAPH_NAME";
const INFURA_RPC = import.meta.env.VITE_INFURA_RPC || "https://avalanche-fuji.infura.io/v3/YOUR_INFURA_PROJECT_ID";

/**
 * React component that displays a list of creators fetched from either a smart contract
 * (via Infura RPC or browser wallet) or, optionally, from The Graph.
 *
 * The component attempts to fetch creator data in the following order:
 * 1. The Graph (commented out in current code)
 * 2. Infura RPC provider
 * 3. Browser wallet (window.ethereum)
 *
 * Displays loading, error, and empty states as appropriate.
 *
 * @component
 * @returns {JSX.Element} The rendered list of creators.
 *
 * @remarks
 * - Uses ethers.js for contract interaction.
 * - Expects contract ABI and address to be available as constants.
 * - Creator objects should include: id, name, bio, avatar, fanCount, totalStaked.
 */
const CreatorsList: React.FC = () => {
  const [creators, setCreators] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Basic in-memory cache for creators
  const creatorsCache: { data: any[] | null, timestamp: number } = (window as any).creatorsCache || { data: null, timestamp: 0 };

  useEffect(() => {
    let contract: any = null;
    let provider: any = null;
    let eventListener: any = null;
    const fetchFromContract = async (prov: any) => {
      contract = new ethers.Contract(
        CREATOR_REGISTRY_ADDRESS,
        CREATOR_REGISTRY_ABI,
        prov
      );
      // ...existing code...
      const creatorCountBN = await contract.creatorList.length;
      const creatorCount = Number(creatorCountBN);
      const addresses = [];
      for (let i = 0; i < creatorCount; i++) {
        addresses.push(await contract.creatorList(i));
      }
      return await Promise.all(
        addresses.map(async (addr) => {
          const c = await contract.creators(addr);
          return {
            ...c,
            avatar: c.avatar && /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/i.test(c.avatar)
              ? c.avatar
              : "/default-avatar.png",
            name: c.name || "Unnamed",
            bio: c.bio || "No bio provided.",
            fanCount: c.fanCount || 0,
            totalStaked: c.totalStaked || 0,
          };
        })
      );
    };
    const fetchCreators = async () => {
      setLoading(true);
      setError("");
      if (creatorsCache.data && Date.now() - creatorsCache.timestamp < 5 * 60 * 1000) {
        setCreators(creatorsCache.data);
        setLoading(false);
        return;
      }
      let attempts = 0;
      const maxAttempts = 3;
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      while (attempts < maxAttempts) {
        try {
          if (INFURA_RPC && !INFURA_RPC.includes("YOUR_INFURA_PROJECT_ID")) {
            provider = new ethers.JsonRpcProvider(INFURA_RPC);
            const infuraCreators = await fetchFromContract(provider);
            if (infuraCreators && infuraCreators.length > 0) {
              setCreators(infuraCreators);
              (window as any).creatorsCache = { data: infuraCreators, timestamp: Date.now() };
              setLoading(false);
              return;
            }
          }
          if (window.ethereum) {
            provider = new ethers.BrowserProvider(window.ethereum);
            const browserCreators = await fetchFromContract(provider);
            setCreators(browserCreators);
            (window as any).creatorsCache = { data: browserCreators, timestamp: Date.now() };
            setLoading(false);
            return;
          } else {
            throw new Error("No wallet or RPC provider found");
          }
        } catch (err: any) {
          attempts++;
          if (attempts < maxAttempts) {
            setError(`Failed to fetch creators. Retrying... (${attempts}/${maxAttempts})`);
            await delay(1200 * attempts);
          } else {
            setError(err.message || "Failed to fetch creators");
            setCreators([]);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCreators();
    // Listen for contract events to refresh creators list
    setTimeout(() => {
      if (provider && contract) {
        eventListener = contract.on("CreatorRegistered", () => {
          fetchCreators();
        });
        eventListener = contract.on("CreatorUpdated", () => {
          fetchCreators();
        });
      }
    }, 1000);
    return () => {
      if (contract && eventListener) {
        contract.off("CreatorRegistered", eventListener);
        contract.off("CreatorUpdated", eventListener);
      }
    };
  }, []);

  return (
    <div className="creators-list-container pledgr-landing">
      <section className="pledgr-summary">
        <h2>🌟 Discover Creators</h2>
        <p>
          Explore all registered creators on Pledgr. Stake AVAX to support your favorites, unlock exclusive perks, and join a thriving community.
        </p>
      </section>
      <section className="pledgr-features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Creator Profiles:</strong> View bios, avatars, and analytics</li>
          <li><strong>Staking:</strong> Support creators and earn rewards</li>
          <li><strong>Community:</strong> Connect with top creators and fans</li>
        </ul>
      </section>
      <h2>All Creators</h2>
      {loading && (
        <div className="creators-list-loading">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="creator-card skeleton">
              <div className="creator-avatar skeleton-avatar" />
              <div className="skeleton-text" />
              <div className="skeleton-text" />
            </div>
          ))}
        </div>
      )}
      {error && <p className="creators-list-error">{error}</p>}
      {!loading && !error && creators.length === 0 && (
        <p className="creators-list-empty">No creators found. Be the first to register!</p>
      )}
      <div className="creators-list-grid">
        {creators.map((c, i) => (
          <div key={i} className="creator-card">
            <img
              src={c.avatar || "/default-avatar.png"}
              alt={c.name}
              className="creator-avatar"
              onError={e => (e.currentTarget.src = "/default-avatar.png")}
            />
            <h3 className="creator-name">{c.name}</h3>
            <p className="creator-bio">{c.bio}</p>
            <p className="creator-meta">Fans: {c.fanCount} | Staked: {c.totalStaked}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsList;
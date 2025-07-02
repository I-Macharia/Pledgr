import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig";
import "../styles/creatorsList.css";

interface Creator {
  creator: string;
  name: string;
  bio: string;
  avatar: string;
  isActive: boolean;
  totalStaked: string;
  fanCount: string;
  createdAt: string;
}

const CreatorsList: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true);
      setError("");
      try {
        if (!window.ethereum) throw new Error("No wallet found");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          provider
        );
        // Get all creator addresses
        const addresses: string[] = await contract.creatorList();
        // Fetch details for each creator
        const details = await Promise.all(
          addresses.map(async (addr) => {
            const c = await contract.creators(addr);
            return { ...c };
          })
        );
        setCreators(details);
      } catch (err: any) {
        setError(err.message || "Failed to fetch creators");
      }
      setLoading(false);
    };
    fetchCreators();
  }, []);

  return (
    <div className="creators-list-container">
      <h2>All Creators</h2>
      {loading && <p>Loading creators...</p>}
      {error && <p className="creators-list-error">{error}</p>}
      <div className="creators-list-grid">
        {creators.map((c, i) => (
          <div key={i} className="creator-card">
            <img src={c.avatar} alt={c.name} className="creator-avatar" />
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

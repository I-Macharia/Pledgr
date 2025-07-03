import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig";
import "../styles/creatorsList.css";

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || "https://api.thegraph.com/subgraphs/name/YOUR_SUBGRAPH_NAME";
const INFURA_RPC = import.meta.env.VITE_INFURA_RPC || "https://avalanche-fuji.infura.io/v3/YOUR_INFURA_PROJECT_ID";

const CreatorsList: React.FC = () => {
  const [creators, setCreators] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFromGraph = async () => {
      try {
        const query = `{
          creators(first: 1000) {
            id
            name
            bio
            avatar
            fanCount
            totalStaked
          }
        }`;
        const res = await fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const { data } = await res.json();
        if (data && data.creators) {
          return data.creators;
        }
        throw new Error("No data from The Graph");
      } catch (err) {
        throw err;
      }
    };

    const fetchFromContract = async (provider: any) => {
      const contract = new ethers.Contract(
        CREATOR_REGISTRY_ADDRESS,
        CREATOR_REGISTRY_ABI,
        provider
      );
      console.log("Using contract address:", CREATOR_REGISTRY_ADDRESS); // Debug
      const creatorCountBN = await contract.creatorList.length;
      const creatorCount = Number(creatorCountBN);
      const addresses = [];
      for (let i = 0; i < creatorCount; i++) {
        addresses.push(await contract.creatorList(i));
      }
      const details = await Promise.all(
        addresses.map(async (addr) => {
          const c = await contract.creators(addr);
          return { ...c };
        })
      );
      return details;
    };

    const fetchCreators = async () => {
      setLoading(true);
      setError("");
      try {
        // 1. Try The Graph
        if (GRAPHQL_ENDPOINT && !GRAPHQL_ENDPOINT.includes("YOUR_SUBGRAPH_NAME")) {
          try {
            const graphCreators = await fetchFromGraph();
            if (graphCreators && graphCreators.length > 0) {
              setCreators(graphCreators);
              setLoading(false);
              return;
            }
          } catch (err) {
            console.warn("The Graph fetch failed, falling back to RPC.", err);
          }
        }
        // 2. Try Infura
        if (INFURA_RPC && !INFURA_RPC.includes("YOUR_INFURA_PROJECT_ID")) {
          try {
            const infuraProvider = new ethers.JsonRpcProvider(INFURA_RPC);
            const infuraCreators = await fetchFromContract(infuraProvider);
            if (infuraCreators && infuraCreators.length > 0) {
              setCreators(infuraCreators);
              setLoading(false);
              return;
            }
          } catch (err) {
            console.warn("Infura fetch failed, falling back to window.ethereum.", err);
          }
        }
        // 3. Fallback to window.ethereum
        if (window.ethereum) {
          const browserProvider = new ethers.BrowserProvider(window.ethereum);
          const browserCreators = await fetchFromContract(browserProvider);
          setCreators(browserCreators);
        } else {
          throw new Error("No wallet or RPC provider found");
        }
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
      {!loading && !error && creators.length === 0 && (
        <p className="creators-list-empty">No creators found. Be the first to register!</p>
      )}
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
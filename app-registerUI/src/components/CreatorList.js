import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract, isContractAvailable } from "../utils/contract";

function CreatorList() {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
// sourcery skip: avoid-function-declarations-in-blocks
        async function fetchCreators() {
            setLoading(true);
            setError("");
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const available = await isContractAvailable(provider);
                if (!available) {
                    setError("Smart contract not found. Please check deployment and network.");
                    setLoading(false);
                    return;
                }
                const contract = getContract(provider);
                if (!contract) {
                    setError("Failed to load contract.");
                    setLoading(false);
                    return;
                }
                // ...existing code to fetch creators...
                // setCreators(fetchedCreators);
            } catch (err) {
                setError("Failed to load creators: " + (err.reason || err.message));
            }
            setLoading(false);
        }
        fetchCreators();
    }, []);

    if (loading) {
      return <div>Loading creators...</div>;
    }
    if (error) {
      return <div className="error">{error}</div>;
    }
    // ...existing code to render creators...
}

export default CreatorList;
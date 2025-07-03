import React, { useState } from "react";
import { ethers } from "ethers";
import { getContract, isContractAvailable } from "../utils/contract";

function RegisterCreator() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const available = await isContractAvailable(provider);
            if (!available) {
                setError("Smart contract not found. Please check deployment and network.");
                setLoading(false);
                return;
            }
            const signer = provider.getSigner();
            const contract = getContract(signer);
            if (!contract) {
                setError("Failed to load contract.");
                setLoading(false);
                return;
            }
            // ...existing registration logic...
        } catch (err) {
            setError("Registration failed: " + (err.reason || err.message));
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleRegister}>
            {/* ...existing form fields... */}
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
            </button>
        </form>
    );
}

export default RegisterCreator;
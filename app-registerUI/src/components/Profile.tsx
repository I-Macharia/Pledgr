/**
 * file Profile.tsx
 * description Displays and allows editing of the user's profile information.
 * author Pledgr Team
 * @usage Used as the /profile route in App.tsx.
 * @exports Profile (React Functional Component)
 */

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig";
import "../styles/profile.css";

/**
 * Profile component for displaying and editing the user's profile information.
 *
 * - Fetches profile data from a smart contract using ethers.js.
 * - Allows the user to edit their name, bio, and avatar.
 * - Handles loading, error, and transaction status states.
 * - Updates profile data on the blockchain via a contract call.
 *
 * component
 * returns {JSX.Element} The rendered profile UI.
 */
const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: "", bio: "", avatar: "" });
  const [txStatus, setTxStatus] = useState("");

  // Basic in-memory cache for profile
  const profileCache: { data: any | null, timestamp: number } = (window as any).profileCache || { data: null, timestamp: 0 };
  useEffect(() => {
    // Retry logic for contract calls
    const fetchProfile = async () => {
      setLoading(true);
      setError("");
      // Use cache if available and fresh (5 min)
      if (profileCache.data && Date.now() - profileCache.timestamp < 5 * 60 * 1000) {
        setProfile(profileCache.data);
        setForm({ name: profileCache.data.name, bio: profileCache.data.bio, avatar: profileCache.data.avatar });
        setLoading(false);
        return;
      }
      let attempts = 0;
      const maxAttempts = 3;
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      while (attempts < maxAttempts) {
        try {
          if (!window.ethereum) {
            throw new Error("No wallet found. Please install Core Wallet or MetaMask.");
          }
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          const code = await provider.getCode(CREATOR_REGISTRY_ADDRESS);
          if (code === "0x") {
            throw new Error("Contract not deployed at this address. Please contact support.");
          }
          const contract = new ethers.Contract(
            CREATOR_REGISTRY_ADDRESS,
            CREATOR_REGISTRY_ABI,
            provider
          );
          const data = await contract.creators(address);
          if (!data || !data.name) {
            throw new Error("No profile found. Please register first.");
          }
          setProfile(data);
          setForm({ name: data.name, bio: data.bio, avatar: data.avatar });
          (window as any).profileCache = { data, timestamp: Date.now() };
          break;
        } catch (err: any) {
          attempts++;
          if (attempts < maxAttempts) {
            setError(`Failed to fetch profile. Retrying... (${attempts}/${maxAttempts})`);
            await delay(1200 * attempts);
          } else {
            setError(err.message || "Failed to fetch profile");
          }
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setTxStatus("");
    // Basic form validation
    if (!form.name.trim() || !form.bio.trim() || !form.avatar.trim()) {
      setTxStatus("All fields are required.");
      return;
    }
    // Avatar URL validation
    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/i.test(form.avatar.trim())) {
      setTxStatus("Avatar must be a valid image URL.");
      return;
    }
    let attempts = 0;
    const maxAttempts = 2;
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    while (attempts < maxAttempts) {
      try {
        if (!window.ethereum) {
          throw new Error("No wallet found. Please install Core Wallet or MetaMask.");
        }
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const code = await provider.getCode(CREATOR_REGISTRY_ADDRESS);
        if (code === "0x") {
          throw new Error("Contract not deployed at this address. Please contact support.");
        }
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          signer
        );
        setTxStatus("Sending transaction...");
        // Estimate gas
        let gasLimit;
        try {
          gasLimit = await contract.updateProfile.estimateGas(
            form.name,
            form.bio,
            form.avatar
          );
        } catch (err: any) {
          throw new Error("Gas estimation failed. Please check your input or try again.");
        }
        const gasPrice = await provider.send("eth_gasPrice", []);
        const tx = await contract.updateProfile(
          form.name,
          form.bio,
          form.avatar,
          { gasLimit, gasPrice }
        );
        await tx.wait();
        setTxStatus("Profile updated!");
        setEdit(false);
        break;
      } catch (err: any) {
        attempts++;
        if (attempts < maxAttempts) {
          setTxStatus(`Update failed. Retrying... (${attempts}/${maxAttempts})`);
          await delay(1200 * attempts);
        } else {
          setTxStatus(err.message || "Update failed");
        }
      }
    }
  };

  if (loading) return (
    <div className="profile-loading">
      <div className="profile-skeleton-avatar" />
      <div className="profile-skeleton-text" />
      <div className="profile-skeleton-text" />
    </div>
  );
  if (error) return <div className="profile-error">{error}</div>;
  if (!profile) return <div>No profile found.</div>;

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-avatar-wrapper">
        <img
          src={profile.avatar || "/default-avatar.png"}
          alt={profile.name}
          className="profile-avatar"
          onError={e => (e.currentTarget.src = "/default-avatar.png")}
        />
      </div>
      {edit ? (
        <form onSubmit={handleUpdate} className="profile-form">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" required />
          <input name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar URL (https://...)" required />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEdit(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
          <button onClick={() => setEdit(true)}>Edit Profile</button>
        </>
      )}
      {txStatus && <div className="profile-status">{txStatus}</div>}
    </div>
  );
};

export default Profile;

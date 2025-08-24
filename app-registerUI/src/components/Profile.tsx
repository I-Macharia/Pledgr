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

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError("");
      try {
        if (!window.ethereum) {
          throw new Error("No wallet found");
        }
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          provider
        );
        const data = await contract.creators(address);
        setProfile(data);
        setForm({ name: data.name, bio: data.bio, avatar: data.avatar });
      } catch (err: any) {
        setError(err.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
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
    try {
      if (!window.ethereum) {
        throw new Error("No wallet found");
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CREATOR_REGISTRY_ADDRESS,
        CREATOR_REGISTRY_ABI,
        signer
      );
      setTxStatus("Sending transaction...");
      const tx = await contract.updateProfile(form.name, form.bio, form.avatar);
      await tx.wait();
      setTxStatus("Profile updated!");
      setEdit(false);
    } catch (err: any) {
      setTxStatus(err.message || "Update failed");
    }
  };

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div className="profile-error">{error}</div>;
  if (!profile) return <div>No profile found.</div>;

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
      {edit ? (
        <form onSubmit={handleUpdate} className="profile-form">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" required />
          <input name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar URL" required />
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

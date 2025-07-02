import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { CREATOR_REGISTRY_ABI, CREATOR_REGISTRY_ADDRESS } from "../creatorRegistryConfig";
import "../styles/register.css";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    type: "fan",
    password: "",
    confirmPassword: "",
    bio: "",
    avatar: ""
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [txStatus, setTxStatus] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleClear = () => {
    setForm({
      username: "",
      type: "fan",
      password: "",
      confirmPassword: "",
      bio: "",
      avatar: ""
    });
    setTouched({});
    setTxStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.type === "creator") {
      try {
        setTxStatus("Connecting to wallet...");
        // Use window.ethereum for MetaMask/Core Wallet
        if (!window.ethereum) throw new Error("No wallet found");
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          CREATOR_REGISTRY_ADDRESS,
          CREATOR_REGISTRY_ABI,
          signer
        );
        setTxStatus("Sending transaction...");
        const tx = await contract.registerCreator(
          form.username,
          form.bio,
          form.avatar
        );
        await tx.wait();
        setTxStatus("Registration successful!");
      } catch (err: any) {
        setTxStatus(err.message || "Transaction failed");
      }
    } else {
      setTxStatus("Fan registration is not available on-chain. Please use creator registration.");
    }
  };

  const isCreator = form.type === "creator";

  return (
    <div className="register-bg">
      <button
        className="register-back-btn"
        onClick={() => navigate(-1)}
        type="button"
      >
        &larr; Back
      </button>
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Register</h2>
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
              required
            />
          </div>
          <div className="register-field">
            <label className="register-label">Type</label>
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
                Creator
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
                Fan
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
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="register-field">
                <label className="register-label" htmlFor="avatar">
                  Avatar URL
                </label>
                <input
                  className="register-input"
                  type="text"
                  id="avatar"
                  name="avatar"
                  value={form.avatar}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={isCreator}
                  placeholder="Link to your avatar image"
                />
              </div>
            </>
          )}
          <div className="register-buttons">
            <button
              type="button"
              className="register-clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="submit"
              className="register-submit-btn"
              disabled={
                !form.username ||
                !form.password ||
                !form.confirmPassword ||
                (isCreator && (!form.bio || !form.avatar)) ||
                form.password !== form.confirmPassword
              }
            >
              Submit
            </button>
          </div>
          {txStatus && <div className="register-status">{txStatus}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;

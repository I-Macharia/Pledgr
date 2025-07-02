import "../styles/walletConnection.css";
import { useWallet } from "../hooks/useWallet";
import { useNavigate } from "react-router-dom";

const LoginWithCoreWallet: React.FC = () => {
  const { walletAddress, signature, error, connectWallet } = useWallet();
  const navigate = useNavigate();

  return (
    <div className="wallet-connection-container">
      {!walletAddress ? (
        <div className="wallet-login-section">
          <button
            onClick={connectWallet}
            className="wallet-login-button"
          >
            Login with Core Wallet
          </button>
        </div>
      ) : (
        <div className="wallet-info-section">
          <h2>Wallet Connection successfully Established</h2>
          <p className="wallet-address">
            <strong>Wallet Address:</strong> {walletAddress}
          </p>
          <p className="wallet-signature">
            <strong>Signature:</strong> {signature}
          </p>
          <button
            className="wallet-register-button wallet-register-margin"
            onClick={() => navigate("/register")}
          >
            Register as Creator or Fan
          </button>
        </div>
      )}
      {error && <p className="wallet-error-message">{error}</p>}
    </div>
  );
};

export default LoginWithCoreWallet;
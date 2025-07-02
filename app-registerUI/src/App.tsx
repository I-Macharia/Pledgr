import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import LoginWithCoreWallet from "./components/walletConnection";
import CreatorsList from "./components/CreatorsList";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginWithCoreWallet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creators" element={<CreatorsList />} />
        <Route path="/profile" element={<Profile />} />
        {/* other routes */}
      </Routes>
    </>
  );
}

export default App;

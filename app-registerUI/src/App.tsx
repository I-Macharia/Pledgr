import { Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Register from "./components/register"
import LoginWithCoreWallet from "./components/walletConnection"
import CreatorsList from "./components/CreatorsList"
import Profile from "./components/Profile"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginWithCoreWallet />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creators" element={<CreatorsList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App

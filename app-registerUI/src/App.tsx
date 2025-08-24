/**
 * file App.tsx
 * description Root component for the Pledgr frontend. Sets up routing and layout for all pages.
 * author Pledgr Team
 * usage Imported in main.tsx as the main application entry point.
 * exports App (React Functional Component)
 */

import { Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Register from "./components/register"
import LoginWithCoreWallet from "./components/walletConnection"
import CreatorsList from "./components/CreatorsList"
import Profile from "./components/Profile"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"

/**
 * The main application component that sets up the layout and routing for the app.
 *
 * returns The root JSX element containing the layout and route definitions.
 *
 * Routes:
 * - `/`: Renders the `Home` component (landing page).
 * - `/register`: Renders the `Register` component.
 * - `/creators`: Renders the `CreatorsList` component.
 * - `/profile`: Renders the `Profile` component.
 * - `/user-profile`: Renders the `UserProfile` component.
 * - `/login`: Renders the `LoginWithCoreWallet` component.
 */
function App() {
  return (
    <Layout>
      <div className="app-fullscreen-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/creators" element={<CreatorsList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/login" element={<LoginWithCoreWallet />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App

/**
 * @file App.tsx
 * @description Root component for the Pledgr frontend. Sets up routing and layout for all pages.
 * @author Pledgr Team
 * @created 2025-08-24
 * @lastModified 2025-08-24
 * @usage Imported in main.tsx as the main application entry point.
 * @exports App (React Functional Component)
 */

import { Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Register from "./components/register"
import LoginWithCoreWallet from "./components/walletConnection"
import CreatorsList from "./components/CreatorsList"
import Profile from "./components/Profile"

/**
 * The main application component that sets up the layout and routing for the app.
 * 
 * @returns The root JSX element containing the layout and route definitions.
 * 
 * Routes:
 * - `/`: Renders the `LoginWithCoreWallet` component.
 * - `/register`: Renders the `Register` component.
 * - `/creators`: Renders the `CreatorsList` component.
 * - `/profile`: Renders the `Profile` component.
 */
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

"use client"

import type React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "../styles/layout.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isHomePage = location.pathname === "/"

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate("/")}>
            <span className="logo-text">Pledgr</span>
          </div>

          {!isHomePage && (
            <nav className="nav">
              <button className="nav-button" onClick={() => navigate("/creators")}>
                Creators
              </button>
              <button className="nav-button" onClick={() => navigate("/profile")}>
                Profile
              </button>
              <button className="nav-button secondary" onClick={() => navigate("/")}>
                Disconnect
              </button>
            </nav>
          )}
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>&copy; 2024 Pledgr. Empowering creators through blockchain.</p>
      </footer>
    </div>
  )
}

export default Layout

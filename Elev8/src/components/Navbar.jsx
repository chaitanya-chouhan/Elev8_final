import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/Black and White Wings Company Logo.png" alt="Logo" className="me-2" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/store') ? 'active' : ''}`} to="/store">Store</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/premium" className="btn premium-btn me-2">
                <i className="fas fa-crown me-1"></i>Go Premium
              </Link>
              <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="fas fa-sign-in-alt me-1"></i>Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal — lives in Navbar so it's always in DOM */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login to Your Account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="loginEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

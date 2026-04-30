import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  const [isLoginMode, setIsLoginMode] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in on mount
    const loggedInUser = localStorage.getItem('elev8_user')
    if (loggedInUser) {
      setUser(loggedInUser)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    const endpoint = isLoginMode ? '/api/users/login' : '/api/users/register'
    
    try {
      const res = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong')
        return
      }

      if (isLoginMode) {
        // Success login
        localStorage.setItem('elev8_user', data.email)
        setUser(data.email)
        
        // Hide modal using bootstrap API
        const modal = document.getElementById('loginModal')
        const bootstrapModal = window.bootstrap.Modal.getInstance(modal)
        if (bootstrapModal) bootstrapModal.hide()
        
        // Clear form
        setEmail('')
        setPassword('')
      } else {
        // Success register
        setSuccessMsg('Registration successful! You can now login.')
        setIsLoginMode(true) // Switch back to login mode
        setPassword('') // Clear password
      }
    } catch (err) {
      setErrorMsg('Failed to connect to the backend server.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('elev8_user')
    setUser(null)
  }

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
                <Link className={`nav-link ${isActive('/chat') ? 'active' : ''}`} to="/chat">
                  <i className="fas fa-comments me-1"></i>Community Chat
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link to="/premium" className="btn premium-btn me-2">
                <i className="fas fa-crown me-1"></i>Go Premium
              </Link>
              
              {user ? (
                <div className="dropdown">
                  <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i className="fas fa-user me-1"></i>{user.split('@')[0]}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              ) : (
                <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => { setIsLoginMode(true); setErrorMsg(''); setSuccessMsg(''); }}>
                  <i className="fas fa-sign-in-alt me-1"></i>Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login / Register Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{isLoginMode ? 'Login to Your Account' : 'Create an Account'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {errorMsg && <div className="alert alert-danger py-2">{errorMsg}</div>}
              {successMsg && <div className="alert alert-success py-2">{successMsg}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="loginEmail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="loginPassword" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                
                {isLoginMode && (
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                  {isLoginMode ? 'Login' : 'Register'}
                </button>
              </form>
              
              <div className="text-center mt-3">
                {isLoginMode ? (
                  <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginMode(false); setErrorMsg(''); setSuccessMsg(''); }}>Register here</a></p>
                ) : (
                  <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginMode(true); setErrorMsg(''); setSuccessMsg(''); }}>Login here</a></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Elev8</h5>
            <p>Your comprehensive guide to holistic health, fitness, and wellbeing. Transform your life one healthy habit at a time.</p>
            <div className="social-icons mt-3">
              <a href="#" className="me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/elev8._.fit/" target="_blank" rel="noopener noreferrer" className="me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-2"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <div className="footer-links d-flex flex-column">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Wellness Categories</h5>
            <div className="footer-links d-flex flex-column">
              <Link to="/diet">Diet Plan</Link>
              <Link to="/yoga">Yoga and Meditation</Link>
              <Link to="/weight">Weight Training</Link>
              <Link to="/calisthenics">Calisthenics</Link>
              <Link to="/circadian">Circadian Rhythm</Link>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i>Chak Ganjaria City, Lucknow</p>
            <p><i className="fas fa-envelope me-2"></i> elev8@iiitl.ac.in</p>
          </div>
        </div>
        <hr className="mt-4 mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2025 Elev8. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end"></div>
        </div>
      </div>
    </footer>
  )
}

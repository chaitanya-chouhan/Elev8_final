import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">About Elev8</h1>
          <p className="lead mb-4">Transforming Lives Through Holistic Wellness Since 2025</p>
          <a href="#our-story" className="btn btn-lg premium-btn">
            <i className="fas fa-arrow-down me-2"></i>Our Story
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Our Story */}
        <section id="our-story" className="mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="gradient-text mb-4">Our Journey</h2>
              <p className="lead mb-4">Elev8 was born from a simple observation: true wellness isn't just about fitness or diet alone. It's a harmonious balance of physical health, mental clarity, and spiritual connection.</p>
              <p>Founded in 2025 by a team of health enthusiasts, nutritionists, and fitness experts, we set out to create a platform that addresses all aspects of well-being. Our mission is to provide comprehensive, science-backed wellness solutions that are accessible to everyone.</p>
              <p>What started as a small community of like-minded individuals has grown into a thriving platform with thousands of members across the globe, all united by a common goal: to elevate their health and transform their lives.</p>
            </div>
            <div className="col-lg-6">
              <img src="/ABOUT/5469.jpg" alt="Our Team" className="img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mission-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="gradient-text">Our Mission</h2>
              <p className="lead">To empower individuals to achieve optimal health through integrated wellness solutions</p>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="value-card">
                  <i className="fas fa-heartbeat"></i>
                  <h4>Holistic Approach</h4>
                  <p>We believe in treating the whole person - body, mind, and spirit - for lasting transformation.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-card">
                  <i className="fas fa-users"></i>
                  <h4>Community Driven</h4>
                  <p>Building supportive communities where members motivate and inspire each other's journeys.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-card">
                  <i className="fas fa-graduation-cap"></i>
                  <h4>Science-Backed</h4>
                  <p>All our programs are based on scientific research and evidence-based practices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 mb-4"><div className="stat-number">5,000+</div><p>Active Members</p></div>
              <div className="col-md-3 mb-4"><div className="stat-number">50+</div><p>Expert Coaches</p></div>
              <div className="col-md-3 mb-4"><div className="stat-number">95%</div><p>Success Rate</p></div>
              <div className="col-md-3 mb-4"><div className="stat-number">24/7</div><p>Support Available</p></div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="simple-team-section py-5">
          <div className="container">
            <h2 className="text-center gradient-text mb-4">Meet Our Core Team</h2>
            <p className="text-center text-white mb-5">The passionate minds behind Elev8 Wellness</p>
            <div className="team-row top-row justify-content-center mb-5">
              {[
                { name: 'Prakhar Gupta', role: 'Project Lead and Frontend Developer', img: '/ABOUT/prakhar.jpeg' },
                { name: 'Sahil Bhaskarwar', role: 'Frontend Developer', img: '/ABOUT/sahil.jpeg' },
                { name: 'Chatanya Mahendra Singh Chouhan', role: 'Frontend Developer', img: '/ABOUT/chaitanya.jpeg' },
                { name: 'Soham Rastogi', role: 'Content Writer', img: '/ABOUT/soham.jpeg' },
                { name: 'Himanshu Prajapati', role: 'Frontend Developer', img: '/ABOUT/himanshu.jpeg' },
              ].map(m => (
                <div className="team-member-simple" key={m.name}>
                  <div className="member-circle"><img src={m.img} alt={m.name} /></div>
                  <div className="member-info"><h6>{m.name}</h6><p className="role">{m.role}</p></div>
                </div>
              ))}
            </div>
            <div className="team-row bottom-row justify-content-center">
              {[
                { name: 'Parth Badgire', role: 'Designer and Frontend Developer', img: '/ABOUT/parth.jpeg' },
                { name: 'Manish Kumar Yadav', role: 'Frontend Developer', img: '/ABOUT/manish.jpeg' },
                { name: 'Sankshitha Bhukya', role: 'Frontend Developer', img: '/ABOUT/sankshitha.jpeg' },
                { name: 'Srikruthi Amballa', role: 'Frontend Developer', img: '/ABOUT/srikruthi.jpeg' },
                { name: 'Abhishek Chauhan', role: 'Frontend Developer', img: '/ABOUT/abhishek.jpeg' },
              ].map(m => (
                <div className="team-member-simple" key={m.name}>
                  <div className="member-circle"><img src={m.img} alt={m.name} /></div>
                  <div className="member-info"><h6>{m.name}</h6><p className="role">{m.role}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="display-5 mb-4">Ready to Elevate Your Wellness Journey?</h2>
            <p className="lead mb-4">Join thousands of members who have transformed their lives with Elev8</p>
            <Link to="/premium" className="btn btn-light btn-lg px-5">
              <i className="fas fa-user-plus me-2"></i>Join Now
            </Link>
          </div>
        </section>
      </div>

      <Footer />

      <style>{`
        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover; background-position: center;
          color: white; padding: 100px 0; margin-bottom: 50px;
          text-align: center; display: flex; height: 500px;
        }
        #our-story { color: white; }
        .lead { color: white; }
        .mission-section { background: linear-gradient(135deg, rgba(54,209,220,0.1), rgba(0,0,0,0.1)); padding: 60px 0; border-radius: 15px; margin: 50px 0; }
        .value-card { background: white; border-radius: 12px; padding: 30px; height: 100%; box-shadow: 0 4px 12px rgba(255,255,255,1); transition: transform 0.3s, box-shadow 0.3s; border-top: 4px solid var(--secondary-color); }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 8px 25px rgba(54,209,220,0.2); }
        .value-card i { font-size: 2.5rem; color: var(--secondary-color); margin-bottom: 20px; }
        .stats-section { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 60px 0; border-radius: 15px; margin: 50px 0; }
        .stat-number { font-size: 3rem; font-weight: bold; color: white; }
        .cta-section { background: linear-gradient(135deg, var(--secondary-color), #5B86E5); color: white; padding: 80px 0; border-radius: 15px; text-align: center; margin: 50px 0; }
        .simple-team-section { background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(54,209,220,0.15)); border-radius: 15px; margin: 50px 0; }
        .team-row { display: flex; flex-wrap: wrap; gap: 30px; }
        .team-member-simple { text-align: center; flex: 0 0 180px; }
        .member-circle { width: 120px; height: 120px; margin: 0 auto 15px; border-radius: 50%; overflow: hidden; border: 3px solid var(--secondary-color); padding: 3px; background: linear-gradient(45deg, var(--secondary-color), #5B86E5); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .member-circle img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
        .team-member-simple:hover .member-circle { transform: scale(1.05); box-shadow: 0 0 20px rgba(54,209,220,0.5); }
        .member-info h6 { color: white; font-weight: 600; margin-bottom: 5px; font-size: 0.95rem; }
        .member-info .role { color: var(--secondary-color); font-size: 0.85rem; margin: 0; }
      `}</style>
    </>
  )
}

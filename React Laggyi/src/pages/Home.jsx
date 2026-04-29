import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

const initialMembers = [
  { id: 1, name: 'Chaitanya Mahendra Chouhan', email: 'chaitanya@example.com', goal: 'Weight Loss', status: 'Active' },
  { id: 2, name: 'Abhishek Chauhan', email: 'abhishek@example.com', goal: 'Stress Reduction', status: 'Active' },
  { id: 3, name: 'Manish Kumar Yadav', email: 'manish@example.com', goal: 'Muscle Gain', status: 'Active' },
  { id: 4, name: 'Soham Rastogi', email: 'soham@example.com', goal: 'Better Sleep', status: 'Inactive' },
  { id: 5, name: 'Himanshu Prajapati', email: 'himanshu@example.com', goal: 'Overall Wellness', status: 'Active' },
  { id: 6, name: 'Parth Badgire', email: 'parth@example.com', goal: 'Overall Wellness', status: 'Active' },
  { id: 7, name: 'Sahil Bhaskarwar', email: 'sahil@example.com', goal: 'Muscle Gain', status: 'Active' },
  { id: 8, name: 'Sankshitha Bhukya', email: 'sankshitha@example.com', goal: 'Weight Gain', status: 'Inactive' },
  { id: 9, name: 'Srikruthi Amballa', email: 'srikruthi@example.com', goal: 'Weight Loss', status: 'Inactive' },
  { id: 10, name: 'Prakhar Gupta', email: 'prakhar@example.com', goal: 'Better Sleep', status: 'Active' },
]

export default function Home() {
  const [members, setMembers] = useState(initialMembers)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', healthGoals: 'Choose', newsletter: false })
  const [showAlert, setShowAlert] = useState(true)

  function handleFormChange(e) {
    const { id, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMembers(prev => [...prev, { id: prev.length + 1, name: `${form.firstName} ${form.lastName}`, email: form.email, goal: form.healthGoals === 'Choose' ? 'Not specified' : form.healthGoals, status: 'Active' }])
    alert('Thank you for registering! Your information has been added to the community.')
    setForm({ firstName: '', lastName: '', email: '', password: '', healthGoals: 'Choose', newsletter: false })
  }

  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {[0,1,2,3,4,5].map(i => <button key={i} type="button" data-bs-target="#homeCarousel" data-bs-slide-to={i} className={i===0?'active':''}></button>)}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block w-100" src="/video1.webm" autoPlay muted loop playsInline></video>
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{fontWeight:700}}>Transform Your Health Journey</h2>
              <h4>Discover personalized wellness plans tailored to your goals and lifestyle</h4>
            </div>
          </div>
          {['/1.avif','/img122.jpeg','/ppt1image.avif','/2.avif','/3.avif'].map((src,i) => (
            <div className="carousel-item" key={src}>
              <img src={src} className="d-block w-100" alt="Fitness" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Transform Your Health Journey</h3>
                <p>Discover personalized wellness plans tailored to your goals and lifestyle.</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="sidebar-outer col-lg-3">
            <div className="sidebar">
              <h4>Wellness Categories</h4>
              <ul className="sidebar-list">
                <Link className="sidebar-anchor" to="/diet"><li><i className="fas fa-apple-alt"></i>Diet Plan</li></Link>
                <Link className="sidebar-anchor" to="/yoga"><li><i className="fas fa-spa"></i>Yoga &amp; Meditation</li></Link>
                <Link className="sidebar-anchor" to="/weight"><li><i className="fas fa-dumbbell"></i>Weight Training</li></Link>
                <Link className="sidebar-anchor" to="/calisthenics"><li><i className="fas fa-running"></i>Calisthenics</li></Link>
                <Link className="sidebar-anchor" to="/circadian"><li><i className="fas fa-clock"></i>Circadian Rhythm</li></Link>
              </ul>
              <br /><br />
              <div className="mt-4">
                <h5>Daily Tip</h5><br />
                <div className="alert alert-custom">
                  <p><strong>Hydration:</strong> Drink at least 8 glasses of water daily to maintain optimal body function and energy levels.</p><br />
                  <p><strong>Sleep:</strong> Maintain a consistent sleep schedule by going to bed and waking up at the same time daily—even on weekends.</p><br />
                  <p><strong>Physically active:</strong> Regular exercise improves cardiovascular health, boosts mood, and helps maintain a healthy weight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="col-lg-9">
            {showAlert && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Welcome!</strong> You've successfully landed on our health and wellness platform. Start your journey today!
                <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
              </div>
            )}

            {/* Registration Form */}
            <div className="form-container">
              <h3 className="form-title">Join Our Wellness Community</h3>
              <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input style={{opacity:.4}} placeholder="eg: kamal" type="text" className="form-control" id="firstName" value={form.firstName} onChange={handleFormChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input style={{opacity:.4}} placeholder="eg: gupta" type="text" className="form-control" id="lastName" value={form.lastName} onChange={handleFormChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input style={{opacity:.4}} placeholder="eg: xyz@example.com" type="email" className="form-control" id="email" value={form.email} onChange={handleFormChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={form.password} onChange={handleFormChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="healthGoals" className="form-label">Primary Health Goals</label>
                  <select className="form-select" id="healthGoals" value={form.healthGoals} onChange={handleFormChange}>
                    <option>Choose</option>
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Stress Reduction</option>
                    <option>Better Sleep</option>
                    <option>Overall Wellness</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="newsletter" checked={form.newsletter} onChange={handleFormChange} />
                  <label className="form-check-label" htmlFor="newsletter">Subscribe to our wellness newsletter</label>
                </div>
                <div className="button-reg"><button type="submit" className="btn btn-primary">Register Now</button></div>
              </form>
            </div>

            {/* Members Table */}
            <div className="table-container">
              <h3 className="table-title">Community Members</h3>
              <table className="table table-striped table-hover">
                <thead>
                  <tr><th>#</th><th>Name</th><th>Email</th><th>Goals</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {members.map(m => (
                    <tr key={m.id}>
                      <td>{m.id}</td><td>{m.name}</td><td>{m.email}</td><td>{m.goal}</td>
                      <td><span className={`badge ${m.status==='Active'?'bg-success':'bg-danger'}`}>{m.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feature Cards */}
          <h3 className="mb-4 gradient-text" id="cards-features">Featured Wellness Programs</h3>
          <div className="row">
            {[
              {title:'Nutrition Mastery & Blueprint', desc:'Learn to create balanced meal plans that support your health goals.', items:['Personalized diet charts','Recipe database','Nutrition tracking'], to:'/diet'},
              {title:'Calisthenics & Weight Training', desc:'Build strength and flexibility using your body weight or weight equipment.', items:['Beginner to advanced routines','Form tutorials','Progress tracking'], to:'/calisthenics'},
              {title:'Sleep Optimization', desc:'Improve sleep quality by understanding circadian rhythms and yoga.', items:['Sleep tracking','Stress relief yoga & meditation','Sleep hygiene tips'], to:'/circadian'},
            ].map(c => (
              <div className="col-md-4" key={c.title}>
                <div className="card">
                  <div className="card-header"><h5 className="card-title mb-0">{c.title}</h5></div>
                  <div className="card-body">
                    <p className="card-text">{c.desc}</p>
                    <ul className="list-group list-group-flush mb-3">
                      {c.items.map(i => <li className="list-group-item" key={i}>{i}</li>)}
                    </ul>
                    <Link to={c.to} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

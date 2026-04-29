import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Yoga() {
  return (
    <>
      <Navbar />
      <div className="yoga-hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Yoga &amp; Meditation</h1>
          <p className="lead">Master Your Body's Internal happiness for Optimal Health</p>
          <p>"The grandest but most difficult goal to achieve in life is to still the mind."</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12"><h2 className="pose-title-a">Popular Yoga Poses</h2></div>
          <div className="col-md-4">
            <div className="yoga-card">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop" className="card-image" alt="Mountain Pose" />
              <h4>1. Mountain Pose</h4>
              <p>Stand straight, feet together, arms at sides. Good for posture and balance.</p>
              <p><strong>Hold:</strong> 30 seconds</p><p><strong>Level:</strong> Beginner</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="yoga-card">
              <img src="/YOGA AND MEDITATION/treepose.jpeg" className="card-image" alt="Tree Pose" />
              <h4>2. Tree Pose</h4>
              <p>Stand on one leg, place other foot on inner thigh. Improves balance.</p>
              <p><strong>Hold:</strong> 30 seconds each side</p><p><strong>Level:</strong> Beginner</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="yoga-card">
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop" className="card-image" alt="Downward Dog" />
              <h4>3. Downward Dog</h4>
              <p>Hands and feet on floor, hips up. Stretches whole body.</p>
              <p><strong>Hold:</strong> 1 minute</p><p><strong>Level:</strong> Beginner</p>
            </div>
          </div>
        </div>

        <div className="meditation-box">
          <h2 className="pose-title">Meditation Techniques</h2>
          <div className="row">
            <div className="col-md-4"><div className="tip-box"><h5><i className="fas fa-wind"></i> Breathing Meditation</h5><p>Sit comfortably. Close eyes. Focus on your breath. Count breaths 1 to 10.</p><p><strong>Time:</strong> 5-10 minutes</p></div></div>
            <div className="col-md-4"><div className="tip-box"><h5><i className="fas fa-brain"></i> Mindfulness Meditation</h5><p>Notice thoughts without judgment. Watch them like clouds passing by.</p><p><strong>Time:</strong> 10-15 minutes</p></div></div>
            <div className="col-md-4"><div className="tip-box"><h5><i className="fas fa-heart"></i> Loving-Kindness</h5><p>Send positive thoughts to yourself and others. Repeat kind phrases.</p><p><strong>Time:</strong> 10 minutes</p></div></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12"><h2 className="pose-title-a">Benefits of Yoga &amp; Meditation</h2></div>
          {[['fa-brain','Reduces Stress','Lowers stress hormones'],['fa-bed','Better Sleep','Improves sleep quality'],['fa-heartbeat','Heart Health','Lowers blood pressure'],['fa-smile','Happiness','Increases happiness']].map(([icon,title,desc]) => (
            <div className="col-md-3 col-6" key={title}>
              <div className="benefit-item">
                <i className={`fas ${icon} fa-2x mb-2`} style={{color:'#36D1DC'}}></i>
                <h6>{title}</h6><p className="small">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="yoga-card">
          <h2 className="pose-title">Weekly Yoga Schedule</h2>
          <div className="row">
            {[['Mon','Sun Salutations','20 min'],['Tue','Balance Poses','25 min'],['Wed','Meditation Day','15 min'],['Thu','Strength Poses','30 min'],['Fri','Flexibility','25 min'],['Sat','Rest & Recovery','10 min']].map(([day,act,dur]) => (
              <div className="col-md-2 col-4" key={day}>
                <div className="week-day"><h5>{day}</h5><p>{act}</p><p><small>{dur}</small></p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="yoga-card text-center">
          <h3>"Yoga is the journey of the self, through the self, to the self."</h3>
          <p className="text-muted">- The Bhagavad Gita</p>
        </div>
      </div>
      <Footer />
      <style>{`
        .yoga-hero{background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)),url('/YOGA AND MEDITATION/bg.png');background-size:cover;background-position:center;color:white;padding:80px 0;margin-bottom:50px;display:flex;align-items:center;text-align:center;height:500px}
        .yoga-card{background:rgb(226,223,223);padding:25px;margin:20px 0;border-radius:15px;box-shadow:0 8px 12px rgba(193,196,196,0.938)}
        .yoga-card:hover{box-shadow:0px 0px 20px 5px rgba(54,209,220,0.5)}
        .card-image{width:100%;height:250px;object-fit:cover;border-radius:10px;margin-bottom:15px}
        .pose-title{color:black;border-left:4px solid #36D1DC;padding-left:15px;margin-bottom:15px}
        .pose-title-a{color:#36D1DC}
        .benefit-item{background:rgb(226,223,223);padding:15px;border-radius:8px;margin:10px 0;text-align:center}
        .meditation-box{background:linear-gradient(135deg,#d4d8db,#e3f2fd);padding:25px;border-radius:15px;margin:20px 0}
        .tip-box{background:rgb(226,223,223);padding:20px;border-radius:10px;margin:10px;border-left:4px solid #36D1DC}
        .week-day{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:rgb(226,223,223);padding:10px;border-radius:5px;text-align:center;margin:5px}
      `}</style>
    </>
  )
}

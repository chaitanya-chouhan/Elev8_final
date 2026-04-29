import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Circadian() {
  return (
    <>
      <Navbar />
      <div className="circadian-hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Circadian Rhythm</h1>
          <p className="lead">Master Your Body's Internal Clock for Optimal Health</p>
          <p>Sleep better, have more energy, and improve your overall wellbeing</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="rhythm-card">
              <h4><i className="fas fa-chart-line me-2"></i>Circadian Rhythm</h4>
              <p className="text-muted">Circadian rhythm is the internally generated, approximately 24-hour biological cycle that regulates physiological and behavioral processes in living organisms, synchronized primarily by environmental light-dark signals. <br /><b>In simple terms:</b><br />It is your body's built-in 24-hour clock that controls when you sleep, wake, release hormones, digest food, and stay alert — and it resets each day based on light.</p>
            </div>

            <div className="rhythm-card">
              <h4><i className="fas fa-calendar-day me-2"></i>Optimal 24-Hour Schedule</h4>
              <p className="text-muted">Follow this natural rhythm for peak performance</p>
              {[
                {icon:'fa-sun', label:'6:00 AM - Wake Up', desc:'Get morning sunlight, drink water, light stretching'},
                {icon:'fa-egg', label:'7:00 AM - Breakfast', desc:'High-protein meal to fuel your day'},
                {icon:'fa-brain', label:'9:00 AM - Peak Focus', desc:'Work on important tasks, cortisol peaks'},
                {icon:'fa-hamburger', label:'12:00 PM - Lunch', desc:'Balanced meal with complex carbs and protein'},
                {icon:'fa-dumbbell', label:'4:00 PM - Exercise', desc:'Best time for strength training and workouts'},
                {icon:'fa-utensils', label:'7:00 PM - Dinner', desc:'Light meal, avoid heavy carbs'},
                {icon:'fa-moon', label:'10:00 PM - Sleep', desc:'Begin wind-down routine, no screens, dim lights'},
              ].map(t => (
                <div className="time-slot" key={t.label}>
                  <div className="time-icon"><i className={`fas ${t.icon}`}></i></div>
                  <div className="time-content">
                    <div className="time-label">{t.label}</div>
                    <div>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rhythm-card">
              <h4><i className="fas fa-chart-line me-2"></i>Hormone Fluctuations</h4>
              <p className="text-muted">Understanding your body's natural cycles</p>
              {[
                {name:'Cortisol', cls:'cortisol', peak:'Peak: 8-9 AM'},
                {name:'Melatonin', cls:'melatonin', peak:'Peak: 2-4 AM'},
                {name:'Growth Hormone', cls:'growth', peak:'Peak: 11 PM - 1 AM'},
              ].map(h => (
                <div className="hormone-track" key={h.name}>
                  <div className="hormone-name">{h.name}</div>
                  <div className="hormone-bar"><div className={`hormone-level ${h.cls}`}></div></div>
                  <div className="hormone-value">{h.peak}</div>
                </div>
              ))}
            </div>

            <div className="rhythm-card">
              <h4><i className="fas fa-lightbulb me-2"></i>Light Exposure Guide</h4>
              <p className="text-muted">Optimize light exposure for better rhythm</p>
              {[
                {cls:'intensity-high', text:<><strong>Morning (6-10 AM):</strong> Bright natural light (10,000+ lux) - resets circadian clock</>},
                {cls:'intensity-medium', text:<><strong>Daytime (10 AM-4 PM):</strong> Moderate light - maintains alertness</>},
                {cls:'intensity-low', text:<><strong>Evening (6-10 PM):</strong> Dim, warm light - promotes melatonin production</>},
                {cls:'intensity-dark', text:<><strong>Night (10 PM-6 AM):</strong> Complete darkness - essential for deep sleep</>},
              ].map((l,i) => (
                <div className="light-exposure" key={i}>
                  <div className={`light-intensity ${l.cls}`}></div>
                  <div className="light-content">{l.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        .circadian-hero{background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/Circadian rhythm/sleep.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;display:flex;align-items:center;height:500px}
        .rhythm-card{background:white;border-radius:12px;padding:25px;margin-bottom:30px;box-shadow:0 4px 12px rgba(255,255,255,1);border-left:4px solid var(--secondary-color);border-top:4px solid var(--secondary-color)}
        .rhythm-card h4{color:var(--primary-color);margin-bottom:15px;padding-bottom:10px;border-bottom:2px solid #f0f0f0}
        .time-slot{background:linear-gradient(135deg,rgba(54,209,220,0.1),rgba(0,0,0,0.05));border-radius:10px;padding:15px;margin:10px 0;display:flex;align-items:center}
        .time-icon{width:50px;height:50px;background:var(--secondary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;margin-right:15px;flex-shrink:0}
        .time-label{font-weight:600;color:var(--primary-color);margin-bottom:5px}
        .hormone-track{display:flex;align-items:center;margin:15px 0}
        .hormone-name{width:120px;font-weight:600;color:var(--primary-color)}
        .hormone-bar{flex-grow:1;height:20px;background:#f0f0f0;border-radius:10px;overflow:hidden;margin:0 15px}
        .hormone-level{height:100%;border-radius:10px}
        .cortisol{background:linear-gradient(90deg,#667eea,#764ba2);width:90%}
        .melatonin{background:linear-gradient(90deg,#f093fb,#f5576c);width:85%}
        .growth{background:linear-gradient(90deg,#43e97b,#38f9d7);width:95%}
        .light-exposure{display:flex;align-items:center;margin:15px 0}
        .light-intensity{width:30px;height:30px;border-radius:50%;margin-right:15px;flex-shrink:0}
        .intensity-high{background:linear-gradient(135deg,#FFD700,#FF8C00)}
        .intensity-medium{background:linear-gradient(135deg,#90EE90,#32CD32)}
        .intensity-low{background:linear-gradient(135deg,#87CEEB,#1E90FF)}
        .intensity-dark{background:black}
      `}</style>
    </>
  )
}

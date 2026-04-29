import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Calisthenics() {
  return (
    <>
      <Navbar />
      <div className="calisthenics-hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Calisthenics</h1>
          <p className="lead">Transform Your Body Anywhere with Pure, Functional Movement.</p>
        </div>
      </div>

      <div className="container my-5">
        <section className="schedule-section mb-5">
          <h3>Why Calisthenics?</h3>
          <p>Calisthenics is a form of exercise that uses your own body weight instead of equipment or machines. It includes movements like push-ups, pull-ups, dips, squats, lunges, planks, and advanced skills such as handstands, muscle-ups, and levers.</p>
          <ul>
            <li><strong>Builds Functional Strength</strong> — You train natural movement patterns which improves real-world strength.</li>
            <li><strong>No Equipment Needed</strong> — You can practise anywhere: home, park, playground, or gym.</li>
            <li><strong>Improves Mobility &amp; Flexibility</strong> — Many exercises require full-range control.</li>
            <li><strong>Boosts Coordination &amp; Body Control</strong> — Skills like handstands develop balance and stability.</li>
            <li><strong>Scalable for All Levels</strong> — Beginners can start with easy variations, advanced athletes can progress endlessly.</li>
            <li><strong>Great for Fat Loss &amp; Lean Muscle</strong> — High-rep body-weight training burns calories and builds muscle.</li>
            <li><strong>Fun &amp; Skill-Based</strong> — Unlike repetitive gym routines, calisthenics feels like learning new skills.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="train-heading mb-4">Training Programs</h2>
          <div className="row">
            {[
              {title:'Foundation Builder', level:'Beginner', desc:'Learn the fundamental movements and build a solid foundation.', items:['Push-up variations','Pull-up basics','Core strengthening','Squat progressions']},
              {title:'Skill Development', level:'Intermediate', desc:'Master intermediate skills and progress toward advanced movements.', items:['Muscle-up training','Handstand progressions','L-sit mastery','Front lever basics']},
              {title:'Advanced Mastery', level:'Advanced', desc:'Conquer advanced calisthenics skills and achieve elite body control.', items:['Planche training','Human flag','One-arm pull-ups','Handstand push-ups']},
            ].map(p => (
              <div className="col-md-4" key={p.title}>
                <div className="program-card">
                  <div className="program-card-header"><h4 className="mb-0">{p.title}</h4></div>
                  <div className="program-card-body">
                    <span className="difficulty-badge">{p.level}</span>
                    <p>{p.desc}</p>
                    <ul className="mb-3">{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="exercise-section">
          <h3>Essential Exercises</h3>
          <div className="row">
            {[
              {title:'Pull-ups & Variations', desc:'The foundation of upper body pulling strength. Master different grips and progressions.', muscles:'Back & Arms', level:'Intermediate'},
              {title:'Push-up Variations', desc:'From basic to advanced, develop chest, shoulder, and triceps strength.', muscles:'Chest & Triceps', level:'Beginner-Friendly'},
              {title:'Core & Leg Work', desc:'Build a strong foundation with bodyweight squats, lunges, and core exercises.', muscles:'Full Body', level:'All Levels'},
              {title:'Skill Movements', desc:'Master handstands, muscle-ups, and other advanced bodyweight skills.', muscles:'Skill & Strength', level:'Advanced'},
            ].map(e => (
              <div className="col-md-6" key={e.title}>
                <div className="exercise-item">
                  <h5>{e.title}</h5>
                  <p>{e.desc}</p>
                  <div className="exercise-stats">
                    <div className="stat-item"><i className="fas fa-dumbbell"></i><span>{e.muscles}</span></div>
                    <div className="stat-item"><i className="fas fa-signal"></i><span>{e.level}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="col-md-12">
          <div className="tips-section">
            <h3>Quick Tips</h3>
            {[['fa-bullseye','Focus on Form','Perfect form is more important than high reps. Quality over quantity always.'],['fa-clock','Rest & Recovery','Muscles grow during rest. Ensure adequate sleep and recovery days.'],['fa-utensils','Nutrition Matters','Fuel your workouts with proper nutrition for better performance and results.']].map(([icon,title,desc]) => (
              <div className="tip-item" key={title}>
                <div className="tip-icon"><i className={`fas ${icon}`}></i></div>
                <div><h5>{title}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        <section className="schedule-section mb-5">
          <h3>Sample Weekly Schedule</h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead><tr><th>Day</th><th>Focus</th><th>Exercises</th><th>Duration</th><th>Difficulty</th></tr></thead>
              <tbody>
                {[['Monday','Upper Body Pull','Pull-ups, Rows, Biceps','45 mins','success','Medium'],['Tuesday','Lower Body','Squats, Lunges, Calves','40 mins','warning','Hard'],['Wednesday','Rest/Core','Planks, Leg Raises','20 mins','info','Easy'],['Thursday','Upper Body Push','Push-ups, Dips, Shoulders','50 mins','success','Medium'],['Friday','Full Body','Burpees, Compound Moves','55 mins','warning','Hard'],['Saturday','Skill Work','Handstands, Balance','35 mins','success','Medium'],['Sunday','Active Recovery','Stretching, Mobility','30 mins','info','Easy']].map(([day,focus,ex,dur,color,diff]) => (
                  <tr key={day}><td>{day}</td><td>{focus}</td><td>{ex}</td><td>{dur}</td><td><span className={`badge bg-${color}`}>{diff}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        .calisthenics-hero{display:flex;flex-direction:row;align-items:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;height:500px;background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/Calisthenics/calisthenics-main.jpg');background-size:cover;background-position:bottom}
        .train-heading{font-size:2.5rem;font-weight:700;color:white}
        .schedule-section{background:white;border-radius:12px;padding:30px;box-shadow:0 4px 12px white}
        .schedule-section h3{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .schedule-section thead th{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;padding:15px}
        .schedule-section tbody tr:hover{background-color:rgba(54,209,220,0.1)}
        .program-card{background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px white;transition:all 0.3s ease;margin-bottom:30px;height:100%}
        .program-card:hover{transform:translateY(-10px)}
        .program-card-header{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;padding:20px;text-align:center}
        .program-card-body{padding:25px}
        .difficulty-badge{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:white;padding:5px 15px;border-radius:20px;font-size:0.9rem;display:inline-block;margin-bottom:15px}
        .exercise-section{background:white;border-radius:12px;padding:30px;margin-bottom:30px;box-shadow:0 4px 12px white}
        .exercise-section h3{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .exercise-item{background:#f8f9fa;border-radius:10px;padding:20px;margin-bottom:20px;border-left:4px solid var(--secondary-color);transition:all 0.3s ease}
        .exercise-item:hover{background:#e9ecef;transform:translateX(5px)}
        .exercise-item h5{color:var(--primary-color);margin-bottom:10px}
        .exercise-stats{display:flex;gap:20px;margin-top:15px}
        .stat-item{display:flex;align-items:center;gap:8px;color:#6c757d}
        .stat-item i{color:var(--secondary-color)}
        .tips-section{background:linear-gradient(135deg,rgba(54,209,220,0.1),rgba(108,99,255,0.1));border-radius:12px;padding:30px;margin-bottom:30px;border-left:4px solid var(--secondary-color);color:white;box-shadow:0 4px 12px white}
        .tip-item{display:flex;align-items:flex-start;gap:15px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,0.1);color:white}
        .tip-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
        .tip-icon{width:40px;height:40px;background:var(--secondary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0}
      `}</style>
    </>
  )
}

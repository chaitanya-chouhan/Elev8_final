import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const days = ['monday','tuesday','wednesday','thursday','friday','saturday']

export default function Weight() {
  const [completed, setCompleted] = useState({})
  const toggle = (day) => setCompleted(prev => ({...prev, [day]: !prev[day]}))

  const ExCard = ({img, name, muscle, sets, equipment, steps}) => (
    <div className="col-md-4 mb-4">
      <div className="exercise-card">
        <img src={img} className="exercise-image" alt={name} />
        <h4 className="exercise-name">{name}</h4>
        <div className="exercise-detail"><strong>Muscle:</strong> {muscle}</div>
        <div className="exercise-detail"><strong>Sets:</strong> {sets}</div>
        <div className="exercise-detail"><strong>Equipment:</strong> {equipment}</div>
        <div className="instructions-box"><strong>Instructions:</strong><br />{steps.map((s,i) => <span key={i}>{i+1}. {s}<br /></span>)}</div>
      </div>
    </div>
  )

  const DayBar = ({day, label}) => (
    <div className="day-bar">
      <button className={`day-btn${completed[day] ? ' completed' : ''}`} onClick={() => toggle(day)}>{label}</button>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="weight-hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Weight Training</h1>
          <p className="lead">Master Your Body's Strength for Optimal Health</p>
          <p>Train consistently, have more energy, and improve your overall wellbeing</p>
        </div>
      </div>

      <div className="container">
        <div className="muscle-group">
          <h2 className="muscle-title">Chest Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/bench press.jpeg" name="Bench Press" muscle="Pectoralis Major" sets="3 sets of 8-12 reps" equipment="Barbell, Bench" steps={['Lie on bench with eyes under barbell','Grip bar slightly wider than shoulder width','Lower bar to mid-chest','Press bar back up to starting position']} />
            <ExCard img="/WEIGHT/push up.jpg" name="Push Ups" muscle="Chest & Triceps" sets="3 sets of 15-20 reps" equipment="Bodyweight only" steps={['Place hands slightly wider than shoulders','Keep body in straight line from head to heels','Lower chest to floor','Push back up to starting position']} />
            <ExCard img="/WEIGHT/chest fly.jpg" name="Chest Fly" muscle="Pectoralis Major" sets="3 sets of 10-15 reps" equipment="Dumbbells, Machine" steps={['Lie on bench with dumbbells above chest','Slightly bend elbows','Lower arms out to sides in arc motion','Bring weights back together over chest']} />
          </div>
          <DayBar day="monday" label="Monday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Back Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/pull up.jpg" name="Pull Ups" muscle="Latissimus Dorsi" sets="3 sets of 5-10 reps" equipment="Pull-up bar" steps={['Grip bar with palms facing away','Hang with arms fully extended','Pull body up until chin clears bar','Lower with control']} />
            <ExCard img="/WEIGHT/lat pulldown.jpg" name="Lat Pulldown" muscle="Latissimus Dorsi" sets="3 sets of 10-12 reps" equipment="Cable machine" steps={['Sit at machine with knees under pads','Grip bar wide','Pull bar down to upper chest','Slowly return to starting position']} />
            <ExCard img="/WEIGHT/bent row.jpeg" name="Bent Over Row" muscle="Rhomboids, Lats" sets="3 sets of 8-12 reps" equipment="Barbell, Dumbbells" steps={['Bend knees slightly, hinge at hips','Keep back straight, almost parallel to floor','Pull barbell to lower chest','Lower with control']} />
          </div>
          <DayBar day="tuesday" label="Tuesday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Shoulder Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/shoulder press.jpg" name="Shoulder Press" muscle="Deltoids" sets="3 sets of 8-12 reps" equipment="Dumbbells, Barbell" steps={['Sit or stand with dumbbells at shoulder height','Press weights overhead until arms extended','Lower back to starting position',"Don't lock elbows at top"]} />
            <ExCard img="/WEIGHT/lateral raise.jpg" name="Lateral Raise" muscle="Lateral Deltoids" sets="3 sets of 12-15 reps" equipment="Dumbbells" steps={['Stand with dumbbells at sides','Raise arms out to sides until shoulder height','Lower with control',"Slight bend in elbows, don't use momentum"]} />
            <ExCard img="/WEIGHT/front raise.png" name="Front Raise" muscle="Anterior Deltoids" sets="3 sets of 12-15 reps" equipment="Dumbbells, Plate" steps={['Stand with dumbbells in front of thighs','Raise one arm straight forward to shoulder height','Alternate arms or raise together','Control movement, do not swing']} />
          </div>
          <DayBar day="wednesday" label="Wednesday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Arm Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/bicep curl.jpg" name="Bicep Curls" muscle="Biceps" sets="3 sets of 10-15 reps" equipment="Dumbbells, Barbell" steps={['Stand with dumbbells at sides','Curl weights up towards shoulders','Squeeze biceps at top','Lower with control']} />
            <ExCard img="/WEIGHT/tricep.jpg" name="Tricep Pushdown" muscle="Triceps" sets="3 sets of 12-15 reps" equipment="Cable machine" steps={['Stand at cable machine with rope attachment','Keep elbows at sides','Push rope down until arms extended','Return to starting position']} />
            <ExCard img="/WEIGHT/hammer curl.jpg" name="Hammer Curls" muscle="Brachialis" sets="3 sets of 10-12 reps" equipment="Dumbbells" steps={['Hold dumbbells with palms facing each other','Curl weights up keeping palms facing in','Squeeze at top','Lower with control']} />
          </div>
          <DayBar day="thursday" label="Thursday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Leg Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/squat.jpg" name="Squats" muscle="Quadriceps, Glutes" sets="3 sets of 8-12 reps" equipment="Barbell, Bodyweight" steps={['Stand with feet shoulder-width apart','Lower hips back and down','Keep chest up, knees track over toes','Push through heels to stand back up']} />
            <ExCard img="/WEIGHT/leg press.jpg" name="Leg Press" muscle="Quadriceps" sets="3 sets of 10-15 reps" equipment="Leg press machine" steps={['Sit on machine with feet on platform','Lower weight by bending knees','Push platform away until legs extended',"Don't lock knees, control movement"]} />
            <ExCard img="/WEIGHT/lunges.jpg" name="Lunges" muscle="Quadriceps, Glutes" sets="3 sets of 10-12 reps per leg" equipment="Dumbbells, Bodyweight" steps={['Step forward with one leg','Lower hips until both knees bent 90 degrees','Push back to starting position','Alternate legs']} />
          </div>
          <DayBar day="friday" label="Friday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Core Exercises</h2>
          <div className="row">
            <ExCard img="/WEIGHT/cabel crunches.webp" name="Cable Crunch" muscle="Upper Abdominals, Core" sets="3 sets of 20 reps" equipment="Cables" steps={['Kneel in front of the machine and hold rope with both hands','Keep knees slightly bent and hips stationary','Engage core and pull rope down by crunching torso forward','Pause briefly then return']} />
            <ExCard img="/WEIGHT/crunches.jpg" name="Crunches" muscle="Rectus Abdominis" sets="3 sets of 15-20 reps" equipment="Bodyweight, Mat" steps={['Lie on back with knees bent','Place hands behind head','Lift shoulders off floor','Try to touch elbow with alternate knee']} />
            <ExCard img="/WEIGHT/abs roll.jpg" name="Ab Roller Rollout" muscle="All Abs, Core" sets="3 sets of 12-15 reps" equipment="Bodyweight, Roller" steps={['Start in a kneeling or plank position','Grip the ab roller firmly','Engage your core and slowly roll forward','Roll back using your abs']} />
          </div>
          <DayBar day="saturday" label="Saturday" />
        </div>

        <div className="muscle-group">
          <h2 className="muscle-title">Training Tips</h2>
          <div className="row">
            {[['Warm Up Properly','Always warm up for 5-10 minutes before lifting weights. This prevents injuries.'],['Use Proper Form','Good form is more important than heavy weight. Ask trainer if unsure.'],['Rest Between Sets','Rest 1-2 minutes between sets. This helps muscles recover.'],['Stay Hydrated','Drink water during workout. Dehydration reduces performance.']].map(([t,d]) => (
              <div className="col-md-6" key={t}><div className="exercise-card"><h5>{t}</h5><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        .weight-hero{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/WEIGHT/bgDUMBLE.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;display:flex;align-items:center;height:500px}
        .muscle-group{background:white;padding:30px;border-radius:12px;margin-bottom:40px;box-shadow:0 4px 12px rgba(255,255,255,1);border-top:4px solid var(--secondary-color)}
        .muscle-title{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .exercise-card{background:white;border-radius:10px;padding:15px;margin:10px 0;box-shadow:0 3px 10px rgba(0,0,0,0.1);transition:all 0.3s;border-left:4px solid var(--secondary-color);height:100%}
        .exercise-card:hover{transform:translateY(-5px);box-shadow:0 8px 20px rgba(54,209,220,0.2)}
        .exercise-image{width:300px;height:200px;object-fit:cover;border-radius:8px;margin-bottom:15px}
        .exercise-name{color:var(--primary-color);font-weight:bold;margin-bottom:10px}
        .exercise-detail{margin:8px 0;padding:5px 0;border-bottom:1px dashed #eee}
        .exercise-detail:last-of-type{border-bottom:none}
        .instructions-box{background:#f8f9fa;padding:15px;border-radius:8px;margin-top:10px;border-left:3px solid var(--secondary-color)}
        .day-bar{display:flex;justify-content:center;margin-top:20px;padding:10px;background:#f8f9fa;border-radius:8px}
        .day-btn{padding:10px 20px;margin:0 5px;border:none;border-radius:5px;background-color:#ff6b6b;color:white;cursor:pointer;transition:background-color 0.3s}
        .day-btn.completed{background-color:#51cf66}
      `}</style>
    </>
  )
}

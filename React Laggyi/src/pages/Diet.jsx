import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const boxIds = ['wl-veg','wl-nonveg','wl-vegan','mg-veg','mg-nonveg','mg-vegan']

export default function Diet() {
  const [checked, setChecked] = useState({})

  function toggle(id) { setChecked(prev => ({...prev, [id]: !prev[id]})) }
  function isBoxDone(prefix, count) {
    return Array.from({length:count}, (_,i) => checked[`${prefix}-${i}`]).every(Boolean)
  }

  const MealItem = ({id, label}) => (
    <div className="meal-item">
      <input type="checkbox" id={id} className="meal-checkbox" checked={!!checked[id]} onChange={() => toggle(id)} />
      <label htmlFor={id} className="checkbox-label">{label}</label>
    </div>
  )

  const PlanBox = ({prefix, count, children}) => (
    <div className={`plan-box${isBoxDone(prefix, count) ? ' completed' : ''}`}>{children}</div>
  )

  return (
    <>
      <Navbar />
      <div className="circadian-hero-diet">
        <div className="container">
          <h1 className="display-4 fw-bold">Diet Plan</h1>
          <p className="lead">Health is a daily practice not a 30 day diet</p>
          <p>Science and mindfulness complement each other in helping people eat well.</p>
        </div>
      </div>

      <div className="container">
        <div className="diet-section">
          <h2 className="diet-title">Weight Loss Plans</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Vegetarian Plan</h4>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop" className="diet-image" alt="Vegetarian" />
              <p>Plant-based proteins and fiber-rich foods.</p>
              <PlanBox prefix="wl-veg" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="wl-veg-0" label="Breakfast: Oats with fruits" /><div className="alternative">Alternative: Poha with vegetables</div>
                <MealItem id="wl-veg-1" label="Lunch: Brown rice with dal" /><div className="alternative">Alternative: Quinoa salad</div>
                <MealItem id="wl-veg-2" label="Evening: Green tea" /><div className="alternative">Alternative: Herbal tea</div>
                <MealItem id="wl-veg-3" label="Dinner: Vegetable soup" /><div className="alternative">Alternative: Grilled vegetables</div>
              </PlanBox>
              <p><strong>Benefits:</strong> High in fiber, low in calories, rich in vitamins.</p>
            </div>
            <div className="col-md-4">
              <h4>Non-Vegetarian Plan</h4>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop" className="diet-image" alt="Non-Veg" />
              <p>Lean meats and fish for protein while reducing carbs.</p>
              <PlanBox prefix="wl-nv" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="wl-nv-0" label="Breakfast: Boiled eggs (2)" /><div className="alternative">Alternative: Scrambled eggs</div>
                <MealItem id="wl-nv-1" label="Lunch: Grilled chicken salad" /><div className="alternative">Alternative: Chicken soup</div>
                <MealItem id="wl-nv-2" label="Evening: Protein shake" /><div className="alternative">Alternative: Greek yogurt</div>
                <MealItem id="wl-nv-3" label="Dinner: Fish with vegetables" /><div className="alternative">Alternative: Chicken breast</div>
              </PlanBox>
              <p><strong>Benefits:</strong> High protein, maintains muscle mass.</p>
            </div>
            <div className="col-md-4">
              <h4>Vegan Plan</h4>
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop" className="diet-image" alt="Vegan" />
              <p>Completely plant-based weight loss plan.</p>
              <PlanBox prefix="wl-vn" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="wl-vn-0" label="Breakfast: Smoothie bowl" /><div className="alternative">Alternative: Chia seed pudding</div>
                <MealItem id="wl-vn-1" label="Lunch: Tofu stir-fry" /><div className="alternative">Alternative: Lentil curry</div>
                <MealItem id="wl-vn-2" label="Evening: Mixed nuts" /><div className="alternative">Alternative: Apple slices</div>
                <MealItem id="wl-vn-3" label="Dinner: Lentil soup" /><div className="alternative">Alternative: Vegetable stew</div>
              </PlanBox>
              <p><strong>Benefits:</strong> Cholesterol-free, high in antioxidants.</p>
            </div>
          </div>
        </div>

        <div className="diet-section">
          <h2 className="diet-title">Muscle Gain Plans</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Vegetarian Plan</h4>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop" className="diet-image" alt="Veg" />
              <PlanBox prefix="mg-veg" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="mg-veg-0" label="Breakfast: Paneer paratha" />
                <MealItem id="mg-veg-1" label="Lunch: Rajma chawal" />
                <MealItem id="mg-veg-2" label="Post-workout: Protein shake" />
                <MealItem id="mg-veg-3" label="Dinner: Chickpea curry" />
              </PlanBox>
            </div>
            <div className="col-md-4">
              <h4>Non-Vegetarian Plan</h4>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop" className="diet-image" alt="NonVeg" />
              <PlanBox prefix="mg-nv" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="mg-nv-0" label="Breakfast: 3-egg omelette" />
                <MealItem id="mg-nv-1" label="Lunch: Chicken breast with rice" />
                <MealItem id="mg-nv-2" label="Post-workout: Whey protein" />
                <MealItem id="mg-nv-3" label="Dinner: Salmon with quinoa" />
              </PlanBox>
            </div>
            <div className="col-md-4">
              <h4>Vegan Plan</h4>
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop" className="diet-image" alt="Vegan" />
              <PlanBox prefix="mg-vn" count={4}>
                <h5>Daily Meal Plan:</h5>
                <MealItem id="mg-vn-0" label="Breakfast: Protein pancakes" />
                <MealItem id="mg-vn-1" label="Lunch: Lentil patties" />
                <MealItem id="mg-vn-2" label="Post-workout: Pea protein" />
                <MealItem id="mg-vn-3" label="Dinner: Tempeh stir-fry" />
              </PlanBox>
            </div>
          </div>
        </div>

        <div className="diet-section">
          <h2 className="diet-title">Important Tips</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>General Guidelines</h5>
              <ul>
                <li>Drink at least 3-4 liters of water every day</li>
                <li>Eat every 3-4 hours to maintain metabolism</li>
                <li>Combine diet with regular exercise</li>
                <li>Get 7-8 hours of sleep daily</li>
                <li>Track your calories using mobile apps</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Do's and Don'ts</h5>
              <ul>
                <li><strong>Do:</strong> Eat plenty of vegetables</li>
                <li><strong>Do:</strong> Include protein in every meal</li>
                <li><strong>Don't:</strong> Skip breakfast</li>
                <li><strong>Don't:</strong> Drink sugary beverages</li>
                <li><strong>Do:</strong> Consult a doctor before starting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        .circadian-hero-diet{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/DIET PLAN/veggies.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;margin-bottom:50px;display:flex;align-items:center;text-align:center;height:500px}
        .diet-section{background-color:#f8f9fa;padding:30px;border-radius:10px;margin-bottom:30px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
        .diet-title{color:#36D1DC;border-bottom:2px solid #36D1DC;padding-bottom:10px;margin-bottom:20px}
        .plan-box{background:white;padding:20px;border-radius:8px;margin:15px 0;border-left:4px solid #36D1DC;box-shadow:0 2px 40px rgba(255,0,0,0.2)}
        .plan-box.completed{box-shadow:0 2px 60px rgba(0,255,0,0.5)}
        .meal-item{margin:10px 0;padding:8px;border-bottom:1px solid #eee}
        .checkbox-label{margin-left:10px}
        .diet-image{width:100%;height:200px;object-fit:cover;border-radius:8px;margin-bottom:15px}
        .alternative{font-size:14px;color:#666;margin-left:25px;margin-top:5px}
      `}</style>
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Premium() {
  return (
    <>
      <Navbar />
      <section className="pricing-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Elev8 Premium Plans</h2>
            <p className="section-subtitle">Choose the perfect plan to accelerate your fitness journey.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card">
                <h3 className="pcard-title">Starter</h3>
                <p className="card-subtitle">Perfect for beginners starting their fitness journey.</p>
                <div className="price">₹999<span>/month</span></div>
                <p className="billing-cycle">Billed monthly. No commitment.</p>
                <ul className="features-list">
                  <li><i className="fas fa-check"></i>Custom workout plan (3x/week)</li>
                  <li><i className="fas fa-check"></i>Basic nutrition guidelines</li>
                  <li><i className="fas fa-check"></i>Access to Elev8 mobile app</li>
                  <li className="inactive"><i className="fas fa-times"></i>Live coaching sessions</li>
                  <li className="inactive"><i className="fas fa-times"></i>Advanced analytics</li>
                  <li className="inactive"><i className="fas fa-times"></i>Priority support</li>
                </ul>
                <button className="pcard-btn secondary">Choose Starter Plan</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card popular">
                <div className="popular-badge">POPULAR</div>
                <h3 className="pcard-title">Pro</h3>
                <p className="card-subtitle">Best value for serious fitness enthusiasts.</p>
                <div className="price">₹2999<span>/month</span></div>
                <p className="billing-cycle">Save 35% with annual billing</p>
                <ul className="features-list">
                  <li><i className="fas fa-check"></i>Custom workout plan (5x/week)</li>
                  <li><i className="fas fa-check"></i>Personalized nutrition plan</li>
                  <li><i className="fas fa-check"></i>Access to Elev8 mobile app + web</li>
                  <li><i className="fas fa-check"></i>2 Live coaching sessions/month</li>
                  <li><i className="fas fa-check"></i>Advanced progress analytics</li>
                  <li className="inactive"><i className="fas fa-times"></i>Priority support</li>
                </ul>
                <button className="pcard-btn">Choose Pro Plan</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pricing-card">
                <h3 className="pcard-title">Elite</h3>
                <p className="card-subtitle">Ultimate transformation with one-on-one coaching.</p>
                <div className="price">₹5999<span>/month</span></div>
                <p className="billing-cycle">Save 40% with annual billing</p>
                <ul className="features-list">
                  <li><i className="fas fa-check"></i>Fully customized workout plan</li>
                  <li><i className="fas fa-check"></i>Personalized nutrition &amp; supplement plan</li>
                  <li><i className="fas fa-check"></i>Full app access + premium content</li>
                  <li><i className="fas fa-check"></i>Weekly live coaching sessions</li>
                  <li><i className="fas fa-check"></i>Advanced analytics &amp; tracking</li>
                  <li><i className="fas fa-check"></i>24/7 Priority support</li>
                </ul>
                <button className="pcard-btn secondary">Choose Elite Plan</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p style={{color:'#ccc'}}>All plans include a 14-day money-back guarantee.</p>
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        .pricing-section{padding:80px 0;background-color:var(--light-color)}
        .section-title{color:white;font-weight:700;margin-bottom:15px;text-align:center;font-size:2.5rem}
        .section-subtitle{color:#ccc;max-width:700px;margin:0 auto 50px;text-align:center;font-size:1.1rem}
        .pricing-card{background:white;border-radius:12px;box-shadow:0 4px 12px rgba(255,255,255,0.15);padding:30px;transition:transform 0.3s,box-shadow 0.3s;height:100%;border-top:4px solid var(--secondary-color);overflow:hidden;position:relative}
        .pricing-card:hover{transform:translateY(-8px);box-shadow:0 12px 20px rgba(0,0,0,0.15)}
        .pricing-card.popular{border-top:6px solid var(--secondary-color)}
        .popular-badge{position:absolute;top:15px;right:-30px;background:linear-gradient(135deg,var(--secondary-color),#5B86E5);color:white;padding:8px 35px;font-size:0.8rem;font-weight:600;transform:rotate(45deg)}
        .pcard-title{color:var(--primary-color);font-weight:700;font-size:1.8rem;margin-bottom:10px;margin-top:10px}
        .card-subtitle{color:#666;margin-bottom:20px;min-height:60px}
        .price{font-size:3.5rem;font-weight:700;color:var(--primary-color);margin-bottom:5px;line-height:1}
        .price span{font-size:1.2rem;color:#666;font-weight:400}
        .billing-cycle{color:#888;font-size:0.9rem;margin-bottom:25px}
        .features-list{list-style:none;padding:0;margin:20px 0 30px 0}
        .features-list li{padding:12px 0;border-bottom:1px solid #eee;display:flex;align-items:center}
        .features-list li:last-child{border-bottom:none}
        .features-list i{color:var(--secondary-color);margin-right:12px;font-size:1.1rem;min-width:20px}
        .features-list .inactive{color:#aaa}
        .features-list .inactive i{color:#aaa}
        .pcard-btn{display:block;width:100%;padding:15px;text-align:center;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;border-radius:8px;font-weight:600;font-size:1.1rem;transition:all 0.3s;cursor:pointer}
        .pcard-btn:hover{transform:translateY(-2px);box-shadow:0 4px 8px rgba(108,99,255,0.3)}
      `}</style>
    </>
  )
}

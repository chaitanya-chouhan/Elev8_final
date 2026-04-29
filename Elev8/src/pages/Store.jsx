import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const products = [
  { id: 1, name: 'Premium Whey Protein', price: 2499, oldPrice: 3499, img: '/store/protein.png', desc: 'High-quality protein powder for muscle recovery and growth. 100% natural ingredients.' },
  { id: 2, name: 'Premium Yoga Mat', price: 1599, oldPrice: 2199, img: '/store/yogamat.png', desc: 'Eco-friendly, non-slip yoga mat with carrying strap. Perfect for all yoga styles.' },
  { id: 3, name: 'Complete Nutrition Guide', price: 899, oldPrice: null, img: '/store/nutrition.png', desc: '300+ pages of meal plans, recipes, and nutritional science. Digital + Physical copy.' },
  { id: 4, name: 'Performance Workout Set', price: 3299, oldPrice: null, img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', desc: 'Breathable, moisture-wicking workout clothes. Complete set for maximum comfort.' },
  { id: 5, name: 'Elev8 Sipper', price: 999, oldPrice: 1499, img: '/store/sipper.png', desc: 'A premium sipper for your protein shakes and daily hydration needs.' },
  { id: 6, name: 'Elev8 Cup', price: 999, oldPrice: 1499, img: '/store/cup.jpg', desc: 'A premium cup for your protein shakes and daily hydration needs.' },
]

export default function Store() {
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState({ 1:1,2:1,3:1,4:1,5:1,6:1 })

  function addToCart(product) {
    const qty = quantities[product.id]
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? {...i, qty: i.qty + qty} : i)
      return [...prev, {...product, qty}]
    })
    showToast(`${product.name} added to cart!`)
  }

  function removeFromCart(id) { setCart(prev => prev.filter(i => i.id !== id)) }
  function clearCart() { if(confirm('Clear cart?')) setCart([]) }

  function showToast(msg) {
    const el = document.createElement('div')
    el.className = 'position-fixed top-0 end-0 p-3'
    el.style.zIndex = '1060'
    el.innerHTML = `<div class="alert alert-success alert-dismissible fade show">${msg}<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3000)
  }

  function updateQty(id, delta) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, Math.min(10, (prev[id]||1) + delta)) }))
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const totalItems = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      <Navbar />
      <section className="store-hero">
        <div className="container">
          <h1>Elev8 Store</h1>
          <p>Premium health products, supplements, and equipment to support your wellness journey</p>
        </div>
      </section>

      <div className="container my-5">
        <div className="main-content-wrapper">
          <div className="products-section">
            <div className="products-grid">
              {products.map(p => (
                <div className="product-card" key={p.id}>
                  <img src={p.img} className="product-img" alt={p.name} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="product-price">₹{p.price.toLocaleString()}</span>
                        {p.oldPrice && <span className="product-old-price ms-2">₹{p.oldPrice.toLocaleString()}</span>}
                      </div>
                      <div className="quantity-control">
                        <button className="quantity-btn" onClick={() => updateQty(p.id, -1)}>-</button>
                        <input type="text" className="quantity-input" value={quantities[p.id]} readOnly />
                        <button className="quantity-btn" onClick={() => updateQty(p.id, 1)}>+</button>
                      </div>
                    </div>
                    <button className="cart-btn" onClick={() => addToCart(p)}>
                      <i className="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-section">
            <div className="cart-sidebar">
              <h4 className="mb-4"><i className="fas fa-shopping-cart me-2"></i>Your Cart {totalItems > 0 && <span className="badge bg-danger">{totalItems}</span>}</h4>
              <div id="cartItems">
                {cart.length === 0 ? <p className="text-muted text-center">Your cart is empty</p> : cart.map((item, idx) => (
                  <div className="cart-item" key={item.id}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div style={{flex:1}}>
                        <h6 className="mb-1">{item.name}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <small>₹{item.price} × {item.qty}</small>
                          <span className="fw-bold">₹{item.price * item.qty}</span>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeFromCart(item.id)}>
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3"><span>Subtotal:</span><span>₹{subtotal}</span></div>
              <div className="d-flex justify-content-between mb-3"><span>Shipping:</span><span>₹99</span></div>
              <div className="d-flex justify-content-between mb-4"><span className="cart-total">Total:</span><span className="cart-total">₹{subtotal + 99}</span></div>
              <button className="checkout-btn mb-3" onClick={() => cart.length ? alert('Proceeding to checkout...') : alert('Cart is empty!')}>
                <i className="fas fa-lock me-2"></i>Proceed to Checkout
              </button>
              <button className="btn btn-outline-primary w-100" onClick={clearCart}>
                <i className="fas fa-trash me-2"></i>Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

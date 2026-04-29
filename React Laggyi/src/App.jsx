import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Premium from './pages/Premium.jsx'
import Store from './pages/Store.jsx'
import Diet from './pages/Diet.jsx'
import Yoga from './pages/Yoga.jsx'
import Weight from './pages/Weight.jsx'
import Calisthenics from './pages/Calisthenics.jsx'
import Circadian from './pages/Circadian.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/store" element={<Store />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/calisthenics" element={<Calisthenics />} />
        <Route path="/circadian" element={<Circadian />} />
      </Routes>
    </BrowserRouter>
  )
}

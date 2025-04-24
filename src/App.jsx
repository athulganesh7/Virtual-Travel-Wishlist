import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Visited from './pages/Visited'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/visited" element={<Visited />}/>
      </Routes>
    </>
  )
}

export default App

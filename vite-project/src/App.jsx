import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Homes from './pages/Homes'
import Headers from './components/Header'

function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Homes ></Homes> }></Route>
      </Routes>
    </Router>
   
  )
}

export default App

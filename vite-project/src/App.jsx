import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Headers from './components/Header'
import { Home } from './pages/Home'
function App() {
  

  return (
    <Router>
      <Headers/>
      <Routes>
        <Route  index element = {<h1>hello</h1>}></Route>
        <Route path='movie/:id'element = {<h1>Movice details page</h1>}></Route>
        <Route path='movie/:type'element = {<h1>Movice list page</h1>}></Route>
        <Route path='/*'element = {<h1> Movice list page</h1>}></Route>
      </Routes>
    </Router>
   
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Home} from './pages/Home'
import Headers from './components/Header'

function App() {
  

  return (
    <Router>
      <Headers/>
      <Routes>
        <Route  index element = {<Home></Home>}></Route>
        <Route path='movie/:id'element = {<h1>Movice list page</h1>}></Route>
        <Route path='movie/:type'element = {<h1>Movice list page</h1>}></Route>
        <Route path='/*'element = {<h1> Movice list page</h1>}></Route>
      </Routes>
    </Router>
   
  )
}

export default App

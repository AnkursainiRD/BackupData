import { useState } from 'react'
import './App.css'
import {Routes,Route, Link} from "react-router-dom"
import About from './components/About'
import Check from './components/Check'
import Home from './pages/Home'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fd' element={<Check/>}/>
        <Route path='/ak' element={<About/>}/>
        <Route path='/dk' element={<Contact/>}/>
    </Routes>
  )
}

export default App

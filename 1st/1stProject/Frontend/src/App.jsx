
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import { useState } from 'react'
import Aw from './components/Aw'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Aw/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

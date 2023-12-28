import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES 
import HomePage from './Pages/HOME/HomePage'
import Works from './Pages/WORKS & CERTIFICATE/Works'

function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<Works />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES 
import HomePage from './Pages/HOME/HomePage'
import Works from './Pages/WORKS & CERTIFICATE/Works'
import WorkPage from './Pages/WORKS & CERTIFICATE/WORK_GALLERY/WorkPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<Works />} />
        <Route path='/payroll' element={<WorkPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

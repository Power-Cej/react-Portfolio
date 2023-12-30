import { createContext, useContext, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MyContextProvider } from './myConetxtProvider'

// PAGES 
import HomePage from './Pages/HOME/HomePage'
import Works from './Pages/WORKS & CERTIFICATE/Works'
import WorkPage from './Pages/WORKS & CERTIFICATE/WORK_GALLERY/WorkPage'

function App() {


  return (
    // <MyContextProvider>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<Works />} />
        <Route path='/projects' element={<WorkPage />} />
        </Routes>
      </BrowserRouter>

      // </MyContextProvider>
  )
}

export default App

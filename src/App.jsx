import {useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES 
import HomePage from './Pages/HOME/HomePage'
import Works from './Pages/WORKS & CERTIFICATE/Works'
import WorkPage from './Pages/WORKS & CERTIFICATE/WORK_GALLERY/WorkPage'
import LoadingScreen from './Pages/LOADING/LoadingScreen'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  })

  return (
    // <MyContextProvider>
      <BrowserRouter>
      {
        isLoading ? 
        (
          <LoadingScreen />
        )
        :
        (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/works' element={<Works />} />
          <Route path='/projects' element={<WorkPage />} />
          <Route path='/load' element={<LoadingScreen />} />
        </Routes>
        )
      }
        
      </BrowserRouter>

  )
}

export default App

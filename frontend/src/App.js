import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutPage, MainPage } from './components'
import './App.css'
import { AppProvider } from './AppContext'
const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
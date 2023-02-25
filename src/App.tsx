import './App.css'
// Pages
import React, { useEffect, useState } from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Works from './pages/Works/Works'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'


function App() {
  const [navbar , setNavbar] = useState({})
 useEffect(()=>{
  window.addEventListener("scroll" , e=>{
    if(window.scrollY >= 600){
      setNavbar({backgroundColor:'#383838a9' , backdropFilter:'blur(4px)'})
    }else{
      setNavbar({})
    }
  })
 },[])


  return (
    <div className="App" >
        <Home/>
        <About/>
        <Works/>
        <Skills/>
        <Contact/>
        <Footer/>
       
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom';

import CarouselBackground from './components/Heroo'
import WelcomeSection from './components/welcome'
import AboutSection from './components/About'
import MissionSection from './components/Mission'
import ValueSection from './components/Value'
import CoachingSection from './components/Girl'
import ContactPage from './components/Contact'
import News from './components/News'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import LogoSection from './components/Cool'

function App() {


  return (
    <>
     
  
    <Navbar/>

   <CarouselBackground/>
   <WelcomeSection/>
   <AboutSection/>
   <MissionSection/>

   <ValueSection/>
   < CoachingSection/>
   <Gallery/>
   <LogoSection/>
   <News/>

   <ContactPage/>

   <Footer/>
    </>
  )
}

export default App

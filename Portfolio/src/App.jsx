import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="font-sans text-gray-700 scroll-smooth">
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

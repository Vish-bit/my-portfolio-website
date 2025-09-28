import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import '/src/App.css';

const App = () => {
  return (
    <div className="bg-[f0e6ef] text-[#111827] font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
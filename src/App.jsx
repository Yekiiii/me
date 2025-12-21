import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Footer } from './components/Footer'
import { Navigation } from './components/navigation'

function App() {

  return (
    <>
      <main className="min-h-screen relative">
        <Navigation/>
      <Hero/>
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
      </main>
    </>
  )
}

export default App

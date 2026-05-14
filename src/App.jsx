import "./App.css"
import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/hero"
import { Navigation } from "./components/navigation"
import { Projects } from "./components/projects"
import { SmoothScroll } from "./components/smooth-scroll"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SmoothScroll />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/8 blur-[120px]" />
        <div className="animate-float-delayed absolute right-[-7rem] top-[34%] h-72 w-72 rounded-full bg-orange/6 blur-[130px]" />
        <div className="animate-drift absolute bottom-[-12rem] left-1/2 h-64 w-[42rem] max-w-[92vw] -translate-x-1/2 rounded-full bg-accent/6 blur-[130px]" />
      </div>

      <Navigation />

      <main className="relative z-10 pb-8">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

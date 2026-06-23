import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TripDetail from './components/TripDetail'
import { destinations } from './data/destinations'
import './App.css'

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const handleDestinationClick = (dest) => {
    setSelectedDestination(dest)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setSelectedDestination(null)
  }

  if (selectedDestination) {
    return <TripDetail destination={selectedDestination} onBack={handleBack} />
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Destinations
        destinations={destinations}
        onDestinationClick={handleDestinationClick}
      />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

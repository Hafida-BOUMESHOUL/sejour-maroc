import { useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TripDetail from './components/TripDetail'
import CustomCircuit from './components/CustomCircuit'
import { destinations, circuits } from './data/destinations'
import './App.css'

const allTrips = [...destinations, ...circuits]

function HomePage() {
  const navigate = useNavigate()
  const [customRoute, setCustomRoute] = useState('')

  const handleDestinationClick = (dest) => {
    navigate(`/trip/${dest.id}`)
  }

  const handleRequestCircuit = (route) => {
    setCustomRoute(route)
    // Scroll to contact section
    setTimeout(() => {
      const contactEl = document.getElementById('contact')
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Destinations
        destinations={destinations}
        onDestinationClick={handleDestinationClick}
      />
      <Destinations
        destinations={circuits}
        onDestinationClick={handleDestinationClick}
        isCircuits
      />
      <CustomCircuit onRequestCircuit={handleRequestCircuit} />
      <Services />
      <About />
      <Testimonials />
      <Contact customRoute={customRoute} />
      <Footer />
    </div>
  )
}

function TripPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const destination = allTrips.find((d) => d.id === id)

  if (!destination) {
    navigate('/', { replace: true })
    return null
  }

  return <TripDetail destination={destination} onBack={() => navigate('/')} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trip/:id" element={<TripPage />} />
    </Routes>
  )
}

export default App

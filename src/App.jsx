import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import CollectionSection from './components/CollectionSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MenuSection from './components/MenuSection'


const App = () => {
  return (
    <main className="relative">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <CollectionSection/>
      <MenuSection/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

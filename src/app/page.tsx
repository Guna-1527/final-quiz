import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Testimonials />
      <Stats />
      <CTA /> 
      <Footer />
    </div>
  )
}

export default page
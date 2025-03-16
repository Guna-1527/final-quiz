import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
    </div>
  )
}

export default page
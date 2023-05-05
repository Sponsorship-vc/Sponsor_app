import React from 'react'
import Nav from '../Landing/components/Nav'
import Hero from '../Landing/components/Hero'
import About from './components/about'
import Category from './components/category'

function Landing() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Category/>
    </div>
  )
}

export default Landing

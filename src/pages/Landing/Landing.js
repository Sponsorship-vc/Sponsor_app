import React from 'react'
import Nav from '../Landing/components/Nav'
import Hero from '../Landing/components/Hero'
import About from './components/about'
import Category from './components/category'
import Connect from '../Landing/components/Connect'
function Landing() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Category/>
      <Connect/>
    </div>
  )
}

export default Landing

import React from 'react'
import Nav from '../Landing/components/Nav'
import Hero from '../Landing/components/Hero'
import About from './components/about'
import Category from './components/category'
import Connect from '../Landing/components/Connect'
import Platform from './components/Platform'

function Landing() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Category/>
      <Platform/>
      <Connect/>
    </div>
  )
}

export default Landing

import React from 'react'
import Nav from '../../components/Landing/Nav'
import Hero from '../../components/Landing/Hero'
import About from '../../components/Landing/about'
import Category from '../../components/Landing/category'
import Connect from '../../components/Landing/Connect'
import Platform from '../../components/Landing/Platform'

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

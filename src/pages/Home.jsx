import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Marquee/>
      <CTA/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Ourworks from '../components/sections/Ourworks'
import Aboutus from '../components/sections/Aboutus'
import Projectdone from '../components/sections/Projectdone'
import ContactUs from '../components/sections/ContactUs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Projectdone/>
    <Services/>
    <Ourworks/>
    <Aboutus/>
    <ContactUs/>
    </>
  )
}

export default HomePage
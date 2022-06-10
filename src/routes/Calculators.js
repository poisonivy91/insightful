import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import CalculatorsSection from '../components/Calculators'
import Deficit from '../components/Deficit'

const Calculators = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='CALCULATORS' text='BMR - HRMax - Body Composition'/>
        <CalculatorsSection />
        <Deficit />
        <Footer />
    </div>
  )
}

export default Calculators
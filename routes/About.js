import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AboutCards from '../components/About'

const About = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='ABOUT US' text='Provides our users with a simple, accurate and in-depth application for goal focused fitness.
We do this by helping the user calculate their body composition attributes, which includes BMR, Macros and body fat. Additional to that the user will be given their specific HRmax and the target HR ranges to insure they are getting the most out of their workout sessions.
 Presenting them with fundamental fitness knowledge such as exercise recommendations, repetition, and set ranges will ensure a productive start in accomplishing their fitness goals.
Insightfully fit also provides our users access to research backed articles about fat loss, muscle building, and sports nutrition. This is achieved by our custom designed API that curates those specific topics from several accredited sports and nutrition publications.
'/>
        <AboutCards />
        <Footer />

    </div>
  )
}

export default About
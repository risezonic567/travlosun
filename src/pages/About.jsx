import React from 'react'
import Herosection from '../components/AboutSection/Herosection'
import AboutSec from '../components/AboutSection/AboutSec'
import CoreFeatures from '../components/AboutSection/CoreFeatures'
import TourGuides from '../components/AboutSection/TourGuides'
import Testimonials from '../components/AboutSection/Testimonials'

export default function About() {
  return (
    <div>
      <Herosection/>
      <AboutSec/>
      <CoreFeatures/>
      {/* <TourGuides/> */}
      <Testimonials/>
    </div>
  )
}

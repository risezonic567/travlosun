import React from 'react'
import Herosection from '../components/AboutSection/Herosection'
import AboutSec from '../components/AboutSection/AboutSec'
import CoreFeatures from '../components/AboutSection/CoreFeatures'
import TourGuides from '../components/AboutSection/TourGuides'
import Testimonials from '../components/AboutSection/Testimonials'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Travel O Sun | affordable travel agency in india</title>
        <meta name="description" content=" Travel O Sun is India’s affordable travel agency for flights, hotels, and customized holiday packages. We make every journey simple, safe, and unforgettable." />
        <meta name="keywords" content="affordable travel agency in india" />
        <link rel="canonical" href="https://travelosun.com/about-us" />
      </Helmet>
      <Herosection />
      <AboutSec />
      <CoreFeatures />
      {/* <TourGuides/> */}
      <Testimonials />
    </div>
  )
}

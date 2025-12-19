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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Travelosun",
              "image": "https://travelosun.com/assets/Travel%20o%20sun%20logo%20png-0728f093.png",
              "@id": "https://travelosun.com/#travelagency",
              "url": "https://travelosun.com/about-us",
              "telephone": "+91-9797941414",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shiksha Bharati Road, Ramphal Chowk Sector 7, Dwarka",
                "addressLocality": "New Delhi",
                "postalCode": "110045",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5850451,
                "longitude": 77.06777869999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/travelosunholidays/",
                "https://www.instagram.com/travelosun_holidays/?hl=en",
                "https://www.youtube.com/@Travelosun-holidays",
                "https://www.linkedin.com/company/travelosun-holidays/",
                "https://in.pinterest.com/Travelosunholidays/"
              ]
            }
          `}
        </script>
      </Helmet>
      <Herosection />
      <AboutSec />
      <CoreFeatures />
      {/* <TourGuides/> */}
      <Testimonials />
    </div>
  )
}

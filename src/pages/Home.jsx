import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import Homeslider from '../components/Sliders/Homeslider'
import Feedback from '../components/home/Feedback'
import TopDestination from '../components/home/TopDestination'
import GettoKnow from '../components/home/GettoKnow'
import TopDeal from '../components/home/TopDeal'
import TourPackages from '../components/home/TourPackages'
import VideoSection from "../components/VideoSection"
import SpecialOffers from '../components/home/SpecialOffers'
import BlogCard from '../components/BlogCard'
import TripSlider from '../components/home/TripSlider'
import TripSliderReverse from '../components/home/TripSliderReverse'

export default function Home() {
  useEffect(() => {


    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Herosection />
      {/* <Homeslider /> */}
      <TripSliderReverse />
      <section  >
        <div className='flex w-full justify-center '>
          <img className='max-w-7xl mx-auto ' src="https://static.justwravel.com/images/cgnfe1hd/production/4cf53ceaccd90f62819475ec38efd735167c4cc9-1920x678.webp?fm=webp" alt="" />
        </div> </section>
      <TripSlider />
      <TourPackages />

      <Feedback />
      <TopDestination />
      <GettoKnow />

      <TopDeal />
      <VideoSection />
      {/* <SpecialOffers /> */}
      <BlogCard />

    </div>
  )
}

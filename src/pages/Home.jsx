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
import BlogCard from '../components/BlogCardHome'
import TripSlider from '../components/home/TripSlider'
import TripSliderReverse from '../components/home/TripSliderReverse'
import BlogCardHome from '../components/BlogCardHome'
import TopDestinationSlider from '../components/home/TopDestinationSlider'
import { Helmet } from 'react-helmet'

export default function Home() {
  useEffect(() => {


    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>Best Domestic Holiday Packages in India | Travel O Sun</title>
        <meta name="description" content="Explore the best domestic holiday packages in India with Travel O Sun. Discover customized family tours, honeymoon trips, and budget-friendly travel deals for every destination." />
        <meta name="keywords" content="domestic holiday packages in India" />
        <link rel="canonical" href="https://travelosun.com/" />

      </Helmet>
      <Herosection />
      <Homeslider />
      {/* <TripSliderReverse />
      <section className='2xl:max-w-full lg:max-w-6xl p-2 mx-auto overflow-hidden'  >
        <div className='flex w-full p-5 justify-center rounded-xl '>
          <img  className='rounded-xl' src="https://static.justwravel.com/images/cgnfe1hd/production/4cf53ceaccd90f62819475ec38efd735167c4cc9-1920x678.webp?fm=webp" alt="" />
        </div> </section>

      <TripSlider /> */}
      {/* <TourPackages /> */}
      {/* <section className='2xl:max-w-full lg:max-w-6xl p-2  mx-auto overflow-hidden'  >
        <div className='flex w-full p-5 justify-center rounded-xl '>
          <img  className='rounded-xl' src="https://static.justwravel.com/images/cgnfe1hd/production/6148e201ef2c23c4163da2c73b0af32afba36ecb-1920x678.webp?fm=webp" alt="" />
        </div> </section> */}
      <Feedback />
      <TopDestination />
      {/* <TopDestinationSlider/> */}
      {/* <section className='2xl:max-w-full lg:max-w-6xl p-2  mx-auto overflow-hidden'  >
        <div className='flex w-full p-5 justify-center rounded-xl '>
          <img  className='rounded-xl' src="https://static.justwravel.com/images/cgnfe1hd/production/52ee9879fbee34a3009be9d4f9e1fdce1e24a83e-1920x678.webp?fm=webp" alt="" />
        </div> </section> */}
      <GettoKnow />

      <TopDeal />
      <VideoSection />
      {/* <SpecialOffers /> */}
      <BlogCardHome />
    </div>
  )
}

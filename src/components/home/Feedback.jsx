import React from 'react'
import { FaCompass, FaFlag } from 'react-icons/fa'
import { FaLocationPin, FaPersonRays } from 'react-icons/fa6'

export default function Feedback() {
    const steps = [
        {
            id: 1,
            title: 'Tell Us What You Want',
            desc: 'Share your interests and budget so we can tailor suggestions just for you.',
            icon: <FaFlag aria-hidden="true" />
        },
        {
            id: 2,
            title: 'Share Your Travel Locations',
            desc: 'Browse routes, destinations and suggested itineraries with maps and tips.',
            icon: <span role="img" aria-hidden="true"> <FaLocationPin /> </span>
        },
        {
            id: 3,
            title: 'Share Your Travel Preference',
            desc: 'Confirm bookings, get digital tickets and real-time travel updates.',
            icon: <span role="img" aria-hidden="true"><FaPersonRays /> </span>
        },
        {
            id: 4,
            title: 'We are 100% Trusted Tour Agency',
            desc: 'Confirm bookings, get digital tickets and real-time travel updates.',
            icon: <span role="img" aria-hidden="true"><FaCompass /> </span>
        }
    ]
    return (
        <>
            <section className='relative py-16'>
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat ' style={{
                    backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape4.png')"
                }} ></div>
                {/* #### */}
                <div className='relative flex-col justify-between space-y-4 text-center my-16 max-w-3xl mx-auto font-serif'>
                    <h3 className=' text-Lightcolor text-2xl font-serif font-semibold '>3 Step of The Perfect Tour</h3>
                    <h2 className='text-5xl font-serif  font-semibold text-primary ' > <span className='text-gray-800' >Discover India’s</span>  Top Holiday Destinations
                    </h2>
                    <p className='sm:text-sm text-xl' >Welcome to Travel O Sun, India’s trustworthy domestic travel agency, committed to providing breathtaking journeys. Whether you want a relaxing family holiday, a romantic honeymoon, or an unplanned trip, our holiday packages in India can be designed for every dream and budget for an unforgettable journey. We are experts in domestic flights, tour packages, and hotel bookings so that your trip runs smoothly from beginning to end.
                    </p>
                </div>
                {/* ##### */}

                {/* steps */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap justify-evenly gap-6">
                        {steps.map((step) => (
                            <article
                                key={step.id}
                                className="w-64 bg-white hover:bg-primary hover:text-white transition-all duration-200   rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1  focus:outline-none focus:ring-2 focus:ring-primary text-center"
                                tabIndex={0}
                                aria-labelledby={`step-title-${step.id}`}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary text-white mx-auto flex items-center justify-center mb-4 text-xl">
                                    {step.icon}
                                </div>
                                <h4 id={`step-title-${step.id}`} className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{step.desc}</p>

                            </article>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

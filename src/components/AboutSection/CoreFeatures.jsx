import React from 'react'
import { FaCompass, FaFlag } from 'react-icons/fa'
import { FaLocationPin, FaPersonRays } from 'react-icons/fa6'

export default function CoreFeatures() {
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
            icon: <span aria-hidden="true"><FaLocationPin /></span>
        },
        {
            id: 3,
            title: 'Share Your Travel Preference',
            desc: 'Confirm bookings, get digital tickets and real-time travel updates.',
            icon: <span aria-hidden="true"><FaPersonRays /></span>
        },
        {
            id: 4,
            title: 'We are 100% Trusted Tour Agency',
            desc: 'Confirm bookings, get digital tickets and real-time travel updates.',
            icon: <span aria-hidden="true"><FaCompass /></span>
        }
    ]

    return (
        <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="relative text-center my-12 max-w-3xl mx-auto font-serif space-y-4">
                <h3 className="text-Lightcolor text-lg sm:text-xl font-semibold">Core Features</h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary">
                    <span className="text-gray-800">Plan, Explore</span> & Travel with Ease

                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                    From budget-friendly domestic flights to tailor-made India tour packages, Travel O Sun takes care of every detail so you can enjoy a stress-free and unforgettable journey.
                </p>
            </div>

            {/* responsive grid of steps */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {steps.map((step) => (
                        <article
                            key={step.id}
                            className="w-full bg-white hover:bg-primary hover:text-white transition-all duration-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary text-start border-2"
                            tabIndex={0}
                            aria-labelledby={`step-title-${step.id}`}
                        >
                            <div className="inline-flex items-center justify-center mb-4 rounded-full bg-primary text-white
                                            w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-xl sm:text-2xl md:text-3xl">
                                {step.icon}
                            </div>

                            <h4 id={`step-title-${step.id}`} className="font-semibold text-base sm:text-lg md:text-xl mb-2 text-gray-800 dark:text-gray-100">
                                {step.title}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-0">
                                {step.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function TopDestination() {
    return (
        <>
            {/* https://postimg.cc/gallery/9w94h41 */}
            <section className="sm:py-16 p-4">
                <div className="relative text-center my-16 max-w-6xl mx-auto font-serif space-y-4">
                    <h3 className="text-Lightcolor text-2xl font-semibold">Top Destinations</h3>
                    <h2 className="sm:text-5xl text-3xl font-semibold text-primary">
                        <span className="text-gray-800">Explore</span> Top Holiday Destinations
                    </h2>
                    <p className="sm:text-normal text-lg">
                        Explore the best holiday destinations of India with ours custom domestic tour packages. We offer some of the very best family holiday packages as well as honeymoon destinations in India's most loved travel spots, like the golden beaches of Goa, misty hills of Manali, or peaceful backwaters of Kerala—where your heart wants. Travel O Sun's exclusivity would let you travel to your perfect holiday destination as comfortably as or more affordably than ever!  </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: large hero image */}
                        <div className=" relative sm:h-[540px] lg:w-1/3 w-full rounded-lg overflow-hidden shadow-md">
                            <img
                                className="w-full h-64 lg:h-full object-cover"
                                src="https://i.postimg.cc/6qcf2yHq/Kerela.jpg"
                                alt="Los Angeles skyline"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <h4 className="text-white text-lg font-semibold">Kerela</h4>
                            </div>
                        </div>

                        {/* Right: grid of destination cards */}
                        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/8kmHn0TL/Andman.jpg"
                                    alt="New York"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Andman</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/d36jkLWt/ladakh.jpg"
                                    alt="Paris"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Ladakh</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/L5D3Yny4/MANALI.jpg"
                                    alt="Tokyo"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Manali</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/j2c4wL80/SPITI-VALLEY.jpg"
                                    alt="Sydney"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Spiti Valley</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to="/packages">
                        <button className="w-full mt-7 bg-primary text-white shadow px-4 py-2" >
                            View All</button></Link></div>
            </section>
        </>
    )
}

import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function TopDeal() {
    return (
        <>
            <section className="relative py-16">
                <div className=' absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape2.png')" }}  ></div>
                <div className="relative text-center my-16 max-w-3xl mx-auto font-serif space-y-4">
                    <h3 className="text-Lightcolor text-2xl font-semibold">Top Deals</h3>
                    <h2 className="text-5xl font-semibold text-gray-700">
                        <span className="text-primary">The Last</span> The Last Minute Deals
                    </h2>
                    <p className="text-xl">

                        Enjoy unbeatable last-minute discounts on family vacations, honeymoon trips, and weekend getaways—book now before the offers fly away!

                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: large hero image */}
                        <div className=' relative lg:w-1/3 gap-y-6 grid grid-cols-1' >
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://i.postimg.cc/02x2y0Xt/spiti-velly-2-psd.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">
                                        Spiti Valley  <br />
                                        Summer Expedition
                                        <br />


                                        6 Days Tours</h4>

                                </div>
                            </div>
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://i.postimg.cc/SsPwBk21/Ladakh-Image-2.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">   Leh Nubra Turtuk
                                        <br />
                                        Pangong Expedition
                                        <br />



                                        7 Days days</h4>
                                </div>
                            </div>
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://i.postimg.cc/vmTQwyLN/Sikkim-Image-2-1.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">


                                        Sikkim  <br />Himalayan Adventure

                                        <br />

                                        8 Days Tours
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* Right: grid of destination cards */}
                        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/zXhb4CX8/kedarnath-badrinath-and-tongnath-1.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        {/* <h2 className='text-primary' >
                                            Kedarnath Badrinath Tungnath Yatra</h2> */}
                                        <h3 className='text-xl font-semibold text-gray-700'>
                                            Kedarnath Badrinath Tungnath Yatra</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>A divine journey covering three of the holiest temples in Uttarakhand — Kedarnath, Badrinath, and Tungnath. Experience peace, devotion, and breathtaking mountain beauty on this Himalayan Yatra.</span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >22,999</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/QCGS1pX0/Ladakh-Bike-Image-4.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div> ssh root@72.60.223.24
                                        {/* <h2 className='text-primary' >Title</h2> */}
                                        <h3 className='text-xl font-semibold text-gray-700'>Leh to Leh with Turtuk Village</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>An unforgettable 8-day expedition through Ladakh’s stunning mountain passes, monasteries, and the unique Balti culture of Turtuk. Visit Nubra Valley, Pangong Lake, and return to Leh with lifelong memories. </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >27,999</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/bNqsrsxj/Rishikesh-Image-1.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        {/* <h2 className='text-primary' >Title</h2> */}
                                        <h3 className='text-xl font-semibold text-gray-700'>
                                            Chopta Auli Rishikesh Journey</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Witness the divine charm of Rishikesh, the skiing slopes of Auli, and the green meadows of Chopta. This tour combines adventure, relaxation, and spirituality for a balanced Himalayan retreat.</span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >10,999</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/bw8HzyJ2/andaman-3.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        {/* <h2 className='text-primary' >Title</h2> */}
                                        <h3 className='text-xl font-semibold text-gray-700'>
                                            Andaman Island Explorer</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Discover the Andaman & Nicobar Islands — from Radhanagar Beach to Havelock’s coral reefs. Enjoy beachside resorts, island hopping, and unforgettable sunsets over the Indian Ocean. </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >18,000</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

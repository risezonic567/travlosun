import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsCurrencyDollar, BsCurrencyRupee } from "react-icons/bs";
export default function GettoKnow() {
    return (
        <>

            <section className='relative sm:h-[700px] py-16 px-6 lg:px-24'>
                <div className=' absolute inset-0 opacity-35 bg-cover bg-center bg-no-repeat ' style={{
                    backgroundImage: "url('https://i.postimg.cc/nVGkwPnG/Background-image-1.jpg')"
                }} >

                </div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative">

                        <img
                            src="https://i.postimg.cc/XNtLcRSM/Explore-all-our-tour.png"
                            alt="Traveler"
                            className="relative w-full h-auto "
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-teal-600 font-medium mb-2">Get To Know Us</p>
                        <h2 className="text-4xl font-bold mb-4">
                            Explore Stunning Destinations Across the Globe with Travel O Sun

                        </h2>
                        <p className="text-gray-600 mb-4">
                            Discover the world in a way you have never imagined with Travel O Sun's international travel packages that are designed around comfort, adventure, and budget. Whether it is the romantic appeal of Paris, tropical tranquility in Bali, or the sparkling excitement of Dubai,
                        </p>
                        <p className="text-gray-600 mb-6">
                          we provide you with the best international holiday packages at the most affordable prices. Let us make your world travel dreams come true and turn them into memories that last a lifetime—we plan it perfectly every time!

                        </p>

                        {/* Features */}
                        <div className="flex gap-8 mb-8 text-gray-700">
                            <div className="flex items-center gap-2">
                                <MdOutlineLocationOn className="text-teal-600 text-xl" />
                                <span>Tour Guide</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsCurrencyRupee className="text-teal-600 text-xl" />
                                <span>Friendly Price</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineFolderOpen className="text-teal-600 text-xl" />
                                <span>Reliable Tour Package</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="relative bg-white shadow-lg rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600">7</h3>
                                <p className="text-gray-500 text-sm">Years Experiences</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600">37</h3>
                                <p className="text-gray-500 text-sm">Tour Packages</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600">59</h3>
                                <p className="text-gray-500 text-sm">Happy Customers</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600">22</h3>
                                <p className="text-gray-500 text-sm">Award Winning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import video from "../video/TravelOsun Website Video.mp4"
export default function PremiumVideoSection() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="flex justify-center" >
            <section className="relative sm:h-[500px] w-[1600px] flex items-center justify-center "
            >
                <div className='absolute -bottom-0 bg-black/50  left-0   ' >
                    <img src="https://htmldesigntemplates.com/html/travelin/images/shape8.png" alt="" />
                </div>
                {/* Background Image with Overlay */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-center opacity-35"
                    style={{
                        backgroundImage:
                            "url('https://htmldesigntemplates.com/html/travelin/images/section-bg1.png')",
                    }}
                >

                </motion.div>


                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-primary text-xl font-serif font-semibold mb-2"
                    >
                        Love when you going
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-Lightcolor text-5xl font-serif font-semibold mb-3"
                    >
                        <span className="text-gray-800" >  Book Affordable Domestic </span>  Flights & Tour Packages in India

                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gray-500 text-normal font-serif  mb-12"
                    >
                        Explore India’s top destinations with Travel O Sun—from romantic honeymoon packages to family holidays and weekend getaways. Enjoy cheap domestic flight tickets and custom-made tour packages at the best prices. </motion.p>

                    {/* Play Button */}
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="bg-primary text-white p-8 rounded-full shadow-2xl transition-all flex items-center justify-center text-4xl"
                    >
                        <FaPlay />
                    </motion.button>
                </div>

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <button
                            type="button"
                            aria-label="Close video modal"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-0 right-0 text-white text-4xl p-3 hover:text-red-500 "
                        >
                            &times;
                        </button>
                        <div className="relative w-full max-w-4xl mx-4">

                            <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                                <video
                                    className="w-full h-full"
                                    src={video}
                                    title="travel Video"
                                    autoPlay
                                    loop
                                    muted
                                    allowFullScreen
                                ></video>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

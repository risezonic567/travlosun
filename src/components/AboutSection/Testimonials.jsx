import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Jared Erondu",
        role: "Supervisor",
        image: "https://i.pravatar.cc/100?img=5",
        review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
        name: "Emily Carter",
        role: "Traveler",
        image: "https://i.pravatar.cc/100?img=6",
        review:
            "Traveling was made easy and smooth. Excellent support and user experience throughout my journey!",
    },
    {
        name: "Michael Ross",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=7",
        review:
            "Great service! Everything was seamless from booking to check-in. Highly recommend!",
    },
];

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* subtle world map background */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/world-map.png')] bg-center bg-contain bg-no-repeat"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <p className="text-yellow-500 font-semibold mb-2">Our Testimonials</p>
                <h2 className="text-4xl font-bold text-gray-900">
                    Trusted by Thousands  <span className="text-teal-600">of Travelers Across India</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto mt-3">

                    Our guests love the comfort, affordability, and personalized service that make every journey with Travel O Sun unforgettable.
                </p>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* LEFT SIDE IMAGE */}
                    <div className="relative flex justify-center items-center">
                        <div className="bg-yellow-400 rounded-full w-64 h-64 md:w-96 md:h-96 flex justify-center items-center overflow-visible">
                            <img
                                src="https://htmldesigntemplates.com/html/travelin/images/travel2.png"
                                alt="Traveler"
                                className="w-full object-contain z-10"
                            />
                        </div>
                        <div className="absolute top-10 right-10 bg-teal-600 p-4 rounded-full text-white text-3xl">
                            <FaQuoteLeft />
                        </div>
                    </div>

                    {/* RIGHT SIDE SLIDER */}
                    <div className="w-full md:w-1/2 text-left">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            className="pb-12"
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-6 rounded-lg bg-white">
                                        <div className="flex items-center mb-4 gap-4">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="text-teal-600 font-semibold text-lg">{t.name}</h3>
                                                <p className="text-gray-500 text-sm">{t.role}</p>
                                            </div>
                                        </div>
                                        <p className="italic text-gray-600 leading-relaxed">
                                            <FaQuoteLeft className="inline-block text-teal-500 mr-2" />
                                            {t.review}
                                            <FaQuoteRight className="inline-block text-teal-500 ml-2" />
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* CUSTOM NAVIGATION BUTTONS */}
                        <div className="flex justify-start items-center gap-4 mt-6 ps-8">
                            <button
                                ref={prevRef}
                                className="bg-teal-600 text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-teal-700 transition"
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                ref={nextRef}
                                className="bg-teal-600 text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-teal-700 transition"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

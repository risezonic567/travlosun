import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import {
    FaClock,
    FaMapMarkerAlt,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

export default function TripSliderReverse() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const trips = [
        {
            title: "Meghalaya Kaziranga Backpacking Trip – Forests, Falls & Safari",
            days: "6N/7D",
            duration: "7 Days",
            fromTo: "Guwahati to Guwahati",
            date: "Nov – May",
            oldPrice: "27,500",
            newPrice: "24,750",
            image:
                "https://static.justwravel.com/images/cgnfe1hd/production/7bc3a7ecb08b65d70322015b26adfe71475f7d00-1708x855.webp?fm=webp",
        },
        {
            title: "Meghalaya Kaziranga Backpacking Trip – Forests, Falls & Safari",
            days: "6N/7D",
            duration: "7 Days",
            fromTo: "Guwahati to Guwahati",
            date: "Nov – May",
            oldPrice: "27,500",
            newPrice: "24,750",
            image:
                "https://static.justwravel.com/images/cgnfe1hd/production/7bc3a7ecb08b65d70322015b26adfe71475f7d00-1708x855.webp?fm=webp",
        },
        {
            title: "Meghalaya Kaziranga Backpacking Trip – Forests, Falls & Safari",
            days: "6N/7D",
            duration: "7 Days",
            fromTo: "Guwahati to Guwahati",
            date: "Nov – May",
            oldPrice: "27,500",
            newPrice: "24,750",
            image:
                "https://static.justwravel.com/images/cgnfe1hd/production/7bc3a7ecb08b65d70322015b26adfe71475f7d00-1708x855.webp?fm=webp",
        },
        {
            title: "Rajasthan Backpacking to Jaipur Udaipur Jodhpur Jaisalmer",
            days: "7N/8D",
            duration: "8 Days",
            fromTo: "Jaipur to Jaipur",
            date: "Nov – Mar",
            oldPrice: "28,500",
            newPrice: "25,650",
            image:
                "https://static.justwravel.com/images/cgnfe1hd/production/7bc3a7ecb08b65d70322015b26adfe71475f7d00-1708x855.webp?fm=webp",
        },

    ];

    return (
        <div className="relative 2xl:max-w-full lg:max-w-6xl mx-auto px-2 py-12">
            {/* Custom Navigation Buttons */}
            <button
                ref={prevRef}
                className="
        absolute left-3 top-1/2 -translate-y-1/2 z-20
        bg-white/20 backdrop-blur-xl
        w-10 h-10 flex items-center justify-center
        rounded-full border border-white/40
        shadow-md shadow-black/30
        hover:bg-white/40 hover:scale-105
        transition-all duration-300
    "
            >
                <FaChevronLeft className="text-white text-lg drop-shadow-md" />
            </button>

            <button
                ref={nextRef}
                className="
        absolute right-3 top-1/2 -translate-y-1/2 z-20
        bg-white/20 backdrop-blur-xl
        w-10 h-10 flex items-center justify-center
        rounded-full border border-white/40
        shadow-md shadow-black/30
        hover:bg-white/40 hover:scale-105
        transition-all duration-300
    "
            >
                <FaChevronRight className="text-white text-lg drop-shadow-md" />
            </button>


            <Swiper
                slidesPerView={1.1}
                spaceBetween={20}
                loop={true}
                onInit={(swiper) => {
                    // attach custom navigation elements after Swiper init
                    // (this pattern prevents timing issues with refs)
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 2.6 },
                }}

                className="pb-10"
            >
                {trips.map((trip, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="relative h-52  rounded-3xl overflow-hidden shadow-xl bg-cover bg-center group transition-all duration-300"
                            style={{
                                backgroundImage: `url(${trip.image})`,
                            }}
                        >
                            {/* Dark Bottom Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 w-full p-2 text-white">
                                <h2 className="text-lg font-bold leading-tight group-hover:text-yellow-300 transition">
                                    {trip.title} ({trip.days})
                                </h2>

                                {/* From – To */}
                                <div className="flex items-center gap-2 text-sm mt-3 opacity-90">
                                    <FaMapMarkerAlt className="text-yellow-300" />
                                    <span>{trip.fromTo}</span>
                                </div>

                                {/* Date + Duration */}
                                <div className="flex items-center justify-between mt-2 text-sm opacity-90">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-yellow-300" />
                                        {trip.date}
                                    </div>
                                    <div className="font-semibold">{trip.duration}</div>
                                </div>

                                {/* Price */}
                                <div className="mt-2">
                                    <span className="line-through mr-2 opacity-75">
                                        ₹ {trip.oldPrice}
                                    </span>
                                    <span className="text-xl font-bold text-yellow-300">
                                        ₹ {trip.newPrice}
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="mt-1 bg-white text-primary px-5 py-2 rounded-full font-bold shadow-lg group-hover:bg-yellow-300 group-hover:text-black transition-all">
                                    More Details
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

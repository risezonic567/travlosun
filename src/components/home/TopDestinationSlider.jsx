import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import data from "../../data/destinations.json";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function TopDestinationSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const packages =
        data[0]?.state?.flatMap((state) => state.packages.map((p) => ({
            ...p,
            stateName: state.state,
            country: data[0].country,
        }))) || [];
    return (
        <section className="py-16 px-6 lg:px-20 2xl:max-w-full lg:mx-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center mb-8 gap-6  ">
                <div className="max-w-xl text-center">
                    <p className="text-yellow-500 font-semibold">Top Pick</p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                        Best <span className="text-teal-600">Top Destination</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Find the Perfect Escape
                    </p>
                </div>


            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={28}
                loop={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1500: { slidesPerView: 4 },
                }}
                onInit={(swiper) => {
                    // attach custom navigation elements after Swiper init
                    // (this pattern prevents timing issues with refs)
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                style={{ paddingBottom: 24 }}
            >
                {packages.map((pkg) => (
                    <SwiperSlide key={pkg.id}>
                        <Link to={`/packages/${pkg.slug}`}>

                            <div className="max-w-lg mx-auto rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform group">

                                {/* --- Image and Overlay Container --- */}
                                <div className="relative h-96">

                                    {/* Background Image with Enhanced Hover Effect */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        style={{
                                            backgroundImage: "url(https://static.justwravel.com/images/cgnfe1hd/production/cd9d2321e0a77caa5a0d72ed784bb2ec12aaff3a-600x750.webp?fm=webp)",
                                            // Smoother initial dark overlay
                                            filter: "brightness(99%)",
                                        }}
                                    >
                                        {/* Permanent dark overlay */}
                                        <div className="absolute inset-0 bg-gray-900 opacity-45"></div>
                                    </div>

                                    {/* --- Top Right Badges --- */}
                                    <div className="absolute top-0 left-0 p-3 flex flex-col items-end space-y-2">

                                        {/* Upto OFF Badge (Slightly larger OFF text) */}
                                        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                                            40+ <span className="text-xl font-extrabold">Plus</span> packages
                                        </div>
                                    </div>


                                </div>
                                <div className="flex justify-between p-4 font-sans uppercase font-bold text-xl text-black">
                                    <h2>Starting Price </h2>
                                    <h2>6000</h2>
                                </div>

                             
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Nav buttons container */}
            <div className="ml-auto flex gap-4 justify-center py-5">
                <button
                    ref={prevRef}
                    aria-label="Previous"
                    className="w-12 h-12 rounded-full border bg-primary text-lg shadow flex items-center justify-center hover:bg-Lightcolor text-white"
                >
                    <FaChevronLeft />
                </button>
                <button
                    ref={nextRef}
                    aria-label="Next"
                    className="w-12 h-12 rounded-full border bg-primary text-lg shadow flex items-center justify-center hover:bg-Lightcolor text-white"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

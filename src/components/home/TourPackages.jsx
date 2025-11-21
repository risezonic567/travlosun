import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import data from "../../data/destinations.json";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// const tours = [
//     {
//         id: 1,
//         country: "Greece",
//         title: "Santorini, Oia",
//         rating: 5,
//         reviews: 38,
//         duration: "9 Days Tours",
//         price: 180,
//         image:
//             "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60",
//     },
//     {
//         id: 2,
//         country: "Maldives",
//         title: "Hurawalhi Island",
//         rating: 5,
//         reviews: 18,
//         duration: "9 Days Tours",
//         price: 260,
//         image:
//             "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60",
//     },
//     {
//         id: 3,
//         country: "Greece",
//         title: "Santorini, Oia",
//         rating: 5,
//         reviews: 38,
//         duration: "5 Days Tours",
//         price: 180,
//         image:
//             "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
//     },
//     {
//         id: 4,
//         country: "Greece",
//         title: "Santorini, Oia",
//         rating: 5,
//         reviews: 38,
//         duration: "5 Days Tours",
//         price: 180,
//         image:
//             "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
//     },
//     {
//         id: 5,
//         country: "Greece",
//         title: "Santorini, Oia",
//         rating: 5,
//         reviews: 38,
//         duration: "5 Days Tours",
//         price: 180,
//         image:
//             "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
//     },
//     {
//         id: 6,
//         country: "Greece",
//         title: "Santorini, Oia",
//         rating: 5,
//         reviews: 38,
//         duration: "5 Days Tours",
//         price: 180,
//         image:
//             "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
//     },
//     // add more items to test sliding
// ];

export default function TourPackages() {
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6  ">
                <div className="max-w-xl">
                    <p className="text-yellow-500 font-semibold">Top Pick</p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                        Best <span className="text-teal-600">Tour Packages</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore the best domestic tour packages in India—from beaches to mountains—designed for comfort, adventure, and unforgettable memories.r adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                {/* Nav buttons container */}
                <div className="ml-auto flex gap-3">
                    <button
                        ref={prevRef}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-lg border bg-white shadow flex items-center justify-center hover:bg-gray-50"
                    >
                        ‹
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Next"
                        className="w-10 h-10 rounded-lg border bg-white shadow flex items-center justify-center hover:bg-gray-50"
                    >
                        ›
                    </button>
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
                    1500: { slidesPerView:4 },
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
                            {/* <p className="text-teal-700 font-bold text-lg">
                                        ${pkg.price.toFixed(2)}
                                        <span className="text-gray-400 font-normal text-sm ml-2">
                                            | Per person
                                        </span>
                                    </p> */}
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">

                                <div className="relative">
                                    <img
                                        src={pkg.img}
                                        alt={pkg.title}
                                        className="w-full h-56 object-cover"
                                    />

                                    <div className="absolute bottom-3 left-4 bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 shadow">
                                        <CalendarDays className="w-4 h-4" /> {pkg.days} {pkg.nights}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-teal-600 font-medium">{pkg.country}</p>
                                    <h3 className="font-serif text-2xl text-gray-800 mt-1 line-clamp-1">
                                        {pkg.title}
                                    </h3>

                                    <div className="flex items-center mt-2">
                                        <div className="text-yellow-400">
                                            {"★".repeat(pkg.ratingStar)}
                                        </div>
                                        <span className="text-gray-400 ml-3">({pkg.totalReview})</span>
                                    </div>

                                    <p className="text-gray-500 text-sm mt-3 line-clamp-4">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                      
                                        <p className="text-teal-700 font-bold text-lg">
                                            {pkg.price}
                                            <span className="text-gray-400 font-normal text-sm ml-2">
                                              
                                            </span>
                                        </p>

                                    
                                        <div className="w-12 h-1 bg-teal-600 rounded" />
                                    </div>
                                </div>
                            </article>
                            {/* <div className="max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform group">

                            
                                <div className="relative h-96">

                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        style={{
                                            backgroundImage: "url(https://static.justwravel.com/images/cgnfe1hd/production/dcc3a6c1df882482de439cdf34dfc98992da488d-663x875.webp?fm=webp)",
                                        
                                            filter: "brightness(85%)",
                                        }}
                                    >
                                    
                                        <div className="absolute inset-0 bg-gray-900 opacity-45"></div>
                                    </div>

                    
                                    <div className="absolute top-0 right-0 p-3 flex flex-col items-end space-y-2">

                                  
                                        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                                            Upto <span className="text-xl font-extrabold">800</span> OFF
                                        </div>

                                   
                                        <div className="bg-white text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                            Easy to Moderate
                                        </div>
                                    </div>

                                
                                    <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">

                                        
                                        <h1
                                            className="text-sm font-black mb-2 leading-tight text-start"
                                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                        >
                                            {pkg.title}
                                        </h1>

                                     
                                        <div className="inline-flex justify-start text-start items-center bg-black bg-opacity-40 text-sm px-3 py-1 rounded-full w-fit mb-3 ">
                                            <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-semibold text-xs" >{pkg.locationName}</span>
                                        </div>

                                    
                                        <hr className="border-gray-300 border-opacity-70 mb-3" />

                                    
                                        <div className="flex items-end justify-between">

                                          
                                            <div className="flex flex-col">
                                       
                                                <div className="flex items-baseline space-x-2 mb-2">
                                                    <span className="text-sm line-through opacity-70">
                                                        50000
                                                    </span>

                                                    <span className="text-3xl font-extrabold">
                                                        {pkg.price}
                                                    </span>
                                                </div>

                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.887l6.561-.954L10 0l2.95 5.933 6.561.954-4.755 4.568 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                    <span className="ml-2 text-sm text-white font-medium">
                                                        (10k+)
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end space-y-1 text-sm opacity-90">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="font-bold">3N/4D</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                                                    </svg>
                                                    <span className="font-bold">{pkg.days}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaCcDiscover, FaYoutube, FaPinterest } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "../images/logo/Travel o sun logo png.png"
import "../css/footer.css"; // optional custom styles if you want to mimic original look

const instaImages = [
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
];

const Footer = () => {
    return (
        <footer
            className="pt-20 pb-4 relative bg-cover bg-center bg-[#17233e] p-10 "
            style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/background_pattern.png')" }}
        >
            {/* Falling stars styles + elements */}
            <style>{`
                /* falling stars */
                .stars-wrapper { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
                .falling-star {
                    position: absolute;
                    top: -8vh;
                    border-radius: 50%;
                    padding:10px;
                    background: radial-gradient(circle at 30% 30%, #fff, #fcc802, #fff 60%);
                    box-shadow: 0 0 8px 3px rgba(255,255,255,0.85);
                    transform: translateY(0) rotate(0);
                    opacity: 0.9;
                    /* base animation props — duration/delay are set inline per-star */
                    animation-name: fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-fill-mode: forwards;
                }
                @keyframes fall {
                    0%   { transform: translateY(-10vh) rotate(0deg) scale(1); opacity: 0.9; }
                    60%  { opacity: 1; }
                    100% { transform: translateY(120vh) rotate(360deg) scale(0.9); opacity: 0; }
                }
            `}</style>

            <div className="stars-wrapper">
                {Array.from({ length: 14 }).map((_, i) => (
                    <div
                        key={i}
                        className="falling-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 6}px`,
                            height: `${2 + Math.random() * 6}px`,
                            animationDuration: `${4 + Math.random() * 8}s`,
                            animationDelay: `${-Math.random() * 8}s`,
                            opacity: 0.8 + Math.random() * 0.4,
                            transform: `translateY(0) rotate(${Math.floor(Math.random() * 360)}deg)`,
                        }}
                    />
                ))}
            </div>

            <div className='absolute -top-4 left-0   ' >
                <img src="https://htmldesigntemplates.com/html/travelin/images/shape8.png" alt="" />
            </div>
            <div
                className="absolute top-0 left-0 w-full h-20 bg-no-repeat bg-top"
                style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape8.png')" }}
            ></div>
            <div className="max-w-6xl mx-auto">
                {/* Instagram Section */}
                <div className="pb-10 relative z-10 mt-8">
                    <div className="container mx-auto mt-6">
                        <div className="text-center mb-6">
                            <h5 className="inline-flex items-center justify-center bg-white/10 px-4 py-2 rounded-lg text-white text-lg font-semibold">
                                <FaInstagram className="mr-2 text-primary" /> Follow on Instagram
                            </h5>
                        </div>

                        {/* <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={2}
                            slidesPerView={8}

                            loop
                            autoplay={{ delay: 2000 }}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                            className="insta-slider"
                        >
                            {instaImages.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="rounded overflow-hidden hover:opacity-90 transition">
                                        <a href="gallery.html">
                                            <img src={img} alt="Instagram" className="w-32 h-32 object-cover" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </div>
                </div>

                {/* Footer Content */}
                <div className="footer-upper pb-4 text-white relative z-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* About */}
                        <div>
                            <img src={logo} alt="Logo" className="mb-3 w-36" />
                            <p className="mb-3 text-gray-200">
                                Explore the best holiday destinations of India with our custom domestic tour packages. We offer some of the very best family holiday packages as well as honeymoon destinations .
                            </p>
                            <ul className="text-sm space-y-1">
                                <li><strong>Number:</strong> 9797941414</li>
                                <li><strong>Location:</strong> B17 third floor gale no 4 Esanjay nagar rohini sector 2110085</li>
                                <li><strong>Email:</strong> info@travelosun.com</li>
                                <li><strong>Website:</strong> www.Travelosun.com</li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-1">
                                {/* {["Home","About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Customer Service", "Return Policy"].map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-gray-300">{item}</a>
                                    </li>
                                ))} */}
                                <li>
                                    <a href="/" className="hover:text-gray-300">Home</a>
                                </li>
                                <li>
                                    <a href="/about-us" className="hover:text-gray-300">About</a>
                                </li>
                                <li>
                                    <a href="/pakages" className="hover:text-gray-300">Holiday</a>
                                </li>
                                <li>
                                    <a href="/contact-us" className="hover:text-gray-300">Contact</a>
                                </li>
                                <li>
                                    <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/cancellation-refund-policy" className="hover:text-gray-300">Return Policy</a>
                                </li>
                                <li>
                                    <a href="/terms-conditions" className="hover:text-gray-300">Terms and Condition</a>
                                </li>
                               
                            </ul>
                        </div>

                        {/* Categories */}
                        {/* <div>
                            <h3 className="text-white font-semibold mb-3">Categories</h3>
                            <ul className="space-y-1">
                                {["Travel", "Destinations", "Business"].map((cat, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-gray-300">{cat}</a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Newsletter</h3>
                            <p className="mb-3 text-gray-200">
                                Join our community of over 200,000 global readers who receive emails filled with news, promotions, and more.
                            </p>
                            <form className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="p-2 rounded-l-md w-full text-gray-800 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-Lightcolor hover:bg-primary text-white px-4 py-2 rounded-r-md"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="footer-payment border-t border-gray-700 mt-6 py-4 text-white text-sm">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="flex items-center space-x-3">
                            <span>We Support:</span>
                            <FaCcMastercard className="text-3xl" />
                            <FaCcPaypal className="text-3xl" />
                            <FaCcStripe className="text-3xl" />
                            <FaCcVisa className="text-3xl" />
                            <FaCcDiscover className="text-3xl" />
                        </div>


                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright border-t border-gray-700 mt-4 pt-4">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white text-sm">
                        <p>© 2022 Travelosun. All rights reserved.</p>
                        <div className="flex space-x-3 mt-2 md:mt-0">
                            <a href="https://www.facebook.com/travelosunholidays/ "><FaFacebook className="hover:text-primary" /></a>
                            <a href="https://www.youtube.com/@Travelosun-holidays"><FaYoutube className="hover:text-primary" /></a>
                            <a href="https://in.pinterest.com/Travelosunholidays/"><FaPinterest className="hover:text-primary" /></a>
                            <a href="https://www.instagram.com/travelosun_holidays/?hl=en "><FaInstagram className="hover:text-primary" /></a>
                            <a href="https://www.linkedin.com/company/travelosun-holidays/"><FaLinkedin className="hover:text-primary" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

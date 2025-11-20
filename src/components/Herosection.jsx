import { FaPlaneDeparture, FaUmbrellaBeach, FaMapSigns, FaMountain, FaSearch } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 sm:h-screen mt-32">
            <div className=" absolute inset-0 bg-center bg-cover bg-no-repeat "
                style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/testimonial.png')" }}>

            </div>
            {/* Left Side: Text */}
            <div className=" relative md:w-1/2 space-y-5">
                <h3 className="text-teal-600 font-semibold uppercase tracking-wide">Explore The World</h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                    Discover India with <br /> Premium Domestic Tour Packages & Flight Deals
                </h1>
                <p className="text-gray-500 text-base max-w-md">
                    Experience luxury, comfort, and adventure with Travel O Sun—offering custom domestic tour packages, affordable flight tickets, and romantic honeymoon trips across India.   </p>

                {/* Search Form */}
                <form className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500">
                            <option>Destination</option>
                            <option>Paris</option>
                            <option>Tokyo</option>
                            <option>New York</option>
                        </select>

                        <input
                            type="text"
                            placeholder="dd-mm-yyyy"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500"
                        />

                        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500">
                            <option>Travel Type</option>
                            <option>Adventure</option>
                            <option>Luxury</option>
                            <option>Family</option>
                        </select>

                        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500">
                            <option>Tour Duration</option>
                            <option>3 Days</option>
                            <option>1 Week</option>
                            <option>2 Weeks</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center gap-x-2 sm:w-auto bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
                    >
                        <FaSearch /> Search Now
                    </button>
                </form>
            </div>

            {/* Right Side: Image */}
            <div className="relative md:w-1/2 mt-10 md:mt-0 sm:flex hidden justify-center">
                <div className="absolute -z-10 bg-yellow-400 w-[400px] h-[400px] rounded-full top-10 right-0"></div>

                <img
                    src="https://i.postimg.cc/RVfRPg4v/home-page-banner.png"
                    alt="Travelers"
                    className="w-[350px] md:w-[400px] lg:w-[450px] object-contain relative z-10"
                />

             
                <div className="absolute top-0 right-16 bg-teal-500 p-3 rounded-full text-white text-xl shadow-lg">
                    <FaPlaneDeparture />
                </div>
                <div className="absolute bottom-16 right-20 bg-yellow-400 p-3 rounded-full text-white text-xl shadow-lg">
                    <FaUmbrellaBeach />
                </div>
                <div className="absolute top-40 right-0 bg-teal-500 p-3 rounded-full text-white text-xl shadow-lg">
                    <FaMountain />
                </div>
                <div className="absolute bottom-10 right-0 bg-teal-500 p-3 rounded-full text-white text-xl shadow-lg">
                    <FaMapSigns />
                </div>
            </div>
        </section>
    );
}

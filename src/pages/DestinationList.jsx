import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import Herosection from "../components/Destination/Herosection";

export default function DestinationList() {
    return (
        <>
            <Herosection />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Explore Top Holiday Destinations
                </h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <Link
                            to={`/destination/${destination.slug}`} // ✅ use country slug here
                            key={destination.id}
                            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={destination.image}
                                alt={destination.country}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h2 className="text-2xl font-semibold">{destination.country}</h2>
                                <p className="text-sm opacity-90 mt-1 max-w-xs">
                                    {destination.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

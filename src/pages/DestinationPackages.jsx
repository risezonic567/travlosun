import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import Herosection from "../components/Destination/Herosection";

export default function DestinationPackages() {
    const { id } = useParams();
    const destination = destinations.find((d) => d.id === id);

    if (!destination)
        return <div className="p-12 text-center text-gray-600">Destination not found.</div>;

    return (
        <>
            <Herosection />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <Link to="/destination" className="text-teal-600 hover:underline mb-4 block">
                    ← Back to Destinations
                </Link>
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">{destination.name}</h1>
                    <p className="text-gray-600 mt-2">{destination.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destination.packages.map((pkg) => (
                        <Link
                            to={`/destination/${destination.id}/${pkg.slug}`}
                            key={pkg._id}
                            className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src={pkg.coverimg}
                                alt={pkg.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="p-5 bg-white">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition">
                                    {pkg.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {pkg.description}
                                </p>
                                <div className="mt-3 text-teal-600 font-semibold">
                                    ₹{pkg.price}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {destination.packages.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No packages available for this destination yet.
                    </p>
                )}
            </div>
        </>
    );
}

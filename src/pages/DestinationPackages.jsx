import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import Herosection from "../components/Destination/Herosection";

export default function DestinationPackages() {
    const { slug } = useParams();

    // Find the selected country by its slug
    const country = destinations.find(
        (c) => c.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!country) {
        return (
            <div className="p-12 text-center text-gray-600">
                Country not found.
            </div>
        );
    }

    return (
        <>
            <Herosection />
            <div className="max-w-6xl mx-auto px-4 py-16">
                <Link to="/destination" className="text-teal-600 hover:underline mb-4 block">
                    ← Back to Destinations
                </Link>

                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">{country.country}</h1>
                    <p className="text-gray-600 mt-2">{country.description}</p>
                </div>

                {/* Show all states under the selected country */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {country.state.map((st) => (
                        <Link
                            // 👇 route to detail page (country + state)
                            to={`/destination/${country.slug}/${st.slug}`}
                            key={st.id}
                            className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src={st.image}
                                alt={st.state}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="p-5 bg-white">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition">
                                    {st.state}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {st.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {country.state.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No destinations available for this country yet.
                    </p>
                )}
            </div>
        </>
    );
}

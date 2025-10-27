import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md relative group">
            <img
                src={destination.coverimg}
                alt={destination.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-sm font-semibold text-yellow-400">
                    {destination.locationName}
                </h4>
                <h2 className="text-2xl font-bold">{destination.title}</h2>
            </div>
            <div className="absolute bottom-4 right-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                {destination.toursCount} Tours
            </div>
            <Link
                to={`/destination/${destination.slug}`}
                className="absolute inset-0"
            ></Link>
        </div>
    );
}

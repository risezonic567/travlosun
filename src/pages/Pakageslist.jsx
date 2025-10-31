import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/destinations.json";
import Herosection from "../components/Destination/Herosection";

const PackagesList = () => {
    const packages =
        data[0]?.state?.flatMap((state) => state.packages.map((p) => ({
            ...p,
            stateName: state.state,
            country: data[0].country,
        }))) || [];
useEffect(()=>{
    window.scrollTo(0,0);
})
    return (
        <>
            <Herosection />
            <div className="min-h-screen bg-gray-50 py-10">

                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        Explore Our Packages
                    </h1>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {packages.map((pkg) => (
                            <Link
                                to={`/packages/${pkg.slug}`}
                                key={pkg._id}
                                className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
                            >
                                <img
                                    src={pkg.coverimg}
                                    alt={pkg.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                        {pkg.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-600 font-bold">
                                            ₹{pkg.price}
                                        </span>
                                        <span className="text-sm text-gray-500">{pkg.days}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackagesList;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/destinations.json";
import BookingModal from "../components/BookingModal";
import { Helmet } from "react-helmet";

const PackageDetail = () => {
    const { slug } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [mainImgLoaded, setMainImgLoaded] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Flatten all packages
    const allPackages = data[0]?.state?.flatMap((s) => s.packages) || [];
    const pkg = allPackages.find((p) => p.slug === slug);

    if (!pkg) return <p className="text-center py-10">Package not found.</p>;

    // ✅ Format price safely
    const priceNumber = parseInt(pkg.price?.replace(/,/g, ""), 10) || 0;
    const formattedPrice = priceNumber
        ? `₹${priceNumber.toLocaleString("en-IN")}`
        : "N/A";


    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-32">
            <Helmet>
                <title>{pkg.metatitle}</title>
                <meta name="description" content={pkg.metadescription} />
                <meta name="keywords" content={pkg.metakeywords} />
                <link rel="canonical" href={`https://travelosun.com/${pkg.slug}`} />
            </Helmet>
            {/* Back Button */}
            <Link to="/packages" className="text-blue-600 mb-4 inline-block">
                ← Back to Packages
            </Link>

            <div className="grid gap-8 md:grid-cols-3 items-start">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Hero / Cover */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={pkg.coverimg}
                            alt={pkg.title}
                            loading="lazy"
                            onLoad={() => setMainImgLoaded(true)}
                            className={`w-full h-72 md:h-96 object-cover transition-opacity duration-300 ${mainImgLoaded ? "opacity-100" : "opacity-0"
                                }`}
                        />
                        {!mainImgLoaded && (
                            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                                {pkg.title}
                            </h1>
                            <p className="text-sm md:text-base opacity-90">
                                {pkg.locationName || ""}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose max-w-none text-gray-700">
                        <p>{pkg.description}</p>
                    </div>

                    {/* Price Includes / Excludes */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {pkg.priceIncludes && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Price Includes</h3>
                                <ul className="space-y-2">
                                    {pkg.priceIncludes.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <svg
                                                className="w-5 h-5 text-teal-600 flex-shrink-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {pkg.departureAndReturnLocation && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Not Included</h3>
                                <ul className="space-y-2">
                                    {pkg.departureAndReturnLocation.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <svg
                                                className="w-5 h-5 text-red-500 flex-shrink-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-1 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Gallery */}
                    {pkg.gallery && pkg.gallery.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Gallery</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {pkg.gallery.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(img.img)}
                                        className="block overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        <img
                                            src={img.img}
                                            alt={img.alt || pkg.title}
                                            loading="lazy"
                                            className="w-[350px] h-32 md:h-[150px] object-cover transform transition-transform duration-200 hover:scale-105"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Map */}
                    {pkg.mapLocation && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Location</h3>
                            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                                <iframe
                                    title={`${pkg.title} map`}
                                    src={pkg.mapLocation}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full border-0 rounded-lg"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar - Price & CTA */}
                <aside className="md:col-span-1">
                    <div className="sticky top-20 rounded-xl border border-gray-100 p-5 shadow-sm bg-white">
                        <div className="flex items-baseline justify-between gap-3">
                            <div>
                                <div className="text-sm text-gray-500">Starting from</div>
                                <div className="text-2xl font-bold text-teal-600">
                                    {formattedPrice}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 text-right">
                                <div>{pkg.days || "—"} days</div>
                                <div className="text-xs mt-1 text-gray-400">
                                    {pkg.nights ? `${pkg.nights} nights` : ""}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                onClick={() => setShowBooking(true)}
                                className="w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition"
                            >
                                Book Now
                            </button>

                            <button className="w-full mt-3 border border-gray-200 py-2 rounded-md text-sm hover:bg-gray-50 transition">
                                Enquire
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-gray-500">
                            Free cancellation up to 7 days before departure.
                        </p>
                    </div>
                </aside>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={showBooking}
                onClose={() => setShowBooking(false)}
                packageName={pkg.title}
                price={priceNumber}
            />

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-4xl w-full max-h-full relative">
                        <img
                            src={selectedImage}
                            alt="Expanded gallery"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageDetail;

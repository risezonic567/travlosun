import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/destinations.json";
import Herosection from "../components/Destination/Herosection";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>Explore India Tour Packages | holiday Packages by Travel O Sun</title>
                <meta name="description" content="Get the exclusive India tour package deals from Travel O Sun. Choose from affordable family, honeymoon, and adventure holiday deals with personalized itineraries." />
                <meta name="keywords" content="holiday Packages " />
                <link rel="canonical" href="https://travelosun.com/packages" />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Travelosun",
              "image": "https://travelosun.com/assets/Travel%20o%20sun%20logo%20png-0728f093.png",
              "@id": "https://travelosun.com/#travelagency",
              "url": "https://travelosun.com/packages",
              "telephone": "+91-9797941414",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shiksha Bharati Road, Ramphal Chowk Sector 7, Dwarka",
                "addressLocality": "New Delhi",
                "postalCode": "110045",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5850451,
                "longitude": 77.06777869999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/travelosunholidays/",
                "https://www.instagram.com/travelosun_holidays/?hl=en",
                "https://www.youtube.com/@Travelosun-holidays",
                "https://www.linkedin.com/company/travelosun-holidays/",
                "https://in.pinterest.com/Travelosunholidays/"
              ]
            }
          `}
                </script>
            </Helmet>
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
                                        <p dangerouslySetInnerHTML={{ __html: pkg.description }} />
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

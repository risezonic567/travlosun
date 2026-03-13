import React from "react";
import { FaCompass, FaFlag } from "react-icons/fa";
import { FaLocationPin, FaPersonRays } from "react-icons/fa6";

export default function Feedback() {
  const steps = [
    {
      id: 1,
      title: "Tell Us What You Want",
      desc: "Share your interests and budget so we can tailor suggestions just for you.",
      icon: <FaFlag aria-hidden="true" />,
    },
    {
      id: 2,
      title: "Share Your Travel Locations",
      desc: "Browse routes, destinations and suggested itineraries with maps and tips.",
      icon: (
        <span role="img" aria-hidden="true">
          {" "}
          <FaLocationPin />{" "}
        </span>
      ),
    },
    {
      id: 3,
      title: "Share Your Travel Preference",
      desc: "Confirm bookings, get digital tickets and real-time travel updates.",
      icon: (
        <span role="img" aria-hidden="true">
          <FaPersonRays />{" "}
        </span>
      ),
    },
    {
      id: 4,
      title: "We are 100% Trusted Tour Agency",
      desc: "Confirm bookings, get digital tickets and real-time travel updates.",
      icon: (
        <span role="img" aria-hidden="true">
          <FaCompass />{" "}
        </span>
      ),
    },
  ];
  return (
    <>
      <section className="relative py-16 p-3">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage:
              "url('https://htmldesigntemplates.com/html/travelin/images/shape4.png')",
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 my-12">
          <h3 className="text-sm sm:text-base text-Lightcolor font-serif font-semibold">
            4 Step of The Perfect Tour
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary">
            <span className="text-gray-800">Discover India’s</span> Top Holiday
            Destinations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mx-auto">
            Welcome to Travel O Sun, India’s trustworthy domestic travel agency,
            committed to providing breathtaking journeys. Whether you want a
            relaxing family holiday, a romantic honeymoon, or an unplanned trip,
            our holiday packages in India can be designed for every dream and
            budget for an unforgettable journey. We are experts in domestic
            flights, tour packages, and hotel bookings so that your trip runs
            smoothly from beginning to end.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {steps.map((step) => (
              <article
                key={step.id}
                className="group w-full bg-white rounded-2xl p-6 shadow-sm 
  hover:shadow-xl transition-all duration-300 
  transform hover:-translate-y-2 
  border border-gray-100 cursor-pointer"
                tabIndex={0}
                aria-labelledby={`step-title-${step.id}`}
              >
                <div className="flex-shrink-0 mx-auto mb-5">
                  <div
                    className="w-16 h-16 rounded-full bg-primary/10 
    text-primary group-hover:bg-white group-hover:text-primary 
    flex items-center justify-center 
    text-2xl transition-all duration-300 shadow-sm"
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <h4
                    id={`step-title-${step.id}`}
                    className="font-semibold text-gray-800 text-lg 
      group-hover:text-primary transition-colors duration-300"
                  >
                    {step.title}
                  </h4>

                  <p className="text-gray-600 text-sm mt-2 group-hover:text-primary transition-colors">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

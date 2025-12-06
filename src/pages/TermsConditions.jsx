import React from "react";
import { Helmet } from "react-helmet";

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:mt-28 mt-20">
      <Helmet>
        <title>Terms & Conditions | Travelosun Travel Booking Guidelines</title>
        <meta name="description" content="Review Travelosun’s Terms and Conditions covering travel bookings, user responsibilities, payments, cancellations, and service guidelines." />
        <meta name="keywords" content="terms and conditions, travel booking terms," />
        <link rel="canonical" href="https://travelosun.com/terms-conditions" />
      </Helmet>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Travel O Sun Terms & Conditions</h1>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun welcomes you. By accessing and/or using this site and/or any of our travel services, you agree to the following terms and conditions. These terms apply to all persons who access this site and/or request information on this site, i.e., visitors, inquiry submitters, or customers.</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun provides a travel automation platform that assists customers with planning and arranging their own travel through an automated process for both domestic and international travel, as well as offering vacation packages. All travel services provided on this site are subject to availability and confirmation by the supplier of the service (i.e., airlines/hotels, transportation service providers, and tour operators).</p>

        <p className="text-gray-700 leading-relaxed mb-4">The prices displayed on this website are an indication only; the displayed prices may change based on availability during seasonality or due to the supplier's change of policies or for operational purposes when making a reservation. The reservation will not be considered complete until payment has been processed and the customer has received confirmation from Travelosun.</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun will not be liable for any delay, cancellation, change of schedule, or disruption of any form of service rendered by the supplier of the service(s) due to causes outside of Travelosun's control. Such causes would include, but not be limited to, weather conditions, technical failures, operational decisions made by suppliers, or events of force majeure.</p>

        <p className="text-gray-700 leading-relaxed mb-4">All users of this website have a responsibility to provide accurate, complete, and current information regarding themselves (including their name and address), their travel arrangements, and their travel documents. Any and all disputes arising out of the use of this website or related services will be governed by the laws of India and will only be tried in the courts of India.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Basic Information</h2>

        <p className="text-gray-700"><strong>Website:</strong> https://travelosun.com</p>
        <p className="text-gray-700"><strong>Customer Support Email:</strong> info@travelosun.com</p>
        <p className="text-gray-700"><strong>Customer Support Phone/WhatsApp:</strong> +91-9797941414</p>
        <p className="text-gray-700"><strong>Customer Support Availability:</strong> 24/7 Assistance</p>
        <p className="text-gray-700"><strong>Operating Region:</strong> India</p>
      </div>
    </div>
  );
}

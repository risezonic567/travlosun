import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
      <div className="bg-gray-50 min-h-screen py-16 px-6 sm:mt-28 mt-20">
      <Helmet>
        <title>Privacy Policy | Travelosun – Data Protection & User Privacy</title>
        <meta name="description" content="Read Travelosun’s Privacy Policy to understand how we collect, use, and protect your personal information while booking travel services and holiday packages." />
        <meta name="keywords" content="travel services, Travelosun" />
        <link rel="canonical" href="https://www.travelosun.com/privacy-policy" />
      </Helmet>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Travel O Sun Privacy Policy</h1>

        <p className="text-gray-700 leading-relaxed mb-4">At Travelosun, we consider your privacy to be paramount; our Privacy Policy describes the way we will collect, use, store, and secure personal information while you are using our travel services.</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun collects personal information such as your name, mobile number(s), email address, and desired travel preferences when you contact us or ask for help with travel arrangements. This personal information is only used by Travelosun to communicate with you, arrange your travel bookings, and provide assistance with customer service after you have submitted your request.</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun The only time this information, Personal Data, will be used to complete your booking is if we need to share it with some of the airlines, hotels, or transportation companies to whom Travelosun has a business relationship (e.g., travel agency).</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun does not sell or share your personal information with any third party.</p>

        <p className="text-gray-700 leading-relaxed mb-4">Travelosun employs standard data security procedures to prevent unauthorized individuals from having access to your personal information. By continuing to use our website, you are indicating acceptance of and will therefore be bound by this Privacy Policy and your consent to all ways in which Travelosun will collect and use your personal information professionally.</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Basic Information</h2>

        <p className="text-gray-700"><strong>Website:</strong> https://travelosun.com</p>
        <p className="text-gray-700"><strong>Customer Support Email:</strong> info@travelosun.com</p>
        <p className="text-gray-700"><strong>Customer Support Phone/WhatsApp:</strong> +91-9797941414</p>
        <p className="text-gray-700"><strong>Customer Support Availability:</strong> 24/7 Assistance</p>
      </div>
    </div>
  );
}

import React from "react";
import { Helmet } from "react-helmet";

export default function CancellationRefundPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6 sm:mt-28 mt-20">
            <Helmet>
                <title>Cancellation & Refund Policy | Travelosun</title>
                <meta name="description" content="Know Travelosun’s cancellation and refund policy for tour packages, holiday bookings, and travel services, including refund timelines and terms." />
                <meta name="keywords" content="refund policy, tour package cancellation," />
                <link rel="canonical" href="https://travelosun.com/cancellation-refund-policy" />
            </Helmet>
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">CANCELLATION & REFUND POLICY</h1>

                <p className="text-gray-700 leading-relaxed mb-4">The Travelosun cancellation/refund policy is influenced by the policies of the suppliers (airlines, hotels, etc.) associated with your reservation.</p>

                <p className="text-gray-700 leading-relaxed mb-4">Requests for cancellation should be submitted via Travelosun's direct line of communication to process a refund request. Travelosun cannot guarantee your eligibility for a refund or the fees incurred to cancel, as they are completely dependent on the supplier, type of booking, and when it was cancelled. Some suppliers may offer no refunds or partial refunds for your reservation.</p>

                <p className="text-gray-700 leading-relaxed mb-4">If Travelosun charges you a service fee, convenience fee, or transaction fee when you make your reservation, it will not be reimbursed when you cancel your reservation. Once a refund has been approved by a supplier or provider, a refund will be processed and returned to you according to the bank or payment gateway's typical timelines (7-14 days).</p>

                <p className="text-gray-700 leading-relaxed mb-4">If you are unable to use an accommodation due to an unavailable date, or after paying for a prepaid deposit service that does not provide a full refund (in the event of an emergency or other unforeseen circumstances), you will not be entitled to a full refund. Additionally, should you choose to cancel or change your reservation beyond the limits imposed by the supplier or provider, no refund will be given for no-shows, unused services, or late cancellations. Travelosun cannot hold responsibility for delays arising from third-party systems such as banks and payment gateways.</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Basic Information</h2>

                <p className="text-gray-700"><strong>Website:</strong> https://travelosun.com</p>
                <p className="text-gray-700"><strong>Customer Support Email:</strong> info@travelosun.com</p>
                <p className="text-gray-700"><strong>Customer Support Phone/WhatsApp:</strong> +91-9797941414</p>
                <p className="text-gray-700"><strong>Customer Support Availability:</strong> 24/7 Assistance</p>
            </div>
        </div>
    );
}

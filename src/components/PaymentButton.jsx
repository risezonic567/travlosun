// // src/components/PaymentButton.jsx
// import React from "react";
// import { openRazorpay } from "../utils/razorpay";

// export default function PaymentButton({ amount, packageName }) {
//     const handlePayment = () => {
//         openRazorpay({
//             amount,
//             name: "TraveloSun Holidays",
//             description: `Booking for ${packageName}`,
//         });
//     };

//     return (
//         <button
//             onClick={handlePayment}
//             className="w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition"
//         >
//             Pay & Book Now
//         </button>
//     );
// }
import React from "react";
// import { openRazorpayPayment } from "../utils/razorpay";
import { useNavigate } from "react-router-dom";

export default function PaymentButton({ amount, packageName }) {
    const navigate = useNavigate();

    const handlePayment = async () => {
        await openRazorpayPayment({
            amount,
            name: packageName,
            description: `Booking for ${packageName}`,
            onSuccess: (details) => {
                navigate("/thank-you");
            },
        });
    };

    return (
        <button
            onClick={handlePayment}
            className="w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition"
        >
            Pay ₹{amount.toLocaleString()}
        </button>
    );
}

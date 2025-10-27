// // src/components/BookingModal.jsx
// import React from "react";
// import BookingForm from "./BookingForm";

// export default function BookingModal({ isOpen, onClose, packageName, price }) {
//     if (!isOpen) return null;

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
//             onClick={onClose}
//             role="dialog"
//             aria-modal="true"
//         >
//             <div
//                 className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//                 >
//                     ✕
//                 </button>

//                 <h2 className="text-2xl font-semibold text-teal-700 mb-1">
//                     Book Your Trip
//                 </h2>
//                 <p className="text-sm text-gray-500 mb-4">
//                     {packageName} — {new Intl.NumberFormat("en-IN", {
//                         style: "currency",
//                         currency: "INR",
//                     }).format(price)}
//                 </p>

//                 <BookingForm packageName={packageName} price={price} />
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import BookingForm from "./BookingForm";
import PaymentButton from "./PaymentButton";

export default function BookingModal({ isOpen, onClose, packageName, price }) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [userData, setUserData] = useState(null);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">✕</button>
                <h2 className="text-xl font-semibold mb-4 text-teal-600">Book {packageName}</h2>

                {!formSubmitted ? (
                    <BookingForm
                        onSubmit={(data) => {
                            setUserData(data);
                            setFormSubmitted(true);
                        }}
                    />
                ) : (
                    <div className="space-y-4">
                        <p className="text-gray-700 text-sm">
                            Confirm payment for <strong>{userData.name}</strong> — ₹{price.toLocaleString()}
                        </p>
                        <PaymentButton amount={price} packageName={packageName} />
                    </div>
                )}
            </div>
        </div>
    );
}

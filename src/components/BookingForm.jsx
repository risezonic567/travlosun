// // src/components/BookingForm.jsx
// import React, { useState } from "react";
// import PaymentButton from "./PaymentButton";

// export default function BookingForm({ packageName, price }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Booking Data:", formData);
//         // Later: save booking info before payment
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Full Name"
//                 required
//                 className="w-full border rounded-md p-2"
//             />
//             <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="w-full border rounded-md p-2"
//             />
//             <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 required
//                 className="w-full border rounded-md p-2"
//             />

//             <div className="mt-4">
//                 <PaymentButton amount={price} packageName={packageName} />
//             </div>
//         </form>
//     );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function BookingForm({ onSubmit }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-6 max-w-md mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Booking Details
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
                Please enter your details to continue with your booking.
            </p>

            {/* Full Name */}
            <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                    required
                />
            </div>

            {/* Email */}
            <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                    required
                />
            </div>

            {/* Phone */}
            <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                    required
                />
            </div>

            <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
                Continue to Payment
            </motion.button>
        </motion.form>
    );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("lastBooking"));
        setBooking(data);
    }, []);

    if (!booking) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-gray-600">
                <p>No booking details found.</p>
                <Link to="/" className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md">Back Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-teal-600 mb-3">🎉 Thank You for Your Booking!</h2>
                <p className="text-gray-600 mb-4">Your booking is confirmed. Here are the details:</p>
                <div className="text-left space-y-2 text-gray-700">
                    <p><strong>Order ID:</strong> {booking.orderId}</p>
                    <p><strong>Name:</strong> {booking.name}</p>
                    <p><strong>Amount Paid:</strong> ₹{booking.amount.toLocaleString()}</p>
                    <p><strong>Date:</strong> {booking.date}</p>
                </div>
                <div className="flex justify-center gap-x-7 ">
                    <Link to="/" className="mt-6 inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
                        Back to Home
                    </Link>
                    <Link
                        to="/booking-status"
                        className="block mt-3 text-sm text-teal-600 hover:underline"
                    >
                        Check your booking status
                    </Link>
                </div>
            </div>
        </div>
    );
}

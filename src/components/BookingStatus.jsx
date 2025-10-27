import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingStatus() {
    const [orderId, setOrderId] = useState("");
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setError("");
        setBooking(null);

        // Get stored booking (simulate database)
        const storedBooking = JSON.parse(localStorage.getItem("lastBooking"));

        if (!storedBooking) {
            setError("No bookings found. Please make a booking first.");
            return;
        }

        if (storedBooking.orderId === orderId.trim()) {
            setBooking(storedBooking);
        } else {
            setError("No booking found with this Order ID. Please check again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mt-28">
                <h2 className="text-2xl font-bold text-teal-600 text-center mb-4">
                    🔍 Check Your Booking Status
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Enter your <strong>Order ID</strong> to view booking details.
                </p>

                <form onSubmit={handleSearch} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500 outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
                    >
                        Search Booking
                    </button>
                </form>

                {error && (
                    <div className="mt-4 text-red-500 text-center text-sm bg-red-50 p-2 rounded-md">
                        {error}
                    </div>
                )}

                {booking && (
                    <div className="mt-6 bg-teal-50 border border-teal-200 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-teal-700 mb-2">
                            Booking Details
                        </h3>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p>
                                <strong>Order ID:</strong> {booking.orderId}
                            </p>
                            <p>
                                <strong>Name:</strong> {booking.name}
                            </p>
                            <p>
                                <strong>Amount:</strong> ₹{booking.amount.toLocaleString()}
                            </p>
                            <p>
                                <strong>Date:</strong> {booking.date}
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                <span className="text-green-600 font-medium">
                                    Confirmed ✅
                                </span>
                            </p>
                        </div>
                    </div>
                )}

                <div className="text-center mt-6">
                    <Link
                        to="/"
                        className="text-sm text-teal-600 hover:underline font-medium"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

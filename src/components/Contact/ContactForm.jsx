import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We’ll get back to you soon 🌞");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
                    placeholder="John Doe"
                    required
                />
            </div>
            <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
                    placeholder="you@example.com"
                    required
                />
            </div>
            <div>
                <label className="text-sm text-gray-600">Your Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none"
                    rows="4"
                    placeholder="Tell us about your dream vacation..."
                    required
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full  bg-primary text-white py-3 rounded-xl font-semibold shadow-lg"
            >
                Send Message
            </motion.button>
        </form>
    );
}

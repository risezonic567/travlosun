import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";
import ContactCard from "../components/Contact/ContactCard";
import MapEmbed from "../components/Contact/MapEmbed";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
            <Helmet>
                <title>Contact Travel O Sun | Get in Touch for travel support</title>
                <meta name="description" content=" Travel O Sun—India’s trusted travel agency for domestic flight booking, hotel deals, and holiday packages. Contact our support team for tour planning and the best travel offers." />
                <meta name="keywords" content="Travel agency" />
                <link rel="canonical" href="https://travelosun.com/contact-us" />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Travelosun",
              "image": "https://travelosun.com/assets/Travel%20o%20sun%20logo%20png-0728f093.png",
              "@id": "https://travelosun.com/#travelagency",
              "url": "https://travelosun.com/contact-us",
              "telephone": "+91-9797941414",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shiksha Bharati Road, Ramphal Chowk Sector 7, Dwarka",
                "addressLocality": "New Delhi",
                "postalCode": "110045",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5850451,
                "longitude": 77.06777869999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/travelosunholidays/",
                "https://www.instagram.com/travelosun_holidays/?hl=en",
                "https://www.youtube.com/@Travelosun-holidays",
                "https://www.linkedin.com/company/travelosun-holidays/",
                "https://in.pinterest.com/Travelosunholidays/"
              ]
            }
          `}
                </script>
            </Helmet>
            {/* Hero Section */}
            <section className="sm:mt-32 mt-18 relative h-[50vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide"
                >
                    Get in Touch with <span className="text-sky-400">TraveloSun</span>
                </motion.h1>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
                            We’d love to hear from you
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Whether you’re planning a honeymoon getaway or a family adventure,
                            our travel experts are here to help you create unforgettable
                            memories. Reach out for custom packages, queries, or partnerships.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                            <ContactCard
                                icon={<Phone className="text-sky-500" size={26} />}
                                title="Call Us"
                                detail="+91  9797941414"
                            />
                            <ContactCard
                                icon={<Mail className="text-sky-500" size={26} />}
                                title="Email"
                                detail="info@travelosun.com"
                            />
                            <ContactCard
                                icon={<MapPin className="text-sky-500" size={26} />}
                                title="Office"
                                detail="D-448, Second Floor Shiksha Bharati Road, Ramphal Chowk Sector 7, Dwarka New Delhi - 110045"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="mt-10">
                <MapEmbed />
            </section>
        </div>
    );
}

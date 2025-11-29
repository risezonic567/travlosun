import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About"
import Footer from "./components/Footer";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationList from "./pages/DestinationList";
import ContactUs from "./pages/Contact";
import DestinationPackages from "./pages/DestinationPackages";
import ThankYou from "./pages/ThankYou";
import BookingStatus from "./components/BookingStatus";
import PackagesList from "./pages/Pakageslist";
import PackageDetail from "./pages/PackageDetail";
import PostDetail from "./pages/PostDetail";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Rooms />} /> */}
        {/* <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        {/* <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin/bookings" element={<AdminBookings />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
          {/* <Route path="/destination" element={<DestinationList />} />
          <Route path="/destination/:slug" element={<DestinationPackages />} />
          <Route path="/destination/:countrySlug/:stateSlug" element={<DestinationDetail />} /> */}
        <Route path="/packages" element={<PackagesList />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/booking-status" element={<BookingStatus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

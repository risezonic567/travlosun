import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
  FaYoutube,
  FaClock,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo/Travel o sun logo png.png"
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    pilot: [

      { name: "Londan", path: "/londan" },
      {
        name: "Events",
        path: "/rtr-radio-telephony-restricted",
      },
      { name: "Packages(Offers)", path: "/cadet-pilot-program" },

    ],
    // cabin: [
    //   { name: "R", path: "/job-oriented-cc-training" },
    // ],

  };

  const renderDropdown = (key) => (
    <div className="absolute top-full left-0 bg-white rounded shadow-md py-2 w-64 z-50">
      {dropdowns[key].map((item) => (
        <NavLink key={item.name} to={item.path}>
          <div className="px-4 py-2 hover:bg-indigo-100 text-sm text-gray-700 transition">
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full font-sans">
      {/* Top Bar */}
      {!scrolling && (
        <div className="text-white text-sm w-full md:flex hidden justify-center py-2  bg-primary">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span className="flex items-center gap-x-4 " >  <FaLocationDot />D-448, Second Floor Shiksha Bharati Road, Ramphal Chowk Sector 7, Dwarka New Delhi - 110045
            </span>
            <div className="flex items-center gap-4">
              {/* <span>Phone: Devrana, Delhi-Haridwar Highway, Mansurpur, Muzaffarnagar</span> */}
              <div className="flex gap-3 text-white text-base">
                <Link
                  to="https://www.facebook.com/travelosunholidays/ "
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/travelosun-holidays/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/travelosun_holidays/?hl=en "
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://in.pinterest.com/Travelosunholidays/"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaPinterestP />
                </Link>
                <Link
                  to="https://www.youtube.com/@Travelosun-holidays"
                  className="w-8 h-8 bg-white rounded-full flex items-center p-0 justify-center text-primary"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex ${scrolling ? "w-full" : "w-full"
          }  justify-center bg-white  text-[#00163d] shadow transition-all duration-300 uppercase`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] px-4 py-2 relative">
          <Link to="/">
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              className="w-32"
            />
          </Link>
          <ul className="flex gap-6 text-sm font-medium relative">
            <NavLink to="/">
              <li className="hover:text-Secondary">Home</li>
            </NavLink>
            <NavLink to="/about-us">
              <li className="hover:text-Secondary">About Us</li>
            </NavLink>

            {/* <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("pilot")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/pilot-training">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
                  {" "}
                  Destination <ChevronDown size={16} />
                </div>{" "}
              </NavLink>
              {activeDropdown === "pilot" && renderDropdown("pilot")}
            </li> */}

            <NavLink to="/packages">
              <li className="hover:text-Secondary">Holidays Packages</li>
            </NavLink>
            {/* <NavLink to="/">
              <li className="hover:text-Secondary">Tours</li>
            </NavLink> */}
            {/* <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("cabin")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/rooms-cottage">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
              Services
                </div>
              </NavLink>
              {activeDropdown === "cabin" && renderDropdown("cabin")}
            </li> */}
            <NavLink to="/blog">
              <li className="hover:text-Secondary">Blog</li>
            </NavLink>
            <NavLink to="/contact-us">
              <li className="hover:text-Secondary">Contact</li>
            </NavLink>
          </ul>
          <button className="bg-primary  text-white text-sm uppercase font-semibold px-6 py-4 rounded hover:bg-Secondary transition">
            <Link to="/contact-us"> Book Now </Link>
          </button>

        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full md:hidden bg-white text-black  shadow px-4 py-2">
        {/* Logo & Menu Button */}
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              loading="lazy"
              src={logo}
              // src="https://i.postimg.cc/qq7R0CjT/PNG-1.png"

              alt="logo"
              className="h-14"
            />
          </NavLink>
          <FaBars
            size={26}
            className="cursor-pointer text-Secondary"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Menu Items */}
        {menuOpen && (
          <div className="mt-4 animate-slideDown ">
            <ul className="flex flex-col gap-3 text-base font-medium">
              {/* About */}
              <NavLink to="/">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  Home
                </li>
              </NavLink>
              {/* About */}
              <NavLink to="/about-us">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  About Us
                </li>
              </NavLink>
              {/* Pakages  */}
              <NavLink to="/packages">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  Holidays Packages
                </li>
              </NavLink>
              {/* Blogs  */}
              <NavLink to="/blog">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                Blog
                </li>
              </NavLink>
              {/* Contact */}
              <NavLink to="/contact-us">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  Contact Us
                </li>
              </NavLink>
            </ul>

            {/* CTA Button */}
            <NavLink to="contact-us">  <button className="mt-6 w-full bg-primary text-white font-semibold px-4 py-3 rounded-lg shadow hover:bg-gray-200 transition">
              Book Packages
            </button></NavLink>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;

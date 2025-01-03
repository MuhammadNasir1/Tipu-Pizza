import { useState } from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaShoppingCart,
} from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-primary text-white py-2 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-xl font-semibold">Tipu Pizza  Kebab</span>
          <div className="flex gap-6">
            <a className="text-2xl"
              href="https://www.facebook.com/TipuPizzaKebab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF  />
            </a>
            <a className="text-2xl"
              href="https://www.tiktok.com/@tipupizzakebab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok  />
            </a>
            <a className="text-2xl"
              href="https://www.instagram.com/tipupizzakebab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram  />
            </a>
           
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full ">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-700 flex gap-3 items-center lg:w-[220px]">
            <img width={60} src={logo} alt="Logo" />
            Tippu Pizza
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 mx-auto ">
            <Link 
              to="../"
              className=" hover:text-primary font-semibold text-[20px] capitalize"
            >
              Home
            </Link>
            <Link
              to="../menu"
              className=" hover:text-primary font-semibold text-[20px] capitalize"
            >
              Menu
            </Link>
            {/* <Link
              to="../about"
              className=" hover:text-primary font-semibold text-[20px] capitalize"
            >
              About Us
            </Link> */}
            <Link
              to="../contact"
              className=" hover:text-primary font-semibold text-[20px] capitalize"
            >
              Contact
            </Link>
          </div>
          <div className="lg:w-[220px] flex justify-end">
            <FaShoppingCart className="hover:text-primary text-3xl" />
          </div>
          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-gray-600 hover:text-gray-800 focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <Link
              to="../"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="menu"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
            >
              Menu
            </Link>
            {/* <Link
              to="about"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
            >
              About Us
            </Link> */}
            <Link
              to="contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
            >
              Contact
            </Link>
           
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

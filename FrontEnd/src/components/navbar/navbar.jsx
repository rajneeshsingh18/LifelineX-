import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hospital from "./hospital.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-start">
            <div className="flex items-center">
              <img src={Hospital} alt="Logo" className="h-10 w-10 mr-3" />
              <span className="text-2xl font-bold text-primary text-gray-800 dark:text-white">
                <Link to="/home">Hospital Dashboard</Link>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/home"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              About
            </Link>

            <div className="ml-4 flex space-x-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <Link
            to="/home"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            About
          </Link>
          <Link
            to="/"
            className="block py-2 mt-2 text-indigo-600 border border-indigo-600 rounded-md text-center hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block py-2 mt-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

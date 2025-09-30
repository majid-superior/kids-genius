import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="">
        <div className="">
          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-2/5 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-3 border-b">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <Link
              to="/"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
    </div>
  );
};

export default Navigation;

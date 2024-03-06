import React from "react";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50 py-4 px-10 font-serif bg-transparent backdrop-filter backdrop-blur-lg shadow-md w-full">
      <div className="relative grid grid-cols-2 items-center">
        <a className="py-1 ml-5 mr-32 text-4xl " href="#">
          College Management System
        </a>
        <div className="flex gap-2 mx-10 text-lg align-text-bottom">
          <a
            className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
            href="#" 
          >
            Home
          </a>
          <a
            className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
            href="#"
          >
            Choose
          </a>
          <a
            className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
            href="#"
          >
            Teacher
          </a>
          <a
            className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
            href="#"
          >
            Pricing
          </a>
          <a
            className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

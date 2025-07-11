import React from "react";
import contact from "../assets/image/Contactus.jpg";

const Contact = () => {
  return (
    <div id="Contact"
      
      className="min-h-screen font-serif"
      style={{ backgroundColor: "#f5e6d7", color: "#5C3A00" }}
    >
      {/* Header Image */}
      <div className="w-60 h-40 mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl">
        <img
          src={contact}
          alt="Contact Us"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        

        {/* Main content */}
        <div className="flex flex-col md:flex-row md:space-x-24">
          {/* Left side - Get in touch */}
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-md">
              Get in touch
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed drop-shadow-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
            <div className="space-y-5 max-w-md text-lg font-medium drop-shadow-sm">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-yellow-400 text-xl"></i>
                <span>929-242-6868</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-yellow-400 text-xl"></i>
                <span>contact@info.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-yellow-400 text-xl"></i>
                <span>123 Fifth Avenue, New York, NY 10160</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex space-x-6 mt-12">
              <a
                href="#"
                aria-label="Facebook"
                className="border border-yellow-400 rounded-full p-3 hover:bg-yellow-400 hover:text-yellow-900 transition duration-300 shadow-lg"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="border border-yellow-400 rounded-full p-3 hover:bg-yellow-400 hover:text-yellow-900 transition duration-300 shadow-lg"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="border border-yellow-400 rounded-full p-3 hover:bg-yellow-400 hover:text-yellow-900 transition duration-300 shadow-lg"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="md:w-1/2">
            <form className="space-y-8 max-w-md bg-[#5C3A00] bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md">
              <div className="flex space-x-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-4 rounded-md text-[#5C3A00] bg-[#f5e6d7] focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-4 rounded-md text-[#5C3A00] bg-[#f5e6d7] focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md text-[#5C3A00] bg-[#f5e6d7] focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-md text-[#5C3A00] bg-[#f5e6d7] focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 font-bold py-4 rounded-md shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

     
      </div>
    </div>
  );
};

import Footer from './Footer';

export default Contact;

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full" style={{ backgroundColor: '#5C3A00', color: '#f5e6d7' }}>
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Logo and links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6 md:mb-0">
          <div className="text-2xl font-bold mb-4 md:mb-0 cursor-default select-none">SipOra.</div>
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:underline">About SipOra</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Menu</a>
            <a href="" className="hover:underline">Customer care</a>
            <a href="#" className="hover:underline">Cafeservice</a>
          </nav>
        </div>

        {/* Right side - Newsletter */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
         
          <form className="flex space-x-2" onSubmit={e => e.preventDefault()}>
            <input
              id="newsletter"
              type="email"
              placeholder="Your email here"
              className="px-3 py-2 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-t border-yellow-700 mx-6 md:mx-0" />

      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs font-light">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0 text-sm">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">CA Transparency in Supply Chains Act</a>
        </div>
        <div className="text-center md:text-right mb-4 md:mb-0">
          ©2025 SipOra, LLC. All Rights Reserved.
        </div>
        <div className="flex space-x-4 justify-center md:justify-end text-xl">
          <a href="#" aria-label="YouTube" className="hover:text-yellow-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Pinterest" className="hover:text-yellow-400">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

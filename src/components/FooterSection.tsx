import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, ArrowUpIcon } from 'lucide-react';
const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="w-full bg-black relative overflow-hidden">
      {/* Red laser line at top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              LASER<span className="text-red-600">CRAFT</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium laser engraving solutions for businesses and individuals
              looking to make a lasting impression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FacebookIcon className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <YoutubeIcon className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Business Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Custom Nameplates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Wooden Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Acrylic Awards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Metal Engravings
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-600" />
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LaserCraft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      {/* Scroll to top button */}
      <motion.button onClick={scrollToTop} className="absolute bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full border border-gray-800 hover:bg-gray-800 transition-colors duration-300" whileHover={{
      y: -3
    }} whileTap={{
      scale: 0.95
    }}>
        <ArrowUpIcon className="w-5 h-5" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
      {/* Background accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-red-900 rounded-full opacity-5 blur-3xl"></div>
    </footer>;
};
export default FooterSection;
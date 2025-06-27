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
              LUMI<span className="text-red-600">XPERT</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium-Lasergravurlösungen für Unternehmen und Privatkunden, die einen bleibenden Eindruck hinterlassen möchten.
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
            <h4 className="text-lg font-semibold mb-6">Schnellzugriff</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Dienstleistungen</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Visitenkarten
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Individuelle Namensschilder
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Holzprodukte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Acryl-Auszeichnungen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                  Metallgravuren
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Abonnieren Sie unseren Newsletter für die neuesten Angebote und Neuigkeiten.
            </p>
            <form className="flex">
              <input type="email" placeholder="Ihre E-Mail" className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-600" />
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors duration-300">
                Abonnieren
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LumiXpert. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Datenschutz
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Nutzungsbedingungen
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors duration-300">
              Cookie-Richtlinie
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
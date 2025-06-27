import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, ArrowUpIcon } from 'lucide-react';
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
      
      {/* Mobile Simplified Footer */}
      <div className="block md:hidden max-w-6xl mx-auto mobile-container py-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              LUMI<span className="text-red-600">XPERT</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Premium-Lasergravurlösungen für außergewöhnliche Markenerlebnisse.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/lumi.xpert/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 touch-target">
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577765944704" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 touch-target">
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://wa.me/491781638184" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300 touch-target">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
          
          {/* Quick Links - Compact */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
              Über Uns
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
              Galerie
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
              Kontakt
            </a>
          </div>
          
          {/* Mobile Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs mb-3">
              © {new Date().getFullYear()} LumiXpert. Alle Rechte vorbehalten.
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300">
                Datenschutz
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Full Footer */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              LUMI<span className="text-red-600">XPERT</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium-Lasergravurlösungen für Unternehmen und Privatkunden, die einen bleibenden Eindruck hinterlassen möchten.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lumi.xpert/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577765944704" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FacebookIcon className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://wa.me/491781638184" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
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
      {/* Scroll to top button - responsive positioning */}
      <motion.button 
        onClick={scrollToTop} 
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-gray-900 text-white p-3 rounded-full border border-gray-800 hover:bg-gray-800 transition-colors duration-300 touch-target" 
        whileHover={{
          y: -3
        }} 
        whileTap={{
          scale: 0.95
        }}
      >
        <ArrowUpIcon className="w-5 h-5" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
      {/* Background accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-red-900 rounded-full opacity-5 blur-3xl"></div>
    </footer>;
};
export default FooterSection;
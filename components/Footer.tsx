'use client';

import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">CCR Balakot</h3>
            <p className="leading-relaxed text-sm">
              Experience the perfect blend of luxury and nature at Country Club Resorts Balakot. Your mountain sanctuary awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                in
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                tw
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {currentYear} Country Club Resorts Balakot. All rights reserved.
          </p>
          <p className="flex items-center gap-2 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500" /> for nature lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

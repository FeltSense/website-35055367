import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bloom & <span className="text-primary-500">Wild</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your skin with science-backed, sustainable skincare that delivers visible results while caring for the planet.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300 group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300 group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300 group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors duration-300 group">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Face Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Skincare Sets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-gray-400">hello@bloomwild.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-gray-400">1-800-BLOOM-WILD</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Bloom & Wild. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Sustainably made with love</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 pt-10 border-t border-t-yellow-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Chatter</h3>
            <p className="text-gray-600 mb-6">
              Chatter is the ultimate platform for real-time communication, enabling users to connect seamlessly and securely.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-600 hover:text-yellow-800 transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-yellow-600 hover:text-yellow-800 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-yellow-600 hover:text-yellow-800 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-yellow-600 hover:text-yellow-800 transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-yellow-600 transition duration-300">Home</a></li>
              <li><a href="/#about" className="hover:text-yellow-600 transition duration-300">About</a></li>
              <li><a href="/#features" className="hover:text-yellow-600 transition duration-300">Features</a></li>
              <li><a href="/#contact " className="hover:text-yellow-600 transition duration-300">Contact Us</a></li>
              <li><a href="/privacy&policy " className="hover:text-yellow-600 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="flex items-center mb-4">
              <PhoneIcon className="h-5 w-5 text-yellow-600 mr-3" />
              <span className="text-gray-600">+123 456 7890</span>
            </div>
            <div className="flex items-center mb-4">
              <EnvelopeIcon className="h-5 w-5 text-yellow-600 mr-3" />
              <span className="text-gray-600">contact@chatterapp.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-yellow-600 mr-3" />
              <span className="text-gray-600">123 Chatter Street, Chatville, USA</span>
            </div>
          </div>
        </div>
      </div>

        <div className="border-t py-7 mt-5 border-t-yellow-600 text-center text-gray-500 text-sm flex items-center justify-center">
          &copy; {new Date().getFullYear()} Chatter. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;

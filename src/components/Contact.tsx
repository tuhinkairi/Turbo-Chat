import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-yellow-50 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <form>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="name">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-5 py-3  border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="email">Your Email</label>
                <input 
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-5 py-3  border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="mt-2 block w-full px-5 py-3  border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                  rows={5}
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mx-auto block"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Have any questions or want to talk? Reach out to us through any of the following:
            </p>

            <div className="flex items-center mb-6">
              <PhoneIcon className="h-6 w-6 text-yellow-600 mr-4" />
              <span className="text-lg text-gray-800">+123 456 7890</span>
            </div>

            <div className="flex items-center mb-6">
              <EnvelopeIcon className="h-6 w-6 text-yellow-600 mr-4" />
              <span className="text-lg text-gray-800">contact@chatterapp.com</span>
            </div>

            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-yellow-600 mr-4" />
              <span className="text-lg text-gray-800">123 Chatter Street, Chatville, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

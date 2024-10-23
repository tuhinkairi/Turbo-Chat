import React from 'react';
import { UserGroupIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'; // Importing icons

const AboutUs: React.FC = () => {
  return (
    <section id='about' className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to connect people through seamless communication. With our real-time messaging app, you can share thoughts, files, and moments instantly and securely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Mission Card */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <UserGroupIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              We aim to make communication easy, fun, and accessible for everyone. From group chats to voice and video calls, our platform fosters meaningful interactions.
            </p>
          </div>

          {/* Team Values Card */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <ShieldCheckIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Security, privacy, and simplicity are the foundation of our app. We value user trust, and every feature is designed to ensure a secure and smooth experience.
            </p>
          </div>

          {/* Communication Focus Card */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Focus</h3>
            <p className="text-gray-600">
              We're constantly evolving to improve communication for individuals and teams alike. Our focus is on delivering fast, reliable messaging, no matter where you are.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
          <p className="text-gray-600 mb-6">
            Our team is passionate about building a reliable, secure, and fun platform for everyone. We're committed to making communication simpler for you.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

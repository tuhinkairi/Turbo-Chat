import React from 'react';
import { ChatBubbleLeftRightIcon, UserGroupIcon, LockClosedIcon, PencilSquareIcon, ClockIcon, FolderIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'; 

const Features: React.FC = () => {
  return (
    <section id='features' className=" py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Chat App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Real-Time Messaging */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Real-Time Messaging</h3>
            <p className="text-gray-600">
              Experience seamless real-time communication with <span className="font-bold text-blue-600">Socket.io</span>. Messages are sent and received without noticeable delays.
            </p>
          </div>

          {/* Group Chat */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <UserGroupIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Group Chat</h3>
            <p className="text-gray-600">
              Join multiple users in a single room. Share messages, files, or start <span className="font-bold text-blue-600">voice/video calls</span> for richer interactions.
            </p>
          </div>

          {/* User Authentication */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <LockClosedIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Secure User Authentication</h3>
            <p className="text-gray-600">
              Sign up and log in securely with <span className="font-bold text-blue-600">JWT</span> or <span className="font-bold text-blue-600">OAuth</span>. Your data is safe with us.
            </p>
          </div>

          {/* Typing Indicators */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <PencilSquareIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Typing Indicators</h3>
            <p className="text-gray-600">
              Know when someone is typing in real-time with intuitive <span className="font-bold text-blue-600">typing indicators</span>.
            </p>
          </div>

          {/* User Status & Disconnection Handling */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <ClockIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">User Status & Disconnection</h3>
            <p className="text-gray-600">
              Get real-time updates on user status like <span className="font-bold text-blue-600">Online</span>, <span className="font-bold text-blue-600">Offline</span>, or <span className="font-bold text-blue-600">Typing</span>.
            </p>
          </div>

          {/* Chat History & Database */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <FolderIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chat History</h3>
            <p className="text-gray-600">
              All your conversations, files, and images are securely stored in <span className="font-bold text-blue-600">MongoDB</span> or <span className="font-bold text-blue-600">PostgreSQL</span>.
            </p>
          </div>

          {/* Encryption (Bonus) */}
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <ShieldCheckIcon className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">End-to-End Encryption</h3>
            <p className="text-gray-600">
              For added security, our chats can be encrypted, keeping your conversations private and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

// dashboard/@sidebar/page.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaComments, FaPhoneAlt, FaVideo, FaUsers, FaCog } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const routerendpoint = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <FaUsers /> },
    { name: 'Chats', href: '/dashboard/chats', icon: <FaComments /> },
    { name: 'Calls', href: '/dashboard/calls', icon: <FaPhoneAlt /> },
    { name: 'Video Calls', href: '/dashboard/calls/video', icon: <FaVideo /> }, 
    { name: 'Groups', href: '/dashboard/groups', icon: <FaUsers /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <FaCog /> },
  ];

  return (
    <div className={`flex flex-col h-full ${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-width duration-300`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className={`${isOpen ? 'block' : 'hidden'} text-xl font-semibold`}>Dashboard</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex flex-col space-y-2 p-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}
              className={`flex items-center p-2 rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-300 ${
                routerendpoint === item.href ? 'bg-gray-700' : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`${isOpen ? 'ml-4' : 'hidden'} text-sm`}>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

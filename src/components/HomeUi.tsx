import React from 'react'
import Title from './ui/Title';
import Link from 'next/link';
const HomeUi:React.FC = ()=> {
    return (
      <section className="flex items-center justify-center h-screen">
      <div className="text-center max-w-2xl p-4">
  
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600 capitalize"><Title/></span>
        </h1>
  
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Connect with people, share files, and engage in real-time conversations with ease. Start chatting now!
        </p>
  
        <div className="space-x-4">
          <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
          
        </div>
        
      </div>
    </section>
  
    )
  }
export default HomeUi;

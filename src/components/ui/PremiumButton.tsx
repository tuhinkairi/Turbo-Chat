"use client"
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const PremiumButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
    >
      {label}
    </button>
  );
};

export default PremiumButton;

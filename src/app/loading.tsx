"use client";
const LoadingSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-blue-300 border-solid rounded-full animate-spin slower"></div>
      </div>
    </div>
  );
};

export default LoadingSection;

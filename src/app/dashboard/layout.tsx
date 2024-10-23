import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Dashboard</h1>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardLayout;

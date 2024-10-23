// dashboard/layout.tsx
import { ReactNode } from 'react';
import Sidebar from './@sidebar/page';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

import Navbar from './Navbar';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      {/* Optional: Add a Footer component here later */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
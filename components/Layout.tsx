import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title = 'SEA Catering', description = 'Healthy Meals, Anytime, Anywhere' }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-teal-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">SEA Catering</h1>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-teal-700 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} SEA Catering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
import React from 'react';
import Head from 'next/head';

const SubscriptionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Subscription - SEA Catering</title>
        <meta name="description" content="Explore our subscription options (Coming Soon!)." />
      </Head>

      <div className="container mx-auto py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
        <p className="text-xl text-gray-700">Subscription details coming soon in Level 3!</p>
        {/* Placeholder content */}
      </div>
    </>
  );
};

export default SubscriptionPage;
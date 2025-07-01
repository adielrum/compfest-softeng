import React from 'react';
import Head from 'next/head';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - SEA Catering</title>
        <meta name="description" content="Get in touch with SEA Catering." />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Email:</span> info@seacatering.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Catering Lane, Flavor Town, ST 12345
            </p>
          </div>
          {/* Optional: Add a simple contact form later */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
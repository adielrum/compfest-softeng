import React, { useState } from 'react';
import Head from 'next/head';

interface MealPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: string;
  details: string;
}

const sampleMealPlans: MealPlan[] = [
  {
    id: 1,
    name: 'Standard Plan',
    price: '$100/week',
    description: 'Balanced meals for everyday.',
    details: 'This plan includes a variety of dishes with a focus on balanced nutrition and essential macros.',
  },
  {
    id: 2,
    name: 'Keto Plan',
    price: '$120/week',
    description: 'Low carb, high fat meals.',
    image: '/file.svg', // Example image, replace with actual
    details: 'A high-fat, low-carbohydrate meal plan designed to support ketosis. Includes plenty of healthy fats and proteins.',
  },
  {
    id: 3,
    name: 'Vegetarian Plan',
    price: '$90/week',
    description: 'Delicious plant-based options.',
    image: '/globe.svg', // Example image, replace with actual
    details: 'Enjoy a diverse range of flavorful plant-based meals, rich in vegetables, fruits, and plant proteins.',
  },
];

const MenuPage: React.FC = () => {
  const [expandedPlanId, setExpandedPlanId] = useState<number | null>(null);

  const toggleDetails = (planId: number) => {
    setExpandedPlanId(expandedPlanId === planId ? null : planId);
  };

  return (
    <>
      <Head>
        <title>Menu - SEA Catering</title>
        <meta name="description" content="Explore our delicious and healthy meal plans." />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Meal Plans</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleMealPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {plan.image && <img src={plan.image} alt={plan.name} className="w-full h-48 object-cover" />}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h2>
                <p className="text-xl text-teal-600 mb-4">{plan.price}</p>
                <p className="text-gray-600 mb-4 flex-grow">{plan.description}</p>

                {expandedPlanId === plan.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700">
                    <h3 className="font-semibold mb-2">Details:</h3>
                    <p>{plan.details}</p>
                  </div>
                )}

                <button
                  onClick={() => toggleDetails(plan.id)}
                  className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition ease-in-out duration-150"
                >
                  {expandedPlanId === plan.id ? 'Hide Details' : 'See More Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
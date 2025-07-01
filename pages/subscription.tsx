import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const mealPlans = [
  { name: 'Diet Plan', price: 30000 },
  { name: 'Protein Plan', price: 40000 },
  { name: 'Royal Plan', price: 60000 },
];

const mealTypesOptions = ['Breakfast', 'Lunch', 'Dinner'];
const deliveryDaysOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SubscriptionPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedMealPlan, setSelectedMealPlan] = useState<{ name: string; price: number } | null>(null);
  const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);
  const [selectedDeliveryDays, setSelectedDeliveryDays] = useState<string[]>([]);
  const [allergies, setAllergies] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionMessage, setSubmissionMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedMealPlan, selectedMealTypes, selectedDeliveryDays]);

  const calculateTotalPrice = () => {
    if (selectedMealPlan && selectedMealTypes.length > 0 && selectedDeliveryDays.length > 0) {
      const price = selectedMealPlan.price * selectedMealTypes.length * selectedDeliveryDays.length * 4.3;
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName) newErrors.fullName = 'Full Name is required.';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    if (!selectedMealPlan) newErrors.selectedMealPlan = 'Meal Plan is required.';
    if (selectedMealTypes.length === 0) newErrors.selectedMealTypes = 'At least one Meal Type is required.';
    if (selectedDeliveryDays.length === 0) newErrors.selectedDeliveryDays = 'At least one Delivery Day is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionMessage(null);

    if (!validateForm()) {
      setSubmissionMessage({ type: 'error', message: 'Please correct the errors in the form.' });
      return;
    }

    const formData = {
      fullName,
      phoneNumber,
      mealPlan: selectedMealPlan?.name,
      mealPlanPrice: selectedMealPlan?.price,
      mealTypes: selectedMealTypes,
      deliveryDays: selectedDeliveryDays,
      allergies,
      totalPrice,
    };

    console.log('Submitting:', formData);
    // Placeholder for API submission
    try {
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   setSubmissionMessage({ type: 'success', message: 'Subscription successful!' });
      //   // Clear form
      //   setFullName('');
      //   setPhoneNumber('');
      //   setSelectedMealPlan(null);
      //   setSelectedMealTypes([]);
      //   setSelectedDeliveryDays([]);
      //   setAllergies('');
      //   setTotalPrice(0);
      //   setErrors({});
      // } else {
      //   const errorData = await response.json();
      //   setSubmissionMessage({ type: 'error', message: errorData.message || 'Subscription failed.' });
      // }
      setSubmissionMessage({ type: 'success', message: 'Subscription successful! (API integration coming soon)' });
    } catch (error) {
      setSubmissionMessage({ type: 'error', message: 'An unexpected error occurred.' });
    }
  };

  const handleMealTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedMealTypes(prev =>
      checked ? [...prev, value] : prev.filter(type => type !== value)
    );
  };

  const handleDeliveryDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedDeliveryDays(prev =>
      checked ? [...prev, value] : prev.filter(day => day !== value)
    );
  };

  return (
    <>
      <Head>
        <title>Subscription - SEA Catering</title>
        <meta name="description" content="Subscribe to our meal plans." />
      </Head>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Subscribe to a Meal Plan</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {submissionMessage && (
            <div className={`p-4 mb-4 rounded-md ${submissionMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submissionMessage.message}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name *</label>
            <input
              type="text"
              id="fullName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-xs italic mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number (WhatsApp-compatible) *</label>
            <input
              type="tel"
              id="phoneNumber"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : ''}`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+6281234567890"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs italic mt-1">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Meal Plan *</label>
            <div className="mt-2">
              {mealPlans.map((plan) => (
                <label key={plan.name} className="inline-flex items-center mr-6 mb-2">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="mealPlan"
                    value={plan.name}
                    checked={selectedMealPlan?.name === plan.name}
                    onChange={() => setSelectedMealPlan(plan)}
                  />
                  <span className="ml-2 text-gray-700">{plan.name} — Rp{plan.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
            {errors.selectedMealPlan && <p className="text-red-500 text-xs italic mt-1">{errors.selectedMealPlan}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Meal Types *</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {mealTypesOptions.map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-teal-600"
                    value={type}
                    checked={selectedMealTypes.includes(type)}
                    onChange={handleMealTypeChange}
                  />
                  <span className="ml-2 text-gray-700">{type}</span>
                </label>
              ))}
            </div>
            {errors.selectedMealTypes && <p className="text-red-500 text-xs italic mt-1">{errors.selectedMealTypes}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Delivery Days *</label>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {deliveryDaysOptions.map((day) => (
                <label key={day} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-teal-600"
                    value={day}
                    checked={selectedDeliveryDays.includes(day)}
                    onChange={handleDeliveryDayChange}
                  />
                  <span className="ml-2 text-gray-700">{day}</span>
                </label>
              ))}
            </div>
            {errors.selectedDeliveryDays && <p className="text-red-500 text-xs italic mt-1">{errors.selectedDeliveryDays}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="allergies" className="block text-gray-700 text-sm font-bold mb-2">Allergies / Dietary Restrictions (Optional)</label>
            <textarea
              id="allergies"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              rows={3}
              placeholder="e.g., No nuts, gluten-free, vegetarian"
            ></textarea>
          </div>

          <div className="mb-6 text-right">
            <p className="text-xl font-bold text-gray-800">Total Price: Rp{totalPrice.toLocaleString()}</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscriptionPage;
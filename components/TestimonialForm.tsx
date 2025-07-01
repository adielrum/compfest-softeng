import React, { useState } from 'react';

const TestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    reviewMessage: '',
    rating: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Testimonial submitted:', formData);
    // This form is not yet connected to a backend (Level 3)
    alert('Thank you for your testimonial! (Submission is not saved)');
    setFormData({ customerName: '', reviewMessage: '', rating: 5 }); // Clear form
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="customerName"
            id="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="reviewMessage" className="block text-sm font-medium text-gray-700">Your Review</label>
          <textarea
            name="reviewMessage"
            id="reviewMessage"
            rows={4}
            value={formData.reviewMessage}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
          <select
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Submit Testimonial
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialForm;
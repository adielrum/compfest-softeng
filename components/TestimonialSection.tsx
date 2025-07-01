import React from 'react';
import TestimonialForm from './TestimonialForm';

// Placeholder for sample testimonials - replace with actual data later
const sampleTestimonials = [
  {
    id: 1,
    name: 'John Doe',
    review: 'SEA Catering has made healthy eating so easy and delicious! Highly recommend.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Great variety of meals and excellent service. The vegetarian options are fantastic.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Peter Jones',
    review: 'Convenient and affordable. Perfect for busy professionals.',
    rating: 5,
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        {/* Testimonial Carousel - Implement later */}
        <div className="mb-12">
          {/* Placeholder for carousel/slider */}
          <div className="flex flex-wrap justify-center gap-6">
            {sampleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3">
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.review}&quot;</p>
                <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
                <div className="flex items-center mt-2">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.034a1 1 0 00-1.175 0l-2.803 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.034a1 1 0 00-1.175 0l-2.803 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Form */}
        <div className="max-w-lg mx-auto">
          <TestimonialForm />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
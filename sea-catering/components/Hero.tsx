import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-teal-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SEA Catering
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6">
              Healthy Meals, Anytime, Anywhere
            </h2>
            <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              SEA Catering offers customizable healthy meal services with delivery across Indonesia. 
              We focus on nutritious ingredients, balanced meals, and convenient delivery to help you 
              maintain a healthy lifestyle without the hassle.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-teal-500 flex items-center justify-center">
              <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
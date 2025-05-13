
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-cyber-gradient relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-vr-blue-dark/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-vr-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            VR <span className="text-vr-neon ">Design</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience reality reimagined with our state-of-the-art VR headsets,
            engineered for comfort and immersion.
          </p>
        </div>
        
        {/* Product 1 - Image on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-3xl  mb-4 text-white">
              Wear it with ease and comfort
            </h3>
            <p className="text-gray-300 mb-6">
              Our VR headsets are designed with extended play sessions in mind. 
              The ergonomic fit distributes weight evenly, preventing neck strain 
              during long immersive experiences, while breathable materials keep you 
              cool and comfortable.
            </p>
            {/*}
            <button className="group flex items-center font-semibold text-vr-neon hover:text-white transition-colors">
              Learn More 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>*/}
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-vr-neon/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" 
                alt="Person wearing VR headset" 
                className="relative z-10 rounded-lg border border-vr-neon/30 shadow-neon"
                width="500"
              />
            </div>
          </div>
        </div>
        
        {/* Product 2 - Image on the left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-vr-neon/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&auto=format&fit=crop" 
                alt="VR headset" 
                className="relative z-10 rounded-lg border border-vr-neon/30 shadow-neon"
                width="500"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl md:text-3xl  mb-4 text-white">
              A fitting design
            </h3>
            <p className="text-gray-300 mb-6">
              Experience crystal-clear visuals with our high-resolution displays 
              that eliminate the screen door effect. Precise motion tracking ensures 
              your movements translate instantly into the virtual world, 
              creating a truly immersive experience.
            </p>
            {/*<button className="group flex items-center font-semibold text-vr-neon hover:text-white transition-colors">
              Learn More 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

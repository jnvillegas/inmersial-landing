
import React from 'react';

const controlFeatures = [
  {
    id: 1,
    title: "Touchpad",
    description: "Intuitive multi-touch surface for precise navigation and gesture controls in virtual environments."
  },
  {
    id: 2,
    title: "Back home key",
    description: "Quick access button to return to the main menu or home environment from any application."
  },
  {
    id: 3,
    title: "Volume key",
    description: "Convenient sound adjustment without removing the headset for uninterrupted immersion."
  },
  {
    id: 4,
    title: "Trigger",
    description: "Responsive trigger button for selection and interaction within the virtual world."
  }
];

const ControllerSection = () => {
  return (
    <section className="py-20 bg-cyber-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-vr-neon neon-glow">Controller</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Immerse yourself with precision control and intuitive design that brings virtual interactions to life.
          </p>
        </div>
        
        {/* Controller main features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Control comes naturally
            </h3>
            <p className="text-gray-300 mb-6">
              Experience intuitive control with our ergonomically designed controllers. 
              The balanced weight distribution and strategic button placement ensure 
              comfortable use over extended sessions. Precision tracking provides 
              1:1 movement mapping for the most responsive VR interactions available.
            </p>
            <button className="group flex items-center font-semibold text-vr-neon hover:text-white transition-colors">
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-vr-neon/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1547741133-5c143f6682f4?q=80&w=800&auto=format&fit=crop" 
                alt="VR Controller" 
                className="relative z-10 rounded-lg border border-vr-neon/30 shadow-neon"
                width="500"
              />
            </div>
          </div>
        </div>
        
        {/* Control instructions */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            How to control
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {controlFeatures.map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="w-16 h-16 bg-vr-neon/20 border border-vr-neon/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <span className="text-vr-neon text-xl font-bold">{feature.id}</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControllerSection;


import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const DemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const demoSteps = [
    {
      title: "Welcome to the VR Demo",
      description: "Get ready to experience a glimpse of our VR interface. Follow the guided tour to explore key features.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Navigation Controls",
      description: "Move your cursor to look around. Use the controller buttons to interact with objects in the virtual space.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Object Interaction",
      description: "Try interacting with the floating cubes by clicking on them. They respond to your input just like in real VR.",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const startDemo = () => {
    setShowDemo(true);
    setCurrentStep(0);
  };

  const closeDemo = () => {
    setShowDemo(false);
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowDemo(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-20 bg-cyber-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/5 w-60 h-60 bg-vr-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Try Our <span className="text-vr-neon neon-glow">Interactive Demo</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience a simplified version of our VR interface directly in your browser.
            No downloads required - just click and explore.
          </p>
        </div>
        
        {!showDemo ? (
          <div className="max-w-4xl mx-auto bg-card-gradient rounded-lg overflow-hidden border border-gray-800 shadow-lg">
            <div className="relative aspect-video bg-black">
              <img 
                src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop" 
                alt="VR Demo Preview" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vr-dark via-vr-dark/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button 
                  onClick={startDemo}
                  className="bg-vr-neon hover:bg-vr-neon/80 text-black font-semibold py-3 px-8 rounded-lg 
                            shadow-neon neon-button transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo
                </button>
                <p className="text-gray-400 mt-4 max-w-md text-center text-sm">
                  Experience a simplified version of our VR interface right in your browser
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-auto bg-card-gradient rounded-lg overflow-hidden border border-vr-neon/50 shadow-neon">
              <button 
                onClick={closeDemo}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{demoSteps[currentStep].title}</h3>
                <p className="text-gray-300 mb-8">{demoSteps[currentStep].description}</p>
                
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-8 border border-vr-neon/30">
                  <img 
                    src={demoSteps[currentStep].image} 
                    alt={demoSteps[currentStep].title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Interactive elements overlaid on the image */}
                  <div className="absolute inset-0">
                    {currentStep === 0 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-pulse-glow cursor-pointer w-16 h-16 rounded-full border-2 border-vr-neon flex items-center justify-center">
                          <div className="w-8 h-8 bg-vr-neon rounded-full"></div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 1 && (
                      <div className="absolute inset-0">
                        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-vr-neon/30 border border-vr-neon rounded-lg p-2 cursor-pointer hover:bg-vr-neon/50 transition-colors">
                            <span className="text-white font-semibold">Look Here</span>
                          </div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
                          <div className="bg-vr-neon/30 border border-vr-neon rounded-lg p-2 cursor-pointer hover:bg-vr-neon/50 transition-colors">
                            <span className="text-white font-semibold">Then Here</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 2 && (
                      <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 bg-vr-neon/50 rounded cursor-pointer hover:bg-vr-neon/70 transition-all duration-300 hover:scale-110"></div>
                        </div>
                        <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-12 h-12 bg-vr-purple/50 rounded cursor-pointer hover:bg-vr-purple/70 transition-all duration-300 hover:scale-110"></div>
                        </div>
                        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <div className="w-20 h-20 bg-blue-500/50 rounded cursor-pointer hover:bg-blue-500/70 transition-all duration-300 hover:scale-110"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-6 py-2 rounded-md font-medium ${
                      currentStep === 0
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex space-x-2">
                    {demoSteps.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === currentStep ? 'bg-vr-neon' : 'bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextStep}
                    className="px-6 py-2 bg-vr-neon text-black rounded-md font-medium hover:bg-vr-neon/90"
                  >
                    {currentStep < demoSteps.length - 1 ? 'Next' : 'Finish'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;

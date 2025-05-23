
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const DemoSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [];

  const startDemo = () => {
    setShowDemo(true);
    setCurrentStep(0);
  };

  const closeDemo = () => {
    setShowDemo(false);
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
            Pruebe nuestra <span className="text-vr-neon ">Demostración interactiva</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experimente una versión simplificada de nuestra interfaz de RV directamente en su navegador.
            No es necesario descargar nada: haz clic y explora.
          </p>
        </div>

        <div className=" inset-0 flex flex-col items-center justify-center">
          <button
            onClick={startDemo}
            className="bg-vr-neon hover:bg-vr-neon/80 text-black font-semibold py-3 px-8 rounded-lg 
                            shadow-neon neon-button transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Play className="mr-2 h-5 w-5" />
            Demo
          </button>

        </div>


        {!showDemo ? (
          <div className=""></div>
        ) : (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-[500px] h-[500px] max-w-4xl mx-auto bg-card-gradient rounded-lg overflow-hidden border border-vr-neon/50 shadow-neon">
              <button
                onClick={closeDemo}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8 ">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Solicita tu demo</h3>
                <form className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-vr-neon/30 focus:outline-none focus:border-vr-neon transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-vr-neon/30 focus:outline-none focus:border-vr-neon transition"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-vr-neon text-black font-semibold py-2 rounded hover:bg-vr-neon/90 transition"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;

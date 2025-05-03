
import React from 'react';

const gifts = [
  { id: 1, name: "Cosmos elite headset" },
  { id: 2, name: "2x VR controller" },
  { id: 3, name: "Mini DP to DP adapter" },
  { id: 4, name: "Mounting kit" },
  { id: 5, name: "2x Micro USB cable" },
];

const GiftBoxSection = () => {
  return (
    <section className="py-20 bg-cyber-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            You get lucky <span className="text-vr-neon neon-glow">gift</span> in the box
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-vr-neon/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1525832168623-69f8e96eb9af?q=80&w=800&auto=format&fit=crop" 
                alt="VR Headset Package" 
                className="relative z-10 rounded-lg border border-vr-neon/30 shadow-neon"
                width="500"
              />
            </div>
          </div>
          <div>
            <ul className="space-y-6">
              {gifts.map((gift) => (
                <li key={gift.id} className="flex items-center">
                  <div className="bg-vr-neon/20 border border-vr-neon/40 rounded-lg px-4 py-3 flex items-center w-full shadow-neon hover:shadow-neon-strong transition-shadow duration-300">
                    <span className="text-vr-neon font-bold mr-3">{gift.id}.</span>
                    <span className="text-white font-medium">{gift.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftBoxSection;

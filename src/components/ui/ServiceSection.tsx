
import React from 'react';
import { ThreeDCubeSphere, Users, Smartphone, ThreeSixty } from 'lucide-react';

const services = [
  {
    title: '3D Apps',
    description: 'Create immersive 3D applications for virtual reality environments with realistic physics and interactions.',
    icon: ThreeDCubeSphere,
  },
  {
    title: 'Tested with Users',
    description: 'All our products undergo extensive user testing to ensure an intuitive and comfortable experience.',
    icon: Users,
  },
  {
    title: 'Mobile Integration',
    description: 'Seamlessly integrate VR experiences with mobile devices for wider accessibility and convenience.',
    icon: Smartphone,
  },
  {
    title: '360° Virtual Tours',
    description: 'Develop immersive virtual tours with 360-degree views and interactive hotspots for exploration.',
    icon: ThreeSixty,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-cyber-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-vr-neon neon-glow">VR Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our range of virtual reality solutions designed to transform how you interact with digital content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="flex flex-col items-center">
                {/* Hexagon container with border */}
                <div className="relative mb-6 transition-transform duration-300 transform group-hover:scale-105">
                  <div className="hexagon w-32 h-32 bg-card-gradient border border-vr-neon/40 flex items-center justify-center shadow-neon group-hover:shadow-neon-strong transition-shadow duration-300">
                    <service.icon size={48} className="text-vr-neon" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-vr-neon transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center max-w-xs">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

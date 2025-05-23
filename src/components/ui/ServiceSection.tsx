
import { Box, Users, Smartphone, Eye } from 'lucide-react';

const services = [
  {
    title: 'Smart',
    description: 'Tecnología inteligente al servicio de tu marca. Analiza métricas y mejora la experiencia del usuario.',
    icon: Box,
  },
  {
    title: 'Plug & Play',
    description: 'Sin complicaciones técnicas: activa tu showroom en minutos. Inmersial se integra fácil y rápido, listo para usar.',
    icon: Users,
  },
  {
    title: 'User Friendly',
    description: 'Navegación intuitiva. Diseñada para ofrecer una experiencia envolvente, sin curvas de aprendizaje.',
    icon: Smartphone,
  },
  {
    title: 'Cross Platform',
    description: 'Tu recorrido 360° se adapta perfectamente a móviles, ordenadores y gafas VR, sin apps ni descargas.',
    icon: Eye,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-cyber-gradient bg-opacity-80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  mb-4 text-white font-bold">
          Genera conexiones únicas
          <span className="block text-vr-neon ">y optimiza tus ventas</span> 
          </h2>
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
                  <div className="hexagon w-36 h-36 bg-card-gradient  flex items-center justify-center shadow-neon group-hover:shadow-neon-strong transition-shadow duration-300">
                  <div className="hexagon w-32 h-32 bg-vr-blue-light/10 flex items-center justify-center">
                    <service.icon size={45} className="text-vr-neon" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl  mb-2 text-white group-hover:text-vr-neon transition-colors font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center max-w-xs text-sm">
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

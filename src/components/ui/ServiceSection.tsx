
import { useTranslation } from 'react-i18next';
import smartIcon from '/src/assets/2.png';
import plugIcon from '/src/assets/3.png';
import userIcon from '/src/assets/4.png';
import crossIcon from '/src/assets/5.png';
/*import plugIcon from '@/public/plug.png';
import userIcon from '@/public/user.png';
import crossIcon from '@/public/cross.png';*/




const ServiceSection = () => {
  
  const { t } = useTranslation();

  const services = [
  {
    title: t('service_smart_title'),
    description: t('service_smart_desc'),
    icon: smartIcon,
  },
  {
    title: t('service_plug_title'),
    description: t('service_plug_desc'),
    icon: plugIcon,
  },
  {
    title: t('service_user_title'),
    description: t('service_user_desc'),
    icon: userIcon,
  },
  {
    title: t('service_cross_title'),
    description: t('service_cross_desc'),
    icon: crossIcon,
  },
];

  return (
    <section id="services" className="py-20 bg-cyber-gradient bg-opacity-80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  mb-4 text-white font-bold">
            {t('services_title')}
          <span className="block text-vr-neon ">
             {t('services_subtitle')}
          </span>
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
                      <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
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

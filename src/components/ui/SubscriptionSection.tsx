
import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import ComparisonTool from './ComparisonTool';

const plans = [
  {
    id: 'starterMonthly',
    name: 'Starter',
    period: 'Monthly',
    price: '$9.99',
    interval: 'month',
    features: [
      'Access to basic VR experiences',
      'App store access',
      'Email support',
      '5GB cloud storage'
    ],
    popular: false
  },
  {
    id: 'starterAnnual',
    name: 'Starter',
    period: 'Annual',
    price: '$99.99',
    interval: 'year',
    features: [
      'Access to basic VR experiences',
      'App store access',
      'Email support',
      '5GB cloud storage',
      '2 months free'
    ],
    popular: false
  },
  {
    id: 'proMonthly',
    name: 'Professional',
    period: 'Monthly',
    price: '$29.99',
    interval: 'month',
    features: [
      'Access to all VR experiences',
      'Premium app store access',
      '24/7 priority support',
      '50GB cloud storage',
      'Custom environments',
      'Development tools',
      'Multi-user sessions'
    ],
    popular: true
  },
  {
    id: 'proAnnual',
    name: 'Professional',
    period: 'Annual',
    price: '$299.99',
    interval: 'year',
    features: [
      'Access to all VR experiences',
      'Premium app store access',
      '24/7 priority support',
      '50GB cloud storage',
      'Custom environments',
      'Development tools',
      'Multi-user sessions',
      '2 months free'
    ],
    popular: false
  }
];

const SubscriptionSection = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [activePlan, setActivePlan] = useState('');
  const [activeTab, setActiveTab] = useState<'Mensual' | 'Anual'>('Mensual');

  const filteredPlans = plans.filter(plan =>
    activeTab === 'Mensual' ? plan.period === 'Monthly' : plan.period === 'Annual'
  );

  return (
    <section id="pricing" className="py-20 bg-cyber-gradient/80 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-100 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-vr-blue-dark/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-vr-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6  relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-vr-neon ">Suscríbase</span> a VR Excellence
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Elige el plan perfecto para desbloquear tu viaje de realidad virtual. Todas las suscripciones incluyen acceso a nuestra biblioteca básica de aplicaciones y actualizaciones periódicas.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-2 rounded-t-md font-semibold transition-colors ${activeTab === 'Mensual'
                ? 'bg-vr-neon text-black shadow'
                : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            onClick={() => setActiveTab('Mensual')}
          >
            Mensual
          </button>
          <button
            className={`px-6 py-2 rounded-t-md font-semibold transition-colors ml-2 ${activeTab === 'Anual'
                ? 'bg-vr-neon text-black shadow'
                : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            onClick={() => setActiveTab('Anual')}
          >
            Anual
          </button>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-0 w-fit mx-auto ">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className={`w-[500px]  bg-card-gradient rounded-lg overflow-hidden border transition-all duration-300 ${
              activePlan === plan.id
                ? 'border-vr-neon shadow-neon transform scale-105'
                : plan.popular
                ? 'border-vr-neon/50 shadow-neon'
                : 'border-gray-800 hover:border-vr-neon/30 hover:shadow-neon'
            }`}
          >
            {plan.popular && (
              <div className="bg-vr-neon text-black py-1 px-4 text-xs font-bold text-center">
                MOST POPULAR
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.period}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">/ {plan.interval}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-vr-neon mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActivePlan(plan.id)}
                className={`w-full flex items-center justify-center py-2 px-4 rounded-md font-medium transition-colors ${
                  activePlan === plan.id || plan.popular
                    ? 'bg-vr-neon text-black hover:bg-vr-neon/90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>


      </div>
    </section>
  );
};

export default SubscriptionSection;

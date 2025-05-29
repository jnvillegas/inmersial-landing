
import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const plans = [
  {
    id: 'starterMonthly',
    name: ' Inmersial Starter Plan',
    period: 'Mensual',
    price: '$150',
    interval: 'mensual',
    features: [
      'subscription_features.360_tours_3',
      'subscription_features.immersive_videos_1',
      'subscription_features.landing_page_1',

    ],
    popular: false
  },
  {
    id: 'starterAnnual',
    name: 'Inmersial Starter Plan',
    period: 'Anual',
    price: '$135',
    originalPrice: '$150',
    discount: '10% de Descuento',
    interval: 'anual',
    features: [
      'subscription_features.360_tours_3',
      'subscription_features.immersive_videos_1',
      'subscription_features.landing_page_1',
    ],
    popular: false
  },
  {
    id: 'proMonthly',
    name: 'Inmersial Professional Plan',
    period: 'Mensual',
    price: '$135',
    interval: 'mensual',
    features: [
      'subscription_features.360_tours_10',
      'subscription_features.immersive_videos_5',
      'subscription_features.landing_page_unlimited',
      'subscription_features.basic_analytics'
    ],
    popular: false
  },
  {
    id: 'proAnnual',
    name: 'Inmersial Professional Plan',
    period: 'Anual',
    price: '$360',
    originalPrice: '$400',
    discount: '10% de Descuento',
    interval: 'anual',
    features: [
      'subscription_features.360_tours_10',
      'subscription_features.immersive_videos_5',
      'subscription_features.landing_page_unlimited',
      'subscription_features.basic_analytics'
    ],
    popular: false
  },
  {
    id: 'CorporateMonthly',
    name: 'Inmersial Corporate Plan',
    period: 'Mensual',
    price: 'subscription_contact_us',
    interval: 'mensual',
    features: [
      'subscription_features.360_tours_unlimited',
      'subscription_features.immersive_videos_unlimited',
      'subscription_features.landing_page_unlimited',
      'subscription_features.custom_analytics'
    ],
    popular: false
  },
  {
    id: 'CorporateAnnual',
    name: 'Inmersial Corporate Plan',
    period: 'Anual',
    price: 'subscription_contact_us',

    interval: 'anual',
    features: [
      'subscription_features.360_tours_unlimited',
      'subscription_features.immersive_videos_unlimited',
      'subscription_features.landing_page_unlimited',
      'subscription_features.custom_analytics'
    ],
    popular: false
  }


];



const SubscriptionSection = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [activePlan, setActivePlan] = useState('');
  const [activeTab, setActiveTab] = useState<'Mensual' | 'Anual'>('Mensual');

  const filteredPlans = plans.filter(plan =>
    activeTab === 'Mensual' ? plan.period === 'Mensual' : plan.period === 'Anual'
  );
  const { t } = useTranslation();

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
            {t('subscription_title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('subscription_intro')}
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
            {t('subscription_monthly')}
          </button>
          <button
            className={`px-6 py-2 rounded-t-md font-semibold transition-colors ml-2 ${activeTab === 'Anual'
              ? 'bg-vr-neon text-black shadow'
              : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            onClick={() => setActiveTab('Anual')}
          >
            {t('subscription_annual')}
          </button>
        </div>
        {/* Cards */}
        <div className="flex gap-8 mt-0 w-fit mx-auto">
          {filteredPlans.slice(0, 3).map((plan) => (
            <div
              key={plan.id}
              className={`w-[400px] bg-card-gradient rounded-lg overflow-hidden border transition-all duration-300 flex flex-col justify-between ${activePlan === plan.id
                ? 'border-vr-neon shadow-neon transform scale-105'
                : plan.popular
                  ? 'border-vr-neon/50 shadow-neon'
                  : 'border-gray-800 hover:border-vr-neon/30 hover:shadow-neon'
                }`}
            >
              {plan.popular && (
                <div className="bg-vr-neon text-black py-1 px-4 text-xs font-bold text-center">
                  {t('subscription_most_popular')}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                {/*<p className="text-gray-400 mb-4">{plan.period}</p>*/}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price.startsWith('subscription_') ? t(plan.price) : plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.interval}</span>
                  {activeTab === 'Anual' && plan.originalPrice && plan.discount && (
                    <div className="flex items-center mt-2 space-x-3">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-vr-neon font-semibold">{plan.discount}</span>
                    </div>
                  )}


                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-vr-neon mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button
                    onClick={() => setActivePlan(plan.id)}
                    className={`w-full flex items-center justify-center py-2 px-4 rounded-md font-medium transition-colors ${activePlan === plan.id || plan.popular
                      ? 'bg-vr-neon text-black hover:bg-vr-neon/90'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {t('subscription_subscribe')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SubscriptionSection;

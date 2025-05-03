
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

// Define plan features
const planFeatures = [
  { name: "Basic VR Experiences", starter: true, professional: true },
  { name: "Access to App Store", starter: true, professional: true },
  { name: "Technical Support", starter: "Email only", professional: "24/7 Phone & Email" },
  { name: "Cloud Storage", starter: "5GB", professional: "50GB" },
  { name: "Custom Environments", starter: false, professional: true },
  { name: "Development Tools", starter: false, professional: true },
  { name: "Content Creation", starter: false, professional: true },
  { name: "Commercial License", starter: false, professional: true },
  { name: "Multi-user Sessions", starter: false, professional: true }
];

const ComparisonTool = ({ setActivePlan }: { setActivePlan: (plan: string) => void }) => {
  const [visiblePlans, setVisiblePlans] = useState({
    starterMonthly: true,
    starterAnnual: true,
    proMonthly: true,
    proAnnual: true
  });

  const togglePlan = (plan: keyof typeof visiblePlans) => {
    setVisiblePlans({
      ...visiblePlans,
      [plan]: !visiblePlans[plan]
    });
  };

  return (
    <div className="mt-10 bg-vr-darker/60 border border-vr-neon/30 rounded-lg overflow-hidden backdrop-blur-sm shadow-neon">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-white">Compare Plans</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            onClick={() => togglePlan('starterMonthly')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${visiblePlans.starterMonthly 
              ? 'bg-vr-neon/20 border border-vr-neon/50 text-vr-neon' 
              : 'bg-gray-800/50 border border-gray-700 text-gray-400'}`}
          >
            Starter Monthly
          </button>
          <button 
            onClick={() => togglePlan('starterAnnual')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${visiblePlans.starterAnnual 
              ? 'bg-vr-neon/20 border border-vr-neon/50 text-vr-neon' 
              : 'bg-gray-800/50 border border-gray-700 text-gray-400'}`}
          >
            Starter Annual
          </button>
          <button 
            onClick={() => togglePlan('proMonthly')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${visiblePlans.proMonthly 
              ? 'bg-vr-neon/20 border border-vr-neon/50 text-vr-neon' 
              : 'bg-gray-800/50 border border-gray-700 text-gray-400'}`}
          >
            Professional Monthly
          </button>
          <button 
            onClick={() => togglePlan('proAnnual')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${visiblePlans.proAnnual 
              ? 'bg-vr-neon/20 border border-vr-neon/50 text-vr-neon' 
              : 'bg-gray-800/50 border border-gray-700 text-gray-400'}`}
          >
            Professional Annual
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-gray-400 font-medium w-1/3">Features</th>
                {visiblePlans.starterMonthly && (
                  <th className="text-center py-4 px-2 text-white">
                    <div>Starter Monthly</div>
                    <div className="text-vr-neon font-bold mt-1">$9.99/mo</div>
                  </th>
                )}
                {visiblePlans.starterAnnual && (
                  <th className="text-center py-4 px-2 text-white">
                    <div>Starter Annual</div>
                    <div className="text-vr-neon font-bold mt-1">$99.99/yr</div>
                    <div className="text-xs text-vr-neon bg-vr-neon/10 rounded-full px-2 py-0.5 inline-block mt-1">Save 17%</div>
                  </th>
                )}
                {visiblePlans.proMonthly && (
                  <th className="text-center py-4 px-2 text-white">
                    <div>Professional Monthly</div>
                    <div className="text-vr-neon font-bold mt-1">$29.99/mo</div>
                  </th>
                )}
                {visiblePlans.proAnnual && (
                  <th className="text-center py-4 px-2 text-white">
                    <div>Professional Annual</div>
                    <div className="text-vr-neon font-bold mt-1">$299.99/yr</div>
                    <div className="text-xs text-vr-neon bg-vr-neon/10 rounded-full px-2 py-0.5 inline-block mt-1">Save 17%</div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 px-4 text-white">{feature.name}</td>
                  {visiblePlans.starterMonthly && (
                    <td className="text-center py-4 px-2">
                      {feature.starter === true ? (
                        <Check className="inline-block text-green-400 h-5 w-5" />
                      ) : feature.starter === false ? (
                        <X className="inline-block text-red-400 h-5 w-5" />
                      ) : (
                        <span className="text-gray-300">{feature.starter}</span>
                      )}
                    </td>
                  )}
                  {visiblePlans.starterAnnual && (
                    <td className="text-center py-4 px-2">
                      {feature.starter === true ? (
                        <Check className="inline-block text-green-400 h-5 w-5" />
                      ) : feature.starter === false ? (
                        <X className="inline-block text-red-400 h-5 w-5" />
                      ) : (
                        <span className="text-gray-300">{feature.starter}</span>
                      )}
                    </td>
                  )}
                  {visiblePlans.proMonthly && (
                    <td className="text-center py-4 px-2">
                      {feature.professional === true ? (
                        <Check className="inline-block text-green-400 h-5 w-5" />
                      ) : feature.professional === false ? (
                        <X className="inline-block text-red-400 h-5 w-5" />
                      ) : (
                        <span className="text-gray-300">{feature.professional}</span>
                      )}
                    </td>
                  )}
                  {visiblePlans.proAnnual && (
                    <td className="text-center py-4 px-2">
                      {feature.professional === true ? (
                        <Check className="inline-block text-green-400 h-5 w-5" />
                      ) : feature.professional === false ? (
                        <X className="inline-block text-red-400 h-5 w-5" />
                      ) : (
                        <span className="text-gray-300">{feature.professional}</span>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visiblePlans.starterMonthly && (
            <button 
              onClick={() => setActivePlan('starterMonthly')}
              className="py-2 px-4 bg-transparent border border-vr-neon text-vr-neon rounded-lg hover:bg-vr-neon/10 transition-colors"
            >
              Choose Starter Monthly
            </button>
          )}
          {visiblePlans.starterAnnual && (
            <button 
              onClick={() => setActivePlan('starterAnnual')}
              className="py-2 px-4 bg-transparent border border-vr-neon text-vr-neon rounded-lg hover:bg-vr-neon/10 transition-colors"
            >
              Choose Starter Annual
            </button>
          )}
          {visiblePlans.proMonthly && (
            <button 
              onClick={() => setActivePlan('proMonthly')}
              className="py-2 px-4 bg-transparent border border-vr-neon text-vr-neon rounded-lg hover:bg-vr-neon/10 transition-colors"
            >
              Choose Pro Monthly
            </button>
          )}
          {visiblePlans.proAnnual && (
            <button 
              onClick={() => setActivePlan('proAnnual')}
              className="py-2 px-4 bg-transparent border border-vr-neon text-vr-neon rounded-lg hover:bg-vr-neon/10 transition-colors"
            >
              Choose Pro Annual
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;

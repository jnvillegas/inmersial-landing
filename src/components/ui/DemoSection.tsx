
import  { useState } from 'react';
import { useTranslation } from 'react-i18next';


const DemoSection = () => {
    const { t } = useTranslation();

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
            {t('demo_title')}
            <span className="text-vr-neon "><br></br>
              {t('demo_title_highlight')}</span>
          </h2>
          <p className="text-gray-300 w-[30vw] mx-auto">
            {t('demo_subtitle')}
          </p>
        </div>

        <div className=" inset-0 flex flex-col items-center justify-center">
          <button
            onClick={startDemo}
            className="bg-inmersial-light-blue hover:bg-inmersial-cyan text-black font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center shadow"
          >
           
           {t('demo_button')}
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
                
              </button>

              <div className="p-8 ">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('demo_form_title')}</h3>
                <form className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">{t('demo_form_name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-vr-neon/30 focus:outline-none focus:border-vr-neon transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">{t('demo_form_email')}</label>
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
                    {t('demo_form_send')}
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

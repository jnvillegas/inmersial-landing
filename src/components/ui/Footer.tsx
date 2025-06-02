
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';


const Footer = () => {
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

    <footer className="bg-inmersial-dark-blue relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzEzMjAzNiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMTMyMDM2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">

              <div className="flex items-center">
                <div className="flex items-center">
                  <img className="h-auto w-[250px]" src="/22 - IsoLogo vBlanco Horizontal (1).png" />
                </div>
              </div>
            </div>
            <p className="text-gray-400  text-sm mb-6 w-[350px]"> {t('footer.footer_subtitle')} </p>
            <p className="text-gray-400 text-sm mb-6"> Smart, Plug & Play, Cross Platform, User Friendly </p>

            <div className="">
              <div><p className="text-gray-400 text-sm mb-3">{t('footer.footer_listen_spotify')} </p> </div>
              <div className="flex items-center space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              {/*}
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
             */}
            </div>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6"></h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#products" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#services" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6"></h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
              <li><a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors"></a></li>
            </ul>
          </div>

          <div className='ml-20'>
            <h3 className="pt-2 text-white font-semibold mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 text-sm">contacto@griftin.com.ar</li>
              <li className="text-gray-400 text-sm">{t('footer.request_demo')}</li>


              {/**/}

              <div className="container mx-auto px-6 z-10 relative">


                <div className=" inset-0 flex flex-col items-center justify-center space-y-4">
                  <button
                    onClick={startDemo}
                    className="bg-inmersial-light-blue hover:bg-inmersial-cyan text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center shadow"
                  >

                    {t('footer.footer_demo_form_send')}
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
                              x
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
                            {t('footer.footer_demo_form_send')}

                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>



            </ul>

          </div>
        </div>

        <div className="border-t border-white-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {t('footer.footer_copyright')}
          </p>
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.terms')}  | {t('footer.privacy')}
          </p>

          <p className="flex  pt-2 text-gray-400 text-sm ">
            Powered by<div className="">
              <img className="h-auto w-[100px]" src="/src/assets/GRIFTIN-logo.png" />
            </div>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

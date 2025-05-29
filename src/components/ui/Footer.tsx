
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ShoppingCart } from 'lucide-react';

const Footer = () => {
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
            <p className="text-gray-400 mb-6"> The future of sales is here! </p>
            <p className="text-gray-400 mb-6"> Smart, Plug & Play, Cross Platform, User Friendly </p>

            <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-inmersial-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
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

          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400">contacto@griftin.com.ar</li>
              <li className="text-gray-400">Solicita tu demo gratuita</li><button className="bg-gradient-to-r from-inmersial-light-blue to-inmersial-cyan hover:opacity-90 text-inmersial-dark-blue font-semibold py-2 px-4 rounded-md shadow-inmersial neon-button transition-all duration-300 flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now
            </button>
              <li className="text-gray-400">Powered by</li> <div className="flex items-center">
                  <img className="h-auto w-[250px]" src="/22 - IsoLogo vBlanco Horizontal (1).png" />
                </div>
            </ul>
            
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 INMERSIAL. All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ShoppingCart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vr-darker relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzEzMjAzNiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMTMyMDM2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">NEXUS VR</h3>
            <p className="text-gray-400 mb-6">
              Experience reality reimagined with our cutting-edge VR technology.
              Dive into an ever-evolving digital realm where creativity knows no bounds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-vr-neon transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-vr-neon transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-vr-neon transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vr-neon transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400">1234 VR Street</li>
              <li className="text-gray-400">Tech City, TC 98765</li>
              <li className="text-gray-400">support@nexusvr.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
            <button className="bg-vr-neon hover:bg-vr-neon/80 text-black font-semibold py-2 px-4 rounded-md shadow-neon neon-button transition-all duration-300 flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 NEXUS VR. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-vr-neon transition-colors text-sm">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

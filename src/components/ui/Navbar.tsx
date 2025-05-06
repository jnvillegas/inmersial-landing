
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-inmersial-dark-blue to-transparent py-4 px-6 md:px-10 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 relative mr-2">
              <div className="absolute inset-0 rounded-full border-2 border-white"></div>
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-inmersial-light-blue to-inmersial-cyan"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-0 h-0 
                            border-l-[8px] border-l-transparent 
                            border-t-[10px] border-t-inmersial-dark-blue 
                            border-r-[8px] border-r-transparent">
              </div>
            </div>
            <h1 className="text-2xl font-bold font-spartan">
              <span className="bg-gradient-to-r from-inmersial-light-blue to-white bg-clip-text text-transparent">IN</span>
              <span className="text-white">MERSIAL</span>
            </h1>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-white hover:text-inmersial-cyan transition-colors">Products</a>
          <a href="#services" className="text-white hover:text-inmersial-cyan transition-colors">Services</a>
          <a href="#pricing" className="text-white hover:text-inmersial-cyan transition-colors">Pricing</a>
          <a href="#contact" className="text-white hover:text-inmersial-cyan transition-colors">Support</a>
        </div>
        
        <div>
          <button className="bg-transparent border border-inmersial-light-blue text-inmersial-light-blue hover:bg-inmersial-light-blue/10 transition-colors py-2 px-4 rounded-md flex items-center neon-button">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

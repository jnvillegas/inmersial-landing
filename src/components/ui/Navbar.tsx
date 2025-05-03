
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-vr-darker to-transparent py-4 px-6 md:px-10 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-orbitron text-vr-neon neon-glow">NEXUS VR</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-white hover:text-vr-neon transition-colors">Products</a>
          <a href="#services" className="text-white hover:text-vr-neon transition-colors">Services</a>
          <a href="#pricing" className="text-white hover:text-vr-neon transition-colors">Pricing</a>
          <a href="#contact" className="text-white hover:text-vr-neon transition-colors">Support</a>
        </div>
        
        <div>
          <button className="bg-transparent border border-vr-neon text-vr-neon hover:bg-vr-neon/10 transition-colors py-2 px-4 rounded-md flex items-center neon-button">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

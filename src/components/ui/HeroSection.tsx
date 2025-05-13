
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-10 flex items-center justify-center overflow-hidden bg-cyber-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-inmersial-light-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-inmersial-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-inmersial-light-blue/10 rounded-full filter blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzEzMjAzNiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNIDYwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjMTMyMDM2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto py-20 px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          Create Interactive
          <span className="block text-inmersial-light-blue ">VR Experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Dive into an ever-evolving digital realm where your creativity knows no bounds. 
          Experience a world beyond reality with our cutting-edge VR technology.
        </p>
        {/*}
        <button className="bg-blue-900  hover:opacity-90 text-inmersial-white font-semibold py-2 px-12 rounded-sm 
                         shadow-inmersial  transition-all duration-300 transform hover:scale-105">
          Buy Now
        </button>*/}
        
        <div className="mt-20 max-w-6xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-inmersial-light-blue/30 rounded-full animate-rotate-slow opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-inmersial-light-blue/20 rounded-full animate-rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-inmersial-light-blue/30 rounded-lg p-1 shadow-inmersial relative overflow-hidden">
            <div className="w-full rounded h-[400px] bg-gradient-to-b from-inmersial-dark-blue/40 to-inmersial-light-blue/40 flex items-center justify-center">
              {/*<div className="text-inmersial-cyan font-bold text-2xl">https://designer.inmersial.com.ar/player/1qGjbzBZYtVwzWxe8UxiximUt6pip59Ci</div>*/}
              <iframe className="w-full h-full aspect-auto " src="https://designer.inmersial.com.ar/player/1qGjbzBZYtVwzWxe8UxiximUt6pip59Ci"></iframe>

            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-vr-dark to-transparent opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

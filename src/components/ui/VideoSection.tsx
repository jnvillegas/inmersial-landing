
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-cyber-gradient relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden shadow-neon border border-vr-neon/30">
          {/* Video thumbnail with overlay */}
          <div className="relative aspect-video bg-black">
            {/* Background holographic VR head illustration */}
            <div className="absolute inset-0 flex items-center justify-center bg-vr-darker">
              <div className="w-full h-full absolute">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 max-w-3xl relative animate-pulse-glow">
                    <div className="absolute inset-0 bg-vr-neon/5 rounded-full filter blur-3xl"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&auto=format&fit=crop" 
                      alt="VR Holographic Interface" 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vr-dark via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Play button with glow effect */}
              <button className="relative z-10 group">
                <div className="absolute inset-0 bg-vr-neon/20 rounded-full blur-xl group-hover:bg-vr-neon/40 transition-all duration-300"></div>
                <div className="relative flex items-center justify-center bg-vr-neon/20 border border-vr-neon rounded-full w-20 h-20 backdrop-blur-sm group-hover:bg-vr-neon/30 transition-all duration-300">
                  <div className="flex items-center">
                    <Play className="h-8 w-8 text-white fill-white" />
                    <span className="text-white font-orbitron ml-1">Video</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

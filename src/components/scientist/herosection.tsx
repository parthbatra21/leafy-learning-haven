
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, TestTubes, Dna, Microscope, Beaker } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Generate random stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`
      };
      stars.push(<div key={i} className={`absolute w-1 h-1 bg-white rounded-full animate-twinkle`} style={style}></div>);
    }
    return stars;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-science-atom to-blue-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {generateStars()}
        
        {/* Animated molecules */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-20 h-20 relative">
            <div className="absolute w-8 h-8 bg-science-atom/30 rounded-full"></div>
            <div className="absolute top-4 left-12 w-6 h-6 bg-science-flask/30 rounded-full"></div>
            <div className="absolute top-10 left-4 w-7 h-7 bg-science-dna/30 rounded-full"></div>
            
            {/* Electron orbits */}
            <div className="absolute top-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border border-white/10 rounded-full"></div>
            
            {/* Electrons */}
            <div 
              className="absolute top-0 left-10 w-2 h-2 bg-yellow-300 rounded-full" 
              style={{ 
                animation: 'orbit 3s linear infinite',
                transformOrigin: 'center',
transform: `translateX(8px)`
              }}
            ></div>
            <div 
              className="absolute top-10 left-16 w-2 h-2 bg-yellow-300 rounded-full" 
              style={{ 
                animation: 'orbit 4s linear infinite',
                transformOrigin: 'center',
transform: `translateX(8px)`
              }}
            ></div>
          </div>
        </div>
        
        <div className="absolute top-2/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 relative">
            <div className="absolute w-10 h-10 bg-science-beaker/30 rounded-full"></div>
            <div className="absolute top-6 left-14 w-8 h-8 bg-science-microscope/30 rounded-full"></div>
            <div className="absolute top-12 left-5 w-9 h-9 bg-science-lab/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Central content - Updated header styles */}
      <div className="text-center z-10 p-6 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="block mb-4 bg-gradient-to-r from-science-chemical to-science-flask bg-clip-text text-transparent">
            Science of Learning
          </span>
          <div className="mt-4 inline-flex bg-science-atom/20 backdrop-blur-sm rounded-lg p-2">
            <span className="text-white px-4 py-2">B</span>
            <span className="text-white px-4 py-2">L</span>
            <span className="text-white px-4 py-2">O</span>
            <span className="text-white px-4 py-2">O</span>
            <span className="text-white px-4 py-2">M</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-science-chemical">
          Explore the laboratory of knowledge with
          <br />
          <span className="font-bold text-science-beaker">interactive experiments for young scientists!</span>
        </p>
        
        <Button 
          onClick={scrollToContent} 
          size="lg" 
          className="mt-8 animate-pulse bg-gradient-to-r from-science-atom to-science-flask hover:from-science-beaker hover:to-science-dna text-white"
        >
          Enter Lab <TestTubes className="ml-2" />
        </Button>
      </div>

      {/* Floating lab equipment */}
      <div className="absolute bottom-20 left-20 animate-float">
        <div className="test-tube w-8 h-16 bg-blue-100/20 rounded-t-lg relative overflow-hidden border-2 border-blue-200">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-science-flask/40"></div>
          <div className="absolute bottom-2 left-3 w-2 h-2 bg-white/40 rounded-full animate-rise"></div>
        </div>
      </div>
      
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="microscope-mini relative w-12 h-16">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-400"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

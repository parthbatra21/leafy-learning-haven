import React from 'react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Generate random stars/particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 150; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`
      };
      particles.push(<div key={i} className={`absolute w-1 h-1 bg-white rounded-full animate-twinkle`} style={style}></div>);
    }
    return particles;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {generateParticles()}
        
        {/* Animated medical elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-20 h-20 relative">
            <div className="absolute w-8 h-8 bg-red-400/30 rounded-full"></div>
            <div className="absolute top-4 left-12 w-6 h-6 bg-blue-400/30 rounded-full"></div>
            <div className="absolute top-10 left-4 w-7 h-7 bg-green-400/30 rounded-full"></div>
            
            {/* Medical symbol orbits */}
            <div className="absolute top-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border border-white/10 rounded-full"></div>
            
            {/* Medical symbols */}
            <div 
              className="absolute top-0 left-10 w-2 h-2 bg-red-300 rounded-full" 
              style={{ 
                animation: 'orbit 3s linear infinite',
                transformOrigin: 'center',
                transform: `translateX(8px)`
              }}
            ></div>
            <div 
              className="absolute top-10 left-16 w-2 h-2 bg-red-300 rounded-full" 
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
            <div className="absolute w-10 h-10 bg-purple-400/30 rounded-full"></div>
            <div className="absolute top-6 left-14 w-8 h-8 bg-blue-400/30 rounded-full"></div>
            <div className="absolute top-12 left-5 w-9 h-9 bg-green-400/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Central content */}
      <div className="text-center z-10 p-6 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="block mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dr. Discover's Body Adventure
          </span>
          <div className="mt-4 inline-flex bg-blue-500/20 backdrop-blur-sm rounded-lg p-2">
            <span className="text-white px-4 py-2">B</span>
            <span className="text-white px-4 py-2">L</span>
            <span className="text-white px-4 py-2">O</span>
            <span className="text-white px-4 py-2">O</span>
            <span className="text-white px-4 py-2">M</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-100">
          Explore the amazing human body with
          <br />
          <span className="font-bold text-blue-200">interactive learning for young doctors!</span>
        </p>
        
        <button 
          onClick={scrollToContent} 
          className="mt-8 animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium"
        >
          Start Exploring
        </button>
      </div>

      {/* Floating medical equipment */}
      <div className="absolute bottom-20 left-20 animate-float">
        <div className="stethoscope w-12 h-16 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-10 bg-gray-400"></div>
        </div>
      </div>
      
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="medical-cross relative w-12 h-12">
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-red-500 transform -translate-y-1/2 rounded-full"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-red-500 transform -translate-x-1/2 rounded-full"></div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(12px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection; 
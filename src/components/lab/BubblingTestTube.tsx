import React from 'react';

interface BubblingTestTubeProps {
  progress?: number;
}

const BubblingTestTube: React.FC<BubblingTestTubeProps> = ({ progress = 50 }) => {
  return (
    <div className="test-tube w-16 h-32 bg-blue-100/20 rounded-t-lg relative overflow-hidden border-2 border-blue-200">
      {/* Liquid with bubbles */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-400/40 transition-all duration-1000"
        style={{ height: `${progress}%` }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/40 rounded-full animate-rise"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing liquid effect */}
      <div className="absolute inset-0 bg-blue-400/10 animate-pulse"></div>
    </div>
  );
};

export default BubblingTestTube;
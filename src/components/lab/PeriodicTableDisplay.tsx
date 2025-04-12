import React from 'react';

const PeriodicTableDisplay: React.FC = () => {
  return (
    <div className="periodic-display w-64 h-64 relative bg-black/20 rounded-lg overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Floating elements */}
      {['H', 'O', 'C', 'Na', 'Cl'].map((element, i) => (
        <div 
          key={element}
          className="absolute w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center text-xl font-bold border-2 border-purple-300/30 animate-element-float"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {element}
          <div className="electron absolute w-2 h-2 bg-yellow-300 rounded-full"></div>
        </div>
      ))}
      
      {/* Animated electron trails */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-electron-trail"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PeriodicTableDisplay;
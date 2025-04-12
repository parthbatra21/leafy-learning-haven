import React, { useState, useEffect } from 'react';

const InteractiveMicroscope: React.FC = () => {
  const [isRotating, setIsRotating] = useState(false);
  
  const startRotating = () => setIsRotating(true);
  const stopRotating = () => setIsRotating(false);
  
  useEffect(() => {
    if (isRotating) {
      document.addEventListener('mouseup', stopRotating);
      document.addEventListener('touchend', stopRotating);
      
      return () => {
        document.removeEventListener('mouseup', stopRotating);
        document.removeEventListener('touchend', stopRotating);
      };
    }
  }, [isRotating]);
  
  return (
    <div className="microscope relative w-24 h-32">
      {/* Base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-full"></div>
      
      {/* Arm */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-24 bg-gray-400"></div>
      
      {/* Eyepiece */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full group hover:rotate-45 transition-transform">
        <div className="absolute inset-0 rounded-full border-2 border-gray-500"></div>
        {/* Lens glare */}
        <div className="absolute top-1 left-1 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      {/* Stage with moving slide */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-8 bg-gray-200 rounded-lg overflow-hidden">
        <div className="animate-slide-movement absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20">
          <div className="cell-pattern absolute inset-0 bg-repeat bg-[length:10px_10px] opacity-40"></div>
        </div>
      </div>
      
      {/* Interactive focus knob */}
      <div 
        className={`absolute top-20 right-0 w-6 h-6 bg-yellow-400 rounded-full cursor-grab hover:scale-110 transition-transform ${isRotating ? 'rotate-12' : ''}`}
        onMouseDown={startRotating}
        onTouchStart={startRotating}
      >
        <div className="absolute inset-0.5 bg-yellow-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default InteractiveMicroscope;
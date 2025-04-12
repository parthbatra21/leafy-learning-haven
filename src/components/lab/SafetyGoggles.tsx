import React, { useState } from 'react';

const SafetyGoggles: React.FC = () => {
  const [deployed, setDeployed] = useState(false);
  
  return (
    <div 
      className="safety-goggles relative w-20 h-10 cursor-pointer"
      onClick={() => setDeployed(!deployed)}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${deployed ? 'scale-110' : ''}`}>
        <div className="absolute top-0 left-0 right-0 h-2 bg-blue-300 rounded-t-lg"></div>
        <div className="flex space-x-1">
          <div className="w-9 h-8 bg-blue-200/50 rounded-full border-2 border-blue-300"></div>
          <div className="w-9 h-8 bg-blue-200/50 rounded-full border-2 border-blue-300"></div>
        </div>
      </div>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold bg-yellow-300 px-2 py-0.5 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100">
        {deployed ? "Safety On!" : "Click Me!"}
      </div>
    </div>
  );
};

export default SafetyGoggles;
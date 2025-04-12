import React from 'react';

const BunsenBurner: React.FC = () => {
  return (
    <div className="relative w-12 h-20">
      {/* Gas nozzle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-gray-400 rounded-t-lg"></div>
      
      {/* Animated flame */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-16">
        <div className="animate-flame absolute w-full h-full bg-gradient-to-b from-yellow-400 to-orange-600 rounded-full blur-sm"></div>
        <div className="animate-flame-delayed absolute w-full h-full bg-gradient-to-b from-yellow-300 to-orange-500 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default BunsenBurner;
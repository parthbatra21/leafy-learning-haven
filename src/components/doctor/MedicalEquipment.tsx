import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Medical Stethoscope Component
export const Stethoscope = () => (
  <div className="stethoscope relative w-14 h-20">
    {/* Earpieces */}
    <div className="flex justify-between w-10 mx-auto">
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    </div>
    
    {/* Tubing */}
    <div className="w-1 h-10 bg-gray-400 mx-auto"></div>
    
    {/* Y-junction */}
    <div className="w-6 h-2 bg-gray-400 rounded-full mx-auto"></div>
    
    {/* Main tube */}
    <div className="w-1 h-6 bg-gray-400 mx-auto"></div>
    
    {/* Chest piece */}
    <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto">
      <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto mt-1"></div>
    </div>
  </div>
);

// Syringe Component with Animated Liquid
export const AnimatedSyringe = ({ progress = 50 }) => (
  <div className="syringe relative w-12 h-24">
    {/* Plunger */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-3 bg-gray-300 rounded-t-sm"></div>
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-8 bg-gray-400"></div>
    
    {/* Barrel */}
    <div className="absolute top-11 left-1/2 -translate-x-1/2 w-6 h-10 bg-white/30 border border-gray-300 rounded-sm overflow-hidden">
      {/* Liquid */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-400/60 transition-all duration-500"
        style={{ height: `${progress}%` }}
      >
        {/* Bubbles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 rounded-full"
            animate={{ 
              y: [0, -20],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              left: `${Math.random() * 80 + 10}%`,
              bottom: `${Math.random() * 50}%`
            }}
          />
        ))}
      </div>
      
      {/* Measurement lines */}
      <div className="absolute inset-0 flex flex-col justify-around items-end pr-1">
        <div className="w-2 h-px bg-gray-400"></div>
        <div className="w-2 h-px bg-gray-400"></div>
        <div className="w-2 h-px bg-gray-400"></div>
      </div>
    </div>
    
    {/* Needle */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-300"></div>
  </div>
);

// Thermometer with Temperature Reading
export const Thermometer = ({ temperature = 37.5 }) => {
  // Calculate color and height based on temperature
  // Normal body temperature is around 37°C
  const getColor = () => {
    if (temperature < 36) return 'bg-blue-500';
    if (temperature > 38) return 'bg-red-500';
    return 'bg-green-500';
  };
  
  const getHeight = () => {
    // Scale between 0 and 100%
    const min = 35; // Hypothermia
    const max = 42; // Hyperpyrexia
    const percentage = ((temperature - min) / (max - min)) * 100;
    return `${Math.max(0, Math.min(100, percentage))}%`;
  };
  
  return (
    <div className="thermometer relative w-6 h-24">
      {/* Bulb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-100 rounded-full overflow-hidden">
        <div className={`absolute inset-0 ${getColor()} rounded-full scale-90`}></div>
      </div>
      
      {/* Stem */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3 h-16 bg-gray-100 rounded-t-lg overflow-hidden">
        {/* Mercury/Alcohol */}
        <div 
          className={`absolute bottom-0 left-0 right-0 ${getColor()} transition-all duration-1000`}
          style={{ height: getHeight() }}
        ></div>
        
        {/* Measurement lines */}
        <div className="absolute inset-0 flex flex-col justify-between items-end pr-1 py-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-1 h-px bg-gray-400"></div>
          ))}
        </div>
      </div>
      
      {/* Temperature display */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold">
        {temperature.toFixed(1)}°C
      </div>
    </div>
  );
};

// Medical Face Mask
export const FaceMask = () => (
  <div className="face-mask relative w-16 h-10">
    {/* Main mask */}
    <div className="absolute inset-0 bg-blue-100 rounded-lg"></div>
    
    {/* Pleats */}
    <div className="absolute top-2 left-0 right-0 h-px bg-blue-200"></div>
    <div className="absolute top-4 left-0 right-0 h-px bg-blue-200"></div>
    <div className="absolute top-6 left-0 right-0 h-px bg-blue-200"></div>
    <div className="absolute top-8 left-0 right-0 h-px bg-blue-200"></div>
    
    {/* Ear loops */}
    <div className="absolute top-2 -left-4 w-4 h-6 border-l-2 border-t-2 border-b-2 border-blue-200 rounded-l-full"></div>
    <div className="absolute top-2 -right-4 w-4 h-6 border-r-2 border-t-2 border-b-2 border-blue-200 rounded-r-full"></div>
  </div>
);

// First Aid Kit
export const FirstAidKit = ({ isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  
  return (
    <div 
      className="first-aid-kit relative w-16 h-14 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Main box */}
      <div className="absolute inset-0 bg-red-500 rounded-md shadow-md"></div>
      
      {/* White cross */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-white transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-white transform -translate-x-1/2"></div>
      </div>
      
      {/* Lid */}
      <motion.div 
        className="absolute inset-0 bg-red-600 rounded-t-md origin-bottom"
        animate={{ rotateX: open ? -110 : 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
      >
        {/* White cross on lid */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-white transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-white transform -translate-x-1/2"></div>
        </div>
      </motion.div>
      
      {/* Contents (visible when open) */}
      {open && (
        <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded">
          <div className="absolute top-1 left-3 w-4 h-1 bg-red-200 rounded"></div>
          <div className="absolute top-3 left-2 w-3 h-3 bg-blue-200 rounded-full"></div>
          <div className="absolute top-3 right-2 w-4 h-2 bg-green-200 rounded"></div>
          <div className="absolute bottom-1 left-2 w-3 h-1 bg-yellow-200 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default {
  Stethoscope,
  AnimatedSyringe,
  Thermometer,
  FaceMask,
  FirstAidKit
}; 
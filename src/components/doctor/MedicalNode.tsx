import React from 'react';
import { motion } from 'framer-motion';
import { MedicalNodeProps } from './types';
import MedicalProgress from './MedicalProgress';

const MedicalNode: React.FC<MedicalNodeProps> = ({ 
  title, 
  icon, 
  progress = 0,
  position,
  type
}) => {
  return (
    <motion.div 
      className="absolute" 
      style={{ 
        top: position.top, 
        left: position.left,
        right: position.right,
        bottom: position.bottom
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="relative group flex flex-col items-center">
        {/* Medical Icon */}
        <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20">
          {icon}
        </div>
        
        {/* Progress Visualization */}
        <motion.button 
          className="relative z-10 hover:scale-105 transition-transform"
          whileHover={{ y: -5 }}
        >
          <MedicalProgress progress={progress} type={type} />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
            {progress}%
          </div>
        </motion.button>

        {/* Label */}
        <motion.div
          className="absolute top-full mt-4 opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap z-20"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
        >
          {title}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MedicalNode; 
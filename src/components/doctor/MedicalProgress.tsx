import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Syringe, Stethoscope, Bone } from 'lucide-react';
import { MedicalProgressProps } from './types';

const MedicalProgress = ({ progress, type }: MedicalProgressProps) => (
  <motion.div 
    className="relative w-24 h-48 mx-auto"
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Medical equipment container */}
    <div className="absolute inset-0 bg-white/10 rounded-lg border-2 border-white/20 backdrop-blur-sm">
      {/* Progress visualization */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-400/40 transition-all duration-1000"
        style={{ height: `${progress}%` }}
      >
        {/* Animated elements based on type */}
        {type === 'syringe' && (
          Array.from({ length: Math.floor(progress/10) }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/40 rounded-full"
              animate={{ 
                bottom: '100%', 
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.8]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity
              }}
              style={{
                width: `4px`,
                height: `8px`,
                left: `${Math.random() * 80 + 10}%`,
              }}
            />
          ))
        )}
        
        {type === 'pill' && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Pill className="w-6 h-6 text-white" />
          </motion.div>
        )}
        
        {type === 'stethoscope' && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Stethoscope className="w-8 h-8 text-white" />
          </motion.div>
        )}
        
        {type === 'xray' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bone className="w-10 h-10 text-white" />
          </motion.div>
        )}
      </div>
    </div>
    
    {/* Equipment type visualization */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      {type === 'syringe' && <Syringe className="w-12 h-12 text-blue-400" />}
      {type === 'pill' && <Pill className="w-12 h-12 text-blue-400" />}
      {type === 'stethoscope' && <Stethoscope className="w-12 h-12 text-blue-400" />}
      {type === 'xray' && <Bone className="w-12 h-12 text-blue-400" />}
    </div>
  </motion.div>
);

export default MedicalProgress; 
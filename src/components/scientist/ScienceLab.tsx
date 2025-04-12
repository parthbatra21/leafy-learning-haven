import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  Atom,
  Microscope,
  Dna,
  Rocket,
  BrainCircuit,
  TestTube,
  Magnet,
  Leaf,
  BookOpen,
  CircuitBoard,
  Calculator,
  Clock,
  Beaker
} from 'lucide-react';

// Lab equipment components
const BunsenBurner = () => (
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

const BubblingTestTube = ({ progress = 50 }) => (
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

const InteractiveMicroscope = () => {
  const [isRotating, setIsRotating] = useState(false);
  
  const startRotating = () => setIsRotating(true);
  const stopRotating = () => setIsRotating(false);
  
  React.useEffect(() => {
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

// Update the PeriodicTableDisplay component
const PeriodicTableDisplay = () => (
  <div className="periodic-display w-64 h-64 relative bg-black/20 rounded-lg overflow-hidden">
    {/* Grid lines */}
    <div className="absolute inset-0 opacity-20"></div>
    
    {/* Floating elements */}
    {['H', 'O', 'C', 'Na', 'Cl'].map((element, i) => (
      <div 
        key={element}
        className="absolute w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center text-xl font-bold text-white border-2 border-blue-400/30 animate-element-float"
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

const SafetyGoggles = () => {
  const [deployed, setDeployed] = useState(false);
  
  return (
    <div 
      className="safety-goggles relative w-16 h-8 cursor-pointer"
      onClick={() => setDeployed(!deployed)}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${deployed ? 'scale-125' : ''}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-blue-300/50 rounded-t-full border-2 border-blue-400"></div>
        <div className="absolute bottom-0 left-0 w-6 h-4 bg-blue-300/50 rounded-full border-2 border-blue-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-4 bg-blue-300/50 rounded-full border-2 border-blue-400"></div>
      </div>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-red-500 px-1 rounded">
        {deployed ? 'SAFE' : 'CLICK!'}
      </div>
    </div>
  );
};

// First move the TestTubeProgress component to the top
const TestTubeProgress = ({ progress }: { progress: number }) => (
  <motion.div 
    className="relative w-40 h-96 mx-auto" // Increased from w-32 h-80
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Test tube glass */}
    <div className="absolute inset-0 bg-gray-200/20 rounded-t-lg border-2 border-gray-300/30 backdrop-blur-sm overflow-hidden">
      {/* Liquid level */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-400/40 transition-all duration-1000"
        style={{ height: `${progress}%` }}
      >
        {/* Bubbles */}
        {Array.from({ length: Math.max(1, Math.floor(progress/10)) }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/40 rounded-full"
            initial={{ bottom: '-10%', opacity: 0 }}
            animate={{ 
              bottom: '100%', 
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.8]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`, // Increased bubble size
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>
      
      {/* Liquid surface with meniscus effect */}
      <div 
        className="absolute w-full overflow-hidden" 
        style={{ 
          bottom: `${progress}%`,
          height: '10px' // Increased from 8px
        }}
      >
        <div className="animate-liquid-wave w-[200%] h-10 bg-blue-400/60 rounded-full relative left-[-50%]" />
      </div>
    </div>
    
    {/* Test tube neck */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gray-200/20 rounded-t-full border-2 border-gray-300/30" />
    
    {/* Glass reflection */}
    <div className="absolute top-0 right-0 w-5 h-full bg-white/10 rounded-tr-lg" />
  </motion.div>
);

// Then define interfaces before they're used
interface LabNodeProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  progress?: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  style?: React.CSSProperties;
}

interface ScienceLabProps {
  onNodeSelect: (subject: string) => void;
}

// Single LabNode component definition
const LabNode: React.FC<LabNodeProps> = ({ 
  title, 
  icon, 
  className, 
  onClick,
  progress = 0,
  position,
  style
}) => {
  return (
    <motion.div 
      className="absolute" 
      style={{ 
        top: position.top, 
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        ...style
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="relative group flex flex-col items-center">
        {/* Subject Icon */}
        <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20">
          {icon}
        </div>
        
        {/* Test Tube Progress */}
        <motion.button 
          onClick={onClick} 
          className={cn(
            "relative z-10 hover:scale-105 transition-transform",
            className
          )}
          whileHover={{ y: -5 }}
        >
          <TestTubeProgress progress={progress} />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold text-white bg-blue-500/70 px-2 py-0.5 rounded-full">
            {progress}%
          </div>
        </motion.button>

        {/* Label */}
        <div className="mt-4 text-white font-medium text-center">
          {title}
        </div>
      </div>
    </motion.div>
  );
};

// Main ScienceLab component
const ScienceLab: React.FC<ScienceLabProps> = ({ onNodeSelect }) => {
  return (
    <div className="relative min-h-screen w-full bg-blue-100 overflow-hidden p-8"> {/* Changed from bg-blue-950 to bg-blue-100 */}
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 to-blue-200/30" /> {/* Lighter gradient */}
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-500 rounded-full" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        ))}
      </div>
      
      {/* Main content - Changed to horizontal layout */}
      <div className="relative h-full w-full flex justify-center items-center">
        {/* Central DNA Animation */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <Dna className="w-32 h-32 text-blue-300/50" /> {/* Made more visible */}
        </motion.div>
        
        {/* Test tubes in a horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-center items-end gap-40 px-16"> 
          {/* Chemistry */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm border-2 border-blue-300/30">
              <FlaskConical className="w-12 h-12 text-blue-600" />
            </div>
            <motion.button 
              onClick={() => onNodeSelect('chemistry')}
              className="relative z-10 hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <TestTubeProgress progress={75} />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-base font-bold text-white bg-blue-500/70 px-3 py-1 rounded-full">
                75%
              </div>
              
              {/* Adjusted burner positioning */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-10">
                <BunsenBurner />
                <div className="mt-2 text-xs text-blue-700 text-center">Heating</div>
              </div>
            </motion.button>
            <div className="mt-6 text-blue-700 font-medium text-center text-lg">
              Chemistry
            </div>
          </div>
          
          {/* Physics */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm border-2 border-purple-300/30">
              <Atom className="w-12 h-12 text-purple-600" />
            </div>
            <motion.button 
              onClick={() => onNodeSelect('physics')}
              className="relative z-10 hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <TestTubeProgress progress={60} />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base font-bold text-white bg-purple-500/70 px-3 py-1 rounded-full">
                60%
              </div>
            </motion.button>
            <div className="mt-6 text-purple-700 font-medium text-center text-lg">
              Physics
            </div>
          </div>
          
          {/* Biology */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm border-2 border-green-300/30">
              <Dna className="w-12 h-12 text-green-600" />
            </div>
            <motion.button 
              onClick={() => onNodeSelect('biology')}
              className="relative z-10 hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <TestTubeProgress progress={45} />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base font-bold text-white bg-green-500/70 px-3 py-1 rounded-full">
                45%
              </div>
            </motion.button>
            <div className="mt-6 text-green-700 font-medium text-center text-lg">
              Biology
            </div>
          </div>
          
          {/* Astrophysics */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm border-2 border-indigo-300/30">
              <Rocket className="w-12 h-12 text-indigo-600" />
            </div>
            <motion.button 
              onClick={() => onNodeSelect('astrophysics')}
              className="relative z-10 hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <TestTubeProgress progress={35} />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base font-bold text-white bg-indigo-500/70 px-3 py-1 rounded-full">
                35%
              </div>
            </motion.button>
            <div className="mt-6 text-indigo-700 font-medium text-center text-lg">
              Astrophysics
            </div>
          </div>
        </div>
      </div>
      
      {/* Lab equipment container - Removed to focus on the test tubes */}
    </div>
  );
};

export default ScienceLab;
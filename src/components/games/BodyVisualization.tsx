// src/components/games/BodyVisualization.tsx
import { useState } from 'react';

interface BodyPart {
  id: string;
  name: string;
  description: string;
  learned: number;
}

interface BodyVisualizationProps {
  bodyParts: BodyPart[];
  updateProgress: (bodyPartId: string, value: number) => void;
}

const BodyVisualization = ({ bodyParts, updateProgress }: BodyVisualizationProps) => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePartClick = (partId: string) => {
    setSelectedPart(partId);
    setShowTooltip(true);
    updateProgress(partId, 5); // Increase learning progress when clicking on a body part
  };

  const getBodyPartPosition = (partId: string) => {
    // Define positions for each body part on the SVG
    switch (partId) {
      case 'brain': return 'top-16 left-1/2 transform -translate-x-1/2';
      case 'heart': return 'top-1/3 left-1/2 transform -translate-x-1/2';
      case 'lungs': return 'top-1/3 left-1/2 transform -translate-x-1/2 mt-6';
      case 'stomach': return 'top-1/2 left-1/2 transform -translate-x-1/2 mt-6';
      case 'bones': return 'bottom-16 left-1/2 transform -translate-x-1/2'; 
      case 'muscles': return 'top-1/2 left-1/4';
      default: return '';
    }
  };

  return (
    <div className="relative h-full">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Explore the Human Body</h2>
      <p className="mb-6">Click on different parts of the body to learn about them!</p>
      
      <div className="relative w-full h-96 md:h-128 bg-blue-50 rounded-lg overflow-hidden">
        {/* SVG Body Outline Container */}
        <div className="relative w-full h-full">
          {/* SVG of human body outline */}
          <svg viewBox="0 0 200 400" className="h-full mx-auto">
            {/* Simple body outline */}
            <path 
              d="M100,30 C130,30 150,60 150,80 C150,100 140,120 140,140 
                C140,160 150,180 150,220 C150,260 130,300 100,350 
                C70,300 50,260 50,220 C50,180 60,160 60,140 
                C60,120 50,100 50,80 C50,60 70,30 100,30z" 
              fill="#f3f4f6" 
              stroke="#60a5fa" 
              strokeWidth="2"
            />
            {/* Head */}
            <circle cx="100" cy="20" r="18" fill="#f3f4f6" stroke="#60a5fa" strokeWidth="2" />
            
            {/* Interactive body parts */}
            <circle 
              id="brain" 
              cx="100" cy="15" r="12" 
              fill={selectedPart === 'brain' ? '#93c5fd' : '#dbeafe'} 
              stroke="#3b82f6" 
              strokeWidth="1"
              className="cursor-pointer hover:fill-blue-300 transition-colors"
              onClick={() => handlePartClick('brain')}
            />
            
            <circle 
              id="heart" 
              cx="95" cy="100" r="10" 
              fill={selectedPart === 'heart' ? '#fca5a5' : '#fee2e2'}
              stroke="#ef4444" 
              strokeWidth="1"
              className="cursor-pointer hover:fill-red-300 transition-colors"
              onClick={() => handlePartClick('heart')}
            />
            
            <rect 
              id="lungs" 
              x="75" y="85" width="50" height="30" 
              rx="5" ry="5"
              fill={selectedPart === 'lungs' ? '#a5b4fc' : '#e0e7ff'}
              stroke="#6366f1" 
              strokeWidth="1"
              className="cursor-pointer hover:fill-indigo-300 transition-colors"
              onClick={() => handlePartClick('lungs')}
            />
            
            <ellipse 
              id="stomach" 
              cx="100" cy="150" rx="20" ry="15" 
              fill={selectedPart === 'stomach' ? '#fdba74' : '#ffedd5'}
              stroke="#f97316" 
              strokeWidth="1"
              className="cursor-pointer hover:fill-orange-300 transition-colors"
              onClick={() => handlePartClick('stomach')}
            />
            
            <path 
              id="bones" 
              d="M90,180 L90,300 M110,180 L110,300 M90,220 L110,220 M90,260 L110,260" 
              stroke={selectedPart === 'bones' ? '#a3a3a3' : '#e5e5e5'}
              strokeWidth="8" 
              strokeLinecap="round"
              className="cursor-pointer hover:stroke-gray-400 transition-colors"
              onClick={() => handlePartClick('bones')}
            />
            
            <path 
              id="muscles" 
              d="M75,200 C65,210 65,230 75,240 C85,250 85,270 75,280"
              stroke={selectedPart === 'muscles' ? '#f87171' : '#fecaca'}
              strokeWidth="10" 
              fill="none"
              strokeLinecap="round"
              className="cursor-pointer hover:stroke-red-400 transition-colors"
              onClick={() => handlePartClick('muscles')}
            />
            <path 
              id="muscles-right" 
              d="M125,200 C135,210 135,230 125,240 C115,250 115,270 125,280"
              stroke={selectedPart === 'muscles' ? '#f87171' : '#fecaca'}
              strokeWidth="10" 
              fill="none"
              strokeLinecap="round"
              className="cursor-pointer hover:stroke-red-400 transition-colors"
              onClick={() => handlePartClick('muscles')}
            />
          </svg>
          
          {/* Tooltip overlay */}
          {showTooltip && selectedPart && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs border-2 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {bodyParts.find(part => part.id === selectedPart)?.name}
              </h3>
              <p className="text-gray-700">
                {bodyParts.find(part => part.id === selectedPart)?.description}
              </p>
              <button 
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                onClick={() => {
                  updateProgress(selectedPart, 10);
                  setShowTooltip(false);
                }}
              >
                I learned this!
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold text-purple-700 mb-3">How Your Body Works</h3>
        <p className="text-gray-700 mb-3">
          Your body is like a super cool machine with many parts that work together! 
          Click on the different parts of the body above to learn what each part does.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-800">
            Fun Fact: Your heart beats about 100,000 times every day! That's more than a million times every year!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyVisualization;
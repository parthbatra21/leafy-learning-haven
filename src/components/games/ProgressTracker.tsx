// src/components/games/ProgressTracker.tsx
import { useEffect, useState } from 'react';

interface BodyPart {
  id: string;
  name: string;
  description: string;
  learned: number;
}

interface ProgressTrackerProps {
  bodyParts: BodyPart[];
  progress: { [key: string]: number };
}

const ProgressTracker = ({ bodyParts, progress }: ProgressTrackerProps) => {
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    // Calculate overall progress
    const total = Object.values(progress).reduce((sum, value) => sum + value, 0);
    const average = total / (bodyParts.length * 100) * 100;
    setTotalProgress(Math.round(average));
  }, [progress, bodyParts]);

  // Define colors for different body parts
  const getColorForPart = (partId: string) => {
    switch (partId) {
      case 'brain': return 'bg-blue-500';
      case 'heart': return 'bg-red-500';
      case 'lungs': return 'bg-indigo-500';
      case 'stomach': return 'bg-orange-500';
      case 'bones': return 'bg-gray-500';
      case 'muscles': return 'bg-red-400';
      default: return 'bg-purple-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Your Learning Progress</h2>
        <div className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full">
          {totalProgress}% Complete
        </div>
      </div>

      {/* Overall progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Overall Body Explorer Progress</span>
          <span>{totalProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-purple-600 h-4 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Individual body parts progress */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Body Systems Mastery:</h3>
        
        {bodyParts.map(part => (
          <div key={part.id} className="mb-3">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>{part.name}</span>
              <span>{progress[part.id]}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`${getColorForPart(part.id)} h-3 rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${progress[part.id]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning milestones */}
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-700 mb-2">Learning Badges</h3>
        <p className="text-sm text-gray-700 mb-3">Earn badges by learning about each body part!</p>
        
        <div className="grid grid-cols-3 gap-2">
          {bodyParts.map(part => (
            <div 
              key={part.id} 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                progress[part.id] >= 100 
                  ? getColorForPart(part.id).replace('bg-', 'bg-opacity-90 text-white bg-') 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <div className="text-2xl mb-1">
                {progress[part.id] >= 100 ? '⭐' : '○'}
              </div>
              <div className="text-xs font-medium text-center">
                {part.name} Expert
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800">Doctor's Note</h3>
        <p className="text-sm text-yellow-700">
          Keep exploring and learning about your amazing body! The more you learn, the healthier you can be!
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;
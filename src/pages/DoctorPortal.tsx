// src/pages/DoctorPortal.tsx
import { useState, useEffect } from 'react';
import BodyVisualization from '../components/games/BodyVisualization';
import ProgressTracker from '../components/games/ProgressTracker';
import LearningContent from '../components/games/LearningContent';
import TeachingStrategies from '../components/games/TeachingStrategies';

const bodyParts = [
  { id: 'brain', name: 'Brain', description: 'The brain helps you think, feel, and control your body.', learned: 0 },
  { id: 'heart', name: 'Heart', description: 'The heart pumps blood all around your body.', learned: 0 },
  { id: 'lungs', name: 'Lungs', description: 'The lungs help you breathe in oxygen and breathe out carbon dioxide.', learned: 0 },
  { id: 'stomach', name: 'Stomach', description: 'The stomach helps digest the food you eat.', learned: 0 },
  { id: 'bones', name: 'Bones', description: 'Bones protect your body and help you move around.', learned: 0 },
  { id: 'muscles', name: 'Muscles', description: 'Muscles help you move and stay strong.', learned: 0 },
];

const DoctorPortal = () => {
  const [learningProgress, setLearningProgress] = useState<{ [key: string]: number }>(
    bodyParts.reduce((acc, part) => ({ ...acc, [part.id]: 0 }), {})
  );
  const [activeTab, setActiveTab] = useState<string>('body');
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  
  const updateProgress = (bodyPartId: string, value: number) => {
    setLearningProgress(prev => {
      const newProgress = { ...prev, [bodyPartId]: Math.min(100, prev[bodyPartId] + value) };
      
      // Check if we've earned a new badge
      if (newProgress[bodyPartId] >= 100 && !earnedBadges.includes(bodyPartId)) {
        setEarnedBadges(prev => [...prev, bodyPartId]);
      }
      
      return newProgress;
    });
  };

  const tabs = [
    { id: 'body', name: 'Body Explorer' },
    { id: 'learning', name: 'Fun Learning' },
    { id: 'activities', name: 'Play Doctor' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-2 md:mb-0">Dr. Discover's Body Adventure</h1>
          <div className="flex space-x-2">
            {earnedBadges.map(badge => {
              const bodyPart = bodyParts.find(part => part.id === badge);
              return (
                <div key={badge} className="bg-yellow-300 text-blue-800 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <span className="mr-1">⭐</span> {bodyPart?.name} Expert
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-4 border-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Interactive Content */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md p-6">
            {activeTab === 'body' && (
              <BodyVisualization bodyParts={bodyParts} updateProgress={updateProgress} />
            )}
            {activeTab === 'learning' && (
              <LearningContent bodyParts={bodyParts} updateProgress={updateProgress} />
            )}
            {activeTab === 'activities' && (
              <TeachingStrategies bodyParts={bodyParts} updateProgress={updateProgress} />
            )}
          </div>

          {/* Right Panel - Progress Tracker */}
          <div className="w-full lg:w-1/3">
            <ProgressTracker bodyParts={bodyParts} progress={learningProgress} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Created for young explorers ages 5-10 • Dr. Discover's Body Adventure</p>
      </footer>
    </div>
  );
};

export default DoctorPortal;
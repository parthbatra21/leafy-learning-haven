
import React, { useState } from 'react';
import GalaxyMap from "@/components/GalaxyMap";
import ActivityZone from "@/components/ActivityZone";
import EmotionTracker from "@/components/EmotionTracker";
import BreakActivity from "@/components/BreakActivity";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [showEmotionTracker, setShowEmotionTracker] = useState(false);

  const handleNodeSelect = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleBack = () => {
    setSelectedSubject(null);
  };

  const handleBreakRequested = () => {
    setIsBreakTime(true);
  };

  const handleBreakComplete = () => {
    setIsBreakTime(false);
  };

  const toggleEmotionTracker = () => {
    setShowEmotionTracker(!showEmotionTracker);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Full-width header with 3D effect */}
          <div className="w-full bg-gradient-to-b from-blue-950/90 to-purple-900/90 backdrop-blur-sm p-6 text-center shadow-lg border-b border-white/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Explore the Galaxy of Knowledge!
            </h2>
            <p className="text-lg md:text-2xl font-normal text-white/90 drop-shadow-md">
              Select a planet to start your learning journey!
            </p>
          </div>
          
          {/* Integrated content area - Modified to allow full screen galaxy map */}
          <div className="flex-1 relative w-full h-full flex flex-col">
            {/* Emotion tracker toggle button */}
            <button 
              onClick={toggleEmotionTracker}
              className="fixed top-24 right-4 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <span className="sr-only">Toggle Emotion Tracker</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </button>
            
            {/* Main interactive area - Changed to flex-1 to fill all available space */}
            <div className="flex-1 relative">
              {/* Galaxy Map - Full screen when no subject selected */}
              {!selectedSubject && !isBreakTime && (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <GalaxyMap onNodeSelect={handleNodeSelect} />
                </div>
              )}
              
              {/* Activity Zone - Shows when subject is selected */}
              {(selectedSubject || isBreakTime) && (
                <div className="absolute inset-0 m-4 bg-black/30 backdrop-blur-md rounded-3xl shadow-xl p-6 overflow-auto transform transition-all duration-500 hover:shadow-2xl">
                  {isBreakTime ? (
                    <BreakActivity onBreakComplete={handleBreakComplete} />
                  ) : (
                    <ActivityZone subject={selectedSubject} onBack={handleBack} />
                  )}
                </div>
              )}
            </div>
            
            {/* Emotion Tracker - Slide in panel */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-blue-950/90 backdrop-blur-md shadow-2xl p-6 z-20 transition-transform duration-500 ease-in-out ${showEmotionTracker ? 'translate-x-0' : 'translate-x-full'}`}>
              <button 
                onClick={toggleEmotionTracker}
                className="absolute top-4 right-4 bg-red-900/50 hover:bg-red-900/70 p-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="mt-10">
                <EmotionTracker onBreakRequested={handleBreakRequested} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="relative z-10 text-center text-sm text-white p-4 bg-gradient-to-r from-blue-900/60 to-purple-800/60 backdrop-blur-sm border-t border-white/20 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <p className="font-medium">Bloom - A learning platform designed for children with Autism Spectrum Disorder</p>
      </footer>
    </div>
  );
};

export default Index;

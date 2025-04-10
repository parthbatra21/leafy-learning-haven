
import React, { useState } from 'react';
import LearningTree from "@/components/LearningTree";
import ActivityZone from "@/components/ActivityZone";
import EmotionTracker from "@/components/EmotionTracker";
import BreakActivity from "@/components/BreakActivity";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isBreakTime, setIsBreakTime] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-darker to-sky">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content - Full Width Tree Background */}
      <main className="relative">
        {/* Tree Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="tree-background w-full h-full">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
              <div className="tree-trunk h-[70vh] w-24 mx-auto rounded-t-lg"></div>
            </div>
            
            {/* Large tree leaves covering most of the background */}
            <div className="absolute bottom-0 left-0 right-0 h-[85vh]">
              <div className="relative w-full h-full">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-green-100 opacity-60" 
                    style={{
                      width: `${Math.random() * 100 + 50}px`,
                      height: `${Math.random() * 100 + 50}px`,
                      top: `${Math.random() * 90}%`,
                      left: `${Math.random() * 100}%`,
                      backgroundColor: `hsl(${120 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`,
                      animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`,
                      zIndex: 0
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 px-4 py-8 md:p-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-sky-darker/90 to-sky/90 backdrop-blur-sm rounded-3xl shadow-lg p-4 md:p-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-10 text-center">
              Welcome to the Learning Tree!
              <p className="text-lg md:text-xl font-normal mt-2">Select a subject from the tree to start learning!</p>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-[500px] md:min-h-[700px]">
              {/* Left Panel: Learning Tree */}
              <div className="bg-gradient-to-b from-calm-green/60 to-calm-blue/60 backdrop-blur-sm rounded-2xl shadow-sm p-4 h-[400px] md:h-[650px] overflow-hidden">
                <LearningTree onNodeSelect={handleNodeSelect} />
              </div>
              
              {/* Center Area: Activity Zone */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-4 h-[400px] md:h-[650px] overflow-auto">
                {isBreakTime ? (
                  <BreakActivity onBreakComplete={handleBreakComplete} />
                ) : (
                  <ActivityZone subject={selectedSubject} onBack={handleBack} />
                )}
              </div>
              
              {/* Right Panel: Emotion & Progress Tracker */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-4 h-[400px] md:h-[650px] overflow-auto">
                <EmotionTracker onBreakRequested={handleBreakRequested} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="relative z-10 mt-8 text-center text-sm text-gray-500 p-4 bg-white/50 backdrop-blur-sm">
        <p>Bloom - A learning platform designed for children with Autism Spectrum Disorder</p>
      </footer>
    </div>
  );
};

export default Index;

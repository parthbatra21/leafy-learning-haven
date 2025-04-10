
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
      
      {/* Main Content */}
      <main className="px-4 py-8 md:p-8 max-w-7xl mx-auto">
        {/* Tree Learning Section */}
        <div className="bg-gradient-to-b from-sky-darker to-sky rounded-3xl shadow-lg p-4 md:p-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-10 text-center">
            Welcome to the Learning Tree!
            <p className="text-lg md:text-xl font-normal mt-2">Select a subject from the tree to start learning!</p>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-[500px] md:min-h-[700px]">
            {/* Left Panel: Learning Tree */}
            <div className="bg-gradient-to-b from-calm-green/30 to-calm-blue/30 rounded-2xl shadow-sm p-4 h-[400px] md:h-[650px] overflow-hidden">
              <LearningTree onNodeSelect={handleNodeSelect} />
            </div>
            
            {/* Center Area: Activity Zone */}
            <div className="h-[400px] md:h-[650px] overflow-auto">
              {isBreakTime ? (
                <BreakActivity onBreakComplete={handleBreakComplete} />
              ) : (
                <ActivityZone subject={selectedSubject} onBack={handleBack} />
              )}
            </div>
            
            {/* Right Panel: Emotion & Progress Tracker */}
            <div className="h-[400px] md:h-[650px] overflow-auto">
              <EmotionTracker onBreakRequested={handleBreakRequested} />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-8 text-center text-sm text-gray-500 p-4">
        <p>Bloom - A learning platform designed for children with Autism Spectrum Disorder</p>
      </footer>
    </div>
  );
};

export default Index;

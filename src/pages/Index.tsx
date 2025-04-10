
import React, { useState } from 'react';
import LearningTree from "@/components/LearningTree";
import ActivityZone from "@/components/ActivityZone";
import EmotionTracker from "@/components/EmotionTracker";
import BreakActivity from "@/components/BreakActivity";

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
    <div className="min-h-screen bg-sky p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Leafy Learning Haven</h1>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left Panel: Learning Tree */}
        <div className="bg-white rounded-2xl shadow-sm p-4 h-[600px] overflow-hidden">
          <h2 className="text-xl font-bold mb-4 text-center">Learning Tree</h2>
          <LearningTree onNodeSelect={handleNodeSelect} />
        </div>
        
        {/* Center Area: Activity Zone */}
        <div className="h-[600px] overflow-auto">
          {isBreakTime ? (
            <BreakActivity onBreakComplete={handleBreakComplete} />
          ) : (
            <ActivityZone subject={selectedSubject} onBack={handleBack} />
          )}
        </div>
        
        {/* Right Panel: Emotion & Progress Tracker */}
        <div className="h-[600px] overflow-auto">
          <EmotionTracker onBreakRequested={handleBreakRequested} />
        </div>
      </main>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Created for children with Autism Spectrum Disorder</p>
      </footer>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, BookOpen, User, Heart, Brain } from "lucide-react";
import MemoryGame from "@/components/games/MemoryGame";

interface ActivityProps {
  subject: string | null;
  onBack: () => void;
}

const ActivityZone: React.FC<ActivityProps> = ({ subject, onBack }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  if (!subject) {
    return (
      <Card className="h-full flex items-center justify-center bg-calm-blue bg-opacity-50 border-none shadow-sm rounded-xl">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Bloom!</h2>
          <p className="text-lg mb-6">Select a subject from the tree to start learning!</p>
          <div className="flex justify-center space-x-4">
            <FileSpreadsheet className="text-leaf" size={36} />
            <BookOpen className="text-leaf" size={36} />
            <User className="text-leaf" size={36} />
            <Heart className="text-leaf" size={36} />
            <Brain className="text-leaf" size={36} />
          </div>
        </div>
      </Card>
    );
  }

  // Handle back from activity to subject selection
  const handleBackFromActivity = () => {
    setSelectedActivity(null);
  };

  // If an activity is selected, show that activity
  if (selectedActivity === "memory-sequence") {
    return <MemoryGame onBack={handleBackFromActivity} />;
  }

  const activities: { [key: string]: { title: string; options: Array<{name: string, id: string}> } } = {
    math: {
      title: "Math Activities",
      options: [
        { name: "Counting", id: "counting" },
        { name: "Shapes", id: "shapes" },
        { name: "Number Line", id: "number-line" }
      ]
    },
    english: {
      title: "English Activities",
      options: [
        { name: "Story Builder", id: "story-builder" },
        { name: "Rhyming", id: "rhyming" },
        { name: "Picture Labeling", id: "picture-labeling" }
      ]
    },
    "life-skills": {
      title: "Life Skills",
      options: [
        { name: "Brushing Teeth", id: "brushing-teeth" },
        { name: "Packing Backpack", id: "packing-backpack" },
        { name: "Dressing Up", id: "dressing-up" }
      ]
    },
    emotions: {
      title: "Emotions Learning",
      options: [
        { name: "Identify Emotions", id: "identify-emotions" },
        { name: "Express Feelings", id: "express-feelings" },
        { name: "Calm Down Techniques", id: "calm-down" }
      ]
    },
    memory: {
      title: "Memory Games",
      options: [
        { name: "Memory Sequence", id: "memory-sequence" },
        { name: "Match Cards", id: "match-cards" },
        { name: "Find the Difference", id: "find-difference" }
      ]
    }
  };

  const currentActivity = activities[subject] || { title: "Activity", options: [] };

  return (
    <Card className="h-full flex flex-col bg-calm-blue border-none shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 flex-1 bg-gradient-to-b from-calm-green/30 to-calm-blue/30">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mb-4 bg-white/50 backdrop-blur-sm hover:bg-white/70"
        >
          ← Back to Tree
        </Button>
        
        <h1 className="text-3xl font-bold mb-8 text-center">{currentActivity.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentActivity.options.map((option, index) => (
            <Button
              key={index}
              className="h-24 text-lg bg-gradient-to-r from-calm-green to-calm-blue hover:from-green-300 hover:to-blue-300 text-foreground rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedActivity(option.id)}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ActivityZone;

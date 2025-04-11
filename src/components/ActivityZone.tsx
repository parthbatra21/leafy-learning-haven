
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Satellite, 
  Atom, 
  BookOpen, 
  Users, 
  HeartPulse, 
  BrainCircuit,
  FileSpreadsheet,
  User,
  Heart,
  Brain,
  Globe,
  Paintbrush,
  Music,
  Code
} from "lucide-react";
import MemoryGame from "@/components/games/MemoryGame";

interface ActivityProps {
  subject: string | null;
  onBack: () => void;
}

const ActivityZone: React.FC<ActivityProps> = ({ subject, onBack }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  // Generate animated stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      };
      stars.push(
        <div 
          key={i} 
          className="absolute bg-white rounded-full animate-twinkle"
          style={style}
        />
      );
    }
    return stars;
  };

  if (!subject) {
    return (
      <Card className="h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-blue-950 border-none shadow-sm rounded-xl">
        <div className="absolute inset-0">
          {generateStars()}
        </div>
        <div className="text-center p-8 z-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome to the Galaxy of Knowledge!</h2>
          <p className="text-lg mb-6 text-blue-100">Select a planet from the galaxy map to start your learning journey!</p>
          <div className="flex justify-center space-x-4">
            <div className="planet-icon bg-blue-500 p-3 rounded-full animate-pulse">
              <FileSpreadsheet className="text-white" size={36} />
            </div>
            <div className="planet-icon bg-purple-500 p-3 rounded-full animate-pulse delay-100">
              <BookOpen className="text-white" size={36} />
            </div>
            <div className="planet-icon bg-orange-500 p-3 rounded-full animate-pulse delay-200">
              <User className="text-white" size={36} />
            </div>
            <div className="planet-icon bg-pink-500 p-3 rounded-full animate-pulse delay-300">
              <Heart className="text-white" size={36} />
            </div>
            <div className="planet-icon bg-indigo-500 p-3 rounded-full animate-pulse delay-400">
              <Brain className="text-white" size={36} />
            </div>
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

  const activities: { [key: string]: { title: string; icon: React.ReactNode; color: string; options: Array<{name: string, id: string}> } } = {
    math: {
      title: "Math Activities",
      icon: <Atom size={24} />,
      color: "from-blue-500 to-blue-700",
      options: [
        { name: "Counting", id: "counting" },
        { name: "Shapes", id: "shapes" },
        { name: "Number Line", id: "number-line" }
      ]
    },
    english: {
      title: "English Activities",
      icon: <BookOpen size={24} />,
      color: "from-purple-500 to-purple-700",
      options: [
        { name: "Story Builder", id: "story-builder" },
        { name: "Rhyming", id: "rhyming" },
        { name: "Picture Labeling", id: "picture-labeling" }
      ]
    },
    "life-skills": {
      title: "Life Skills",
      icon: <Users size={24} />,
      color: "from-orange-500 to-orange-700",
      options: [
        { name: "Brushing Teeth", id: "brushing-teeth" },
        { name: "Packing Backpack", id: "packing-backpack" },
        { name: "Dressing Up", id: "dressing-up" }
      ]
    },
    emotions: {
      title: "Emotions Learning",
      icon: <Heart size={24} />,
      color: "from-pink-500 to-pink-700",
      options: [
        { name: "Identify Emotions", id: "identify-emotions" },
        { name: "Express Feelings", id: "express-feelings" },
        { name: "Calm Down Techniques", id: "calm-down" }
      ]
    },
    memory: {
      title: "Memory Games",
      icon: <Brain size={24} />,
      color: "from-indigo-500 to-indigo-700",
      options: [
        { name: "Memory Sequence", id: "memory-sequence" },
        { name: "Match Cards", id: "match-cards" },
        { name: "Find the Difference", id: "find-difference" }
      ]
    },
    science: {
      title: "Science Exploration",
      icon: <Rocket size={24} />,
      color: "from-green-500 to-green-700",
      options: [
        { name: "Space Discovery", id: "space-discovery" },
        { name: "Plant Growth", id: "plant-growth" },
        { name: "Animal Habitats", id: "animal-habitats" }
      ]
    },
    art: {
      title: "Art Studio",
      icon: <Paintbrush size={24} />,
      color: "from-rose-500 to-rose-700",
      options: [
        { name: "Coloring", id: "coloring" },
        { name: "Drawing", id: "drawing" },
        { name: "Crafts", id: "crafts" }
      ]
    },
    music: {
      title: "Music Lab",
      icon: <Music size={24} />,
      color: "from-cyan-500 to-cyan-700",
      options: [
        { name: "Instruments", id: "instruments" },
        { name: "Singing", id: "singing" },
        { name: "Rhythm Games", id: "rhythm-games" }
      ]
    },
    coding: {
      title: "Coding Adventures",
      icon: <Code size={24} />,
      color: "from-emerald-500 to-emerald-700",
      options: [
        { name: "Block Coding", id: "block-coding" },
        { name: "Pattern Matching", id: "pattern-matching" },
        { name: "Logic Puzzles", id: "logic-puzzles" }
      ]
    }
  };

  const currentActivity = activities[subject] || { 
    title: "Activity", 
    icon: <Rocket size={24} />, 
    color: "from-blue-500 to-blue-700",
    options: [] 
  };

  return (
    <Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-blue-950 border-none shadow-sm rounded-xl">
      <div className="absolute inset-0">
        {generateStars()}
      </div>
      <div className="p-6 flex-1 z-10">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mb-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
        >
          ← Back to Galaxy Map
        </Button>
        
        <div className="flex items-center justify-center mb-8">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentActivity.color} flex items-center justify-center mr-3`}>
            {currentActivity.icon}
          </div>
          <h1 className="text-3xl font-bold text-white">{currentActivity.title}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentActivity.options.map((option, index) => (
            <Button
              key={index}
              className={`h-24 text-lg bg-gradient-to-r ${currentActivity.color} hover:brightness-110 text-white rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow`}
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

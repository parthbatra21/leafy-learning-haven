
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, BookOpen, User, Heart, Brain } from "lucide-react";

interface ActivityProps {
  subject: string | null;
  onBack: () => void;
}

const ActivityZone: React.FC<ActivityProps> = ({ subject, onBack }) => {
  if (!subject) {
    return (
      <Card className="h-full flex items-center justify-center bg-calm-blue bg-opacity-50 border-none shadow-sm">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Learning Tree!</h2>
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

  const activities: { [key: string]: { title: string; options: string[] } } = {
    math: {
      title: "Math Activities",
      options: ["Counting", "Shapes", "Number Line"]
    },
    english: {
      title: "English Activities",
      options: ["Story Builder", "Rhyming", "Picture Labeling"]
    },
    "life-skills": {
      title: "Life Skills",
      options: ["Brushing Teeth", "Packing Backpack", "Dressing Up"]
    },
    emotions: {
      title: "Emotions Learning",
      options: ["Identify Emotions", "Express Feelings", "Calm Down Techniques"]
    },
    memory: {
      title: "Memory Games",
      options: ["Match Cards", "Remember Sequence", "Find the Difference"]
    }
  };

  const currentActivity = activities[subject] || { title: "Activity", options: [] };

  return (
    <Card className="h-full flex flex-col bg-calm-blue border-none shadow-sm">
      <div className="p-6 flex-1">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mb-4"
        >
          ← Back to Tree
        </Button>
        
        <h1 className="text-2xl font-bold mb-6 text-center">{currentActivity.title}</h1>
        
        <div className="grid grid-cols-1 gap-4">
          {currentActivity.options.map((option, index) => (
            <Button
              key={index}
              className="h-24 text-lg bg-calm-green hover:bg-green-200 text-foreground"
              onClick={() => alert(`Starting activity: ${option}`)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ActivityZone;

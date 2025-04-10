
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smile, Meh, Frown, Star, Award } from "lucide-react";

interface TrackerProps {
  onBreakRequested: () => void;
}

const EmotionTracker: React.FC<TrackerProps> = ({ onBreakRequested }) => {
  const [currentEmotion, setCurrentEmotion] = useState<'happy' | 'neutral' | 'sad'>('happy');
  
  const handleEmotionChange = (emotion: 'happy' | 'neutral' | 'sad') => {
    setCurrentEmotion(emotion);
    if (emotion === 'sad') {
      setTimeout(() => {
        onBreakRequested();
      }, 500);
    }
  };

  return (
    <Card className="h-full flex flex-col bg-calm-yellow bg-opacity-50 border-none shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6 text-center">How Are You Feeling?</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 ${currentEmotion === 'happy' ? 'bg-green-200 border-green-500' : 'bg-white'}`}
          onClick={() => handleEmotionChange('happy')}
        >
          <Smile size={32} className={currentEmotion === 'happy' ? 'text-green-500' : 'text-gray-400'} />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 ${currentEmotion === 'neutral' ? 'bg-yellow-200 border-yellow-500' : 'bg-white'}`}
          onClick={() => handleEmotionChange('neutral')}
        >
          <Meh size={32} className={currentEmotion === 'neutral' ? 'text-yellow-500' : 'text-gray-400'} />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 ${currentEmotion === 'sad' ? 'bg-red-200 border-red-500' : 'bg-white'}`}
          onClick={() => handleEmotionChange('sad')}
        >
          <Frown size={32} className={currentEmotion === 'sad' ? 'text-red-500' : 'text-gray-400'} />
        </Button>
      </div>

      {currentEmotion === 'sad' && (
        <div className="bg-red-100 p-3 rounded-lg mb-6">
          <p className="text-center text-sm">Feeling frustrated? Let's take a break!</p>
          <Button 
            className="w-full mt-2 bg-red-200 hover:bg-red-300 text-red-800"
            onClick={onBreakRequested}
          >
            Take a Break
          </Button>
        </div>
      )}
      
      <div className="flex-1">
        <h3 className="font-medium mb-2">Your Progress</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Math</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>English</span>
              <span>35%</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Life Skills</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium mb-3">Achievements</h3>
        <div className="flex justify-center space-x-3">
          <div className="flex flex-col items-center">
            <Star className="text-amber-400" size={28} fill="currentColor" />
            <span className="text-xs mt-1">Math Star</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="text-blue-400" size={28} fill="currentColor" />
            <span className="text-xs mt-1">Helper</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <Star className="text-gray-400" size={28} />
            <span className="text-xs mt-1">Reading</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmotionTracker;


import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smile, Meh, Frown, Star, Award, Rocket, Satellite, Plane, Moon, Sun, BookOpen, Users } from "lucide-react";

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

  // Generate animated stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
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

  // Generate occasional shooting stars
  const generateShootingStars = () => {
    const shootingStars = [];
    for (let i = 0; i < 3; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        width: '2px',
        height: '2px',
        animationDelay: `${Math.random() * 10 + 2}s`,
        animationDuration: '1s',
        transform: `rotate(${Math.random() * 45 + 20}deg)`
      };
      shootingStars.push(
        <div 
          key={i} 
          className="absolute bg-white rounded-full animate-shoot"
          style={style}
        >
          <div className="w-10 h-[1px] bg-gradient-to-r from-white to-transparent"></div>
        </div>
      );
    }
    return shootingStars;
  };

  return (
    <Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-blue-950 via-science-atom to-blue-800 border-none shadow-lg p-6">
      <div className="absolute inset-0">
        {generateStars()}
        {generateShootingStars()}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-science-chemical to-science-atom opacity-10 blur-xl"></div>
        <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-science-flask to-science-beaker opacity-10 blur-xl"></div>
      </div>
      
      <h2 className="text-xl font-bold mb-6 text-center text-white z-10 flex items-center justify-center">
        <Satellite className="mr-2 text-science-chemical" size={20} />
        Astronaut Status Check
      </h2>
      
      <div className="flex justify-center space-x-4 mb-8 z-10">
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 backdrop-blur-sm border border-white/20 transition-all duration-300 ${currentEmotion === 'happy' ? 'bg-green-500/30 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]' : 'bg-science-atom/30'}`}
          onClick={() => handleEmotionChange('happy')}
        >
          <Smile size={32} className={currentEmotion === 'happy' ? 'text-green-300' : 'text-science-chemical'} />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 backdrop-blur-sm border border-white/20 transition-all duration-300 ${currentEmotion === 'neutral' ? 'bg-yellow-500/30 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'bg-science-atom/30'}`}
          onClick={() => handleEmotionChange('neutral')}
        >
          <Meh size={32} className={currentEmotion === 'neutral' ? 'text-yellow-300' : 'text-science-chemical'} />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full p-3 backdrop-blur-sm border border-white/20 transition-all duration-300 ${currentEmotion === 'sad' ? 'bg-red-500/30 border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.3)]' : 'bg-science-atom/30'}`}
          onClick={() => handleEmotionChange('sad')}
        >
          <Frown size={32} className={currentEmotion === 'sad' ? 'text-red-300' : 'text-science-chemical'} />
        </Button>
      </div>

      {currentEmotion === 'sad' && (
        <div className="bg-red-900/30 backdrop-blur-sm p-4 rounded-lg mb-6 border border-red-500/30 z-10 animate-pulse-slow">
          <p className="text-center text-sm text-red-200 flex items-center justify-center">
            <Moon className="mr-2" size={16} />
            Asteroid field ahead! Need to take a detour?
          </p>
          <Button 
            className="w-full mt-2 bg-red-800/50 hover:bg-red-700/60 text-red-100 border border-red-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,113,113,0.3)]"
            onClick={onBreakRequested}
          >
            <Rocket className="mr-2" size={16} />
            Dock at Space Station
          </Button>
        </div>
      )}
      
      <div className="flex-1 z-10">
        <h3 className="font-medium mb-3 text-science-chemical flex items-center">
          <Rocket className="mr-2 text-science-flask" size={16} />
          Mission Progress
        </h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1 text-science-chemical">
              <span className="flex items-center">
                <Plane className="mr-1" size={14} />
                Math Galaxy
              </span>
              <span>60%</span>
            </div>
            <Progress 
              value={60} 
              className="h-2 bg-science-atom/50"
            />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1 text-science-chemical">
              <span className="flex items-center">
                <BookOpen className="mr-1" size={14} />
                Language Nebula
              </span>
              <span>35%</span>
            </div>
            <Progress value={35} className="h-2 bg-science-flask/50" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1 text-science-chemical">
              <span className="flex items-center">
                <Users className="mr-1" size={14} />
                Life Skills Constellation
              </span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2 bg-science-beaker/50" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 z-10">
        <h3 className="font-medium mb-3 text-science-chemical flex items-center">
          <Star className="mr-2 text-yellow-300" size={16} />
          Space Medals
        </h3>
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-science-atom/30 flex items-center justify-center border border-yellow-500/50 shadow-[0_0_10px_rgba(250,204,21,0.2)] transition-transform hover:scale-110">
              <Star className="text-yellow-400" size={24} fill="currentColor" />
            </div>
            <span className="text-xs mt-1 text-science-chemical">Math Explorer</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-science-flask/30 flex items-center justify-center border border-science-chemical/50 shadow-[0_0_10px_rgba(96,165,250,0.2)] transition-transform hover:scale-110">
              <Rocket className="text-science-chemical" size={24} />
            </div>
            <span className="text-xs mt-1 text-science-chemical">Space Helper</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-12 h-12 rounded-full bg-science-beaker/30 flex items-center justify-center border border-gray-500/50 transition-transform hover:scale-110">
              <Satellite className="text-gray-400" size={24} />
            </div>
            <span className="text-xs mt-1 text-science-chemical">Reading Orbit</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmotionTracker;

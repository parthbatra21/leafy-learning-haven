
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, CloudRain, Music, Clock3, Moon, Stars, Sparkles } from "lucide-react";

interface BreakActivityProps {
  onBreakComplete: () => void;
}

const BreakActivity: React.FC<BreakActivityProps> = ({ onBreakComplete }) => {
  const [breakTime, setBreakTime] = useState(60); // 60 seconds break
  const [isBreakActive, setIsBreakActive] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isBreakActive && breakTime > 0) {
      timer = setTimeout(() => {
        setBreakTime(breakTime - 1);
      }, 1000);
    } else if (isBreakActive && breakTime === 0) {
      onBreakComplete();
    }
    
    return () => clearTimeout(timer);
  }, [breakTime, isBreakActive, onBreakComplete]);
  
  const handleStartBreak = () => {
    setIsBreakActive(true);
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
        animationDelay: `${Math.random() * 3}s`
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

  return (
    <Card className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-blue-950 border-none shadow-sm p-6">
      <div className="absolute inset-0">
        {generateStars()}
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-white z-10">Cosmic Rest Station</h2>
      
      <div className="flex flex-col items-center justify-center mb-8 z-10">
        <div className="w-36 h-36 rounded-full bg-indigo-900/50 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {!isBreakActive ? (
            <Button 
              variant="ghost" 
              className="w-24 h-24 rounded-full bg-purple-800/70 hover:bg-purple-700/80 text-white border border-white/20"
              onClick={handleStartBreak}
            >
              Launch
            </Button>
          ) : (
            <div className="text-center">
              <Clock3 size={36} className="mx-auto mb-2 text-blue-300" />
              <span className="text-2xl font-bold text-white">{breakTime}</span>
            </div>
          )}
        </div>
        
        {!isBreakActive && (
          <p className="text-center text-sm mb-6 text-blue-200">
            Take a moment in zero gravity to recharge
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-md z-10">
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-900/30 hover:bg-blue-800/50 border border-white/20 backdrop-blur-sm"
          >
            <Wind className="text-blue-300" size={28} />
          </Button>
          <span className="text-xs text-blue-200">Space Breathing</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-purple-900/30 hover:bg-purple-800/50 border border-white/20 backdrop-blur-sm"
          >
            <Stars className="text-purple-300" size={28} />
          </Button>
          <span className="text-xs text-blue-200">Nebula Sounds</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-indigo-900/30 hover:bg-indigo-800/50 border border-white/20 backdrop-blur-sm"
          >
            <Music className="text-indigo-300" size={28} />
          </Button>
          <span className="text-xs text-blue-200">Cosmic Melodies</span>
        </div>
      </div>
      
      {!isBreakActive && (
        <Button 
          variant="ghost"
          className="text-blue-300 hover:text-blue-200 hover:bg-blue-900/30 backdrop-blur-sm z-10"
          onClick={onBreakComplete}
        >
          Ready to continue my journey
        </Button>
      )}
    </Card>
  );
};

export default BreakActivity;

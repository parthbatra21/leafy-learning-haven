
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Import additional science-themed icons
import { Wind, CloudRain, Music, Clock3, Moon, Stars, Sparkles, TestTube, Brain, Lightbulb } from "lucide-react";

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
  // Update generateStars to generateMolecules
  const generateMolecules = () => {
    const molecules = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 3}s`
      };
      molecules.push(
        <div 
          key={i} 
          className="absolute bg-blue-400/40 rounded-full animate-float"
          style={style}
        />
      );
    }
    return molecules;
  };

  return (
    <Card className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border-none shadow-sm p-6">
      <div className="absolute inset-0">
        {generateMolecules()}
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-blue-800 z-10">Research Break Station</h2>
      
      <div className="flex flex-col items-center justify-center mb-8 z-10">
        <div className="w-36 h-36 rounded-full bg-blue-200/50 backdrop-blur-sm flex items-center justify-center mb-4 border border-blue-300/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          {!isBreakActive ? (
            <Button 
              variant="ghost" 
              className="w-24 h-24 rounded-full bg-blue-300/70 hover:bg-blue-400/80 text-blue-800 border border-blue-400/20"
              onClick={handleStartBreak}
            >
              Start Break
            </Button>
          ) : (
            <div className="text-center">
              <Clock3 size={36} className="mx-auto mb-2 text-blue-600" />
              <span className="text-2xl font-bold text-blue-800">{breakTime}s</span>
            </div>
          )}
        </div>
        
        {!isBreakActive && (
          <p className="text-center text-sm mb-6 text-blue-700">
            Time for a research break! Let's recharge our minds.
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-md z-10">
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-200/30 hover:bg-blue-300/50 border border-blue-300/20 backdrop-blur-sm"
          >
            <Brain className="text-blue-600" size={28} />
          </Button>
          <span className="text-xs text-blue-700">Mind Reset</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-200/30 hover:bg-blue-300/50 border border-blue-300/20 backdrop-blur-sm"
          >
            <TestTube className="text-blue-600" size={28} />
          </Button>
          <span className="text-xs text-blue-700">Lab Sounds</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-200/30 hover:bg-blue-300/50 border border-blue-300/20 backdrop-blur-sm"
          >
            <Lightbulb className="text-blue-600" size={28} />
          </Button>
          <span className="text-xs text-blue-700">Think Tank</span>
        </div>
      </div>
      
      {!isBreakActive && (
        <Button 
          variant="ghost"
          className="text-blue-700 hover:text-blue-800 hover:bg-blue-200/30 backdrop-blur-sm z-10"
          onClick={onBreakComplete}
        >
          Back to Research
        </Button>
      )}
    </Card>
  );
};

export default BreakActivity;

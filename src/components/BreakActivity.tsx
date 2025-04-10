
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, CloudRain, Music, Clock3 } from "lucide-react";

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

  return (
    <Card className="h-full flex flex-col items-center justify-center bg-calm-blue border-none shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Take a Short Break</h2>
      
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-36 h-36 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          {!isBreakActive ? (
            <Button 
              variant="ghost" 
              className="w-24 h-24 rounded-full bg-green-100 hover:bg-green-200"
              onClick={handleStartBreak}
            >
              Start
            </Button>
          ) : (
            <div className="text-center">
              <Clock3 size={36} className="mx-auto mb-2 text-blue-500" />
              <span className="text-2xl font-bold">{breakTime}</span>
            </div>
          )}
        </div>
        
        {!isBreakActive && (
          <p className="text-center text-sm mb-6">
            Take a minute to calm down and relax
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-50 hover:bg-blue-100"
          >
            <Wind className="text-blue-500" size={28} />
          </Button>
          <span className="text-xs">Breathing</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-50 hover:bg-blue-100"
          >
            <CloudRain className="text-blue-500" size={28} />
          </Button>
          <span className="text-xs">Rain Sounds</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            variant="outline"
            size="lg"
            className="w-20 h-20 rounded-full mb-2 bg-blue-50 hover:bg-blue-100"
          >
            <Music className="text-blue-500" size={28} />
          </Button>
          <span className="text-xs">Calm Music</span>
        </div>
      </div>
      
      {!isBreakActive && (
        <Button 
          variant="ghost"
          className="text-gray-500"
          onClick={onBreakComplete}
        >
          I feel better now
        </Button>
      )}
    </Card>
  );
};

export default BreakActivity;

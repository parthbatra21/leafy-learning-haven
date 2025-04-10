
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Brain, FileSpreadsheet, Heart, User } from 'lucide-react';

interface TreeNodeProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  progress?: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  title, 
  icon, 
  className, 
  onClick,
  progress = 0,
  position
}) => {
  return (
    <div className="absolute" style={{ 
      top: position.top, 
      bottom: position.bottom, 
      left: position.left, 
      right: position.right 
    }}>
      <div className="relative group">
        <button 
          onClick={onClick} 
          className={cn(
            "leaf w-20 h-20 flex items-center justify-center relative z-10",
            className
          )}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="bg-green-300 absolute bottom-0 left-0 right-0 transition-all duration-500"
              style={{ height: `${progress}%` }}
            />
          </div>
          <span className="relative z-10">
            {icon}
          </span>
        </button>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap z-20">
          {title}
        </div>
      </div>
    </div>
  );
};

interface LearningTreeProps {
  onNodeSelect: (subject: string) => void;
}

const LearningTree: React.FC<LearningTreeProps> = ({ onNodeSelect }) => {
  return (
    <div className="tree-container relative h-full w-full">
      {/* Tree trunk */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="tree-trunk h-64 w-12 rounded-t-lg"></div>
        
        {/* Main branches */}
        <div className="absolute bottom-60 left-1/2 -translate-x-1/2 w-full">
          {/* Left main branch */}
          <div className="branch h-3 w-36 absolute -left-28 bottom-0 -rotate-45 origin-bottom-right"></div>
          
          {/* Right main branch */}
          <div className="branch h-3 w-36 absolute -right-28 bottom-0 rotate-45 origin-bottom-left"></div>
          
          {/* Middle branch up */}
          <div className="branch h-3 w-24 absolute left-1/2 -translate-x-1/2 -top-10 rotate-0"></div>
        </div>
        
        {/* Secondary branches */}
        <div className="absolute bottom-60 left-1/2 -translate-x-1/2 w-full">
          {/* Left secondary branch */}
          <div className="branch h-2 w-24 absolute -left-28 bottom-20 -rotate-20 origin-bottom-right"></div>
          
          {/* Right secondary branch */}
          <div className="branch h-2 w-24 absolute -right-28 bottom-20 rotate-20 origin-bottom-left"></div>
        </div>
      </div>
      
      {/* Tree nodes */}
      <TreeNode 
        title="Math" 
        icon={<FileSpreadsheet className="text-white" size={28} />} 
        onClick={() => onNodeSelect('math')}
        progress={60}
        position={{ bottom: "140px", left: "50%", transform: "translateX(-50%)" }}
      />
      
      <TreeNode 
        title="English" 
        icon={<BookOpen className="text-white" size={28} />} 
        onClick={() => onNodeSelect('english')}
        progress={35}
        position={{ bottom: "200px", left: "22%" }}
      />
      
      <TreeNode 
        title="Life Skills" 
        icon={<User className="text-white" size={28} />} 
        onClick={() => onNodeSelect('life-skills')}
        progress={75}
        position={{ bottom: "200px", right: "22%" }}
      />
      
      <TreeNode 
        title="Emotions" 
        icon={<Heart className="text-white" size={28} />} 
        onClick={() => onNodeSelect('emotions')}
        progress={50}
        position={{ bottom: "260px", left: "28%" }}
      />
      
      <TreeNode 
        title="Memory Games" 
        icon={<Brain className="text-white" size={28} />} 
        onClick={() => onNodeSelect('memory')}
        progress={25}
        position={{ bottom: "260px", right: "28%" }}
      />
      
      {/* Tree leaves decoration */}
      <div className="absolute top-4 left-0 right-0 bottom-64">
        <div className="relative w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-green-100 opacity-60" 
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${120 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTree;

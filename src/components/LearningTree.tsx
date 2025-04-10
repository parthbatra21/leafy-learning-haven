
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Brain, FileSpreadsheet, Heart, User } from 'lucide-react';

interface TreeNodeProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  progress?: number;
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  title, 
  icon, 
  className, 
  onClick,
  progress = 0
}) => {
  return (
    <div className="relative group">
      <button 
        onClick={onClick} 
        className={cn(
          "leaf w-16 h-16 flex items-center justify-center relative z-10",
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
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

interface LearningTreeProps {
  onNodeSelect: (subject: string) => void;
}

const LearningTree: React.FC<LearningTreeProps> = ({ onNodeSelect }) => {
  return (
    <div className="tree-container h-full flex flex-col items-center justify-end pb-10">
      {/* Tree structure */}
      <div className="relative w-full max-w-xs">
        {/* Branches */}
        <div className="branch h-2 w-32 absolute left-1/2 bottom-40 -translate-x-1/2 animate-sway" />
        <div className="branch h-2 w-24 absolute left-1/2 bottom-56 -translate-x-1/2 rotate-45 origin-left animate-sway" />
        <div className="branch h-2 w-24 absolute left-1/2 bottom-56 -translate-x-1/2 -rotate-45 origin-right animate-sway" />
        <div className="branch h-2 w-16 absolute left-1/3 bottom-72 -translate-x-1/2 rotate-20 origin-left animate-sway" />
        <div className="branch h-2 w-16 absolute left-2/3 bottom-72 -translate-x-1/2 -rotate-20 origin-right animate-sway" />
        
        {/* Tree nodes */}
        <div className="absolute left-1/2 bottom-44 -translate-x-1/2">
          <TreeNode 
            title="Math" 
            icon={<FileSpreadsheet className="text-white" size={24} />} 
            onClick={() => onNodeSelect('math')}
            progress={60}
          />
        </div>
        <div className="absolute left-[30%] bottom-60 -translate-x-1/2">
          <TreeNode 
            title="English" 
            icon={<BookOpen className="text-white" size={24} />} 
            onClick={() => onNodeSelect('english')}
            progress={35}
          />
        </div>
        <div className="absolute left-[70%] bottom-60 -translate-x-1/2">
          <TreeNode 
            title="Life Skills" 
            icon={<User className="text-white" size={24} />} 
            onClick={() => onNodeSelect('life-skills')}
            progress={75}
          />
        </div>
        <div className="absolute left-1/4 bottom-76 -translate-x-1/2">
          <TreeNode 
            title="Emotions" 
            icon={<Heart className="text-white" size={24} />} 
            onClick={() => onNodeSelect('emotions')}
            progress={50}
          />
        </div>
        <div className="absolute left-3/4 bottom-76 -translate-x-1/2">
          <TreeNode 
            title="Memory Games" 
            icon={<Brain className="text-white" size={24} />} 
            onClick={() => onNodeSelect('memory')}
            progress={25}
          />
        </div>
        
        {/* Tree trunk */}
        <div className="tree-trunk h-32 w-8 absolute left-1/2 bottom-0 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default LearningTree;

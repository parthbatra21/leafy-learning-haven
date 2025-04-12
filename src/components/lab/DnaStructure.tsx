import React from 'react';

const DnaStructure: React.FC = () => {
  return (
    <div className="dna-structure relative w-20 h-80">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-300/20 -translate-x-1/2"></div>
      
      {Array.from({ length: 10 }).map((_, i) => (
        <React.Fragment key={i}>
          <div 
            className="absolute w-16 h-2 bg-science-dna/30 rounded-full animate-dna-rotate"
            style={{ 
              top: `${i * 40}px`,
              transformOrigin: 'center',
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
          <div 
            className="absolute w-16 h-2 bg-science-atom/30 rounded-full animate-dna-rotate"
            style={{ 
              top: `${i * 40 + 20}px`,
              transformOrigin: 'center',
              animationDelay: `${i * 0.1 + 0.5}s`
            }}
          ></div>
        </React.Fragment>
      ))}
      
      {/* Connection spheres */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`sphere-${i}`}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
          style={{ 
            top: `${i * 20}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(6, 182, 212, 0.5)'
          }}
        ></div>
      ))}
    </div>
  );
};

export default DnaStructure;
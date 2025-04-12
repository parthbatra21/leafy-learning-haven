import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CareerOption = {
  id: string;
  title: string;
  icon: JSX.Element;
  comingSoon?: boolean;
};

const SelectInterests = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const careerOptions: CareerOption[] = [
    {
      id: 'doctor',
      title: 'Doctor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 'scientist',
      title: 'Scientist',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
        </svg>
      )
    },
    {
      id: 'astronaut',
      title: 'Astronaut',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      )
    },
    {
      id: 'engineer',
      title: 'Engineer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      ),
      comingSoon: true
    }
  ];

  const handleSelectCareer = (careerId: string) => {
    // Don't allow selection of "coming soon" careers
    const career = careerOptions.find(c => c.id === careerId);
    if (career?.comingSoon) return;
    
    setSelectedCareer(careerId);
    
    // Navigate after a short delay without animations
    setTimeout(() => {
      navigate('/loading-experience');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="flex items-center h-full">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Career Path Interests You?</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select an option that aligns with your interests. We'll use this to personalize your career guidance experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {careerOptions.map((career) => (
              <div
                key={career.id}
                data-id={career.id} 
                className={`cursor-pointer relative bg-white p-8 rounded-2xl border shadow-md
                  ${selectedCareer === career.id ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-slate-200 hover:border-blue-300'} 
                  transition-all duration-300 flex flex-col items-center text-center
                  ${!career.comingSoon ? 'hover:transform hover:scale-[1.03]' : 'opacity-90'}`}
                onClick={() => !career.comingSoon && handleSelectCareer(career.id)}
              >
                {career.icon}
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{career.title}</h3>
                
                {career.comingSoon ? (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <p className="text-slate-600 text-sm">Click to select</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/create-account')}
              className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInterests; 
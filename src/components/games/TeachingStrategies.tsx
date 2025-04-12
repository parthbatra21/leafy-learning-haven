// src/components/games/TeachingStrategies.tsx
import { useState } from 'react';

interface BodyPart {
  id: string;
  name: string;
  description: string;
  learned: number;
}

interface TeachingStrategiesProps {
  bodyParts: BodyPart[];
  updateProgress: (bodyPartId: string, value: number) => void;
}

const TeachingStrategies = ({ bodyParts, updateProgress }: TeachingStrategiesProps) => {
  const [currentActivity, setCurrentActivity] = useState<string>('roleplay');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [showReward, setShowReward] = useState<boolean>(false);
  
  const activities = [
    { id: 'roleplay', name: 'Doctor Visit', icon: '👩‍⚕️' },
    { id: 'puzzle', name: 'Body Puzzle', icon: '🧩' },
    { id: 'empathy', name: 'Caring Cards', icon: '❤️' }
  ];
  
  const medicalTools = [
    { id: 'stethoscope', name: 'Stethoscope', icon: '🔊', description: 'Listen to heart and lungs' },
    { id: 'thermometer', name: 'Thermometer', icon: '🌡️', description: 'Check temperature' },
    { id: 'bandaid', name: 'Band-Aid', icon: '🩹', description: 'Cover small cuts' },
    { id: 'flashlight', name: 'Flashlight', icon: '🔦', description: 'Look in ears and throat' },
    { id: 'reflex', name: 'Reflex Hammer', icon: '🔨', description: 'Check reflexes' }
  ];
  
  const rolePlayers = [
    { id: 'doctor', name: 'Doctor', icon: '👩‍⚕️' },
    { id: 'patient', name: 'Patient', icon: '🧒' },
    { id: 'nurse', name: 'Nurse', icon: '👨‍⚕️' }
  ];
  
  const bodyPuzzlePieces = bodyParts.map(part => ({
    ...part,
    completed: false
  }));
  
  const caringCards = [
    { id: 'listen', title: 'Listen Carefully', description: 'Doctors listen to what patients say about how they feel.', icon: '👂' },
    { id: 'explain', title: 'Explain Clearly', description: 'Doctors explain things so patients understand.', icon: '🗣️' },
    { id: 'gentle', title: 'Be Gentle', description: 'Doctors are gentle when they examine patients.', icon: '🤲' },
    { id: 'help', title: 'Help Feel Better', description: "Doctors help people feel better when they're sick.", icon: '😊' }
  ];
  
  const handleToolSelection = (toolId: string) => {
    setSelectedTool(toolId);
    if (!completedSteps.includes(toolId)) {
      setCompletedSteps([...completedSteps, toolId]);
      
      // Update progress when using medical tools
      if (toolId === 'stethoscope') {
        updateProgress('heart', 10);
        updateProgress('lungs', 10);
      } else if (toolId === 'thermometer') {
        updateProgress('brain', 5);
      } else if (toolId === 'reflex') {
        updateProgress('muscles', 10);
      }
    }
    
    // Show reward if all steps completed
    if (completedSteps.length >= 4) {
      setTimeout(() => {
        setShowReward(true);
      }, 500);
    }
  };
  
  const completeActivity = (bodyPartIds: string[]) => {
    bodyPartIds.forEach(id => updateProgress(id, 20));
    setShowReward(true);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Play Doctor!</h2>
      
      {/* Activity Navigation */}
      <div className="flex overflow-x-auto mb-6 pb-2">
        {activities.map(activity => (
          <button
            key={activity.id}
            className={`flex-shrink-0 flex flex-col items-center px-4 py-2 mx-2 rounded-lg transition-colors ${
              currentActivity === activity.id 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => {
              setCurrentActivity(activity.id);
              setShowReward(false);
            }}
          >
            <span className="text-2xl mb-1">{activity.icon}</span>
            <span className="text-sm font-medium">{activity.name}</span>
          </button>
        ))}
      </div>
      
      {/* Role Play Activity */}
      {currentActivity === 'roleplay' && (
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Let's Play Doctor!</h3>
          
          {showReward ? (
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold text-yellow-700 mb-2">Great Job, Doctor!</h4>
              <p className="mb-4">You've learned how to do a checkup and use medical tools to help patients!</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-2">❤️</div>
                  <p className="text-sm">Heart: Healthy!</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-sm">Temperature: Normal</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-2">👂</div>
                  <p className="text-sm">Ears: Clear</p>
                </div>
              </div>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => {
                  setShowReward(false);
                  setCompletedSteps([]);
                }}
              >
                Play Again
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Choose Your Role:</h4>
                <div className="flex space-x-4 mb-6">
                  {rolePlayers.map(role => (
                    <div 
                      key={role.id}
                      className={`bg-white p-4 rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow ${
                        role.id === 'doctor' ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      <div className="text-4xl mb-2">{role.icon}</div>
                      <p className="font-medium">{role.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Doctor's Medical Tools:</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Choose different tools to examine the patient. Try using at least 4 tools!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {medicalTools.map(tool => (
                    <div 
                      key={tool.id}
                      className={`bg-white p-3 rounded-lg text-center cursor-pointer hover:bg-purple-50 transition-colors
                        ${selectedTool === tool.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''}
                        ${completedSteps.includes(tool.id) ? 'border-2 border-green-200' : ''}
                      `}
                      onClick={() => handleToolSelection(tool.id)}
                    >
                      <div className="text-3xl mb-2">{tool.icon}</div>
                      <p className="font-medium text-sm">{tool.name}</p>
                      {completedSteps.includes(tool.id) && (
                        <span className="text-green-500 text-xs">✓ Used</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedTool && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Using: {medicalTools.find(t => t.id === selectedTool)?.name}
                  </h4>
                  <p>
                    {medicalTools.find(t => t.id === selectedTool)?.description}
                  </p>
                </div>
              )}
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <div className="text-3xl mr-3">💡</div>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Doctor's Tip:</h4>
                    <p className="text-sm">
                      Real doctors use their tools carefully and always explain what they're doing to help patients feel comfortable and safe!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Body Puzzle Activity */}
      {currentActivity === 'puzzle' && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Body Puzzle Game</h3>
          
          {showReward ? (
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <div className="text-6xl mb-4">🧩</div>
              <h4 className="text-2xl font-bold text-yellow-700 mb-2">Puzzle Completed!</h4>
              <p className="mb-6">Great job putting together all the body parts! Now you know where everything belongs.</p>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => {
                  setShowReward(false);
                }}
              >
                Play Again
              </button>
            </div>
          ) : (
            <div>
              <p className="mb-6 text-gray-700">Drag and drop the body parts to the right place on the body outline!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold mb-3 text-blue-700">Body Parts to Place:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {bodyPuzzlePieces.map(part => (
                      <div 
                        key={part.id} 
                        className="bg-blue-100 p-3 rounded-lg text-center cursor-pointer hover:bg-blue-200 transition-colors"
                        onClick={() => {
                          updateProgress(part.id, 10);
                          // In a real drag-drop implementation, we'd track which parts are placed
                          if (completedSteps.length >= 5) {
                            setTimeout(() => {
                              completeActivity(['brain', 'heart', 'lungs', 'stomach', 'bones']);
                            }, 1000);
                          } else {
                            setCompletedSteps(prev => [...prev, part.id]);
                          }
                        }}
                      >
                        <div className="text-3xl mb-2">
                          {part.id === 'brain' && '🧠'}
                          {part.id === 'heart' && '❤️'}
                          {part.id === 'lungs' && '🫁'}
                          {part.id === 'stomach' && '🍎'}
                          {part.id === 'bones' && '🦴'}
                          {part.id === 'muscles' && '💪'}
                        </div>
                        <p className="font-medium">{part.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md relative">
                  <h4 className="font-semibold mb-3 text-blue-700">Body Outline:</h4>
                  <div className="relative h-80 mx-auto w-48 border-2 border-blue-200 rounded-3xl">
                    {/* Simple body outline */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-blue-200"></div>
                    
                    {/* Placeholder areas for body parts */}
                    <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-dashed border-blue-300 flex items-center justify-center">
                      {completedSteps.includes('brain') && <span className="text-3xl">🧠</span>}
                    </div>
                    <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-dashed border-blue-300 flex items-center justify-center">
                      {completedSteps.includes('heart') && <span className="text-3xl">❤️</span>}
                    </div>
                    <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 mt-12 w-20 h-12 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      {completedSteps.includes('lungs') && <span className="text-3xl">🫁</span>}
                    </div>
                    <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-16 h-12 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      {completedSteps.includes('stomach') && <span className="text-3xl">🍎</span>}
                    </div>
                    <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 w-8 h-32 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      {completedSteps.includes('bones') && <span className="text-3xl">🦴</span>}
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      Click on a body part and then click where it should go!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Did you know?</h4>
                <p className="text-gray-700">
                  Your body has more than 200 bones and over 600 muscles that all work together to help you move!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Empathy/Caring Cards Activity */}
      {currentActivity === 'empathy' && (
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-700 mb-4">Caring Cards</h3>
          
          {showReward ? (
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <div className="text-6xl mb-4">❤️</div>
              <h4 className="text-2xl font-bold text-yellow-700 mb-2">Caring Champion!</h4>
              <p className="mb-6">You've learned how doctors care for their patients with kindness and understanding!</p>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => {
                  setShowReward(false);
                }}
              >
                Play Again
              </button>
            </div>
          ) : (
            <div>
              <p className="mb-6 text-gray-700">
                Doctors don't just use tools and medicine - they also need to be kind and caring! 
                Click on each card to learn how doctors show empathy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {caringCards.map((card, index) => (
                  <div 
                    key={card.id}
                    className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer 
                      ${completedSteps.includes(card.id) ? 'border-2 border-red-200' : ''}
                    `}
                    onClick={() => {
                      if (!completedSteps.includes(card.id)) {
                        setCompletedSteps(prev => [...prev, card.id]);
                        
                        // Update relevant body parts based on card
                        if (card.id === 'listen') updateProgress('brain', 8);
                        if (card.id === 'explain') updateProgress('brain', 8);
                        if (card.id === 'gentle') updateProgress('muscles', 8);
                        if (card.id === 'help') updateProgress('heart', 8);
                        
                        // Show reward if all cards are clicked
                        if (completedSteps.length >= 3) {
                          setTimeout(() => {
                            completeActivity(['heart', 'brain']);
                          }, 500);
                        }
                      }
                    }}
                  >
                    <div className="flex items-start">
                      <div className="text-4xl mr-4">{card.icon}</div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">{card.title}</h4>
                        <p className="text-gray-600">{card.description}</p>
                        {completedSteps.includes(card.id) && (
                          <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded mt-2">
                            ✓ Learned
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 flex items-center mb-2">
                  <span className="text-xl mr-2">🎭</span> Role Play Activity
                </h4>
                <p className="text-gray-700 mb-3">
                  Practice being a caring doctor! Choose what you would say in each situation:
                </p>
                
                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-2">A patient is nervous about getting a shot. What do you say?</p>
                  <div className="space-y-2">
                    <button className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors">
                      "Don't worry, it only hurts for a second!"
                    </button>
                    <button 
                      className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors"
                      onClick={() => updateProgress('heart', 5)}
                    >
                      "I understand you're nervous. I'll be very gentle and it will be over quickly."
                    </button>
                    <button className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors">
                      "Everyone gets shots, it's no big deal."
                    </button>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-medium mb-2">A young patient doesn't understand what's happening. What do you do?</p>
                  <div className="space-y-2">
                    <button className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors">
                      "Just sit still while I check you."
                    </button>
                    <button className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors">
                      "Ask your parents to explain it later."
                    </button>
                    <button 
                      className="block w-full text-left p-2 rounded bg-gray-100 hover:bg-blue-100 transition-colors"
                      onClick={() => updateProgress('brain', 5)}
                    >
                      "I'm going to use this tool to listen to your heart. Would you like to hear it too?"
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeachingStrategies;
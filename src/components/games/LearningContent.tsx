// src/components/games/LearningContent.tsx
import { useState } from 'react';

interface BodyPart {
  id: string;
  name: string;
  description: string;
  learned: number;
}

interface LearningContentProps {
  bodyParts: BodyPart[];
  updateProgress: (bodyPartId: string, value: number) => void;
}

const LearningContent = ({ bodyParts, updateProgress }: LearningContentProps) => {
  const [currentSection, setCurrentSection] = useState<string>('hygiene');
  
  const sections = [
    { id: 'hygiene', name: 'Healthy Habits', icon: '🧼' },
    { id: 'nutrition', name: 'Healthy Foods', icon: '🍎' },
    { id: 'exercise', name: 'Stay Active', icon: '🏃‍♂️' },
    { id: 'sleep', name: 'Rest Well', icon: '😴' }
  ];
  
  const completeActivity = (bodyPartId: string) => {
    updateProgress(bodyPartId, 15);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Fun Health Learning</h2>
      
      {/* Section Navigation */}
      <div className="flex overflow-x-auto mb-6 pb-2">
        {sections.map(section => (
          <button
            key={section.id}
            className={`flex-shrink-0 flex flex-col items-center px-4 py-2 mx-2 rounded-lg transition-colors ${
              currentSection === section.id 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setCurrentSection(section.id)}
          >
            <span className="text-2xl mb-1">{section.icon}</span>
            <span className="text-sm font-medium">{section.name}</span>
          </button>
        ))}
      </div>
      
      {/* Hygiene Section */}
      {currentSection === 'hygiene' && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Personal Hygiene & Health</h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Wash Your Hands!</h4>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">💧</span>
                  </div>
                  <p className="text-sm">1. Wet hands</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">🧼</span>
                  </div>
                  <p className="text-sm">2. Apply soap</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">👏</span>
                  </div>
                  <p className="text-sm">3. Scrub 20 seconds</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">💦</span>
                  </div>
                  <p className="text-sm">4. Rinse well</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">🧻</span>
                  </div>
                  <p className="text-sm">5. Dry with towel</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-2 flex items-center justify-center h-24 w-24 mx-auto">
                    <span className="text-4xl">😀</span>
                  </div>
                  <p className="text-sm">6. Hands are clean!</p>
                </div>
              </div>
            </div>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => completeActivity('lungs')}
            >
              I know how to wash my hands!
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Brush Those Teeth!</h4>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex justify-center mb-4">
                <img src="/api/placeholder/400/200" alt="Toothbrushing animation" className="rounded-lg" />
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-bold mr-2">1</span>
                  <span>Squeeze a pea-sized amount of toothpaste on your brush</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-bold mr-2">2</span>
                  <span>Brush all your teeth for two minutes</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-bold mr-2">3</span>
                  <span>Don't forget to brush your tongue too!</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-bold mr-2">4</span>
                  <span>Rinse your mouth with water</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 font-bold mr-2">5</span>
                  <span>Brush at least twice a day - morning and night!</span>
                </li>
              </ul>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => completeActivity('brain')}
              >
                I know how to brush my teeth!
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Nutrition Section */}
      {currentSection === 'nutrition' && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-700 mb-4">Healthy Foods</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h4 className="text-lg font-semibold text-green-600 mb-3">Food Groups</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">🥦</div>
                <h5 className="font-semibold">Vegetables</h5>
                <p className="text-xs text-gray-600">Carrots, Broccoli, Spinach</p>
              </div>
              <div className="bg-red-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">🍎</div>
                <h5 className="font-semibold">Fruits</h5>
                <p className="text-xs text-gray-600">Apples, Bananas, Oranges</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">🍞</div>
                <h5 className="font-semibold">Grains</h5>
                <p className="text-xs text-gray-600">Bread, Rice, Pasta</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">🥛</div>
                <h5 className="font-semibold">Dairy</h5>
                <p className="text-xs text-gray-600">Milk, Cheese, Yogurt</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">🍗</div>
                <h5 className="font-semibold">Protein</h5>
                <p className="text-xs text-gray-600">Chicken, Fish, Beans</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-center">
                <div className="text-3xl mb-2">💧</div>
                <h5 className="font-semibold">Water</h5>
                <p className="text-xs text-gray-600">Drink plenty every day!</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-green-600 mb-2">Build a Healthy Plate</h4>
              <div className="relative h-64 w-64 mx-auto mb-3">
                <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
                {/* Plate sections */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-200 rounded-tl-full border-r-2 border-b-2 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl transform -rotate-45">🥦</span>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200 rounded-tr-full border-l-2 border-b-2 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl transform rotate-45">🍎</span>
                </div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-200 rounded-bl-full border-r-2 border-t-2 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl transform -rotate-45">🍞</span>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-200 rounded-br-full border-l-2 border-t-2 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl transform rotate-45">🍗</span>
                </div>
              </div>
              <div className="text-center text-sm mb-4">
                <p>Try to eat from all food groups every day!</p>
              </div>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => completeActivity('stomach')}
              >
                I can build a healthy plate!
              </button>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Food Sorting Game</h4>
              <p className="text-sm mb-3">Drag each food to the correct food group!</p>
              <div className="flex justify-center">
                <img src="/api/placeholder/400/200" alt="Food sorting game placeholder" className="rounded-lg" />
              </div>
              <div className="mt-3 text-center">
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  onClick={() => completeActivity('stomach')}
                >
                  Play the game!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Exercise Section */}
      {currentSection === 'exercise' && (
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-indigo-700 mb-4">Stay Active & Strong</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h4 className="text-lg font-semibold text-indigo-600 mb-3">Exercise is Fun!</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">❤️</span> Makes Your Heart Strong
                </h5>
                <p className="text-sm">Exercise makes your heart beat faster and helps it get stronger!</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">💪</span> Builds Strong Muscles
                </h5>
                <p className="text-sm">Moving your body helps your muscles grow strong and healthy!</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">🧠</span> Helps Your Brain
                </h5>
                <p className="text-sm">Exercise helps you think better and feel happier!</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">😴</span> Helps You Sleep
                </h5>
                <p className="text-sm">Being active during the day helps you sleep better at night.</p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-indigo-600 mb-3">Try These Fun Activities!</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-3 mb-2 flex items-center justify-center h-24">
                  <span className="text-4xl">🏃‍♂️</span>
                </div>
                <p className="text-sm font-medium">Running</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-3 mb-2 flex items-center justify-center h-24">
                  <span className="text-4xl">🚴‍♀️</span>
                </div>
                <p className="text-sm font-medium">Biking</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-3 mb-2 flex items-center justify-center h-24">
                  <span className="text-4xl">🏊‍♂️</span>
                </div>
                <p className="text-sm font-medium">Swimming</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-3 mb-2 flex items-center justify-center h-24">
                  <span className="text-4xl">⚽</span>
                </div>
                <p className="text-sm font-medium">Sports</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Exercise Challenge</h4>
              <p className="text-sm mb-2">Try to exercise for at least 60 minutes every day!</p>
              <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-2/3"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0 minutes</span>
                <span>30 minutes</span>
                <span>60 minutes</span>
              </div>
            </div>
            
            <button 
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              onClick={() => {
                completeActivity('heart');
                completeActivity('muscles');
              }}
            >
              I will stay active every day!
            </button>
          </div>
        </div>
      )}
      
      {/* Sleep Section */}
      {currentSection === 'sleep' && (
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Rest Well</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Sleep is Important!</h4>
            
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <img src="/api/placeholder/400/200" alt="Child sleeping" className="rounded-lg" />
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">How Much Sleep Do Kids Need?</h5>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg mb-2">
                  <span className="font-medium">Ages 5-6:</span>
                  <span className="font-bold text-purple-700">10-12 hours</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg mb-2">
                  <span className="font-medium">Ages 7-8:</span>
                  <span className="font-bold text-purple-700">10-11 hours</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                  <span className="font-medium">Ages 9-10:</span>
                  <span className="font-bold text-purple-700">9-10 hours</span>
                </div>
              </div>
              
              <h5 className="font-semibold mb-2">Why Is Sleep Important?</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">🧠</span>
                    <span className="font-medium">Helps Your Brain</span>
                  </div>
                  <p className="text-sm">Sleep helps you learn and remember new things.</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">📏</span>
                    <span className="font-medium">Helps You Grow</span>
                  </div>
                  <p className="text-sm">Your body releases growth hormones while you sleep.</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">🦸‍♂️</span>
                    <span className="font-medium">Fights Germs</span>
                  </div>
                  <p className="text-sm">Sleep helps your body stay strong and healthy.</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">😀</span>
                    <span className="font-medium">Makes You Happy</span>
                  </div>
                  <p className="text-sm">Getting enough sleep helps you feel good all day.</p>
                </div>
              </div>
              
              <h5 className="font-semibold mb-2">Bedtime Routine</h5>
              <div className="flex overflow-x-auto space-x-3 pb-2 mb-3">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-1 h-24 w-24 flex items-center justify-center">
                    <span className="text-3xl">🛁</span>
                  </div>
                  <p className="text-xs">Take a bath</p>
                </div>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-1 h-24 w-24 flex items-center justify-center">
                    <span className="text-3xl">🦷</span>
                  </div>
                  <p className="text-xs">Brush teeth</p>
                </div>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-1 h-24 w-24 flex items-center justify-center">
                    <span className="text-3xl">📚</span>
                  </div>
                  <p className="text-xs">Read a story</p>
                </div>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-1 h-24 w-24 flex items-center justify-center">
                    <span className="text-3xl">💤</span>
                  </div>
                  <p className="text-xs">Lights out</p>
                </div>
              </div>
            </div>
            
            <button 
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              onClick={() => {
                completeActivity('brain');
                completeActivity('bones');
              }}
            >
              I know why sleep is important!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningContent;
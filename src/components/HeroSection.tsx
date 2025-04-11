
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Rocket } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Generate random stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`
      };
      stars.push(<div key={i} className={`absolute w-1 h-1 bg-white rounded-full animate-twinkle`} style={style}></div>);
    }
    return stars;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-purple-900 to-blue-950 overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {generateStars()}
        {/* Shooting star */}
        <div className="absolute top-20 left-1/4 w-24 h-1 bg-white animate-shoot"></div>
      </div>

      {/* Floating Planets */}
      <div className="absolute left-10 top-1/4 animate-float">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500">
          <div className="relative top-4 left-4 w-24 h-24 rounded-full bg-orange-300/30"></div>
        </div>
        <div className="absolute -bottom-4 left-10 w-40 h-3 bg-orange-300/30 rounded-full"></div>
      </div>

      <div className="absolute right-20 top-1/3 animate-float-delayed">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500">
          <div className="relative top-2 left-2 w-16 h-16 rounded-full bg-purple-300/20"></div>
        </div>
      </div>

      {/* Central content */}
      <div className="text-center z-10 p-6 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="block mb-4">Explore Learning</span>
          <div className="mt-4 inline-flex">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-l-lg">B</span>
            <span className="bg-blue-400 text-white px-4 py-2">L</span>
            <span className="bg-green-400 text-white px-4 py-2">O</span>
            <span className="bg-purple-400 text-white px-4 py-2">O</span>
            <span className="bg-pink-400 text-white px-4 py-2 rounded-r-lg">M</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
          Blast off to learning adventures designed for
          <br />
          <span className="font-bold text-yellow-300">amazing young astronauts!</span>
        </p>
        
        <Button 
          onClick={scrollToContent} 
          size="lg" 
          className="mt-8 animate-bounce bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-400 hover:to-purple-500 text-black"
        >
          Start Journey <Rocket className="ml-2" />
        </Button>
      </div>

      {/* Floating UFO */}
      <div className="absolute top-20 right-40 animate-float">
        <div className="w-24 h-12 bg-purple-400 rounded-tl-full rounded-tr-full">
          <div className="relative top-2 mx-auto w-16 h-8 bg-purple-500 rounded-full"></div>
        </div>
        <div className="mx-auto w-8 h-3 bg-yellow-400 rounded-full"></div>
        <div className="flex space-x-2 justify-center mt-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-delayed"></div>
        </div>
      </div>

      {/* Animated Astronaut */}
      <div className="absolute bottom-20 left-20 animate-bounce">
        <div className="relative">
          <div className="w-16 h-20 bg-white rounded-t-full"></div>
          <div className="absolute top-4 left-4 w-8 h-8 bg-gold-500 rounded-full"></div>
          <div className="absolute top-6 left-6 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute -bottom-4 left-5 w-6 h-8 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

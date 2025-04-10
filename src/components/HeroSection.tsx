
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky to-sky-darker overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Bloom</div>
        <div className="flex space-x-4">
          <span className="h-6 w-6 rounded-full bg-leaf animate-pulse"></span>
          <span className="h-6 w-6 rounded-full bg-leaf-hover animate-pulse delay-300"></span>
          <span className="h-6 w-6 rounded-full bg-leaf-active animate-pulse delay-500"></span>
        </div>
      </div>
      
      {/* Central content */}
      <div className="text-center z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="inline-block">WE ARE</span>
          <div className="mt-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-l-lg">B</span>
            <span className="bg-blue-500 text-white px-4 py-2">L</span>
            <span className="bg-green-500 text-white px-4 py-2">O</span>
            <span className="bg-yellow-500 text-white px-4 py-2">O</span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-r-lg">M</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Learning experiences that help children with autism
          <br />
          <span className="font-bold">bloom into their full potential</span>
        </p>
        
        <Button 
          onClick={scrollToContent} 
          size="lg" 
          className="mt-8 animate-bounce bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Start Learning <ArrowDown className="ml-2" />
        </Button>
      </div>
      
      {/* Animated decorations */}
      <div className="absolute -left-16 bottom-10 animate-float">
        <div className="relative w-32 h-32">
          <div className="leaf absolute w-20 h-20 rounded-full bg-leaf-hover"></div>
          <div className="eyes relative top-5 left-5 flex space-x-2">
            <div className="w-3 h-5 bg-black rounded-full"></div>
            <div className="w-3 h-5 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-16 top-1/3 animate-float delay-300">
        <div className="relative w-32 h-32">
          <div className="leaf absolute w-20 h-20 rounded-full bg-leaf"></div>
          <div className="eyes relative top-5 left-5 flex space-x-2">
            <div className="w-3 h-5 bg-black rounded-full"></div>
            <div className="w-3 h-5 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ArrowDown size={32} className="text-foreground" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

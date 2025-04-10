
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
        <div className="text-2xl font-bold">Leafy Learning Haven</div>
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
            <span className="bg-red-500 text-white px-4 py-2">L</span>
            <span className="bg-blue-500 text-white px-4 py-2">E</span>
            <span className="bg-green-500 text-white px-4 py-2">A</span>
            <span className="bg-yellow-500 text-white px-4 py-2">R</span>
            <span className="bg-purple-500 text-white px-4 py-2">N</span>
            <span className="bg-pink-500 text-white px-4 py-2">E</span>
            <span className="bg-orange-500 text-white px-4 py-2">R</span>
            <span className="bg-teal-500 text-white px-4 py-2">S</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          From fun activities to essential life skills,
          <br />
          <span className="font-bold">a learning journey designed specially for you.</span>
        </p>
        
        <Button 
          onClick={scrollToContent} 
          size="lg" 
          className="mt-8 animate-bounce"
        >
          Start Learning <ArrowDown className="ml-2" />
        </Button>
      </div>
      
      {/* Decorative images */}
      <div className="absolute -left-16 bottom-10">
        <div className="relative w-32 h-32">
          <div className="leaf absolute w-20 h-20 rounded-full bg-leaf-hover animate-float"></div>
          <div className="eyes relative top-5 left-5 flex space-x-2">
            <div className="w-3 h-5 bg-black rounded-full"></div>
            <div className="w-3 h-5 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-16 top-1/3">
        <div className="relative w-32 h-32">
          <div className="leaf absolute w-20 h-20 rounded-full bg-leaf animate-float delay-300"></div>
          <div className="eyes relative top-5 left-5 flex space-x-2">
            <div className="w-3 h-5 bg-black rounded-full"></div>
            <div className="w-3 h-5 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ArrowDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

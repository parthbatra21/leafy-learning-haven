
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";

interface MemoryGameProps {
  onBack: () => void;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ onBack }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);
  const activeIndexRef = useRef<number | null>(null);
  const matchedPairsRef = useRef<number>(0);
  const sequenceRef = useRef<number[]>([]);
  const userSequenceRef = useRef<number[]>([]);
  const gameStartedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xE3F2FD);
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 20, 10);
    scene.add(directionalLight);

    // Create cubes arranged in a circle
    const colors = [
      0xff0000, 0x00ff00, 0x0000ff, 0xffff00,
      0xff00ff, 0x00ffff, 0xff8000, 0x8000ff
    ];
    
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const radius = 3;
    const numCubes = 4;
    
    for (let i = 0; i < numCubes; i++) {
      const angle = (i / numCubes) * Math.PI * 2;
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[i],
        transparent: true,
        opacity: 0.7
      });
      
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = Math.cos(angle) * radius;
      cube.position.y = Math.sin(angle) * radius;
      cube.userData = { index: i };
      
      scene.add(cube);
      cubesRef.current.push(cube);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      const id = requestAnimationFrame(animate);
      
      // Rotate cubes
      cubesRef.current.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    // Add click event handling
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const onClick = (event: MouseEvent) => {
      if (!gameStartedRef.current) return;
      if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / mountRef.current.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / mountRef.current.clientHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(cubesRef.current);
      
      if (intersects.length > 0) {
        const clickedCube = intersects[0].object as THREE.Mesh;
        const index = clickedCube.userData.index;
        
        // Add to user sequence
        userSequenceRef.current.push(index);
        
        // Highlight the clicked cube
        highlightCube(index);
        
        // Check if user's sequence matches the target sequence
        checkSequence();
      }
    };
    
    mountRef.current.addEventListener('click', onClick);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('click', onClick);
        mountRef.current.removeChild(rendererRef.current!.domElement);
      }
    };
  }, []);
  
  const startGame = () => {
    gameStartedRef.current = true;
    matchedPairsRef.current = 0;
    sequenceRef.current = [];
    userSequenceRef.current = [];
    
    // Generate a random sequence
    generateSequence();
  };
  
  const generateSequence = () => {
    const newSequence = [];
    const sequenceLength = Math.min(3 + matchedPairsRef.current, 8); // Increase length as game progresses
    
    for (let i = 0; i < sequenceLength; i++) {
      newSequence.push(Math.floor(Math.random() * cubesRef.current.length));
    }
    
    sequenceRef.current = newSequence;
    userSequenceRef.current = [];
    
    // Show the sequence to the user
    showSequence();
  };
  
  const showSequence = () => {
    // Disable interaction during sequence display
    gameStartedRef.current = false;
    
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < sequenceRef.current.length) {
        highlightCube(sequenceRef.current[i]);
        i++;
      } else {
        clearInterval(intervalId);
        // Re-enable interaction
        gameStartedRef.current = true;
      }
    }, 800);
  };
  
  const highlightCube = (index: number) => {
    if (index >= cubesRef.current.length) return;
    
    const cube = cubesRef.current[index];
    const originalOpacity = (cube.material as THREE.MeshPhongMaterial).opacity;
    
    // Highlight effect
    (cube.material as THREE.MeshPhongMaterial).opacity = 1;
    cube.scale.set(1.2, 1.2, 1.2);
    
    // Reset after a short delay
    setTimeout(() => {
      (cube.material as THREE.MeshPhongMaterial).opacity = originalOpacity;
      cube.scale.set(1, 1, 1);
    }, 500);
  };
  
  const checkSequence = () => {
    const userSeq = userSequenceRef.current;
    const targetSeq = sequenceRef.current;
    
    // Check if user's current sequence is correct so far
    for (let i = 0; i < userSeq.length; i++) {
      if (userSeq[i] !== targetSeq[i]) {
        // Incorrect sequence
        setTimeout(() => {
          alert("Incorrect sequence! Try again.");
          showSequence();
          userSequenceRef.current = [];
        }, 500);
        return;
      }
    }
    
    // Check if user has completed the sequence
    if (userSeq.length === targetSeq.length) {
      matchedPairsRef.current++;
      setTimeout(() => {
        alert(`Great job! Moving to level ${matchedPairsRef.current + 1}`);
        generateSequence();
      }, 500);
    }
  };

  return (
    <div className="h-full flex flex-col bg-calm-blue border-none shadow-sm rounded-xl overflow-hidden">
      <div className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-400 to-purple-400">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="bg-white/30 backdrop-blur-sm"
        >
          ← Back
        </Button>
        <h2 className="text-lg font-bold text-white">Memory Sequence Game</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={startGame}
          className="bg-white/30 backdrop-blur-sm"
        >
          Start Game
        </Button>
      </div>
      
      <div 
        ref={mountRef} 
        className="flex-1 w-full" 
      />
      
      <div className="p-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-center">
        <p>Watch the sequence of colors and repeat it by clicking on the cubes in the same order!</p>
      </div>
    </div>
  );
};

export default MemoryGame;

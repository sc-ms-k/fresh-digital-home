
import React, { useEffect, useRef } from 'react';
import { Bot, Globe, Rocket, Star, Sparkles, Cpu, Gem, Tablet } from 'lucide-react';
import { createRoot } from 'react-dom/client';

interface SpaceElementsProps {
  className?: string;
}

// Custom robot component for more modern look
const ModernRobot = ({ color = 'text-blue-500/80', size = 1 }) => (
  <div className={`${color} relative glow transform-gpu`} style={{ fontSize: `${size}rem` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-md"></div>
    <Bot className="relative z-10" />
  </div>
);

// Custom planet component
const Planet = ({ color = 'text-purple-500/80', size = 1 }) => (
  <div className={`${color} relative glow transform-gpu`} style={{ fontSize: `${size}rem` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 rounded-full blur-md"></div>
    <Globe className="relative z-10" />
  </div>
);

const SpaceElements: React.FC<SpaceElementsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create space elements with icons - enhanced version
    const createSpaceElement = (icon: JSX.Element, delay: number, duration: number, size: number = 1) => {
      const element = document.createElement('div');
      const reactRoot = createRoot(element);
      reactRoot.render(icon);
      
      // More dynamic animations
      const randomPath = Math.floor(Math.random() * 4);
      let animationName: string;
      
      switch(randomPath) {
        case 0:
          animationName = 'floatAndRotate';
          element.style.animation = `floatAndRotate ${duration}s ease-in-out infinite`;
          break;
        case 1:
          animationName = 'zigzag';
          element.style.animation = `zigzag ${duration}s ease-in-out infinite`;
          break;
        case 2:
          animationName = 'pulse';
          element.style.animation = `float ${duration}s ease-in-out infinite, pulse 3s ease-in-out infinite alternate`;
          break;
        default:
          animationName = 'float';
          element.style.animation = `float ${duration}s ease-in-out infinite`;
      }
      
      element.className = 'absolute opacity-60 text-white transform-gpu transition-all duration-1000';
      element.style.animationDelay = `${delay}s`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.fontSize = `${Math.random() * 40 + 40}px`; // Much larger sizes
      
      // Add shadow/glow effect
      element.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))';
      
      container.appendChild(element);
      return element;
    };
    
    // Create different space elements - increased counts and sizes
    const elements = [];
    
    // Modern Robots - bigger and more frequent
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 2 + 2; // Larger size between 2-4rem
      const element = createSpaceElement(
        <ModernRobot 
          color={`text-gradient-to-r from-blue-500/80 to-purple-500/80`} 
          size={size}
        />,
        Math.random() * 3,
        5 + Math.random() * 10,
        size
      );
      elements.push(element);
    }
    
    // Planets - larger and more vibrant
    for (let i = 0; i < 6; i++) {
      const size = Math.random() * 2 + 2.5; // Even larger size between 2.5-4.5rem
      const element = createSpaceElement(
        <Planet 
          color={`text-gradient-to-r from-indigo-500/80 to-pink-500/80`} 
          size={size}
        />,
        Math.random() * 3,
        7 + Math.random() * 8,
        size
      );
      elements.push(element);
    }
    
    // CPUs - tech theme
    for (let i = 0; i < 5; i++) {
      const element = createSpaceElement(
        <Cpu className="text-cyan-400/70" />,
        Math.random() * 4,
        4 + Math.random() * 6
      );
      elements.push(element);
    }
    
    // Gems - shiny objects
    for (let i = 0; i < 6; i++) {
      const element = createSpaceElement(
        <Gem className="text-pink-500/70" />,
        Math.random() * 4,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Rockets
    for (let i = 0; i < 5; i++) {
      const element = createSpaceElement(
        <Rocket className="text-red-400/70" />,
        Math.random() * 5,
        4 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Stars - more of them and brighter
    for (let i = 0; i < 12; i++) {
      const element = createSpaceElement(
        <Star className="text-yellow-300/80" />,
        Math.random() * 3,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Sparkles - more of them for magical effect
    for (let i = 0; i < 10; i++) {
      const element = createSpaceElement(
        <Sparkles className="text-white/80" />,
        Math.random() * 3,
        2 + Math.random() * 6
      );
      elements.push(element);
    }
    
    // Tablets - tech theme
    for (let i = 0; i < 4; i++) {
      const element = createSpaceElement(
        <Tablet className="text-blue-300/70" />,
        Math.random() * 5,
        4 + Math.random() * 6
      );
      elements.push(element);
    }
    
    // Create new elements every 8 seconds for continuous fresh animations
    const interval = setInterval(() => {
      // Random selection of what to add
      const randomEl = Math.floor(Math.random() * 5);
      let newElement;
      
      switch(randomEl) {
        case 0:
          newElement = createSpaceElement(
            <ModernRobot color="text-blue-500/80" size={Math.random() * 2 + 2} />,
            0,
            5 + Math.random() * 5
          );
          break;
        case 1:
          newElement = createSpaceElement(
            <Planet color="text-purple-500/80" size={Math.random() * 2 + 2} />,
            0,
            6 + Math.random() * 5
          );
          break;
        case 2:
          newElement = createSpaceElement(
            <Star className="text-yellow-300/80" />,
            0,
            4 + Math.random() * 4
          );
          break;
        case 3:
          newElement = createSpaceElement(
            <Rocket className="text-red-400/70" />,
            0,
            5 + Math.random() * 5
          );
          break;
        default:
          newElement = createSpaceElement(
            <Sparkles className="text-white/80" />,
            0,
            3 + Math.random() * 4
          );
      }
      
      elements.push(newElement);
      
      // Remove oldest element to prevent too many
      if (elements.length > 50) {
        const oldestElement = elements.shift();
        if (oldestElement) {
          oldestElement.style.opacity = '0';
          setTimeout(() => {
            oldestElement.remove();
          }, 1000);
        }
      }
    }, 4000); // Add new elements more frequently
    
    // Cleanup
    return () => {
      clearInterval(interval);
      elements.forEach(element => element.remove());
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-20 ${className}`}
      aria-hidden="true"
    ></div>
  );
};

export default SpaceElements;


import React, { useEffect, useRef } from 'react';
import { Bot, Globe, Rocket, Star, Sparkles } from 'lucide-react';
import { createRoot } from 'react-dom/client';

interface SpaceElementsProps {
  className?: string;
}

const SpaceElements: React.FC<SpaceElementsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create space elements with icons
    const createSpaceElement = (icon: JSX.Element, delay: number, duration: number) => {
      const element = document.createElement('div');
      const reactRoot = createRoot(element);
      reactRoot.render(icon);
      
      element.className = 'absolute opacity-30 text-white transform-gpu';
      element.style.animation = `float ${duration}s ease-in-out infinite`;
      element.style.animationDelay = `${delay}s`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.fontSize = `${Math.random() * 30 + 30}px`; // Increased size
      
      container.appendChild(element);
      return element;
    };
    
    // Create different space elements
    const elements = [];
    
    // Bots
    for (let i = 0; i < 5; i++) { // Increased count
      const element = createSpaceElement(
        <Bot className="text-primary/50" />, // Increased opacity
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Globes
    for (let i = 0; i < 5; i++) { // Increased count
      const element = createSpaceElement(
        <Globe className="text-primary/40" />, // Increased opacity
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Rockets
    for (let i = 0; i < 4; i++) { // Increased count
      const element = createSpaceElement(
        <Rocket className="text-primary/45" />, // Increased opacity
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Stars
    for (let i = 0; i < 8; i++) { // Increased count
      const element = createSpaceElement(
        <Star className="text-primary/35" />, // Increased opacity
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Sparkles
    for (let i = 0; i < 5; i++) { // Increased count
      const element = createSpaceElement(
        <Sparkles className="text-primary/40" />, // Increased opacity
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Cleanup
    return () => {
      elements.forEach(element => element.remove());
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    ></div>
  );
};

export default SpaceElements;

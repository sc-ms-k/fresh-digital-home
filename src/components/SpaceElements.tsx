
import React, { useEffect, useRef } from 'react';
import { Bot, Globe, Rocket, Star, Sparkles } from 'lucide-react';

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
      const reactRoot = document.createRoot(element);
      reactRoot.render(icon);
      
      element.className = 'absolute opacity-10 text-white transform-gpu';
      element.style.animation = `float ${duration}s ease-in-out infinite`;
      element.style.animationDelay = `${delay}s`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.fontSize = `${Math.random() * 20 + 20}px`;
      
      container.appendChild(element);
      return element;
    };
    
    // Create different space elements
    const elements = [];
    
    // Bots
    for (let i = 0; i < 3; i++) {
      const element = createSpaceElement(
        <Bot className="text-primary/30" />,
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Globes
    for (let i = 0; i < 3; i++) {
      const element = createSpaceElement(
        <Globe className="text-primary/20" />,
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Rockets
    for (let i = 0; i < 2; i++) {
      const element = createSpaceElement(
        <Rocket className="text-primary/25" />,
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Stars
    for (let i = 0; i < 5; i++) {
      const element = createSpaceElement(
        <Star className="text-primary/15" />,
        Math.random() * 5,
        3 + Math.random() * 7
      );
      elements.push(element);
    }
    
    // Sparkles
    for (let i = 0; i < 3; i++) {
      const element = createSpaceElement(
        <Sparkles className="text-primary/20" />,
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

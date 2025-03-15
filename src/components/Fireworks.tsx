
import React, { useEffect, useRef } from 'react';

interface FireworksProps {
  frequency?: number;
  particleCount?: number;
  size?: number;
}

const Fireworks: React.FC<FireworksProps> = ({ 
  frequency = 0.4, 
  particleCount = 150, 
  size = 6 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Fireworks particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      
      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.color = color;
        this.alpha = 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.01;
        this.speedY += 0.05; // Gravity effect
      }
      
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    let particles: Particle[] = [];
    
    // Create a firework explosion
    function createFirework(x: number, y: number) {
      const colors = [
        '#ff0000', '#ff7700', '#ffff00', '#00ff00', '#0000ff', '#ff00ff',
        '#00ffff', '#ffffff', '#ff00aa', '#aa00ff', '#ffaa00'
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(
          x, 
          y, 
          Math.random() * size + 1, 
          color
        ));
      }
    }
    
    // Animation loop
    function animate() {
      // Add slight transparency for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Randomly create fireworks based on frequency
      if (Math.random() < frequency / 60) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5;
        createFirework(x, y);
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].alpha > 0) {
          particles[i].update();
          particles[i].draw();
        } else {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [frequency, particleCount, size]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-10 pointer-events-none"
    ></canvas>
  );
};

export default Fireworks;

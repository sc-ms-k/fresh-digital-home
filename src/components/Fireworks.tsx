
import React, { useEffect, useRef } from 'react';

const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Firework particles
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
        this.speedX = (Math.random() - 0.5) * 8; // Increased speed
        this.speedY = (Math.random() - 0.5) * 8; // Increased speed
        this.color = color;
        this.alpha = 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.008; // Slower fade for longer visibility
        this.size = Math.max(0, this.size - 0.08);
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    class Firework {
      particles: Particle[];
      isActive: boolean;
      
      constructor(x: number, y: number) {
        this.particles = [];
        this.isActive = true;
        
        // Create particles
        const particleCount = 150; // Increased particle count
        const colors = ['#ff69b4', '#87cefa', '#7fff00', '#ff4500', '#ffd700', '#ba55d3'];
        
        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 4 + 2; // Increased particle size
          const color = colors[Math.floor(Math.random() * colors.length)];
          this.particles.push(new Particle(x, y, size, color));
        }
      }
      
      update() {
        this.particles.forEach(particle => particle.update());
        this.particles = this.particles.filter(particle => particle.alpha > 0);
        
        if (this.particles.length === 0) {
          this.isActive = false;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        this.particles.forEach(particle => particle.draw(ctx));
      }
    }
    
    // Fireworks array
    const fireworks: Firework[] = [];
    
    // Create a firework at a random position
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.6; // Cover more of the screen
      fireworks.push(new Firework(x, y));
    };
    
    // Periodically create fireworks - more frequently
    const fireworkInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        createFirework();
      }
    }, 600); // Reduced interval from 1000ms to 600ms
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw fireworks
      fireworks.forEach(firework => {
        firework.update();
        firework.draw(ctx);
      });
      
      // Remove inactive fireworks
      const activeFireworks = fireworks.filter(firework => firework.isActive);
      fireworks.length = 0;
      fireworks.push(...activeFireworks);
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Create initial fireworks - more of them
    for (let i = 0; i < 5; i++) { // Increased from 3 to 5
      createFirework();
    }
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(fireworkInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-20 opacity-80" // Increased opacity from 70 to 80
      aria-hidden="true"
    />
  );
};

export default Fireworks;

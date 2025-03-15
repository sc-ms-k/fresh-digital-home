
import React, { useEffect } from 'react';
import { ArrowDown, Code, Server, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const yOffset = -100;
      const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Text animation effect
  useEffect(() => {
    const headingEl = document.querySelector('.hero-heading');
    if (headingEl) {
      // Add subtle floating animation to the 3D text
      const floatAnimation = () => {
        const translateY = Math.sin(Date.now() / 1500) * 5;
        const rotateX = Math.sin(Date.now() / 2000) * 1;
        const rotateY = Math.sin(Date.now() / 2500) * 1;
        
        headingEl.setAttribute('style', 
          `transform: translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
        );
        
        requestAnimationFrame(floatAnimation);
      };
      
      floatAnimation();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Enhanced space-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 z-0 animated-gradient"></div>
      
      {/* Enhanced glowing orb effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500/30 filter blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-fuchsia-500/30 filter blur-[100px] animate-pulse z-0" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-blue-500/30 filter blur-[80px] animate-pulse z-0" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/2 left-1/3 w-72 h-72 rounded-full bg-cyan-500/30 filter blur-[90px] animate-pulse z-0" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6 animate-fade-in">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-sm font-medium backdrop-blur-sm">
              <Code className="w-4 h-4 mr-2" />
              Frontend Development
            </span>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-sm font-medium backdrop-blur-sm">
              <Server className="w-4 h-4 mr-2" />
              Backend Architecture
            </span>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-sm font-medium backdrop-blur-sm">
              <Database className="w-4 h-4 mr-2" />
              Database Design
            </span>
          </div>
          
          {/* 3D Gradient Heading with animation */}
          <h1 className="hero-heading heading-xl mb-6 animate-slide-from-bottom transition-transform duration-1000 ease-out"
              style={{ 
                animationDelay: '200ms',
                textShadow: '0 0 5px rgba(255,255,255,0.3), 0 5px 15px rgba(0,0,0,0.5)',
                background: 'linear-gradient(to right, #9b87f5, #d946ef, #0ea5e9, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 8s ease infinite',
                perspective: '1000px',
                transform: 'translateZ(20px)',
              }}>
            Full Stack Engineer & Digital Architect
          </h1>
          
          {/* Gradient subtext */}
          <p className="text-xl text-white mb-10 animate-slide-from-bottom backdrop-blur-sm px-4 py-2 rounded-lg bg-white/5"
             style={{ 
               animationDelay: '400ms',
               textShadow: '0 2px 4px rgba(0,0,0,0.3)',
               background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)',
             }}>
            I craft robust, scalable digital solutions that seamlessly integrate frontend and backend technologies. 
            With expertise in modern web frameworks, cloud infrastructure, and database optimization, 
            I build applications that drive business growth and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-from-bottom" style={{ animationDelay: '600ms' }}>
            <button 
              onClick={() => {
                const experienceSection = document.getElementById('experience');
                if (experienceSection) {
                  const yOffset = -100;
                  const y = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="button-3d button-hover-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)',
                boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)',
              }}
            >
              View Experience
              <ArrowDown className="w-4 h-4" />
            </button>
            
            <button 
              onClick={scrollToWork}
              className="button-3d button-hover-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white/20"
              style={{
                boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              View Projects
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background grid pattern with animation */}
      <div
        className="absolute inset-0 bg-grid-slate-900/10 bg-[linear-gradient(to_right,transparent_0%,transparent_40px,#ffffff08_40px,#ffffff08_41px)] bg-[length:41px_41px] [mask-image:linear-gradient(to_bottom,transparent,black)] animate-pulse"
        style={{animationDuration: '10s'}}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;

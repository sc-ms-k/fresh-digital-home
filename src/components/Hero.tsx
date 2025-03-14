
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const yOffset = -100;
      const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Space-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 z-0"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500/20 filter blur-[100px] z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-fuchsia-500/20 filter blur-[80px] z-0"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-500/20 filter blur-[60px] z-0"></div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-6 animate-fade-in">
            Digital Designer & Developer
          </span>
          
          <h1 className="heading-xl mb-6 animate-slide-from-bottom" style={{ animationDelay: '200ms' }}>
            Crafting digital experiences that inspire
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-slide-from-bottom" style={{ animationDelay: '400ms' }}>
            I design and build modern, elegant websites and digital products that help brands stand out in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-from-bottom" style={{ animationDelay: '600ms' }}>
            <button 
              onClick={scrollToWork}
              className="button-hover-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const yOffset = -100;
                  const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="button-hover-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-transparent hover:border-border"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-grid-slate-900/10 bg-[linear-gradient(to_right,transparent_0%,transparent_40px,#ffffff05_40px,#ffffff05_41px)] bg-[length:41px_41px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;

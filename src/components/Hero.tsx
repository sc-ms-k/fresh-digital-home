
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
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/5 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-grid-slate-200/20 bg-[linear-gradient(to_right,transparent_0%,transparent_40px,#00000005_40px,#00000005_41px)] bg-[length:41px_41px] dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,transparent,black)]"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;

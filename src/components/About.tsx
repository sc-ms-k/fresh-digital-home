
import React, { useEffect, useRef } from 'react';
import { skills, testimonials } from '@/lib/constants';
import { Bot, Planet, Rocket, Quote } from 'lucide-react';

const About: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animationElement = animationRef.current;
    if (!animationElement) return;
    
    // Create floating animation for space objects
    const createFloatingElement = (icon: string, delay: number, duration: number) => {
      const element = document.createElement('div');
      element.innerHTML = icon;
      element.className = 'absolute opacity-10 text-white';
      element.style.animation = `float ${duration}s ease-in-out infinite`;
      element.style.animationDelay = `${delay}s`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.fontSize = `${Math.random() * 20 + 20}px`;
      element.style.transform = 'translateY(0px)';
      animationElement.appendChild(element);
      
      return element;
    };
    
    // Create planets and robots floating in background
    const icons = [
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-planet"><path d="M17.5 12a5.5 5.5 0 1 1-5.5-5.5 5.5 5.5 0 0 1 5.5 5.5Z"/><path d="M2.24 7.88a13.94 13.94 0 0 0 0 8.24M21.76 7.88a13.94 13.94 0 0 1 0 8.24"/><path d="M7.86 2.23a13.95 13.95 0 0 0-5.62 5.65M16.14 2.23a13.95 13.95 0 0 1 5.62 5.65"/><path d="M7.86 21.77a13.95 13.95 0 0 1-5.62-5.65M16.14 21.77a13.95 13.95 0 0 0 5.62-5.65"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
    ];
    
    const elements = [];
    for (let i = 0; i < 10; i++) {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const element = createFloatingElement(randomIcon, Math.random() * 5, 3 + Math.random() * 7);
      elements.push(element);
    }
    
    return () => {
      elements.forEach(element => element.remove());
    };
  }, []);

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 z-0"></div>
      
      {/* Animation container for planets and robots */}
      <div ref={animationRef} className="absolute inset-0 z-0 overflow-hidden"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground mb-6">
              I'm a passionate digital designer and developer with over 8 years of experience creating memorable online experiences. My approach combines strategic thinking, creative design, and technical expertise to build solutions that drive real business results.
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              I collaborate closely with clients to understand their unique challenges and opportunities, translating their vision into digital experiences that connect with their audiences and achieve their goals.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="inline-flex px-3 py-1 rounded-full bg-secondary text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            {/* Decorative elements */}
            <Bot className="absolute -top-8 -left-6 w-12 h-12 text-primary/30 animate-float" style={{animationDuration: '6s'}} />
            <Planet className="absolute -bottom-10 -right-8 w-16 h-16 text-primary/20 animate-float" style={{animationDuration: '8s'}} />
            <Rocket className="absolute top-1/3 -right-10 w-10 h-10 text-primary/25 animate-float" style={{animationDuration: '7s'}} />
            
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel">
              <img
                src="/lovable-uploads/f1c0e09c-5ef3-48ed-8bb8-d5a3def80525.png"
                alt="Designer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl -z-10" aria-hidden="true"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-white/10 rounded-xl -z-10" aria-hidden="true"></div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-32">
          <h3 className="heading-md text-center mb-12 animate-on-scroll">Client Testimonials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-panel p-8 rounded-2xl relative animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-primary/20" />
                <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

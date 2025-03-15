
import React, { useEffect, useRef } from 'react';
import { experiences } from '@/lib/constants';
import { Progress } from '@/components/ui/progress';
import { Code, Server, Globe, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Apply 3D effect to progress bars
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        // Add the 3D effect with a slight delay for each progress bar
        setTimeout(() => {
          ref.classList.add('progress-3d-active');
        }, index * 300);
      }
    });
    
    // Add floating animation for section titles
    const titles = document.querySelectorAll('.experience-title');
    titles.forEach((title) => {
      const animateTitle = () => {
        const translateY = Math.sin(Date.now() / 2000) * 5;
        const rotate = Math.sin(Date.now() / 3000) * 0.5;
        title.setAttribute('style', 
          `transform: translateY(${translateY}px) rotateX(${rotate}deg) rotateY(${rotate}deg);`
        );
        requestAnimationFrame(animateTitle);
      };
      animateTitle();
    });
  }, []);

  // Generate random icons for visual interest
  const getRandomIcon = (index: number) => {
    const icons = [
      <Code key="code" className="w-6 h-6 mr-2" />,
      <Server key="server" className="w-6 h-6 mr-2" />,
      <Globe key="globe" className="w-6 h-6 mr-2" />,
      <Database key="database" className="w-6 h-6 mr-2" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 z-0"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500/30 filter blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-fuchsia-500/30 filter blur-[100px] animate-pulse z-0" style={{animationDelay: '1s'}}></div>
      
      <div className="container-wide relative z-10">
        <h2 className="heading-lg text-center mb-16 experience-title animate-on-scroll"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s ease-out',
              background: 'linear-gradient(to right, #9b87f5, #d946ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-16 glass-panel p-8 rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="md:w-1/3">
                  <span className="text-sm font-medium text-primary/70">{exp.period}</span>
                  <h3 className="text-2xl font-bold font-display mb-1">{exp.role}</h3>
                  <p className="text-lg font-medium text-primary/80">{exp.company}</p>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm font-medium"
                      >
                        {getRandomIcon(idx)}
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div 
                    ref={el => progressRefs.current[index] = el} 
                    className="progress-3d"
                  >
                    <div className="mb-2 flex justify-between items-center">
                      <span>Proficiency</span>
                      <span className="font-bold">{exp.progress}%</span>
                    </div>
                    <Progress value={exp.progress} className="h-6 bg-secondary/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

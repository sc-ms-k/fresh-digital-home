
import React, { useState, useEffect } from 'react';
import { projects } from '@/lib/constants';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  // Get unique categories for filter
  const allCategories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Handle category filter change
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  // Add 3D floating animation to the heading
  useEffect(() => {
    const headingEl = document.querySelector('.portfolio-heading');
    if (headingEl) {
      const animateHeading = () => {
        const translateY = Math.sin(Date.now() / 2000) * 5;
        const rotateX = Math.sin(Date.now() / 2800) * 1;
        const rotateY = Math.sin(Date.now() / 3200) * 1;
        
        headingEl.setAttribute('style', 
          `transform: translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
        );
        
        requestAnimationFrame(animateHeading);
      };
      
      animateHeading();
    }
  }, []);

  return (
    <section id="work" className="section bg-secondary/50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-on-scroll portfolio-heading"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s ease-out',
                background: 'linear-gradient(to right, #0ea5e9, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}>
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground animate-on-scroll">
            Explore a collection of my recent projects spanning various industries and design challenges.
            As a full stack engineer, I've created end-to-end solutions for clients across different sectors.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 animate-on-scroll">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-background hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

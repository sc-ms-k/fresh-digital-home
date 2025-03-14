
import React, { useState } from 'react';
import { projects } from '@/lib/constants';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="section bg-secondary/50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-on-scroll">Selected Work</h2>
          <p className="text-xl text-muted-foreground animate-on-scroll">
            Explore a collection of my recent projects spanning various industries and design challenges.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
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

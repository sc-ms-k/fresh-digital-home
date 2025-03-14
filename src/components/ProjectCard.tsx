
import React, { useState } from 'react';
import { Project } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg bg-background border border-border animate-on-scroll"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-hover aspect-video w-full overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="block text-sm font-medium text-muted-foreground mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-display font-bold">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </div>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
    </a>
  );
};

export default ProjectCard;

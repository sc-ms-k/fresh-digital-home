
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TransitionEffect from '@/components/TransitionEffect';
import Fireworks from '@/components/Fireworks';
import SpaceElements from '@/components/SpaceElements';

const Index: React.FC = () => {
  useEffect(() => {
    // Add the animate-on-scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Custom animation for headings to make them 3D and gradient
    const styleHeadings = () => {
      const headings = document.querySelectorAll('h2, h3');
      headings.forEach((heading, index) => {
        heading.classList.add('gradient-heading');
        
        // Different gradient styles for variety
        const gradientStyles = [
          'linear-gradient(to right, #9b87f5, #d946ef)',
          'linear-gradient(to right, #7E69AB, #8B5CF6)',
          'linear-gradient(to right, #0EA5E9, #6366f1)',
          'linear-gradient(to right, #D946EF, #F97316)'
        ];
        
        const style = gradientStyles[index % gradientStyles.length];
        
        heading.setAttribute('style', `
          background: ${style};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        `);
        
        // Add hover effect
        heading.addEventListener('mousemove', (e) => {
          const rect = heading.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const rotateX = (y - rect.height / 2) / 20;
          const rotateY = (rect.width / 2 - x) / 20;
          
          heading.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        heading.addEventListener('mouseleave', () => {
          heading.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
      });
    };
    
    // Apply 3D effects to headings
    setTimeout(styleHeadings, 500);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-transition-wrapper">
      <TransitionEffect />
      
      {/* Fireworks animation - increased frequency and size */}
      <Fireworks frequency={0.2} particleCount={100} size={3} />
      
      {/* Global space elements animation - prominent on all pages */}
      <SpaceElements className="fixed" />
      
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

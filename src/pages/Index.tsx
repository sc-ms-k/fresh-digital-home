import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
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
        
        // Fix: Cast to HTMLElement to access style property
        const headingElement = heading as HTMLElement;
        headingElement.style.background = style;
        headingElement.style.webkitBackgroundClip = 'text';
        headingElement.style.webkitTextFillColor = 'transparent';
        headingElement.style.textShadow = '0 4px 8px rgba(0,0,0,0.2)';
        headingElement.style.transformStyle = 'preserve-3d';
        headingElement.style.transition = 'transform 0.5s ease';
        
        // Add hover effect and floating animation
        const animateHeading = (e: MouseEvent) => {
          const rect = headingElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const rotateX = (y - rect.height / 2) / 20;
          const rotateY = (rect.width / 2 - x) / 20;
          
          headingElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        };
        
        const resetHeading = () => {
          // Don't completely reset, keep a subtle animation
          const floatY = Math.sin(Date.now() / 2000) * 5;
          headingElement.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(${floatY}px) translateZ(10px)`;
        };
        
        // Apply floating animation to all headings
        const floatHeading = () => {
          if (!headingElement.matches(':hover')) {
            const floatY = Math.sin(Date.now() / 2000) * 5;
            const rotateX = Math.sin(Date.now() / 3000) * 1;
            const rotateY = Math.sin(Date.now() / 3500) * 1;
            
            headingElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${floatY}px) translateZ(10px)`;
          }
          requestAnimationFrame(floatHeading);
        };
        
        headingElement.addEventListener('mousemove', animateHeading);
        headingElement.addEventListener('mouseleave', resetHeading);
        
        // Start the floating animation
        floatHeading();
      });
    };
    
    // Apply 3D effects to headings
    setTimeout(styleHeadings, 500);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      
      // Clean up event listeners
      const headings = document.querySelectorAll('h2, h3');
      headings.forEach((heading) => {
        // Fix: Cast to HTMLElement to access properties
        const headingElement = heading as HTMLElement;
        headingElement.removeEventListener('mousemove', headingElement.onmousemove as EventListener);
        headingElement.removeEventListener('mouseleave', headingElement.onmouseleave as EventListener);
      });
    };
  }, []);

  return (
    <div className="page-transition-wrapper">
      <TransitionEffect />
      
      {/* Fireworks animation - increased frequency, size and visibility */}
      <Fireworks frequency={0.4} particleCount={150} size={6} />
      
      {/* Global space elements animation - prominent on all pages */}
      <SpaceElements className="fixed" />
      
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

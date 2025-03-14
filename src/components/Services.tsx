
import React from 'react';
import { services } from '@/lib/constants';
import { Palette, Code, Layout, Layers } from 'lucide-react';

const ServicesIcon = ({ service }: { service: string }) => {
  switch (service) {
    case 'Web Design':
      return <Layout className="w-6 h-6" />;
    case 'Brand Identity':
      return <Palette className="w-6 h-6" />;
    case 'UI/UX Design':
      return <Layers className="w-6 h-6" />;
    case 'Development':
      return <Code className="w-6 h-6" />;
    default:
      return <Layout className="w-6 h-6" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6 animate-on-scroll">Services</h2>
          <p className="text-xl text-muted-foreground animate-on-scroll">
            I offer a comprehensive range of services to help brands thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-8 md:p-10 rounded-2xl border border-border shadow-sm animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-xl mb-6">
                <ServicesIcon service={service.title} />
              </div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-panel rounded-2xl p-8 md:p-12 animate-on-scroll">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-md mb-6">Ready to start your project?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to create something exceptional that helps your brand stand out and connect with your audience.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const yOffset = -100;
                  const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="button-hover-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

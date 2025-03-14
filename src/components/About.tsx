
import React from 'react';
import { skills, testimonials } from '@/lib/constants';
import { User, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-wide">
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                alt="Designer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary rounded-2xl -z-10" aria-hidden="true"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-border rounded-xl -z-10" aria-hidden="true"></div>
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

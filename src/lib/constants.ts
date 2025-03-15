
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  progress: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Golden Summit Forest",
    description: "Website design and development for a luxury forest retreat",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Design",
    url: "https://goldensummitforest.com/",
  },
  {
    id: 2,
    title: "Eger & Co",
    description: "Brand identity and website for a boutique consulting firm",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    category: "Branding",
    url: "https://egerandco.com/",
  },
  {
    id: 3,
    title: "Heathcliffe Interiors",
    description: "E-commerce platform for high-end interior design products",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    category: "E-commerce",
    url: "http://heathcliffeinteriors.co.uk/",
  },
  {
    id: 4,
    title: "Clean Wash Laundry",
    description: "Mobile app design for on-demand laundry service",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile App",
    url: "https://cleanwashlaundry.com/",
  },
  {
    id: 5,
    title: "Alex Calibur",
    description: "Personal brand development for a tech influencer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    category: "UI/UX",
    url: "https://alexcalibur.com/",
  },
  {
    id: 6,
    title: "Stage Runner",
    description: "Event management platform for entertainment industry",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web App",
    url: "https://stagerunner.net/",
  },
  {
    id: 7,
    title: "Quantum AI Dashboard",
    description: "Advanced analytics dashboard for machine learning applications",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web App",
    url: "https://quantum-ai-platform.io/",
  },
  {
    id: 8,
    title: "Nexus Health",
    description: "Mobile health tracking application with AI-driven insights",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile App",
    url: "https://nexus-health.app/",
  },
  {
    id: 9,
    title: "Fintech Revolution",
    description: "Blockchain-based financial platform for international transactions",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    category: "Blockchain",
    url: "https://fintech-revolution.io/",
  },
  {
    id: 10,
    title: "EcoSync",
    description: "IoT platform for environmental monitoring and sustainability",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "IoT",
    url: "https://ecosync-platform.com/",
  }
];

export const skills = [
  "UI/UX Design",
  "Web Development",
  "Brand Strategy",
  "Mobile App Design",
  "E-commerce",
  "Digital Marketing",
  "Content Strategy",
  "Visual Identity",
  "Frontend Development",
  "Responsive Design",
  "Information Architecture",
  "User Research"
];

export const experiences: Experience[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Engineer",
    period: "2021 - Present",
    description: "Led the development of enterprise-level web applications using React, Node.js, and AWS. Implemented microservices architecture and CI/CD pipelines. Mentored junior developers and conducted code reviews.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
    progress: 95
  },
  {
    company: "Digital Frontier",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained complex web applications for clients in finance and healthcare sectors. Collaborated with UI/UX designers to implement responsive designs. Optimized database queries and application performance.",
    skills: ["JavaScript", "MongoDB", "Express", "Vue.js", "RESTful APIs"],
    progress: 90
  },
  {
    company: "Innovative Startups Inc.",
    role: "Frontend Developer",
    period: "2016 - 2018",
    description: "Created interactive user interfaces for early-stage startups. Implemented responsive designs and ensured cross-browser compatibility. Worked with agile development methodologies.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    progress: 85
  },
  {
    company: "CodeCraft Academy",
    role: "Teaching Assistant",
    period: "2015 - 2016",
    description: "Assisted lead instructors in teaching web development bootcamps. Provided one-on-one mentoring to students. Created supplementary learning materials and coding exercises.",
    skills: ["Teaching", "Mentoring", "Web Fundamentals", "Problem Solving"],
    progress: 75
  }
];

export const services = [
  {
    title: "Web Design",
    description: "Crafting beautiful, functional websites that elevate your brand and drive business results."
  },
  {
    title: "Brand Identity",
    description: "Developing cohesive brand systems that communicate your unique value proposition."
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive digital experiences that delight users and achieve business goals."
  },
  {
    title: "Development",
    description: "Building robust, scalable web applications with modern technologies and best practices."
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Golden Summit Forest",
    quote: "Working with this team transformed our online presence. The attention to detail and understanding of our brand values resulted in a website that perfectly represents our luxury retreat.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    name: "Michael Chang",
    company: "Eger & Co",
    quote: "The level of creativity and strategic thinking that went into our brand refresh exceeded expectations. Our new identity has resonated strongly with our target audience.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    name: "Emma Roberts",
    company: "Heathcliffe Interiors",
    quote: "The e-commerce solution delivered was not only beautiful but also significantly improved our conversion rates. The thoughtful UX design made a real impact on our bottom line.",
    avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  }
];

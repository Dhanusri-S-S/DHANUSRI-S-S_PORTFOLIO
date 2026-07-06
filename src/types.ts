export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  image: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  location: string;
  bullets: string[];
  type: 'internship' | 'hackathon' | 'project';
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  category: 'programming' | 'ai' | 'corporate' | 'presentation' | 'other';
}

export interface FreelanceService {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Achievement {
  label: string;
  value: string;
  number: number;
  suffix?: string;
  icon: string;
}

// Data Definition
export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Sc Computer Science with Artificial Intelligence",
    institution: "Sri Ramakrishna College of Arts & Science for Women",
    duration: "2023 - 2026",
    grade: "CGPA: 9.78 / 10",
    description: "Specializing in Machine Learning models, Neural Networks, IoT hardware integration, and modern frontend web engineering."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "State Board, Coimbatore",
    duration: "2021 - 2023",
    grade: "Score: 88%"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "State Board, Coimbatore",
    duration: "2020 - 2021",
    grade: "Score: 89.6%"
  }
];

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code",
    skills: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React", "Vite", "Tailwind CSS"]
  },
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: ["Scikit-Learn", "Pandas", "NumPy", "KNIME", "Teachable Machine"]
  },
  {
    title: "Embedded Systems",
    icon: "Cpu",
    skills: ["Arduino", "PIR Sensor", "DHT22", "Gas Sensor", "Embedded C"]
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Netlify", "Vercel"]
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: ["Problem Solving", "Leadership", "Communication", "Documentation", "Team Collaboration"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-sanitation",
    title: "Smart Sanitation System",
    category: "Embedded IoT Project",
    description: "An automated restroom hygiene monitoring system that detects occupancy, monitors air quality, sprays disinfectant automatically, and alerts cleaners using Arduino and high-precision sensors.",
    features: [
      "Real-time occupancy detection with PIR sensors to optimize cleaning schedules.",
      "Continuous air quality and toxic gas level assessment via Gas sensors.",
      "Automated sanitary spray mechanism triggered by threshold parameters.",
      "Live environmental temperature and humidity logging via DHT22 sensor and LCD display."
    ],
    techStack: ["Arduino", "Embedded C", "PIR Sensor", "Gas Sensor", "LCD", "DHT22"],
    githubUrl: "https://github.com/dhanusriss/smart-sanitation",
    featured: true,
    image: "https://picsum.photos/seed/iot/800/600"
  },
  {
    id: "niraher",
    title: "NiraHer Healthcare Platform",
    category: "AI & Machine Learning",
    description: "An AI-powered women's healthcare companion that predicts Polycystic Ovary Syndrome (PCOD) risk using interactive symptom questionnaires, menstrual period analytics, and ultrasound image analysis.",
    features: [
      "Custom-trained Machine Learning model for highly-accurate PCOD risk scoring.",
      "OpenCV-based processing pipeline for ultrasound scans to support diagnosis.",
      "Interactive multi-stage symptom checklist and smart period log calendar.",
      "Secure cloud database storing encrypted medical vitals and consultation files."
    ],
    techStack: ["React Native", "FastAPI", "Supabase", "Python", "OpenCV", "Machine Learning"],
    githubUrl: "https://github.com/dhanusriss/niraher",
    demoUrl: "https://niraher.vercel.app",
    featured: true,
    image: "https://picsum.photos/seed/health/800/600"
  },
  {
    id: "growthboost",
    title: "GrowthBoost Agency Portal",
    category: "Web Development",
    description: "A sleek, responsive digital marketing agency website designed to generate qualified leads. Showcases high-converting agency services, responsive interactive pricing models, and direct scheduling consult calendars.",
    features: [
      "Immersive dark-themed Apple-style marketing landing page.",
      "Modern consultation booking wizard that captures lead metadata.",
      "Fast, fluid navigation transitions and lightweight asset delivery via Vite.",
      "Perfect Lighthouse score across accessibility and performance metrics."
    ],
    techStack: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/dhanusriss/growthboost",
    demoUrl: "https://growthboost.vercel.app",
    featured: true,
    image: "https://picsum.photos/seed/agency/800/600"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Embedded Systems Intern",
    organization: "Balvion Technologies",
    duration: "June 2025 - August 2025",
    location: "Coimbatore, India",
    bullets: [
      "Developed the core architecture of the Smart Sanitation System with integrated hardware feedback systems.",
      "Wrote responsive microcontroller instructions in Embedded C using Arduino development environments.",
      "Wired, calibrated, and interfaced PIR, DHT22, and MQ Gas sensors to microcontrollers, achieving 99% signal accuracy.",
      "Created hardware-software interfaces enabling local monitoring of environmental diagnostics via digital LCD displays."
    ],
    type: "internship"
  },
  {
    role: "Hackathon Lead Developer",
    organization: "NiraHer Health-Tech Initiative",
    duration: "September 2025",
    location: "Hackathon Project",
    bullets: [
      "Led the frontend and visual systems development of the AI-powered healthcare companion.",
      "Engineered clean state-management routines to coordinate symptom input parameters to API prediction backends.",
      "Implemented server-side image evaluation modules using OpenCV and Python ML classifiers.",
      "Awarded Top Hackathon Finalist for outstanding utility, responsive layout, and societal healthcare contribution."
    ],
    type: "hackathon"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Programming in C",
    issuer: "Infosys Springboard",
    category: "programming"
  },
  {
    title: "Computer Fundamentals",
    issuer: "Infosys Springboard",
    category: "programming"
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    category: "corporate"
  },
  {
    title: "AI Principles and Techniques",
    issuer: "HCL GUVI",
    category: "ai"
  },
  {
    title: "Oracle Job Readiness Certification",
    issuer: "Oracle Academy",
    category: "programming"
  },
  {
    title: "NASSCOM Yuva AI Certification",
    issuer: "NASSCOM",
    category: "ai"
  },
  {
    title: "Industrial Internship Completion certificate",
    issuer: "Balvion Technologies",
    category: "other"
  },
  {
    title: "Research Paper Presentation Award",
    issuer: "National Tech Conference",
    category: "presentation"
  }
];

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    title: "Full-Stack React Websites",
    description: "Highly performant and interactive full-stack React web applications tailored to grow client startups and enterprise operations.",
    icon: "LayoutTemplate",
    features: ["Responsive layouts", "Seamless Vite execution", "Tailwind styling", "SEO optimization"]
  },
  {
    title: "AI & ML System Prototypes",
    description: "Implementing tailored machine learning classifiers, model deployment, and intelligence layers for smart businesses.",
    icon: "Brain",
    features: ["Risk predictors", "Data categorization", "Model fine-tuning", "FastAPI gateways"]
  },
  {
    title: "Custom Landing Pages",
    description: "Converting digital leads at scale via hyper-optimized, Linear-style, beautifully animated promotional pages.",
    icon: "Sparkles",
    features: ["Micro-interactions", "High-conversion elements", "Sublime dark designs", "Lightning fast load times"]
  },
  {
    title: "IoT & Hardware Interfacing",
    description: "Drafting schematic topologies, circuit routing advice, and robust Embedded C programming for sensory microchips.",
    icon: "Cpu",
    features: ["Arduino prototypes", "Sensor calibrations", "State logic engines", "Serial debugging logs"]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    label: "Academic CGPA",
    value: "9.78",
    number: 9.78,
    suffix: "/10",
    icon: "GraduationCap"
  },
  {
    label: "Professional Certifications",
    value: "10+",
    number: 10,
    suffix: "+",
    icon: "Award"
  },
  {
    label: "Major Research & Projects",
    value: "5+",
    number: 5,
    suffix: "+",
    icon: "FolderGit2"
  },
  {
    label: "Paper Presentations",
    value: "2",
    number: 2,
    icon: "Presentation"
  },
  {
    label: "Hackathon Finalist Wins",
    value: "1",
    number: 1,
    icon: "Trophy"
  }
];

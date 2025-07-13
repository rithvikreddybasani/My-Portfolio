// Personal Information
export const personalInfo = {
  name: "Basani Rithvik reddy",
  title: "Aspiring Software Engineer",
  bio: "I'm a passionate Web Developer and ALML Enthusiast skilled in both front-end and back-end development. With expertise in React, Next.js, I create websites which include AI powered solutions to solve real world problems",
  email: "rithvikreddybasani@gmail.com",
  location: "Hyderabad, India",
  linkedIn: "https://linkedin.com/in/basani-rithvik-reddy",
  github: "https://github.com/rithvikreddybasani",
  website: "https://rithvik-reddy-portfolio.vercel.app/",
  profileImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1728801079/mh3mx3gss79wbptb4fdb.jpg"
};

// Skills Data
export const skills = [
  // Frontend
  { name: "JavaScript", level: 95, category: 'frontend' as const },
  { name: "React", level: 92, category: 'frontend' as const },
  { name: "Next.js", level: 88, category: 'frontend' as const },
  { name: "HTML5", level: 95, category: 'frontend' as const },
  { name: "CSS3", level: 90, category: 'frontend' as const },
  { name: "Tailwind CSS", level: 88, category: 'frontend' as const },
  
  // Backend
  { name: "Java", level: 90, category: 'backend' as const },
  { name: "Python", level: 87, category: 'backend' as const },
  { name: "Node.js", level: 90, category: 'backend' as const },
  { name: "Express.js", level: 85, category: 'backend' as const },
  { name: "PostgreSQL", level: 85, category: 'backend' as const },
  { name: "MongoDB", level: 82, category: 'backend' as const },
  { name: "MySQL", level: 88, category: 'backend' as const },
  { name: "REST APIs", level: 92, category: 'backend' as const },
  
  // Machine Learning
  { name: "NumPy", level: 85, category: 'ml' as const },
  { name: "TensorFlow", level: 80, category: 'ml' as const },
  { name: "Scikit-learn", level: 82, category: 'ml' as const },
  { name: "Matplotlib", level: 78, category: 'ml' as const },
  
  // Tools
  { name: "VS Code", level: 95, category: 'tools' as const },
  { name: "PyCharm", level: 88, category: 'tools' as const },
  { name: "IntelliJ IDEA", level: 85, category: 'tools' as const },
  { name: "Git", level: 92, category: 'tools' as const },
  { name: "GitHub", level: 92, category: 'tools' as const }
];

// Projects Data
export const projects = [
  {
    id: "1",
    title: "SquadX",
    description: "Built an application for live code collaboration with editing, saving, and syncing across users. Added code execution, syntax highlighting, and auto-suggestions for smoother coding.",
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750923328/Screenshot_2025-03-31_191603_v05clh.png",
    technologies: ["React", "ExpressJS", "WebSocket", "CodeMirror","Tldraw"],
    liveUrl: "https://squad-x-reddy.vercel.app/",
    githubUrl: "https://github.com/rithvikreddybasani/SquadX",
    category: "Full Stack"
  },
  {
    id: "2",
    title: "FeedSight",
    description: "Easily integrate fully customizable feedback widgets into your website, allowing visitors to provide feedback directly on your pages",
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750923237/Screenshot_2025-05-07_094900_z3pntl.png",
    technologies: ["Next.js", "PostgresSQL", "Prisma", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://feed-sight-rithvik.vercel.app/",
    githubUrl: "https://github.com/rithvikreddybasani/feedSight",
    category: "Web App"
  },
  {
    id: "3",
    title: "GethTheStyle",
    description: "Get the CSS of every component you want from any website using our GetTheStyle browser extension.The components can be divs,containers,tags etc.",
    technologies: ["React", "tailwindCss", "react-tiny-popover", "Chrome Extension API"],
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750924173/Screenshot_2025-06-26_131916_ozawff.png",
    liveUrl: "https://github.com/rithvikreddybasani/GetTheStyle", // Browser extension - no live URL
    githubUrl: "https://github.com/rithvikreddybasani/GetTheStyle",
    category: "Web App"
  },
  {
    id: "4",
    title: "AI Powered Assistant",
    description: "An AI powered assistant which perform tasks such as opening applications, memory system, playing videos, respond to user questions using llms",
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750925290/Screenshot_2025-05-12_190311_tjnswm.png",
    technologies: ["Python", "YOLO", "OpenCV", "Speech Recognition", "LLMs"],
    liveUrl: "https://github.com/rithvikreddybasani/AI-Assistant", // Desktop application - no live URL
    githubUrl: "https://github.com/rithvikreddybasani/AI-Assistant",
    category: "AI/ML"
  },
  {
    id: "5",
    title: "SachBol",
    description: "Comprehensive application to complain regarding any frauds happening in india. Dynamic Dhasboard, response to our complaints with over 12 indian languages. Hotspot Identification",
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750923186/Screenshot_2025-06-12_133705_tz43t6.png",
    technologies: ["Nextjs", "Supabase", "Express", "Gemini API", "Google Maps"],
    liveUrl: "https://legendary-dragon-1cf549.netlify.app/",
    githubUrl: "https://github.com/rithvikreddybasani/SachBol",
    category: "Web App"
  },
  {
    id: "6",
    title: "GestureVoice",
    description: "Sign language to speech conversion system using Keras and computer vision. The system employs a convolutional neural network (CNN) to accurately interpret sign language gestures and convert them into spoken words. For speech synthesis, I integrated pyttsx3 and gTTS, enabling seamless communication",
    image: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750925075/sign-language-recognition-output_rbsn8u.webp",
    technologies: ["Python", "Tensoflow", "Flask", "gTTS", "OpenCV", "Pygame"],
    liveUrl: "https://github.com/rithvikreddybasani/GestureVoice", // Desktop application - no live URL
    githubUrl: "https://github.com/rithvikreddybasani/GestureVoice",
    category: "AI/ML"
  },
];

// Experience Data
export const experiences = [
  {
    id: "1",
    company: "NIT Warangal",
    position: "Research Intern",
    duration: "May 2025 - July 2025",
    description: [
      "Developing a VdocRAG Framework, a RAG pipline for Visually Rich Documents",
      "Features include Dynamic High-Resolution Image Processin,EOS Token Compression Strategy, ",
    ],
    achievements: [
    ]
  },
  {
    id: "2",
    company: "Sivive Enterprise Solutions",
    position: "Machine Learning Intern",
    duration: "Oct 2024 - Jan 2025",
    description: [
      "Developed an OCR-based pipeline using open-source models (Doctr) and integrated it with LLMs to extract pairs from invoices",
      "achieving an accuracy improvement of 9% through parameter tuning and model optimization",
    ],
    achievements: [
    ]
  },
];

// Education Data
export const education = [
  {
    id: "1",
    institution: "Jawaharlal Nehru TEchnological Univeristy , Hyderabad",
    degree: "B.Tech",
    field: "Computer Science",
    duration: "2022 - 2026",
    gpa: "9.25",
    achievements: [

    ]
  },
  {
    id: "2",
    institution: "Narayana Junior College",
    degree: "Intermediate",
    field: "MPC",
    duration: "2020 - 2022",
    gpa: "10.0",
    achievements: [

    ]
  },
  {
    id: "3",
    institution: "Kendriya Vidyalaya Warangal",
    degree: "CBSE",
    field: "Xth Standard",
    duration: "2020",
    achievements: [

    ]
  }
];

// Achievements Data - Fixed with all 13 achievements including missing ID 9
export const achievements = [
  {
    id: "1",
    title: "Spirit Hackathon",
    description: "Recognition for outstanding contribution to company's digital transformation initiative, leading to 40% improvement in operational efficiency.",
    date: "2023",
    type: "award" as const,
    icon: "star" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927335/IMG-20250626-WA0004_d73av0.jpg"
  },
  {
    id: "2",
    title: "AI For India Hackathon",
    description: "Professional level certification demonstrating expertise in designing distributed systems on AWS. Covers security, reliability, performance efficiency, and cost optimization.",
    date: "2023",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927455/WhatsApp_Image_2025-06-26_at_14.13.19_15b40963_a6105u.jpg"
  },
  {
    id: "3",
    title: "CodeClash",
    description: "First place in TechCrunch Disrupt Hackathon with 2000+ participants worldwide. Built an AI-powered accessibility tool for visually impaired users.",
    date: "2022",
    type: "competition" as const,
    icon: "trophy" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927313/IMG-20250626-WA0002_uvgbhp.jpg"
  },
  {
    id: "4",
    title: "Web3 Hackathon",
    description: "Certified in Google Cloud Platform architecture, deployment, and management. Demonstrates ability to design and manage robust, secure, scalable cloud solutions.",
    date: "2022",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750928384/IMG-20250224-WA0004_t6lcnl.jpg"
  },
  {
    id: "5",
    title: "LeetCode Badge",
    description: "Certified in Google Cloud Platform architecture, deployment, and management. Demonstrates ability to design and manage robust, secure, scalable cloud solutions.",
    date: "2022",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927325/IMG-20250626-WA0003_nejzlj.jpg"
  },
  {
    id: "6",
    title: "Lumos Metaverse",
    description: "Certified in Google Cloud Platform architecture, deployment, and management. Demonstrates ability to design and manage robust, secure, scalable cloud solutions.",
    date: "2022",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750928374/IMG-20250224-WA0011_ab0lxv.jpg"
  },
   {
    id: "7",
    title: "Research Intern",
    description: "Certified in Google Cloud Platform architecture, deployment, and management. Demonstrates ability to design and manage robust, secure, scalable cloud solutions.",
    date: "2025",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1752384295/WhatsApp_Image_2025-07-13_at_10.52.06_cfd2a8bf_p6abkb.jpg"
  },
  {
    id: "8",
    title: "FrontEnd Fusion",
    description: "Certified in Google Cloud Platform architecture, deployment, and management. Demonstrates ability to design and manage robust, secure, scalable cloud solutions.",
    date: "2022",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927351/IMG-20250626-WA0006_qs92mf.jpg"
  },
  {
    id: "9",
    title: "Iot Workshop",
    description: "Significant contributions to popular open-source projects including React, Node.js ecosystem packages, and developer tools used by thousands of developers.",
    date: "2021-2023",
    type: "award" as const,
    icon: "star" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927259/IMG-20250626-WA0010_gstjca.jpg"
  },
  {
    id: "10",
    title: "CodeFusion",
    description: "Outstanding performance in technical innovation challenge, demonstrating exceptional problem-solving skills and creative thinking.",
    date: "2023",
    type: "competition" as const,
    icon: "trophy" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927335/IMG-20250626-WA0004_d73av0.jpg"
  },
  {
    id: "11",
    title: "Coding Club Coordinator",
    description: "Certified Kubernetes Administrator (CKA) demonstrating skills in cluster management, networking, security, and troubleshooting in production environments.",
    date: "2023",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927814/Screenshot_2025-06-26_141958_pgketb.png"
  },
  {
    id: "12",
    title: "3rd Position in AI for India Hackathon",
    description: "Certified Kubernetes Administrator (CKA) demonstrating skills in cluster management, networking, security, and troubleshooting in production environments.",
    date: "2023",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927447/WhatsApp_Image_2025-06-26_at_14.13.18_831aac55_phkea4.jpg"
  },
  {
    id: "13",
    title: "TroubleShoot",
    description: "Certified Kubernetes Administrator (CKA) demonstrating skills in cluster management, networking, security, and troubleshooting in production environments.",
    date: "2023",
    type: "certification" as const,
    icon: "shield" as const,
    certificateImage: "https://res.cloudinary.com/dddfjpzqu/image/upload/v1750927253/IMG-20250626-WA0009_mtfqlo.jpg"
  },
];

// Social Links
export const socialLinks = [
  {
    name: "LinkedIn",
    url: personalInfo.linkedIn,
    icon: "Linkedin" as const,
    color: "hover:text-blue-400" as const
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "Github" as const,
    color: "hover:text-gray-300" as const
  },
  {
    name: "Website",
    url: personalInfo.website,
    icon: "Globe" as const,
    color: "hover:text-cyan-400" as const
  }
];

// Navigation Items
export const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

// Typing Animation Texts
export const typingTexts = [
  personalInfo.title,
  "Problem Solver",
  "Tech Innovator",
  "Code Architect",
  "Digital Creator"
];

// Skill Categories
export const skillCategories = [
  { id: 'all', label: 'All Skills', icon: 'Code' as const },
  { id: 'frontend', label: 'Frontend', icon: 'Code' as const },
  { id: 'backend', label: 'Backend', icon: 'Server' as const },
  { id: 'ml', label: 'Machine Learning', icon: 'Smartphone' as const },
  { id: 'tools', label: 'Tools', icon: 'Tool' as const }
];

// Contact Information
export const contactInfo = [
  { 
    icon: "Mail" as const, 
    label: 'Email', 
    value: personalInfo.email, 
    href: `mailto:${personalInfo.email}` 
  },
  { 
    icon: "MapPin" as const, 
    label: 'Location', 
    value: personalInfo.location, 
    href: '#' 
  },
];

// Skill Logos - Using SVG icons and images for original logos
export const skillLogos: { [key: string]: string } = {
  // Frontend
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  
  // Backend
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  
  // Machine Learning
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  'Matplotlib': 'https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png',
  
  // Tools
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'PyCharm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
  'IntelliJ IDEA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
};

// Export types for TypeScript
export type Skill = typeof skills[0];
export type Project = typeof projects[0];
export type Experience = typeof experiences[0];
export type Education = typeof education[0];
export type Achievement = typeof achievements[0];
export type SocialLink = typeof socialLinks[0];
export type NavigationItem = typeof navigationItems[0];
export type SkillCategory = typeof skillCategories[0];
export type ContactInfo = typeof contactInfo[0];

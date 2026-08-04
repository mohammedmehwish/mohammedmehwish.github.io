import { Project, SkillCategory, ExperienceItem, Certificate, Education } from '../types';

export const PERSONAL_INFO = {
  name: "Mohammed Mehwish V M",
  title: "Robotics Engineer | Mechatronics Engineer | Embedded Systems Engineer",
  shortTitle: "Robotics & Embedded Systems Engineer",
  location: "Kerala, India",
  email: "michumehwish2004@gmail.com",
  linkedin: "https://linkedin.com/in/mohammed-mehwish-202677307",
  github: "https://github.com/mohammedmehwish",
  githubUsername: "mohammedmehwish",
  aboutSummary: "Detail-oriented and motivated Mechatronics Engineering graduate with hands-on experience in embedded systems, industrial automation, robotics, and computer vision. Passionate about building intelligent robotic systems and solving real-world engineering problems using AI, automation, and embedded technologies.",
  taglines: [
    "Robotics Engineer",
    "Embedded Systems Engineer",
    "Computer Vision Enthusiast",
    "Automation Engineer"
  ],
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Hardware Platforms", value: "5+" },
    { label: "Certifications", value: "4" },
    { label: "Industrial Internships", value: "1" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Software",
    skills: [
      { name: "C", level: 88, highlight: true },
      { name: "Python", level: 90, highlight: true },
      { name: "Embedded C", level: 92, highlight: true }
    ]
  },
  {
    title: "Computer Vision & AI",
    skills: [
      { name: "OpenCV", level: 85, highlight: true },
      { name: "YOLO", level: 88, highlight: true },
      { name: "Deep Learning", level: 82 },
      { name: "Machine Learning", level: 80 }
    ]
  },
  {
    title: "Embedded Systems & Hardware",
    skills: [
      { name: "Arduino", level: 95, highlight: true },
      { name: "ESP32", level: 92, highlight: true },
      { name: "Microcontrollers", level: 88 },
      { name: "Sensors & Interfacing", level: 90 },
      { name: "Electronics & Circuit Design", level: 86 }
    ]
  },
  {
    title: "Industrial Automation",
    skills: [
      { name: "PLC (Programmable Logic Controllers)", level: 85, highlight: true },
      { name: "SCADA", level: 82 },
      { name: "HMI (Human Machine Interface)", level: 80 },
      { name: "VFD (Variable Frequency Drive)", level: 78 }
    ]
  },
  {
    title: "Robotics & Control",
    skills: [
      { name: "Robot Control", level: 88, highlight: true },
      { name: "Sensor Integration", level: 92, highlight: true },
      { name: "Control Systems", level: 85 }
    ]
  },
  {
    title: "CAD & 3D Modeling",
    skills: [
      { name: "SolidWorks", level: 86, highlight: true },
      { name: "Fusion 360", level: 84, highlight: true }
    ]
  },
  {
    title: "Tools & Environments",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90, highlight: true },
      { name: "VS Code", level: 92 },
      { name: "Linux", level: 85, highlight: true }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "helmet-detection",
    title: "Helmet Detection using Deep Learning",
    description: "Real-time helmet detection system for road safety powered by computer vision algorithms.",
    longDescription: "Automated real-time safety compliance monitoring system using YOLO object detection and OpenCV. Processes high-frame-rate video feeds to accurately identify motorcycle riders wearing or missing helmets, broadcasting instant violation alerts.",
    techStack: ["Python", "OpenCV", "YOLO", "Deep Learning", "PyTorch"],
    githubUrl: "https://github.com/mohammedmehwish/helmet-detection",
    liveDemoUrl: "https://github.com/mohammedmehwish/helmet-detection#readme",
    category: "vision",
    featured: true,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Trained YOLO object detection model on thousands of traffic footage frames",
      "Achieved high accuracy detection across varying lighting and weather conditions",
      "Implemented real-time bounding box rendering with minimal processing latency"
    ]
  },
  {
    id: "fire-rescue-robot",
    title: "Fire Rescue Robot",
    description: "Autonomous robot capable of detecting fire and assisting rescue operations using sensors and embedded systems.",
    longDescription: "An intelligent response mobile robot designed to navigate hazardous fire environments. Integrates flame sensor arrays, temperature telemetry, obstacle avoidance ultrasonic sensors, and remote wireless override.",
    techStack: ["Embedded C", "Arduino", "ESP32", "Sensors", "Robotics", "Motor Control"],
    githubUrl: "https://github.com/mohammedmehwish/fire-rescue-robot",
    liveDemoUrl: "https://github.com/mohammedmehwish/fire-rescue-robot#readme",
    category: "robotics",
    featured: true,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Designed custom chassis & motor driver actuation system for rugged terrain",
      "Integrated flame detection arrays and automatic water pump actuation",
      "Configured real-time wireless telemetry feedback to mission control operator interface"
    ]
  },
  {
    id: "fire-rescue-drone",
    title: "Fire Rescue & Surveillance Drone",
    description: "Drone system for fire surveillance with sensor integration and real-time monitoring.",
    longDescription: "Aerial reconnaissance UAV system engineered for thermal anomaly mapping and aerial surveillance over high-risk disaster zones. Features onboard sensors, camera video telemetry streaming, and flight stabilization control.",
    techStack: ["Python", "ESP32", "Sensors", "Flight Control", "Telemetry", "OpenCV"],
    githubUrl: "https://github.com/mohammedmehwish/fire-rescue-drone",
    liveDemoUrl: "https://github.com/mohammedmehwish/fire-rescue-drone#readme",
    category: "robotics",
    featured: true,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Built multi-sensor aerial payload monitoring ambient temperature & gas levels",
      "Configured real-time wireless video downlink feed for emergency response teams",
      "Optimized flight controller parameters for payload stability during wind gusts"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "cseed-internship",
    role: "Embedded Systems Intern",
    company: "Centre for Skill Enhancement & Employability Development (CSEED)",
    location: "Kerala, India",
    period: "July 2024 – August 2024",
    description: "Gained intensive hands-on practical experience in embedded systems architecture, microcontroller programming, sensor integration, and hardware testing.",
    achievements: [
      "Programmed microcontrollers (Arduino, ESP32) using C/C++ and Embedded C for real-time control applications.",
      "Interfaced multi-sensor modules including Ultrasonic, IR, Gas, and Temperature sensors with analog & digital filtering.",
      "Implemented hardware communication protocols (UART, SPI, I2C) for reliable device telemetry.",
      "Designed and validated custom electronic schematics and breadboard prototypes for automation scenarios."
    ],
    skills: ["Embedded C", "Arduino", "ESP32", "Sensors", "I2C/SPI/UART", "Circuit Prototyping"]
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    id: "cert-industrial-automation",
    title: "Industrial Automation Specialist",
    issuer: "Industrial Training Center",
    date: "2024",
    skillsCovered: ["PLC", "SCADA", "HMI", "VFD", "Relay Logic"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    description: "Comprehensive certification covering Programmable Logic Controllers (PLC), SCADA programming, HMI interface configuration, and VFD speed control."
  },
  {
    id: "cert-embedded-internship",
    title: "Embedded Systems Internship Certificate",
    issuer: "Centre for Skill Enhancement & Employability Development (CSEED)",
    date: "August 2024",
    credentialId: "CSEED-EMB-2024-07",
    skillsCovered: ["Embedded C", "ESP32", "Microcontrollers", "Sensors", "Hardware Design"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop",
    description: "Official certification of successful completion of intensive Embedded Systems engineering internship program."
  },
  {
    id: "cert-intro-robotics",
    title: "Introduction to Robotics",
    issuer: "Robotics Academy",
    date: "2023",
    skillsCovered: ["Robot Kinematics", "Sensor Integration", "Actuation Systems", "Control Loops"],
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=600&auto=format&fit=crop",
    description: "Foundational robotics certification focusing on kinematic equations, sensor feedback control, trajectory planning, and robotic arm programming."
  },
  {
    id: "cert-technoxian",
    title: "Innovation Challenge – TechnoXian World Robotics Championship",
    issuer: "TechnoXian World Robotics Championship",
    date: "2023",
    skillsCovered: ["Autonomous Robotics", "Problem Solving", "Rapid Prototyping", "Team Innovation"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    description: "Honored participant and competitor in the global Innovation Challenge at TechnoXian World Robotics Championship."
  }
];

export const EDUCATION_DATA: Education = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Mechatronics Engineering",
  institution: "Hindusthan College of Engineering and Technology",
  location: "Coimbatore / India",
  period: "2021 – 2025",
  highlights: [
    "Specialized in Robotics, Embedded Systems, Microcontrollers, Pneumatics & Hydraulics, and Computer Vision.",
    "Led student engineering projects focusing on autonomous disaster response robotics and aerial surveillance drones.",
    "Active member of Mechatronics & Robotics Engineering Association."
  ]
};

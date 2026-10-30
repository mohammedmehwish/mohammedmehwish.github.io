import { Project, SkillCategory, ExperienceItem, Certificate, Education } from '../types';

export const PERSONAL_INFO = {
  name: "Mohammed Mehwish V M",
  title: "Robotics Engineer",
  shortTitle: "Robotics Engineer",
  location: "Kerala, India",
  email: "michumehwish2004@gmail.com",
  linkedin: "https://linkedin.com/in/mohammed-mehwish-202677307",
  github: "https://github.com/mohammedmehwish",
  githubUsername: "mohammedmehwish",
  aboutSummary: "Mechatronics Engineering graduate specializing in robotics, embedded systems, and computer vision. Experienced with ROS 2, ESP32, Arduino, Raspberry Pi, and deep learning frameworks. Currently training in advanced robotics at Evolve Robotics, Kochi, with hands-on work in robot kinematics, SLAM, Nav2, sensor integration, and motor control. Passionate about building intelligent robotic systems that solve real-world engineering challenges.",
  taglines: [
    "Robotics Engineer",
    "Embedded Systems Engineer",
    "Computer Vision Enthusiast",
    "ROS 2 Developer"
  ],
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Hardware Platforms", value: "5+" },
    { label: "Certifications", value: "4" },
    { label: "Internships", value: "2" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Robotics",
    skills: [
      { name: "ROS 2", level: 85, highlight: true },
      { name: "Robot Kinematics", level: 80, highlight: true },
      { name: "URDF/Xacro", level: 82, highlight: true },
      { name: "Gazebo", level: 85, highlight: true },
      { name: "SLAM", level: 80 },
      { name: "Nav2", level: 82 },
      { name: "Sensor Integration", level: 90, highlight: true },
      { name: "Motor Control", level: 88 },
      { name: "Motion Planning", level: 78 }
    ]
  },
  {
    title: "Embedded Systems",
    skills: [
      { name: "ESP32", level: 92, highlight: true },
      { name: "Arduino", level: 95, highlight: true },
      { name: "Raspberry Pi", level: 85, highlight: true },
      { name: "Embedded C", level: 90, highlight: true },
      { name: "Microcontroller Programming", level: 92 },
      { name: "Hardware-Software Integration", level: 88 }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "C", level: 88, highlight: true },
      { name: "C++", level: 82, highlight: true },
      { name: "Python", level: 90, highlight: true }
    ]
  },
  {
    title: "Computer Vision & AI",
    skills: [
      { name: "OpenCV", level: 85, highlight: true },
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 82, highlight: true },
      { name: "YOLO", level: 88, highlight: true },
      { name: "Object Detection", level: 85 }
    ]
  },
  {
    title: "Electronics & PCB Design",
    skills: [
      { name: "Circuit Design", level: 86, highlight: true },
      { name: "PCB Design", level: 80 },
      { name: "GPIO / PWM / ADC", level: 90 },
      { name: "UART / I²C / SPI", level: 88, highlight: true },
      { name: "Sensor Data Acquisition", level: 90 }
    ]
  },
  {
    title: "CAD & Mechanical Design",
    skills: [
      { name: "Fusion 360", level: 84, highlight: true },
      { name: "CAD Modelling", level: 82 },
      { name: "Mechanical Design", level: 80 }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "turtlebot3-nav2",
    title: "Autonomous Mobile Robot — TurtleBot3",
    description: "Built and simulated a differential-drive autonomous robot using ROS 2 Humble, URDF/Xacro, Gazebo, and Python, with TF and ROS 2 node communication for navigation development.",
    longDescription: "A full autonomous mobile robot navigation pipeline built on ROS 2 Humble. Maps unknown environments with SLAM Toolbox, localizes with AMCL, and plans collision-free paths using Nav2 in Gazebo simulation, visualized in RViz2. Implements differential-drive kinematics with TF tree and ROS 2 node communication.",
    techStack: ["ROS 2 Humble", "Gazebo", "URDF/Xacro", "SLAM", "Nav2", "Python"],
    githubUrl: "https://github.com/mohammedmehwish/turtlebot3-nav2-navigation",
    liveDemoUrl: "https://github.com/mohammedmehwish/turtlebot3-nav2-navigation#readme",
    category: "robotics",
    featured: true,
    image: "./assets/projects/turtlebot3-ros2.jpg",
    highlights: [
      "Generated 2D occupancy grid map using SLAM Toolbox in Gazebo simulation",
      "Configured AMCL localization and Nav2 stack for autonomous goal navigation",
      "Implemented differential-drive control with TF tree and ROS 2 node communication"
    ]
  },
  {
    id: "helmet-detection",
    title: "Helmet Detection Using Deep Learning",
    description: "Built a computer-vision model to detect helmet usage using deep learning, supporting automated road-safety compliance monitoring.",
    longDescription: "A deep learning-based helmet detection system using YOLO and OpenCV. The model detects whether individuals are wearing helmets or not, enabling automated road-safety compliance monitoring. Trained on a custom dataset with data augmentation techniques for robust real-world performance.",
    techStack: ["Python", "OpenCV", "YOLO", "Deep Learning", "Computer Vision"],
    githubUrl: "https://github.com/mohammedmehwish/vision-guard-helmet-detection",
    liveDemoUrl: "https://github.com/mohammedmehwish/vision-guard-helmet-detection#readme",
    category: "vision",
    featured: true,
    image: "./assets/projects/helmet-detection.jpg",
    highlights: [
      "Trained YOLO model for real-time helmet and no-helmet classification",
      "Implemented OpenCV-based video processing pipeline for live detection",
      "Supports automated road-safety compliance monitoring applications"
    ]
  },
  {
    id: "fire-rescue-drone",
    title: "Fire Rescue & Surveillance Drone",
    description: "Developed an aerial drone system for fire surveillance and rescue support, combining flight control, real-time monitoring, and sensor integration.",
    longDescription: "An aerial drone system engineered for fire surveillance and rescue support. Features flight controller configuration, real-time video telemetry, and onboard sensor integration for monitoring environmental conditions in hazardous zones.",
    techStack: ["UAV", "Flight Controller", "Embedded Systems", "Sensor Integration"],
    githubUrl: "https://github.com/mohammedmehwish/fire-rescue-drone",
    liveDemoUrl: "https://github.com/mohammedmehwish/fire-rescue-drone#readme",
    category: "robotics",
    featured: true,
    image: "./assets/projects/fire-rescue-drone.jpg",
    highlights: [
      "Assembled and configured multirotor drone with flight controller and ESCs",
      "Integrated onboard sensors for environmental monitoring during operations",
      "Configured real-time wireless video downlink for emergency response teams"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "evolve-robotics",
    role: "Robotics Intern",
    company: "Evolve Robotics",
    location: "Kochi, Kerala",
    period: "July 2026 – Present",
    description: "Hands-on training in robotics, embedded systems, ROS 2, sensors, and motor control at an industry-focused robotics lab.",
    achievements: [
      "Practical work with ESP32, Arduino, Raspberry Pi, C/C++, Python, and robotic system integration.",
      "Training in ROS 2, robot kinematics, URDF/Xacro, Gazebo simulation, SLAM, and Nav2.",
      "Developing skills in CAD modelling, sensor integration, and motor control for robotic applications."
    ],
    skills: ["ROS 2", "ESP32", "Arduino", "Raspberry Pi", "Python", "C/C++", "Gazebo", "Robot Kinematics"]
  },
  {
    id: "cseed-internship",
    role: "Embedded Systems Intern",
    company: "CSEED",
    location: "Thrissur, Kerala",
    period: "July 2024 – August 2024",
    description: "Microcontroller-based application development using Embedded C and hardware interfacing.",
    achievements: [
      "Developed microcontroller-based applications using Embedded C and hardware interfacing.",
      "Worked with sensors, circuits, data acquisition, and control logic.",
      "Gained experience with communication protocols (UART, SPI, I2C) for device integration."
    ],
    skills: ["Embedded C", "Arduino", "ESP32", "Sensors", "I2C/SPI/UART", "Circuit Prototyping"]
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    id: "cert-industrial-automation",
    title: "Industrial Automation Training",
    issuer: "Industrial Training Center",
    date: "2024",
    skillsCovered: ["PLC", "SCADA", "HMI", "VFD"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    description: "Training in Programmable Logic Controllers (PLC), SCADA, HMI interface configuration, and VFD speed control."
  },
  {
    id: "cert-embedded-internship",
    title: "Embedded Systems Internship",
    issuer: "CSEED, Thrissur",
    date: "August 2024",
    skillsCovered: ["Embedded C", "ESP32", "Microcontrollers", "Sensors", "Hardware Design"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop",
    description: "Completion of Embedded Systems engineering internship covering microcontroller programming, sensor interfacing, and hardware design."
  },
  {
    id: "cert-technoxian",
    title: "TechnoXian World Robotics Championship World Cup 2024",
    issuer: "TechnoXian World Robotics Championship",
    date: "2024",
    skillsCovered: ["Autonomous Robotics", "Problem Solving", "Rapid Prototyping", "Innovation"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    description: "Participation in the Innovation Challenge at TechnoXian World Robotics Championship World Cup 2024."
  },
  {
    id: "cert-intro-robotics",
    title: "Introduction to Robotics Internship",
    issuer: "D-Rube Labs and Research",
    date: "2023",
    skillsCovered: ["Robot Kinematics", "Sensor Integration", "Actuation Systems", "Control Loops"],
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=600&auto=format&fit=crop",
    description: "Foundational robotics internship covering kinematics, sensor feedback control, and robotic system programming."
  }
];

export const EDUCATION_DATA: Education = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Mechatronics Engineering",
  institution: "Hindusthan College of Engineering and Technology",
  location: "Coimbatore, India",
  period: "2021 – 2025",
  highlights: [
    "Specialized in Robotics, Embedded Systems, and Computer Vision.",
    "Completed final-year project on real-time helmet detection using deep learning.",
    "Active participant in robotics competitions and engineering associations."
  ]
};

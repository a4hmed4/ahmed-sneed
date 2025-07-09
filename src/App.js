import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profile2 from './assets/profile2.png';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import LoadingScreen from './components/LoadingScreen';


// Hero Section with 3 Main Areas
function Hero() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    {
      title: "AI & Machine Learning",
      subtitle: "Smart AI Solutions",
      description: "Expert in computer vision, NLP, and deep learning. I build AI-powered applications that solve real-world problems and automate complex tasks using the latest ML frameworks.",
      skills: ["TensorFlow", "PyTorch", "NLP"],
    },
    {
      title: "Full Stack Development",
      subtitle: "Modern Web Apps",
      description: "I design and develop scalable, secure web applications from frontend to backend. Skilled in React, Node.js, and cloud deployment for seamless user experiences.",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      title: "Business Intelligence",
      subtitle: "Data Insights",
      description: "Transforming raw data into actionable insights. I create interactive dashboards and reports that empower decision makers and drive business growth.",
      skills: ["Power BI", "SQL", "ETL"],
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sections.length]);

  // Scroll to AboutHero section
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about-hero-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-950 via-blue-900 to-[#232946] pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 opacity-30 rounded-full blur-3xl" animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl" animate={{ x: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
        <motion.div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-700 opacity-10 rounded-full blur-2xl" animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 gap-8 md:gap-0">
        {/* Profile Image - higher */}
        <div className="w-full md:w-1/2 flex justify-center items-start mb-8 md:mb-0 h-64 md:h-[70vh] z-10" style={{marginTop: '-8rem'}}>
          <img
            src={profile2}
            alt="Profile Side"
            className="w-auto h-full object-cover rounded-3xl shadow-2xl"
            style={{objectPosition: 'center'}} />
        </div>
        {/* Content Section - shorter */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-[#a7ff83] via-[#17ead9] to-[#005bea] bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ahmed Sneed
          </motion.h1>
          <motion.h2
            className="text-lg md:text-xl font-light mb-3 tracking-wide max-w-2xl mx-auto md:mx-0 leading-relaxed text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            AI Engineer | BI Developer | full Stack Developer
          </motion.h2>
          <motion.p
            className="text-base text-white/80 mb-6 max-w-xl mx-auto md:mx-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Passionate about building smart, real-world digital solutions.
          </motion.p>
          {/* Modern Cards */}
          {/* Animated main area card - smaller, with icon and more details like original */}
          <div className="flex justify-center w-full mb-8">
            <motion.div className="w-full max-w-md" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl shadow-xl bg-blue-900/80 border border-blue-800/60"
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    {/* Icon for each area */}
                    {activeSection === 0 && (
                      <svg className="w-10 h-10 mb-2 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/></svg>
                    )}
                    {activeSection === 1 && (
                      <svg className="w-10 h-10 mb-2 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0l-3-3m3 3l3-3"/><circle cx="12" cy="12" r="10"/></svg>
                    )}
                    {activeSection === 2 && (
                      <svg className="w-10 h-10 mb-2 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0"/><path d="M12 14v7m0 0l-3-3m3 3l3-3"/><circle cx="12" cy="7" r="4"/></svg>
                    )}
                    <h3 className="text-2xl font-bold mb-1 text-white">{sections[activeSection].title}</h3>
                    <p className="text-blue-200 text-base mb-2">{sections[activeSection].subtitle}</p>
                    <p className="text-white/80 text-sm mb-2">{sections[activeSection].description}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {sections[activeSection].skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-end w-full mt-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-900 to-purple-950 text-white font-bold shadow-lg text-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m0 0l-6-6m6 6l6-6"/></svg>
              Download CV
            </motion.a>
            <motion.a
              href="mailto:ahmadseneed@gmail.com"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-950 to-blue-900 text-white font-bold shadow-lg text-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1"/><path d="M3 8l9 6 9-6"/></svg>
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
      {/* Animated Down Arrow to About Me */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to About Me section"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 flex flex-col items-center animate-bounce"
        style={{ outline: 'none' }}
      >
        <span className="w-8 h-12 flex flex-col items-center">
          <span className="w-6 h-10 rounded-full border-2 border-white/70 flex items-start justify-center relative">
            <span className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></span>
          </span>
          <svg className="mt-1 animate-bounce" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l4 4 4-4" />
          </svg>
        </span>
        <span className="text-xs text-white/70 mt-1">About Me</span>
      </button>
    </section>
  );
}

// About Section
function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-20 px-4"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          About Me
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 heading-medium">The Journey</h2>
            <div className="space-y-6 text-body">
              <p>
                I am Ahmed Elsayed Sneed, a Senior Artificial Intelligence student at Delta University for Science and Technology, specializing in applying AI to solve real-world problems.
              </p>
              <p>
                My academic journey, complemented by hands-on internships and specialized training in robotics, business intelligence, and AI applications for healthcare, has equipped me with a deep understanding of AI technologies.
              </p>
              <p>
                I have achieved top placements in numerous AI and tech competitions, including the 3rd Egyptian Junior Researcher Competition, the Smart Governance Hackathon, and the International Scientific and Engineering Innovation Competition (ISEIC-2023).
              </p>
              <p>
                My technical expertise spans various programming languages, frameworks, and tools, such as Python, Java, TensorFlow, and PyTorch, and I have led significant projects like Medicare, an AI-powered electronic health records system, and Egyptian Car Plates Recognition, an advanced license plate recognition system.
              </p>
              <p>
                Additionally, I hold leadership roles in GDSC Delta University and Bio Code DU, and actively engage in cultural and tech events to broaden my perspective and drive my passion for AI forward.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Senior Artificial Intelligence Student</h4>
                  <p className="text-gray-600 dark:text-gray-400">Delta University for Science and Technology</p>
                  <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2025</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Leadership Roles</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">• Co-leader for BIOCODE DU Club</p>
                <p className="text-gray-600 dark:text-gray-400">• GDSC Delta University</p>
                <p className="text-gray-600 dark:text-gray-400">• ITI Trainee</p>
                <p className="text-gray-600 dark:text-gray-400">• Certified Trainee at Zewail City</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Experience Section
function Experience() {
  const experiences = [
    {
      title: "AI Team Manager",
      company: "Solvesta (startup Comp.)",
      period: "Apr 2025 – Present",
      description: "Leading AI team in developing innovative solutions. Managing end-to-end AI project development and implementing machine learning models and algorithms.",
      achievements: [
        "Leading AI team in developing innovative solutions",
        "Managing end-to-end AI project development",
        "Implementing machine learning models and algorithms"
      ]
    },
    {
      title: "Microsoft Machine Learning Engineer",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Nov 2024 – May 2025",
      description: "Developed and deployed machine learning models. Worked on computer vision and NLP projects and collaborated with cross-functional teams.",
      achievements: [
        "Developed and deployed machine learning models",
        "Worked on computer vision and NLP projects",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "Business Intelligence Intern",
      company: "Information Technology Institute (ITI)",
      period: "Jul 2024 – Sep 2024",
      description: "Developed BI dashboards and reports. Performed data analysis and visualization and worked with Power BI and data warehousing.",
      achievements: [
        "Developed BI dashboards and reports",
        "Performed data analysis and visualization",
        "Worked with Power BI and data warehousing"
      ]
    },
    {
      title: "Certified Trainee",
      company: "Zewail City",
      period: "2023 – 2024",
      description: "Conducted research in AI and robotics. Participated in scientific competitions and developed innovative solutions.",
      achievements: [
        "Conducted research in AI and robotics",
        "Participated in scientific competitions",
        "Developed innovative solutions"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-20 px-4"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          Experience
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="glass-card p-8 rounded-xl project-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2 heading-medium">{exp.title}</h2>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
              <p className="text-body mb-6">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Activities Section
function Activities() {
  const activities = [
    {
      title: "Co-leader for BIOCODE DU Club",
      description: "Leading AI and coding initiatives at Delta University, organizing workshops and competitions.",
      period: "2023 - Present",
      category: "Leadership"
    },
    {
      title: "GDSC Delta University",
      description: "Active member of Google Developer Student Clubs, participating in tech events and workshops.",
      period: "2023 - Present",
      category: "Community"
    },
    {
      title: "ITI Trainee",
      description: "Completed intensive training program in Information Technology Institute focusing on practical skills.",
      period: "2024",
      category: "Training"
    },
    {
      title: "Certified Trainee at Zewail City",
      description: "Research training in AI and robotics at Zewail City for Science and Technology.",
      period: "2023 - 2024",
      category: "Research"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          Activities
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="glass-card p-8 rounded-xl project-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2 heading-medium">{activity.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{activity.period}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {activity.category}
                </span>
              </div>
              <p className="text-body">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Technical Skills Section
function TechnicalSkills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "TensorFlow", proficiency: 90 },
        { name: "PyTorch", proficiency: 85 },
        { name: "Computer Vision", proficiency: 88 },
        { name: "NLP", proficiency: 82 },
        { name: "Deep Learning", proficiency: 90 },
        { name: "YOLOv8", proficiency: 85 },
        { name: "EasyOCR", proficiency: 80 }
      ]
    },
    {
      title: "Full Stack Development",
      skills: [
        { name: "React", proficiency: 88 },
        { name: "Node.js", proficiency: 85 },
        { name: "JavaScript", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "MongoDB", proficiency: 80 },
        { name: "AWS", proficiency: 75 },
        { name: "Docker", proficiency: 78 },
        { name: "Graphic Design", proficiency: 85 }
      ]
    },
    {
      title: "Business Intelligence",
      skills: [
        { name: "Power BI", proficiency: 85 },
        { name: "SQL", proficiency: 90 },
        { name: "Data Analysis", proficiency: 88 },
        { name: "ETL", proficiency: 80 },
        { name: "Tableau", proficiency: 75 },
        { name: "Excel", proficiency: 92 },
        { name: "Data Science", proficiency: 85 },
        { name: "Robotics", proficiency: 80 }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-20 px-4"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          Technical Skills
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + categoryIndex * 0.2, duration: 0.8 }}
              className="glass-card p-6 rounded-xl project-card"
            >
              <h2 className="text-2xl font-bold mb-6 heading-medium">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + categoryIndex * 0.2 + index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden skill-bar">
                      <motion.div
                        className="h-2 skill-bar-fill rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 1 + categoryIndex * 0.2 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "Medicare",
      description: "Electronic health records system supported by AI and smart bracelet to follow the vital processes in the body. We use AI models to predict certain diseases like brain tumor, diabetes, Alzheimer, and pneumonia.",
      technologies: ["Python", "AI/ML", "React", "Node.js", "Healthcare"],
      github: "https://github.com/ahmadseneed",
      demo: "#",
      category: "AI/ML",
      features: [
        "AI-powered disease prediction",
        "Smart bracelet integration",
        "Real-time vital monitoring",
        "Electronic health records",
        "Medical image analysis"
      ]
    },
    {
      title: "Egyptian Car Plates Recognition",
      description: "Egyptian Car Plates Recognition with Yolov8n, EasyOCR, and CNN. This project leverages the power of modern technologies in computer vision and optical character recognition (OCR).",
      technologies: ["Python", "YOLOv8", "EasyOCR", "CNN", "Computer Vision"],
      github: "https://github.com/ahmadseneed",
      demo: "#",
      category: "AI/ML",
      features: [
        "Advanced object detection",
        "Optical character recognition",
        "Real-time processing",
        "High accuracy results",
        "Published research"
      ]
    },
    {
      title: "VGA - Video Generation from Images",
      description: "Create talking videos from 2D images by learning 3D facial movements based on Deep Learning techniques. Leveraging state-of-the-art models such as ExpNet and PoseVAE.",
      technologies: ["Python", "Deep Learning", "3D Modeling", "Computer Vision", "AI"],
      github: "https://github.com/ahmadseneed",
      demo: "#",
      category: "AI/ML",
      features: [
        "3D facial animation",
        "Realistic expressions",
        "Virtual communication",
        "Entertainment applications",
        "Advanced AI models"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-20 px-4"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="glass-card p-8 rounded-xl project-card"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold mb-2 heading-medium">{project.title}</h2>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <p className="text-body mb-6">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors link-underline"
                >
                  GitHub →
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors link-underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Contact Section
function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-white py-25 px-4"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center heading-large"
        >
          Get in Touch
        </motion.h1>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-xl project-card">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Tanta, Egypt</p>
            </div>
            <div className="glass-card p-6 rounded-xl project-card">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+201224810784" className="text-blue-600 dark:text-blue-400 hover:underline block">
                +20 122 481 0784
              </a>
              <a href="tel:+201013969029" className="text-blue-600 dark:text-blue-400 hover:underline block">
                +20 101 396 9029
              </a>
            </div>
            <div className="glass-card p-6 rounded-xl project-card">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:ahmadseneed@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                ahmadseneed@gmail.com
              </a>
            </div>
          </div>
          
          <motion.a
            href="mailto:ahmadseneed@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary btn-hover"
          >
            Send Message
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Admin Section
function Admin() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Admin Panel Component */}
    </div>
  );
}

// Navbar Component
function Navbar({ isDark, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experiences', path: '/experience' },
    { name: 'Activities', path: '/activities' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img 
              src={logo2} 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white/80 hover:text-white transition-colors duration-200 link-underline"
              >
                {item.name}
              </a>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200 dark-toggle"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 dark-toggle"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Main App Component
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    // Simulate loading (e.g., fetching data, assets, etc.)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className="App bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 min-h-screen w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutHero />
              <SectionTabs />
            </>
          } />
          <Route path="/*" element={<AnimatedRoutes />} />
        </Routes>
        {/* Social Media Section */}
        <div className="w-full flex justify-center py-8 bg-transparent">
          <div className="flex space-x-8">
            <a href="https://github.com/ahmadseneed" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-200 hover:text-[#17ead9] transition-colors">
              <i className="fab fa-github text-3xl mb-1"></i>
              <span className="text-xs">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/ahmadseneed" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-200 hover:text-[#17ead9] transition-colors">
              <i className="fab fa-linkedin text-3xl mb-1"></i>
              <span className="text-xs">LinkedIn</span>
            </a>
            <a href="mailto:ahmadseneed@gmail.com" className="flex flex-col items-center text-gray-200 hover:text-[#17ead9] transition-colors">
              <i className="fas fa-envelope text-3xl mb-1"></i>
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto py-16 px-4 text-center bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl mb-8"
        >
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-16 h-16 mx-auto mb-4 object-contain" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I am Ahmed Elsayed Sneed, a Senior Artificial Intelligence student at Delta University for Science and Technology, specializing in applying AI to solve real-world problems. I am passionate about building smart solutions, web development, and delivering impactful digital experiences.
          </p>
          <p className="text-md text-gray-400">
            I have achieved top placements in numerous AI and tech competitions, and my technical expertise spans various programming languages, frameworks, and tools. I am always eager to learn, collaborate, and innovate.
          </p>
        </motion.section>
        {/* Skills Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto py-16 px-4 bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl mb-8"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Skills</h2>
      <div className="space-y-6">
        {[
          { name: 'Python', level: 95 },
          { name: 'React', level: 90 },
          { name: 'Machine Learning', level: 85 },
          { name: 'Node.js', level: 80 },
          { name: 'Power BI', level: 75 },
        ].map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-[#a7ff83] to-[#17ead9] h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
    {/* Projects Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto py-16 px-4 bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl mb-8"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Medicare', desc: 'AI-powered health records system', link: '#' },
          { title: 'Car Plates Recognition', desc: 'Advanced license plate recognition', link: '#' },
          { title: 'Smart Dashboard', desc: 'Business intelligence dashboard', link: '#' },
        ].map(project => (
          <motion.a
            key={project.title}
            href={project.link}
            className="block bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-white"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.desc}</p>
            <span className="text-[#a7ff83] text-sm">View Project</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
    {/* Achievements Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto py-16 px-4 bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="text-4xl font-bold text-[#a7ff83] mb-2">3+</div>
          <div className="text-gray-200">AI Competitions Won</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="text-4xl font-bold text-[#a7ff83] mb-2">10+</div>
          <div className="text-gray-200">Major Projects</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="text-4xl font-bold text-[#a7ff83] mb-2">5+</div>
          <div className="text-gray-200">Certifications</div>
        </motion.div>
      </div>
    </motion.section>
    {/* Contact Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto py-16 px-4 text-center bg-gradient-to-br from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl mb-8"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact</h2>
      <p className="text-lg text-gray-300 mb-6">Want to collaborate or have a project in mind? Let’s connect!</p>
      <a href="mailto:ahmadseneed@gmail.com" className="px-8 py-4 bg-gradient-to-r from-[#a7ff83] to-[#17ead9] text-[#232946] font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">Email Me</a>
    </motion.section>
      </div>
      {/* Footer */}
      <footer className="w-full py-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-center text-white text-sm mt-12 shadow-inner">
        <div>© {new Date().getFullYear()} Ahmed Sneed. All rights reserved. </div>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://github.com/ahmadseneed" target="_blank" rel="noopener noreferrer" className="hover:text-[#17ead9] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ahmadseneed" target="_blank" rel="noopener noreferrer" className="hover:text-[#17ead9] transition-colors">LinkedIn</a>
          <a href="mailto:ahmadseneed@gmail.com" className="hover:text-[#17ead9] transition-colors">Email</a>
        </div>
      </footer>
    </Router>
  );
}

export default App;

// 1. بعد Hero مباشرة في App.js:
// <HeroTabs />
// 2. في كلاس الـHero section أو div الرئيسي أضف pt-24 أو pt-20

// أضف مكون HeroTabs:
function HeroTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Machine Learning", icon: "🤖" },
    { label: "Full Stack", icon: "💻" },
    { label: "BI", icon: "📊" }
  ];
  return (
    <nav className="w-full flex justify-center mt-[-2.5rem] z-40 relative">
      <div className="flex bg-gradient-to-r from-gray-950 via-blue-900 to-purple-950 rounded-2xl shadow-xl px-2 py-1 gap-2 border border-white/10">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-base transition-all duration-200
              ${activeTab === idx
                ? "bg-white/20 text-[#a7ff83] shadow-lg scale-105"
                : "text-white/80 hover:bg-white/10"}`}
          >
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// 2. QuickNav creative بعد الـTabs
function QuickNav() {
  const navs = [
    { label: 'About', to: 'about', icon: 'ℹ️' },
    { label: 'Skills', to: 'skills', icon: '🛠️' },
    { label: 'Projects', to: 'projects', icon: '🚀' },
    { label: 'Experience', to: 'experience', icon: '🏆' },
    { label: 'Contact', to: 'contact', icon: '✉️' }
  ];
  return (
    <div className="w-full flex justify-center mt-6 mb-8 z-30 relative">
      <div className="flex gap-4 bg-gray-950/80 rounded-full px-6 py-3 shadow-lg border border-white/10">
        {navs.map(btn => (
          <button
            key={btn.label}
            onClick={() => document.getElementById(btn.to)?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white font-bold shadow-md hover:scale-110 transition-all duration-200 group"
          >
            <span className="text-2xl mb-1">{btn.icon}</span>
            <span className="text-xs">{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Replace HeroTabs and its usage with a new section below Hero
function SectionTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Machine Learning", icon: "🤖" },
    { label: "Full Stack", icon: "💻" },
    { label: "BI", icon: "📊" }
  ];
  const tabContent = [
    {
      about: "I specialize in building intelligent ML solutions, from computer vision to NLP, using state-of-the-art frameworks.",
      cv: "/cv.pdf",
      projects: "Explore my ML projects, including real-world AI applications and research."
    },
    {
      about: "I develop scalable full stack web apps, handling everything from frontend to backend and cloud deployment.",
      cv: "/cv.pdf",
      projects: "See my full stack projects, featuring modern web technologies and robust architectures."
    },
    {
      about: "I turn raw data into actionable insights with BI dashboards and analytics for smarter business decisions.",
      cv: "/cv.pdf",
      projects: "Check out my BI projects, including dashboards and data-driven solutions."
    }
  ];
  return (
    <div className="w-full flex flex-col items-center mt-16 mb-12">
      <nav className="flex bg-blue-950/80 rounded-2xl shadow-xl px-2 py-1 gap-2 border border-white/10 mb-8 z-10 relative">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-base transition-all duration-200
              ${activeTab === idx
                ? "bg-white/20 text-blue-300 shadow-lg scale-105"
                : "text-white/80 hover:bg-white/10"}`}
          >
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="w-full max-w-2xl bg-blue-950/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-800/60">
        <h2 className="text-2xl font-bold text-white mb-4">About</h2>
        <p className="text-white/80 mb-6">{tabContent[activeTab].about}</p>
        <a href={tabContent[activeTab].cv} download className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold shadow-lg text-lg transition-all duration-300 mb-4">Download CV</a>
        <div className="mt-4">
          <button onClick={() => window.location.hash = '#projects'} className="px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold shadow-lg text-lg transition-all duration-300">Go to Projects</button>
        </div>
        <p className="text-white/60 text-sm mt-6">{tabContent[activeTab].projects}</p>
      </div>
    </div>
  );
}

// Move About section to a new AboutHero component for homepage
function AboutHero() {
  return (
    <section id="about-hero-section" className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-blue-950/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-800/60 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I am Ahmed Elsayed Sneed, a Senior Artificial Intelligence student at Delta University for Science and Technology, specializing in applying AI to solve real-world problems. I am passionate about building smart solutions, web development, and delivering impactful digital experiences.
        </p>
        <p className="text-md text-gray-400">
          I have achieved top placements in numerous AI and tech competitions, and my technical expertise spans various programming languages, frameworks, and tools. I am always eager to learn, collaborate, and innovate.
        </p>
      </div>
    </section>
  );
}

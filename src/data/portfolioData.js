export const portfolioData = {
  // Hero Section
  hero: {
    name: "Ahmed Elsayed",
    title: "Student at A.I Delta University • Web Developer • Machine Learning Learner • Freelancer • Graphic Designer",
    mission: "Co-leader for BIOCODE DU Club, Data Science Learner, ITI Trainee, Certified Trainee at Zewail City",
    profileImage: "/profile.png",
    profileImageNoBg: "/profile2.png"
  },

  // About Section
  about: {
    summary: "I am Ahmed Elsayed Sneed, a Senior Artificial Intelligence student at Delta University for Science and Technology, specializing in applying AI to solve real-world problems.",
    experience: "My academic journey, complemented by hands-on internships and specialized training in robotics, business intelligence, and AI applications for healthcare, has equipped me with a deep understanding of AI technologies.",
    education: "I have achieved top placements in numerous AI and tech competitions, including the 3rd Egyptian Junior Researcher Competition, the Smart Governance Hackathon, and the International Scientific and Engineering Innovation Competition (ISEIC-2023).",
    publications: "My technical expertise spans various programming languages, frameworks, and tools, such as Python, Java, TensorFlow, and PyTorch, and I have led significant projects like Medicare, an AI-powered electronic health records system, and Egyptian Car Plates Recognition, an advanced license plate recognition system.",
    conferences: "Additionally, I hold leadership roles in GDSC Delta University and Bio Code DU, and actively engage in cultural and tech events to broaden my perspective and drive my passion for AI forward.",
    experiences: "My professional experience includes working with startups and established companies, where I've developed skills in agile methodologies, team collaboration, and project management.",
    languages: "I am fluent in English and Arabic, with professional working proficiency in both languages."
  },

  // Projects Section
  projects: [
    {
      title: "Medicare",
      description: "Electronic health records system supported by AI and smart bracelet to follow the vital processes in the body. We use AI models to predict certain diseases like brain tumor, diabetes, Alzheimer, and pneumonia.",
      technologies: ["Python", "AI/ML", "React", "Node.js", "Healthcare"],
      github: "https://github.com/ahmadseneed",
      demo: "#",
      category: "AI/ML",
      color: "blue",
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
      color: "blue",
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
      color: "blue",
      features: [
        "3D facial animation",
        "Realistic expressions",
        "Virtual communication",
        "Entertainment applications",
        "Advanced AI models"
      ]
    }
  ],

  // CV/Resume Section
  cv: {
    workExperience: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    ],
    education: [
      {
        id: 1,
        degree: "Senior Artificial Intelligence Student",
        institution: "Delta University for Science and Technology",
        period: "2021 - 2025",
        description: "Specializing in applying AI to solve real-world problems. Achieved top placements in numerous AI and tech competitions."
      }
    ],
    publications: [
      {
        id: 1,
        title: "Advanced Neural Network Architectures for Real-time Processing",
        journal: "International Conference on Machine Learning",
        year: "2022",
        doi: "10.1234/icml.2022.001"
      },
      {
        id: 2,
        title: "Optimization Techniques in Deep Learning Applications",
        journal: "Journal of Artificial Intelligence Research",
        year: "2021",
        doi: "10.1234/jair.2021.002"
      },
      {
        id: 3,
        title: "Scalable Machine Learning Systems for Big Data",
        journal: "IEEE Transactions on Knowledge and Data Engineering",
        year: "2020",
        doi: "10.1234/ieee.2020.003"
      }
    ],
    conferences: [
      {
        id: 1,
        title: "NeurIPS 2022 - Neural Information Processing Systems",
        location: "New Orleans, USA",
        year: "2022",
        presentation: "Oral presentation on advanced neural architectures"
      },
      {
        id: 2,
        title: "ICML 2021 - International Conference on Machine Learning",
        location: "Virtual Conference",
        year: "2021",
        presentation: "Poster presentation on optimization techniques"
      },
      {
        id: 3,
        title: "AAAI 2020 - Association for the Advancement of Artificial Intelligence",
        location: "New York, USA",
        year: "2020",
        presentation: "Workshop on scalable ML systems"
      }
    ]
  },

  // Skills Section
  skills: {
    "AI & Machine Learning": [
      { name: "Python", proficiency: 95 },
      { name: "TensorFlow", proficiency: 90 },
      { name: "PyTorch", proficiency: 85 },
      { name: "Computer Vision", proficiency: 88 },
      { name: "NLP", proficiency: 82 },
      { name: "Deep Learning", proficiency: 90 },
      { name: "YOLOv8", proficiency: 85 },
      { name: "EasyOCR", proficiency: 80 }
    ],
    "Full Stack Development": [
      { name: "React", proficiency: 88 },
      { name: "Node.js", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "Java", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "Docker", proficiency: 78 },
      { name: "Graphic Design", proficiency: 85 }
    ],
    "Business Intelligence": [
      { name: "Power BI", proficiency: 85 },
      { name: "SQL", proficiency: 90 },
      { name: "Data Analysis", proficiency: 88 },
      { name: "ETL", proficiency: 80 },
      { name: "Tableau", proficiency: 75 },
      { name: "Excel", proficiency: 92 },
      { name: "Data Science", proficiency: 85 },
      { name: "Robotics", proficiency: 80 }
    ]
  },

  // Contact Section
  contact: {
    email: "ahmadseneed@gmail.com",
    phone: ["+201224810784", "+201013969029"],
    location: "Tanta, Egypt",
    linkedin: "#",
    github: "https://github.com/ahmadseneed",
    twitter: "#",
    website: "https://ahmed-sneed.vercel.app"
  },

  // Awards & Achievements
  awards: [
    {
      id: 1,
      title: "3rd Egyptian Junior Researcher Competition",
      organization: "Egyptian Research Council",
      year: "2023",
      description: "Achieved top placement in national AI research competition"
    },
    {
      id: 2,
      title: "Smart Governance Hackathon",
      organization: "Egyptian Government",
      year: "2023",
      description: "Won hackathon for innovative government solutions using AI"
    },
    {
      id: 3,
      title: "International Scientific and Engineering Innovation Competition (ISEIC-2023)",
      organization: "International Engineering Society",
      year: "2023",
      description: "Top placement in international innovation competition"
    },
    {
      id: 4,
      title: "Co-leader for BIOCODE DU Club",
      organization: "Delta University",
      year: "2023-2024",
      description: "Leadership role in university AI and coding club"
    }
  ]
};

export default portfolioData; 
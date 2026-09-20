export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Others';
  icon: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl: string;
  githubUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  year: string;
  iconType: 'trophy' | 'medal' | 'certificate' | 'star';
}

export const portfolioData = {
  personal: {
    name: "Phanindra Uddagiri",
    logoText: "PU",
    role: "Computer Science Student | Full-Stack Python Developer | AI Enthusiast",
    eyebrow: "HELLO THERE 👋",
    bio: "I am a 3rd-year B.Tech Computer Science and Engineering student at Raghu Engineering College, with a Diploma in Communication & Computer Networking (CCN) from GIET Polytechnic College. Skilled in Full-Stack Python development (Django, REST APIs, JS) with a passion for problem-solving, building practical projects, and exploring AI technologies.",
    avatar: "/assets/phani_profile.png",
    location: "India",
    education: "B.Tech in CSE (Raghu Engineering College)",
    interests: "Web Dev, AI/ML, Open Source, Algorithms, Problem Solving, Chess, Hackathons",
    socials: {
      github: "https://github.com/phanindrauddagiri05-ops",
      linkedin: "https://www.linkedin.com/in/phanindra-uddagiri-069851343/",
      email: "mailto:phanidrauddagiri05@gmail.com",
      rawEmail: "phanidrauddagiri05@gmail.com",
      whatsapp: "919441055486",
      phone: "+91 9441055486"
    }
  },
  stats: [
    { value: "3+", label: "Years of Learning" },
    { value: "4+", label: "Full-Stack Apps" },
    { value: "8.4", label: "B.Tech CGPA" },
    { value: "∞", label: "Curiosity Level" }
  ],
  skills: [
    { name: "Python", category: "Languages", icon: "python", color: "#3776AB" },
    { name: "C", category: "Languages", icon: "c", color: "#A8B9CC" },
    { name: "Java", category: "Languages", icon: "java", color: "#5382A1" },
    { name: "JavaScript", category: "Languages", icon: "javascript", color: "#F7DF1E" },
    { name: "Django", category: "Backend", icon: "django", color: "#092E20" },
    { name: "HTML5", category: "Frontend", icon: "html5", color: "#E34F26" },
    { name: "CSS3", category: "Frontend", icon: "css3", color: "#1572B6" },
    { name: "Bootstrap", category: "Frontend", icon: "bootstrap", color: "#7952B3" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwind", color: "#06B6D4" },
    { name: "Node.js", category: "Backend", icon: "nodejs", color: "#339933" },
    { name: "REST APIs", category: "Backend", icon: "api", color: "#4F7CFF" },
    { name: "MySQL", category: "Database", icon: "mysql", color: "#4479A1" },
    { name: "PostgreSQL", category: "Database", icon: "postgresql", color: "#4169E1" },
    { name: "SQL", category: "Database", icon: "sql", color: "#336791" },
    { name: "Git", category: "Tools", icon: "git", color: "#F05032" },
    { name: "GitHub", category: "Tools", icon: "github", color: "#181717" },
    { name: "VS Code", category: "Tools", icon: "vscode", color: "#007ACC" }
  ] as Skill[],
  projects: [
    {
      id: "fastcopies",
      title: "FastCopies.in",
      description: "Independently designed & developed a full-stack platform for ordering Xerox/photocopying, spiral binding, and printing services online with doorstep delivery.",
      technologies: ["Django", "HTML", "CSS", "JS", "MySQL"],
      image: "/assets/project_taskhive.png",
      demoUrl: "https://fastcopies.in",
      githubUrl: "https://github.com/phanindrauddagiri05-ops/fastcopy_updated"
    },
    {
      id: "ankirasolutions",
      title: "Ankira Solutions",
      description: "Full-stack educational institute website managing student/course information, institute services, and responsive user UI.",
      technologies: ["Django", "HTML", "CSS", "JS", "SQLite"],
      image: "/assets/project_chatsphere.png",
      demoUrl: "https://ankirasolutions.com",
      githubUrl: "https://github.com/phanindrauddagiri05-ops/ankirasolutions"
    },
    {
      id: "wesolar",
      title: "WeSolar Management System",
      description: "Client & employee management web application for a solar energy company to organize and streamline company operations efficiently.",
      technologies: ["Django", "HTML", "CSS", "JS", "SQLite"],
      image: "/assets/project_studymate.png",
      demoUrl: "https://wesolar.fastcopies.in",
      githubUrl: "https://github.com/phanindrauddagiri05-ops/wesolar"
    },
    {
      id: "hrinfinity",
      title: "HR Infinity Salon System",
      description: "Business & employee management application designed for salon operations, sales tracking, and staff scheduling.",
      technologies: ["Django", "HTML", "CSS", "JS", "SQLite"],
      image: "/assets/project_taskhive.png",
      demoUrl: "https://hrinfinity.fastcopies.in",
      githubUrl: "https://github.com/phanindrauddagiri05-ops/hrinfinity"
    }
  ] as Project[],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Raghu Engineering College, India",
      period: "2025 – 2028",
      grade: "CGPA: 8.4 (2nd Year) • IoT Specialization"
    },
    {
      degree: "Diploma in Communication & Computer Networking (CCN)",
      institution: "GIET Polytechnic College, India",
      period: "2022 – 2025",
      grade: "Percentage: 87%"
    }
  ] as EducationItem[],
  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2026",
      subtitle: "Shortlisted in Internal Selection Round",
      year: "2026",
      iconType: "trophy"
    },
    {
      title: "PISTON CUP 2K25 Hackathon",
      subtitle: "Vignan College - Developed Blood Donation Connect App",
      year: "2025",
      iconType: "medal"
    },
    {
      title: "Project Expo Presenter",
      subtitle: "Raghu Engineering College - Presented FastCopies.in",
      year: "2026",
      iconType: "star"
    }
  ] as AchievementItem[]
};

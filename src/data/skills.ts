export interface SkillGroup {
  category: string;
  iconName: string;
  badgeCount: string;
  accentColor: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    iconName: "Binary",
    badgeCount: "5 Technologies",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" }
    ]
  },
  {
    category: "Frontend & Backend",
    iconName: "Layers",
    badgeCount: "7 Technologies",
    accentColor: "from-violet-500/20 to-purple-500/20",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "RESTful APIs" }
    ]
  },
  {
    category: "Databases & Cache",
    iconName: "Database",
    badgeCount: "4 Technologies",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" }
    ]
  },
  {
    category: "AI & GenAI",
    iconName: "Sparkles",
    badgeCount: "6 Technologies",
    accentColor: "from-amber-500/20 to-orange-500/20",
    skills: [
      { name: "OpenAI API" },
      { name: "Large Language Models" },
      { name: "Prompt Engineering" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" }
    ]
  },
  {
    category: "Cloud & Developer Tools",
    iconName: "Wrench",
    badgeCount: "9 Tools",
    accentColor: "from-rose-500/20 to-pink-500/20",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Prisma ORM" },
      { name: "Firebase" },
      { name: "Cloudinary" },
      { name: "Render" }
    ]
  },
  {
    category: "Core Computer Science",
    iconName: "Cpu",
    badgeCount: "7 Foundations",
    accentColor: "from-indigo-500/20 to-blue-500/20",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Database Management Systems" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "System Design" },
      { name: "Low-Level Design" }
    ]
  }
];

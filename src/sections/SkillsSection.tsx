import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
  const groups = [
    {
      title: "LANGUAGES",
      skills: ["Java", "JavaScript", "Python", "TypeScript", "SQL"]
    },
    {
      title: "FRONTEND",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "BACKEND & APIS",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Prisma ORM"]
    },
    {
      title: "DATABASES & CACHE",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis (Sorted Sets)"]
    },
    {
      title: "SYSTEMS & CLOUD",
      skills: ["Apache Kafka", "Docker", "AWS", "Git", "GitHub", "Postman", "Firebase", "Render"]
    },
    {
      title: "AI & GENAI",
      skills: ["OpenAI API", "LLMs", "Prompt Engineering", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "CORE COMPUTER SCIENCE",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks", "System Design", "Low-Level Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-2">
            04 // Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        {/* Clean Typographic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="space-y-3 pb-6 border-b border-[#EAEAEA]"
            >
              <h3 className="text-xs font-mono font-bold text-[#888888] tracking-wider uppercase">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-[#222222]">
                {group.skills.map((skill, sIdx) => (
                  <span key={skill} className="flex items-center gap-2">
                    <span className="font-medium">{skill}</span>
                    {sIdx < group.skills.length - 1 && <span className="text-[#CCCCCC]">·</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

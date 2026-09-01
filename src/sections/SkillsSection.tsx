import React from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, 
  Layers, 
  Database, 
  Sparkles, 
  Wrench, 
  Cpu,
  Server
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: "Languages",
      icon: Binary,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: Layers,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"]
    },
    {
      title: "Databases & Cache",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      title: "AI & GenAI",
      icon: Sparkles,
      skills: ["OpenAI API", "LLMs", "Prompt Engineering", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      title: "Cloud & Tools",
      icon: Wrench,
      skills: ["AWS", "Docker", "Git", "GitHub", "Postman", "Prisma ORM", "Firebase", "Cloudinary", "Render"]
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design", "LLD"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
            05 // TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A comprehensive, production-tested toolkit spanning languages, backend frameworks, distributed stream engines, databases, and core computer science principles.
          </p>
        </div>

        {/* Technology Wall Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-background-border">
                    <div className="w-8 h-8 rounded-lg bg-background-elevated border border-background-border flex items-center justify-center text-primary-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-100">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-background-elevated text-slate-300 border border-background-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

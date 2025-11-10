"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Database, Brain, Layers, GitBranch, TestTube, Languages } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Langages de Programmation",
      skills: ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript"],
      color: "from-primary to-primary/50",
    },
    {
      icon: Layers,
      title: "Frameworks & Outils",
      skills: ["Spring Boot", "React", "Angular", "Express.js", "Node.js", "Django", "JUnit", "Selenium"],
      color: "from-secondary to-secondary/50",
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      skills: ["Android (Java)", "Flutter (Dart)"],
      color: "from-primary to-primary/50",
    },
    {
      icon: Database,
      title: "Bases de Données",
      skills: ["MySQL", "SQL Server", "Oracle", "MongoDB", "PostgreSQL", "Firebase"],
      color: "from-secondary to-secondary/50",
    },
    {
      icon: Brain,
      title: "IA & Machine Learning",
      skills: ["ML Supervisé & Non supervisé", "Deep Learning", "ANN", "CNN", "RNN", "LSTM", "LLM"],
      color: "from-primary to-primary/50",
    },
    {
      icon: GitBranch,
      title: "Gestion de Projets",
      skills: ["Agile (Scrum, Kanban)", "Git", "GitHub", "Jira"],
      color: "from-secondary to-secondary/50",
    },
    {
      icon: TestTube,
      title: "Tests",
      skills: ["Jest", "JUnit", "SonarQube", "Mockito"],
      color: "from-primary to-primary/50",
    },
    {
      icon: Languages,
      title: "Langues",
      skills: ["Arabe (Langue maternelle)", "Français (Courant)", "Anglais (Courant)"],
      color: "from-secondary to-secondary/50",
    },
  ]

  return (
    <section id="skills" className="relative py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Compétences techniques</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono bg-muted text-muted-foreground px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

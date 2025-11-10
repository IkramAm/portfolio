"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Stage de fin d'études – Ingénieure Logicielle Full Stack MERN",
      company: "Orange Maroc",
      location: "Casablanca",
      period: "Mars 2025 – Septembre 2025",
      url: "https://odc-learning.com/",
      description: [
        "Conception, développement et déploiement d'une application e-learning (LMS) complète, type Coursera.",
        "Mise en place d'une hiérarchisation des rôles (étudiants, instructeurs, administrateurs) avec des accès et fonctionnalités dédiés et sécurisés.",
        "Gestion complète des cours, tests et évaluations, certifications et notifications au sein de la plateforme.",
        "Suivi de la progression et des activités des étudiants à travers des tableaux de bord interactifs et des statistiques détaillées.",
        "Intégration d'un chatbot intelligent pour l'assistance.",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Deepseek API", "JWT", "RBAC", "Cron Jobs", "NodeMailer" ,"Cloudinary", "Jest", "AWS"],
    },
    {
      type: "work",
      title: "Stage de fin d'année – Ingénieure Logicielle Full Stack Java",
      company: "ONCF",
      location: "Casablanca",
      period: "Juillet 2024 - Septembre 2024",
      description: [
        "Développement d'une solution automatisée de gestion et maintenance des engins industriels.",
        "Hiérarchisation des rôles avec accès et privilèges dédiés.",
        "Suivi en temps réel de l’état, de la disponibilité et de l’historique des engins.",
        "Planification des maintenances préventives et correctives selon les alertes ou cycles d’usage.",
        "Tableaux de bord et rapports analytiques pour le suivi des interventions et l’aide à la décision.",
      ],
      technologies: ["Spring Boot", "Thymeleaf", "Hibernate", "MySQL", "Spring Security", "Spring Scheduler", "RESTful APIs", "JUnit"],
    },
    {
      type: "work",
      title: "Stage de fin d'année – Ingénieure Logicielle Full Stack Python",
      company: "Ennasma Hotel",
      location: "Casablanca",
      period: "Juillet 2023 - Septembre 2023",
      description: [
        "Développement d'une application web de gestion hôtelière intégrant la réservation, la gestion du personnel et le suivi des services.",
        "Conception d'un tableau de bord interactif pour le pilotage en temps réel des indicateurs clés.",
        "Mise en place d'une architecture sécurisée avec gestion des rôles et base de données relationnelle.",
      ],
      technologies: ["Python", "Django", "PostgreSQL", "JWT"],
    },    
    {
      type: "education",
      title: "Diplôme d'Ingénieur en Informatique, option MIAGE",
      company: "École Marocaine des Sciences de l'Ingénieur",
      location: "Casablanca",
      period: "Octobre 2020 – Juillet 2025",
      description: [
        "Formation complète en génie logiciel et systèmes d'information",
        "Spécialisation en Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
        "Projets académiques variés en équipe et en méthodologie Agile",
      ],
      technologies: [],
    },
  ]

  return (
    <section id="experience" className="relative py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Mon parcours</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="w-4 h-4 text-primary" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-primary" />
                  )}
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-muted text-muted-foreground px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm"
                    >
                      <span>Voir l'application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

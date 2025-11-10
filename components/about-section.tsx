"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Rocket, Heart } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Développement Full Stack",
      description: "MERN, Java Spring, Architectures Scalables, Microservices",
    },
    {
      icon: Sparkles,
      title: "Intelligence Artificielle",
      description: "Machine Learning, Deep Learning, LLM",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Solutions créatives et performantes",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Créer des expériences mémorables",
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">À propos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jeune ingénieure informatique diplômée de l'EMSI en spécialité MIAGE, je suis passionnée par la création
                de solutions technologiques qui font la différence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon expertise couvre le développement Full Stack (MERN, Java Spring) et l'Intelligence Artificielle. Je
                maîtrise l'art de transformer des besoins complexes en applications élégantes, performantes et
                intuitives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Polyvalente, rigoureuse et autonome, je m'épanouis dans les environnements Agiles où l'innovation et la
                collaboration sont au cœur des projets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

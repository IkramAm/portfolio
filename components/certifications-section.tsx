"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certification {
  title: string
  issuer: string
  description: string
  skills: string[]
  logo: string
  pdfPath?: string
}

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  const certifications: Certification[] = [
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      description:
        "Formation complète sur les algorithmes de Machine Learning, incluant la régression, la classification, le clustering et les systèmes de recommandation. Utilisation de bibliothèques Python comme scikit-learn, NumPy et pandas.",
      skills: ["Python", "scikit-learn", "NumPy", "pandas", "ML Algorithms"],
      logo: "/ibm-logo.png",
      pdfPath: "/certificates/MachineLearningwithPythonV2_Badge20250119-27-99qxrd.pdf",
    },
    {
      title: "Introduction to Big Data with Spark and Hadoop",
      issuer: "IBM",
      description:
        "Apprentissage des concepts fondamentaux du Big Data, de l'architecture Hadoop et du traitement distribué avec Apache Spark. Manipulation de grandes quantités de données.",
      skills: ["Hadoop", "Apache Spark", "Big Data", "Distributed Computing"],
      logo: "/ibm-logo.png",
      pdfPath: "/certificates/Introduction to Big Data - IBM.pdf",
    },
    {
      title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
      issuer: "Google Cloud",
      description:
        "Conception et développement de microservices Java scalables avec Spring Boot. Implémentation de patterns cloud-native et déploiement sur Google Cloud Platform.",
      skills: ["Spring Boot", "Spring Cloud", "Microservices", "GCP", "Java"],
      logo: "/images/partners/google-cloud-logo.png",
      pdfPath: "/certificates/Building Scalable Java Microservices with Spring Boot and Spring Cloud - Google Cloud.pdf",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      description:
        "Maîtrise des concepts de contrôle de version avec Git et collaboration sur GitHub. Gestion des branches, merge, pull requests et workflows collaboratifs.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/Introduction to Git and Github - Google.pdf",
    },
    {
      title: "Software Engineering: Modeling Software Systems using UML",
      issuer: "The Hong Kong University of Science and Technology",
      description:
        "Modélisation de systèmes logiciels avec UML. Diagrammes de classes, séquences, cas d'utilisation et architecture logicielle.",
      skills: ["UML", "Software Architecture", "Design Patterns", "Modeling"],
      logo: "/hkust-logo.jpg",
      pdfPath: "/certificates/Software Engineering Modeling Software Systems - The Honk Kong University Of Science And Technology.pdf",
    },
    {
      title: "Introduction to Containers w Docker, Kubernetes",
      issuer: "IBM",
      description:
        "Apprentissage des technologies de conteneurisation avec Docker et Kubernetes. Déploiement et orchestration de conteneurs pour des applications modernes.",
      skills: ["Docker", "Kubernetes", "Containers", "DevOps", "Orchestration"],
      logo: "/ibm-logo.png",
      pdfPath: "/certificates/Introduction to Containers w Docker, Kubernetes - IBM.pdf",
    },
    {
      title: "React Native",
      issuer: "Meta",
      description:
        "Développement d'applications mobiles cross-platform avec React Native. Création d'interfaces natives pour iOS et Android.",
      skills: ["React Native", "Mobile Development", "JavaScript", "iOS", "Android"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/React Native - Meta.pdf",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      description:
        "Fondamentaux de React : composants, props, state, hooks et gestion d'événements. Construction d'interfaces utilisateur interactives.",
      skills: ["React", "JavaScript", "JSX", "Components", "Hooks"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/React Basics - Meta.pdf",
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      issuer: "Penn",
      description:
        "Introduction à la programmation orientée objet avec Java. Concepts fondamentaux : classes, objets, héritage, polymorphisme et encapsulation.",
      skills: ["Java", "OOP", "Programming", "Algorithms", "Data Structures"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/Introduction to Java and Object-Oriented - Penn.pdf",
    },
    {
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs",
      description:
        "Configuration et gestion de réseaux virtuels sur Microsoft Azure. Mise en place d'infrastructures cloud sécurisées et scalables.",
      skills: ["Azure", "Networking", "Cloud Computing", "Virtual Networks", "Security"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/Virtual Networks in Azure - Whizlabs.pdf",
    },
    {
      title: "The Art of the Job Interview",
      issuer: "BigInterview",
      description:
        "Techniques et stratégies pour réussir les entretiens d'embauche. Communication efficace, préparation et présentation professionnelle.",
      skills: ["Interview Skills", "Communication", "Career Development", "Professional Skills"],
      logo: "/google-logo.png",
      pdfPath: "/certificates/The Art of the Job Interview - BigInterview.pdf",
    },
  ]

  return (
    <section id="certifications" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-xs font-mono text-primary">+{cert.skills.length - 3}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{selectedCert.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{selectedCert.issuer}</p>
                    <p className="text-sm text-muted-foreground">Organisme certificateur</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{selectedCert.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Compétences acquises</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-mono bg-muted text-muted-foreground px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary text-primary-foreground"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (selectedCert.pdfPath) {
                      window.open(selectedCert.pdfPath, '_blank')
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le certificat
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

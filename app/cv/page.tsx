"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Settings,
  Languages,
  User,
  TestTube,
} from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("about")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const sections = [
    { id: "about", label: "À propos", icon: User },
    { id: "experience", label: "Expériences", icon: Briefcase },
    { id: "projects", label: "Projets", icon: Code },
    { id: "formation", label: "Formation", icon: GraduationCap },
    { id: "skills", label: "Compétences", icon: Settings },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "languages", label: "Langues", icon: Languages },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 3
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Si on est proche de la fin de la page (à moins de 200px de la fin), sélectionner la dernière section
      if (scrollTop + windowHeight >= documentHeight - 200) {
        const lastSection = sectionElements[sectionElements.length - 1]
        if (lastSection.element) {
          setActiveSection(lastSection.id)
          return
        }
      }

      // Sinon, utiliser la logique normale
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-ikram-amzil.pdf"
    link.download = "CV-Ikram-AMZIL.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="relative min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour au portfolio</span>
          </Link>
          <Button
            onClick={handleDownloadCV}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger PDF
          </Button>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 px-4">NAVIGATION</h3>
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl space-y-16">
            {/* About Section */}
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="scroll-mt-24"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">À propos</h2>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      <span className="text-gradient">Ikram AMZIL</span>
                    </h1>
                    <h3 className="text-2xl text-primary font-semibold">Ingénieure Informatique – Spécialité MIAGE</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ingénieure en Informatique, option MIAGE, récemment diplômée. Je dispose d'une solide expérience
                      en développement Full Stack, en IA & Machine Learning. Familiarisée avec les méthodes Agiles et
                      les outils de gestion de projets, je suis polyvalente, rigoureuse, autonome et motivée à
                      contribuer à des projets innovants.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <a
                      href="mailto:Amzilikram.8@gmail.com"
                      className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium truncate">Amzilikram.8@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:0604164916"
                      className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">Téléphone</p>
                        <p className="text-sm font-medium">06-04-16-49-16</p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Am-ikram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">GitHub</p>
                        <p className="text-sm font-medium">Am-ikram</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ikram-amzil-552a871ba/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">LinkedIn</p>
                        <p className="text-sm font-medium">ikram-amzil</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Expériences Professionnelles</h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Ingénieure Logicielle Full Stack MERN</h3>
                      <p className="text-muted-foreground font-medium">Orange Maroc – Casablanca</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Mars 2025 – Sept. 2025</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>
                        Conception, développement et déploiement d'une application e-learning (LMS) complète, (type
                        Coursera)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>
                       Mise en place d'une hiérarchisation des rôles (étudiants, instructeurs, administrateurs) avec des accès et fonctionnalités dédiés et sécurisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Gestion complète des cours, tests et évaluations, certifications et notifications au sein de la plateforme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Suivi de la progression et des activités des étudiants à travers des tableaux de bord interactifs et des statistiques détaillées.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Intégration d'un chatbot intelligent pour l'assistance</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["MongoDB", "Express.js", "React", "Node.js", "Deepseek API", "JWT"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Ingénieure Logicielle Full Stack Java</h3>
                      <p className="text-muted-foreground font-medium">ONCF - Casablanca</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Juil. 2024 – Sept. 2024</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Développement d'une solution automatisée pour la gestion et maintenance des engins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Hiérarchisation des rôles avec accès et privilèges dédiés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Suivi en temps réel de l'état, de la disponibilité et de l'historique des engins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>
                      Planification des maintenances préventives et correctives selon les alertes ou cycles d'usage
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Tableaux de bord et rapports analytiques pour le suivi des interventions et l'aide à la décision</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Spring Boot", "Thymeleaf", "MySQL", "JWT"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Stage de fin d'année – Ingénieure Logicielle Full Stack Python</h3>
                      <p className="text-muted-foreground font-medium">Ennasma Hotel - Casablanca</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Juil. 2023 – Sept. 2023</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Développement d'une application web de gestion hôtelière intégrant la réservation, la gestion du personnel et le suivi des services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Conception d'un tableau de bord interactif pour le pilotage en temps réel des indicateurs clés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Mise en place d'une architecture sécurisée avec gestion des rôles et base de données relationnelle</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "Django", "PostgreSQL", "JWT"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Projets Académiques</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Application de gestion budgétaire",
                    desc: "Application pour gérer des portefeuilles, définir des objectifs financiers et suivre des dépenses",
                    tech: ["Spring Boot", "Thymeleaf", "MySQL", "JWT"],
                    year: "2025",
                  },
                  {
                    title: "Application d'appels vidéo et de chat",
                    desc: "Plateforme de communication avec appels vidéo, messagerie instantanée et intégration de l'API ZEGOCLOUD",
                    tech: ["Spring Boot", "Angular", "MySQL", "ZEGOCLOUD"],
                    year: "2025",
                  },
                  {
                    title: "Application Flutter intégrant des modèles IA",
                    desc: "Application mobile regroupant plusieurs modèles d'IA : classification d'images (CNN), transcription vocale (RNN/LSTM), prédiction météorologique et chatbot intelligent",
                    tech: ["Flutter", "TensorFlow", "Keras", "Python"],
                    year: "2025",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-accent/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
                      <span className="text-xs text-muted-foreground">EMSI, {project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Formation Section */}
            <section id="formation" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Formation</h2>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">Diplôme d'Ingénieur en Informatique</h3>
                  <p className="text-muted-foreground font-medium mb-1">Option MIAGE</p>
                  <p className="text-muted-foreground">École Marocaine des Sciences de l'Ingénieur, Casablanca</p>
                  <p className="text-sm text-muted-foreground mt-3">Octobre 2020 – Juillet 2025</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">Baccalauréat</h3>
                  <p className="text-muted-foreground font-medium mb-1">Sciences et Technologies Mécaniques</p>
                  <p className="text-muted-foreground">Lycée Technique Anoual, Casablanca</p>
                  <p className="text-sm text-muted-foreground mt-3">Septembre 2019 – Juin 2020</p>
                </motion.div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Compétences Techniques</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Développement Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Node.js", "Express.js", "Python", "C++", "C#"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Développement Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["ReactJS", "Angular", "Thymeleaf", "JavaScript", "HTML5", "CSS3"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Développement Mobile</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Android (Java)", "Flutter (Dart)"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Base de Données</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "SQL SERVER", "ORACLE", "MongoDB", "PostgreSQL", "Firebase"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Machine Learning & AI</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Deep Learning", "RAG & LLM", "NLP"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Outils & Qualité Logiciel</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Github", "Jira", "Docker (notions)", "Jest", "JUnit", "Mockito", "SonarQube", "Postman"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Machine Learning with Python", org: "IBM" },
                  { title: "Introduction to Big Data with Spark and Hadoop", org: "IBM" },
                  {
                    title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
                    org: "Google Cloud",
                  },
                  { title: "Introduction to Git and GitHub", org: "Google" },
                  {
                    title: "Software Engineering: Modeling Software Systems using UML",
                    org: "The Hong Kong University of Science and Technology",
                  },
                  { title: "Introduction to Containers w Docker, Kubernetes", org: "IBM" },
                  { title: "React Native", org: "Meta" },
                  { title: "React Basics", org: "Meta" },
                  { title: "Introduction to Java and Object-Oriented Programming", org: "Penn" },
                  { title: "Virtual Networks in Azure", org: "Whizlabs" },
                  { title: "The Art of the Job Interview", org: "BigInterview" },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-accent/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm leading-snug mb-1">{cert.title}</p>
                        <p className="text-xs text-muted-foreground">{cert.org}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section id="languages" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Langues</h2>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🇲🇦</span>
                    </div>
                    <h3 className="font-semibold mb-1">Arabe</h3>
                    <p className="text-sm text-muted-foreground">Langue maternelle</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🇫🇷</span>
                    </div>
                    <h3 className="font-semibold mb-1">Français</h3>
                    <p className="text-sm text-muted-foreground">Courant</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🇬🇧</span>
                    </div>
                    <h3 className="font-semibold mb-1">Anglais</h3>
                    <p className="text-sm text-muted-foreground">Courant</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

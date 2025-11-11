"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ExternalLink, Github, Play } from "lucide-react"

interface Project {
  title: string
  description: string
  longDescription: string[]
  technologies: string[]
  image: string
  images?: string[]
  video?: string
  github?: string
  demo?: string
}

function CarouselWithDots({ images, title }: { images: string[]; title: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Défilement automatique
  useEffect(() => {
    if (!api || images.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Change d'image toutes les 4 secondes

    return () => clearInterval(interval)
  }, [api, images.length, isPaused])

  return (
    <div 
      className="relative w-full space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="-ml-0">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full max-h-[70vh] rounded-lg overflow-y-auto overflow-x-hidden border border-border bg-muted/10 custom-scrollbar">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Indicateurs de points modernes */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-2 pt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index)
                setIsPaused(true)
                // Reprendre le défilement automatique après 5 secondes
                setTimeout(() => setIsPaused(false), 5000)
              }}
              className="relative group"
              aria-label={`Aller à l'image ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Plateforme E-Learning LMS - Orange Maroc",
      description: "Application complète type Coursera avec gestion des rôles et chatbot IA",
      longDescription: [
        "Le projet consiste en le développement d'une plateforme e-learning complète de type Coursera, permettant la gestion et l'accès aux cours pour différents profils d'utilisateurs.",
        "La plateforme intègre une hiérarchisation des rôles avec des accès spécifiques pour les étudiants, instructeurs et administrateurs, garantissant des fonctionnalités sécurisées et adaptées à chaque type d'utilisateur.",
        "Elle offre la possibilité de créer, gérer et suivre les cours, de gérer les tests et évaluations, ainsi que d'attribuer des certifications aux étudiants.",
        "Les utilisateurs reçoivent des notifications pour les mises à jour importantes et les nouvelles activités. Le système assure également un suivi détaillé de la progression et des activités des étudiants, avec des tableaux de bord interactifs et des statistiques pour analyser les performances et l'engagement.",
        "Enfin, la plateforme est enrichie par l'intégration d'un chatbot intelligent pour assister les utilisateurs et faciliter leur navigation."
      ],
      technologies: ["Node.js", "Express.js", "React", "MongoDB", "Deepseek API", "JWT", "RBAC","Cron Jobs","Cloudinary", "NodeMailer", "AWS", "Jest"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-elearning-platform-dashboard-SEgFwLvh5IIf2yZDl200BopC6oOHnW.jpg",
      images: [
        "/login orange.jpg",
        "/course-details orange.png",
        "/my courses orange.jpg",
        "/certificat orange.jpg",
        "/dashboard admin orange.jpg",
      ],
      // Remplacez par l'URL Vercel Blob, Cloudinary ou YouTube après upload
      // Exemple Vercel Blob: "https://[store-id].public.blob.vercel-storage.com/video-name.mp4"
      // Exemple Cloudinary: "https://res.cloudinary.com/[cloud-name]/video/upload/video-name.mp4"
      // Exemple YouTube: "https://www.youtube.com/watch?v=VIDEO_ID"
      video: "https://bwcypjmqjdwz1fcd.public.blob.vercel-storage.com/ODC%20Learning%20-%20Google%20Chrome%202025-07-16%2022-45-11.mp4",
 // ⚠️ À remplacer par URL externe
    },
    {
      title: "Système de Gestion des Engins - ONCF",
      description: "Solution automatisée pour la maintenance et suivi des engins ferroviaires",
      longDescription: [
        "Développement d'une application de gestion complète pour le suivi de l'état des engins ferroviaires",
        "Système de planification automatique des maintenances préventives et correctives",
        "Tableau de bord analytique pour visualiser l'état du parc et les interventions",
        "Génération de rapports détaillés et historique complet des maintenances",
      ],
      technologies: ["Spring Boot", "Thymeleaf", "MySQL", "JWT", "JUnit"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oncf%20-%20gestion%20des%20engins-mTeeuOuVMUUQdD4IWoBl6c9nIxCFzS.png",
      images: [
        "/ONCF/home oncf.jpg",
        "/ONCF/engins list oncf.jpg",
        "/ONCF/pannes list oncf.jpg",
        "/ONCF/Productions oncf.png",
        "/ONCF/to do oncf.jpg",
        "/ONCF/rapport oncf.jpg",
      ],
    },
    {
      title: "Application de Gestion Budgétaire",
      description: "Outil de gestion financière personnelle avec objectifs et suivi des dépenses",
      longDescription: [
        "Gestion de plusieurs portefeuilles financiers avec catégorisation des transactions",
        "Définition d'objectifs financiers avec suivi de progression et alertes personnalisées",
        "Accès à un agenda interactif pour visualiser et gérer les revenus et dépenses",
        "Création et suivi de listes de souhaits et d'achats avec gestion budgétaire par catégorie",
        "Système de budgets mensuels avec notifications de dépassement et suivi des dettes",
        "Visualisation des dépenses et revenus avec graphiques interactifs et statistiques détaillées"
      ],
      technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Chart.js", "JUnit", "SonarQube"],
      image: "/mywallet/home mywallet.png",
      images: [
        "/mywallet/home mywallet.png",
        "/mywallet/portfolio mywallet.png",
        "/mywallet/details portfolio mywallet.png",
        "/mywallet/calendrier mywallet.png",
        "/mywallet/obj financiers mywallet.png",
        "/mywallet/liste des courses mywallet.png",
      ],
      // Remplacez par l'URL Vercel Blob, Cloudinary ou YouTube après upload
      // Exemple Vercel Blob: "https://[store-id].public.blob.vercel-storage.com/video-name.mp4"
      // Exemple Cloudinary: "https://res.cloudinary.com/[cloud-name]/video/upload/video-name.mp4"
      // Exemple YouTube: "https://www.youtube.com/watch?v=VIDEO_ID"
      video: "https://bwcypjmqjdwz1fcd.public.blob.vercel-storage.com/MyWallet%20-%20Accueil%20-%20Google%20Chrome%202025-02-19%2017-48-40.mp4",
      // ⚠️ À remplacer par URL externe
    },
  ]

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Mes créations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-mono text-primary">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto custom-scrollbar">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Carrousel d'images */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <CarouselWithDots images={selectedProject.images} title={selectedProject.title} />
                ) : (
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg border border-border"
                  />
                )}

                {/* Vidéo de démonstration */}
                {selectedProject.video && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">Démonstration vidéo</h4>
                    </div>
                    <div className="relative w-full rounded-lg overflow-hidden bg-muted border border-border shadow-sm">
                      {selectedProject.video.includes('youtube.com') || selectedProject.video.includes('youtu.be') ? (
                        // YouTube video
                        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={
                              selectedProject.video.includes('youtu.be')
                                ? `https://www.youtube.com/embed/${selectedProject.video.split('/').pop()}`
                                : selectedProject.video.includes('watch?v=')
                                ? `https://www.youtube.com/embed/${selectedProject.video.split('v=')[1]?.split('&')[0]}`
                                : selectedProject.video
                            }
                            title="Video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ maxHeight: "600px" }}
                          />
                        </div>
                      ) : (
                        // Direct video URL (Vercel Blob, Cloudinary, etc.)
                        <video
                          src={selectedProject.video}
                          className="w-full h-auto"
                          controls
                          preload="metadata"
                          style={{ maxHeight: "600px" }}
                        >
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {selectedProject.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-mono bg-muted text-muted-foreground px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <Button asChild variant="outline">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code source
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="bg-primary text-primary-foreground">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir la démo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

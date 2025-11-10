"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Github, Linkedin, MapPin, Send, Loader2 } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Amzilikram.8@gmail.com",
      href: "mailto:Amzilikram.8@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "06-04-16-49-16",
      href: "tel:+212604164916",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Casablanca, Maroc",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Am-ikram",
      href: "https://github.com/Am-ikram",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ikram AMZIL",
      href: "https://linkedin.com/in/ikram-amzil",
    },
  ]

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    try {
      // Vérifier que les variables d'environnement sont définies
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configuration EmailJS manquante. Veuillez configurer les variables d'environnement."
        )
      }

      // Préparer les paramètres du template
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "Amzilikram.8@gmail.com", // Votre email de réception
      }

      // Envoyer l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
      })

      // Réinitialiser le formulaire
      reset()
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement par email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Créons ensemble</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vous avez un projet innovant en tête ? Une opportunité professionnelle à discuter ? Ou simplement envie
                d'échanger sur la tech ?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis toujours ouverte aux nouvelles collaborations et défis passionnants. N'hésitez pas à me
                contacter !
              </p>

              <div className="space-y-4 pt-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-2">
                    Votre nom
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Saisissez votre nom"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2">
                    Votre email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Saisissez votre email"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2">
                    Votre message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Parlez-moi de votre projet..."
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © 2025 Ikram AMZIL · Conçu et développé avec <span className="text-secondary">♥</span> et beaucoup de{" "}
              <span className="text-primary">code</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Parcours", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "CV", href: "#cv-section" },
    { label: "Contact", href: "#contact" },
  ]

  const handleDownloadCV = () => {
    // This will trigger the download of the actual CV PDF
    const link = document.createElement("a")
    link.href = "/cv-ikram-amzil.pdf"
    link.download = "CV-Ikram-AMZIL.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-primary/10">
                <Image
                  src="/mon image.jpg"
                  alt="Ikram AMZIL"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-bold font-mono text-gradient hidden sm:inline">{"<IKRAM/>"}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                handleDownloadCV()
                setIsOpen(false)
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger PDF
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

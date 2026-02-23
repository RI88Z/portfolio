"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        "rounded-full border border-border/50 px-4 py-2.5 md:px-6",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "bg-background/50 backdrop-blur-md"
      )}
    >
      <div className="flex items-center gap-6">
        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Separator - Desktop */}
        <div className="hidden md:block w-px h-5 bg-border/50" />

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="https://github.com/RI88Z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksander-ribbz-paliwoda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:alek.paliwoda@interia.pl"
            aria-label="Email"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-border/50 bg-background/90 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

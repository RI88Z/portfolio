import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Aleksander Paliwoda. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
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
      </div>
    </footer>
  )
}

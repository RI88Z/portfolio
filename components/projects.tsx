"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, FileText, Eye, Briefcase, Network } from "lucide-react"

const projects = [
  {
    title: "Smart Document OCR & AI Assistant",
    description:
      "Document processing backend using RAG, Google GenAI, and Tesseract. Handles persistent user sessions and semantic search.",
    tags: ["FastAPI", "Python", "React", "RAG", "Tesseract"],
    icon: FileText,
    size: "large" as const,
    accent: "primary",
    link: "https://github.com/RI88Z/scan-analizer",
  },
  {
    title: "Eye-tracking Analytics Platform",
    description:
      "Full-stack open-source tool for ad creators. Contributed to architectural decisions and Code Reviews.",
    tags: ["Spring Boot", "React", "Java", "Open Source"],
    icon: Eye,
    size: "normal" as const,
    accent: "accent",
    link: "https://github.com/RI88Z/eye-tracking",
  },
  {
    title: "Job Board Web App",
    description:
      "Responsive job board application. Frontend-backend synchronization via REST API, CI/CD with Jenkins and GCP.",
    tags: ["React", "GCP", "Jenkins", "REST API"],
    icon: Briefcase,
    size: "normal" as const,
    accent: "primary",
    link: "https://github.com/tobiaszkownacki/PIS-project",
  },
  {
    title: "Decision Tree Algorithm",
    description:
      "Custom decision tree classifier implementation from scratch in Python (96% accuracy on Iris dataset).",
    tags: ["Python", "NumPy", "Scikit-learn", "Algorithms"],
    icon: Network,
    size: "normal" as const,
    accent: "accent",
    link: "https://github.com/RI88Z/classification-tree-roulette",
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const Icon = project.icon
  const isLarge = project.size === "large"
  const accentColor =
    project.accent === "primary"
      ? "group-hover:border-primary/30 group-hover:shadow-primary/5"
      : "group-hover:border-accent/30 group-hover:shadow-accent/5"
  const iconColor =
    project.accent === "primary" ? "text-primary" : "text-accent"

  return (
    <a
      href={project.link}
      className={`group relative flex flex-col justify-between rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${accentColor} ${
        isLarge ? "md:col-span-2 md:row-span-2 md:p-8" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/50 ${iconColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        <div>
          <h3 className={`font-semibold text-foreground mb-2 ${isLarge ? "text-xl md:text-2xl" : "text-base"}`}>
            {project.title}
          </h3>
          <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-sm md:text-base" : "text-sm"}`}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-5">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-mono bg-secondary/60 text-muted-foreground border-border/30 border"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Selected Work</h2>
          <p className="text-muted-foreground max-w-md">
            Practical application of AI, Full Stack Development, and algorithms.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <ProjectCard project={projects[0]} />
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
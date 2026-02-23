import { Code2, Database, Globe, Terminal, Cpu, Server, Layers, GitBranch, LayoutTemplate } from "lucide-react"

const categories = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-primary",
    borderColor: "border-primary/20",
    bgColor: "bg-primary/5",
    tools: [
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "C/C++", icon: Terminal },
      { name: "C#", icon: Code2 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend & UI",
    icon: LayoutTemplate,
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    tools: [
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Globe },
      { name: "HTML/CSS", icon: LayoutTemplate },
      { name: "Tailwind", icon: LayoutTemplate },
    ],
  },
  {
    title: "Backend & AI",
    icon: Server,
    color: "text-green-400",
    borderColor: "border-green-400/20",
    bgColor: "bg-green-400/5",
    tools: [
      { name: "FastAPI", icon: Server },
      { name: "Spring Boot", icon: Server },
      { name: ".NET", icon: Server },
      { name: "PyTorch", icon: Cpu },
      { name: "Scikit-learn", icon: Cpu },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400/5",
    tools: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Layers },
      { name: "Jenkins", icon: Layers },
      { name: "GCP", icon: Globe },
      { name: "Jira", icon: Layers },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Tech Stack</h2>
          <p className="text-muted-foreground max-w-md">
            Technologies I work with daily to build scalable applications and AI models.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            return (
              <div key={cat.title} className={`group rounded-xl border ${cat.borderColor} ${cat.bgColor} p-5 transition-all hover:border-opacity-40 hover:shadow-lg hover:shadow-black/10`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/50 ${cat.color}`}>
                    <CatIcon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {cat.tools.map((tool) => {
                    const ToolIcon = tool.icon
                    return (
                      <div key={tool.name} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-background/50 border border-border/30 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        <ToolIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                        <span className="font-mono text-xs">{tool.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
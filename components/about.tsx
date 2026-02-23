import { Terminal, Mail } from "lucide-react"

export function About() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-10 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-primary">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Let's Collaborate
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to discuss AI architecture? 
            My terminal is always open.
          </p>
        </div>

        {/* Terminal-style CTA */}
        <div className="rounded-xl border border-border/50 bg-black/80 p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              contact.sh
            </span>
          </div>
          
          <div className="font-mono text-sm space-y-4">
            <div>
                <p className="text-muted-foreground">
                <span className="text-green-400">root@alek:~$</span> echo "Looking for a Full Stack AI Engineer?"
                </p>
                <p className="text-white mt-1">"Yes, I am available for new opportunities."</p>
            </div>

            <div>
                <p className="text-muted-foreground">
                <span className="text-green-400">root@alek:~$</span> ./send_email.sh --to "Aleksander"
                </p>
                <div className="mt-2 pl-4 border-l-2 border-primary/30">
                    <a
                        href="mailto:alek.paliwoda@interia.pl"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    >
                        <Mail className="h-4 w-4 group-hover:animate-bounce" />
                        alek.paliwoda@interia.pl
                    </a>
                </div>
            </div>

            <p className="text-green-400 pt-2">
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
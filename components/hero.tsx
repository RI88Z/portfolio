"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin, GraduationCap, Car, Dumbbell, Download } from "lucide-react"
import Image from "next/image"

// --- Terminal Code (kept as is) ---
const codeLines = [
  { text: "from transformers import pipeline", delay: 0 },
  { text: "", delay: 400 },
  { text: "# Initialize AI model", delay: 600 },
  { text: 'model = pipeline("text-generation",', delay: 900 },
  { text: '    model="meta-llama/Llama-3")', delay: 1200 },
  { text: "", delay: 1500 },
  { text: "def generate_response(prompt: str):", delay: 1700 },
  { text: '    """Generate intelligent response"""', delay: 2000 },
  { text: "    response = model(prompt,", delay: 2300 },
  { text: "        max_length=512,", delay: 2500 },
  { text: "        temperature=0.7)", delay: 2700 },
  { text: "    return response[0]['generated_text']", delay: 2900 },
  { text: "", delay: 3100 },
  { text: '>>> result = generate_response("Hello")', delay: 3300 },
  { text: ">>> print(result)", delay: 3600 },
  { text: '✓ Model loaded successfully.', delay: 3900 },
]

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    codeLines.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col font-mono text-xs md:text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30 rounded-t-xl">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-muted-foreground ml-2">ai_engine.py</span>
      </div>
      <div className="p-4 flex-1 bg-card/40 backdrop-blur-sm rounded-b-xl border border-t-0 border-border/40 overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="text-muted-foreground/40 w-6 mr-3 text-right select-none shrink-0">{line.text ? i + 1 : ""}</span>
            <span className={line.text.startsWith("#") ? "text-muted-foreground/60" : line.text.startsWith(">>>") ? "text-primary" : line.text.startsWith("✓") ? "text-green-400" : "text-foreground/80"}>
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
// ------------------------------------------------

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 1. MAIN PROFILE CARD */}
        <div className="md:col-span-2 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-slow" />
                     <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black border border-border flex items-center justify-center text-2xl font-bold">AP</div>
                    <Image src="/profile_pic.png" alt="Aleksander Paliwoda" fill className="rounded-full object-cover border-2 border-primary/50 shadow-lg shadow-primary/20" />
                </div>

                <div className="flex flex-col text-center md:text-left">
                    <div className="inline-flex items-center gap-2 justify-center md:justify-start mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono text-green-400 tracking-wider">AVAILABLE FOR WORK</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        Aleksander Paliwoda
                    </h1>
                    <h2 className="text-xl text-primary/90 font-medium mb-4">
                        AI Engineer & Full Stack Developer
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-lg mb-6">
                        "Obsession always beats talent." Bridging robust backend engineering with modern AI solutions. 
                        B.Eng. Student at Warsaw University of Technology.
                    </p>

                    <div className="flex gap-3 justify-center md:justify-start">
                      <a href="https://github.com/RI88Z" target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary border-primary/20">
                            <Github className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href="https://www.linkedin.com/in/aleksander-ribbz-paliwoda" target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-500/10 hover:text-blue-400 border-blue-500/20">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href="mailto:alek.paliwoda@interia.pl">
                        <Button size="icon" variant="outline" className="rounded-full hover:bg-red-500/10 hover:text-red-400 border-red-500/20">
                            <Mail className="h-5 w-5" />
                        </Button>
                      </a>
                      <a href="/Aleksander_Paliwoda_CV.pdf" download="Aleksander_Paliwoda_CV.pdf">
                        <Button variant="default" className="rounded-full bg-white text-black hover:bg-gray-200 gap-2">
                            <Download className="h-4 w-4" /> Download CV
                        </Button>
                      </a>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. TERMINAL CARD */}
        <div className="md:col-span-1 rounded-3xl border border-border/50 bg-black/40 backdrop-blur-xl p-1 flex flex-col shadow-2xl overflow-hidden">
             <TerminalBlock />
        </div>

        {/* 3. EDUCATION CARD */}
        <div className="rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-6 flex flex-col gap-3 hover:border-primary/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <GraduationCap className="h-5 w-5" />
            </div>
            <div>
                <h3 className="font-bold text-lg">B.Eng. Computer Science</h3>
                <p className="text-sm text-muted-foreground">Warsaw University of Technology</p>
                <p className="text-xs text-primary mt-1 font-mono">2023 - 2027 (Expected)</p>
            </div>
        </div>

        {/* 4. PASSIONS CARD */}
        <div className="rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-6 flex flex-col gap-3 hover:border-accent/30 transition-colors">
            <div className="flex gap-3 mb-2">
                 <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Car className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <Dumbbell className="h-5 w-5" />
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg">After Hours</h3>
                <p className="text-sm text-muted-foreground">Automotive & Martial Arts enthusiast. Energy and discipline.</p>
            </div>
        </div>

        {/* 5. LOCATION CARD */}
        <div className="md:col-span-1 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/20 to-purple-500/20 p-6 flex items-center justify-between group cursor-pointer hover:opacity-90 transition-opacity">
            <div className="flex flex-col">
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Location</span>
                <span className="text-xl font-bold text-white flex items-center gap-2">
                    Warsaw, PL <MapPin className="h-4 w-4" />
                </span>
            </div>
            <ArrowDown className="h-8 w-8 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>

      </div>
    </section>
  )
}
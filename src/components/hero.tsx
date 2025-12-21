import { NameAnimation } from "./name-animation"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle,var(--gold-muted),transparent_70%)] opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,var(--gold),transparent_70%)] opacity-15 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <p className="text-gold text-sm font-mono mb-8 tracking-widest uppercase">Software Developer</p>

        <NameAnimation />

        <div className="mt-16 max-w-xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I like games, music, anime and coding.
          </p>
        </div>

        <div className="mt-20 flex items-center gap-8">
          <a
            href="#work"
            className="group flex items-center gap-2 text-sm font-mono text-foreground hover:text-gold transition-colors"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#contact" className="text-sm font-mono text-muted-foreground hover:text-gold transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

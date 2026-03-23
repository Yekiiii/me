export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-gold mb-16 tracking-widest uppercase">About</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              I&apos;m a web developer passionate about creating seamless digital experiences that bridge functionality
              and aesthetics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in modern JavaScript frameworks and a keen eye for design, I build applications that users
              love to interact with. Currently focused on full-stack development with Next.js and exploring the
              intersection of design and engineering.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-mono text-gold mb-6 tracking-widest uppercase">Frontend</h3>
                <ul className="space-y-3">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-gold transition-colors" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs font-mono text-gold mb-6 tracking-widest uppercase">Backend</h3>
                <ul className="space-y-3">
                  {["Node.js", "PostgreSQL", "Prisma", "Supabase", "Express"].map((tech) => (
                    <li key={tech} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-gold transition-colors" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-gold mb-4 tracking-widest uppercase">Currently</h3>
              <p className="text-foreground">Open to freelance opportunities and collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

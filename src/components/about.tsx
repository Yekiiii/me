export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
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
                  {["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
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
                  {["Node.js", "PostgreSQL", "MySQL", "Prisma", "Firebase", "Express"].map((tech) => (
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
              <p className="text-foreground">Open to freelance opportunities and new job opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

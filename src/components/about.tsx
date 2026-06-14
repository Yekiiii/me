import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma to Code"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL", "Redis", "BullMQ", "AI Integrations", "REST + GraphQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["Nginx", "Docker", "AWS", "CI/CD", "Git"],
  },
]

const focusAreas = ["Product Discovery", "Rapid Prototyping", "Performance Tuning", "Scalable UI Systems"]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="section-title">About</p>
        <h2 className="section-heading max-w-3xl">Tools, Technologies & Expertise</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong relative flex flex-col overflow-hidden p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -top-20 right-[-2rem] h-52 w-52 rounded-full bg-foreground/4 blur-3xl" />

            <p className="relative z-10 text-base leading-relaxed text-foreground/82 md:text-lg">
              Full-stack developer focused on building production-ready web and mobile applications. I work across modern
              frontend frameworks, backend systems, cloud infrastructure, and automation workflows.
            </p>
            <p className="relative z-10 mt-5 text-sm leading-relaxed text-foreground/68 md:text-base">
              My experience spans e-commerce, SaaS, analytics, and AI-powered products, with a strong emphasis on
              performance, scalability, and maintainable architecture.
            </p>

            <div className="relative z-10 mt-8 border-t border-border pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/55">Focus Areas</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-background/58 px-3.5 py-1.5 text-sm text-foreground/78"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4"
          >
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-card rounded-2xl p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/55">{group.title}</h3>
                  <span className="text-xs font-medium text-foreground/45">{group.items.length}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background/58 px-3 py-1.5 text-sm text-foreground/78 transition-colors hover:border-foreground/25 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

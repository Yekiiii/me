import { motion } from "framer-motion"

const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma to Code"]
const backendSkills = ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL", "REST + GraphQL"]
const workflowSkills = ["Product Discovery", "Rapid Prototyping", "Performance Tuning", "Scalable UI Systems"]

type SkillStackProps = {
  title: string
  items: string[]
}

function SkillStack({ title, items }: SkillStackProps) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/55">{title}</h3>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-border bg-background/58 px-3 py-2 text-sm text-foreground/76">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="section-title">About</p>
        <h2 className="section-heading max-w-3xl">A product-minded engineer with strong design instincts.</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong relative overflow-hidden p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -top-20 right-[-2rem] h-52 w-52 rounded-full bg-foreground/4 blur-3xl" />

            <p className="relative z-10 text-base leading-relaxed text-foreground/82 md:text-lg">
              I enjoy turning loose ideas into polished products. My approach blends full-stack engineering with UX thinking
              so the final output is not only functional, but also feels effortless to use.
            </p>
            <p className="relative z-10 mt-5 text-sm leading-relaxed text-foreground/68 md:text-base">
              Beyond shipping features, I care deeply about rhythm, readability, and interaction quality. The goal is always
              the same: software that works hard and feels smooth.
            </p>

            <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
              {workflowSkills.map((skill) => (
                <div key={skill} className="rounded-xl border border-border bg-background/58 px-4 py-3 text-sm text-foreground/78">
                  {skill}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <SkillStack title="Frontend" items={frontendSkills} />
            <SkillStack title="Backend" items={backendSkills} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

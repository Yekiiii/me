import { motion } from "framer-motion"

const experiences = [
  {
    company: "PenguinApps",
    role: "Full Stack Developer",
    period: "Aug 2024 - Present",
    description: [
      "Built and maintained end-to-end web and mobile applications using the MERN stack, React Native, MySQL, and AWS.",
      "Owned UI/UX in Figma and translated designs into polished production interfaces.",
      "Delivered CMS dashboards and Android apps for production release while handling Shopify Liquid and GraphQL integrations.",
      "Partnered with clients directly to map business requirements into practical technical solutions.",
    ],
  },
  {
    company: "XIRCLS - 360° Martech Stack & Decentralized Collaborative Marketing Network",
    role: "Frontend Developer Intern",
    period: "Mar 2024 - Jul 2024",
    description: [
      "Contributed across multiple React, Bootstrap, GraphQL, Shopify, and Django projects.",
      "Built key parts of the Shopify CRM including filters, CRUD forms, and cleaner admin UI flows.",
      "Implemented a visual WhatsApp automation flowchart builder with React Flow.",
    ],
  },
  {
    company: "Business Web Solutions",
    role: "Full Stack Developer Intern",
    period: "Oct 2023 - Dec 2023",
    description: [
      "Worked across projects using React, Django, PostgreSQL, and classic web stacks.",
      "Helped build and ship social platform features on a Django + React architecture.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="section-title">Experience</p>
        <h2 className="section-heading max-w-3xl">Where I learned speed, ownership, and product thinking.</h2>

        <div className="relative mt-12 space-y-5 md:space-y-6">
          <div className="pointer-events-none absolute bottom-4 left-5 top-5 hidden w-px bg-border md:block" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="glass-card-strong relative overflow-hidden p-5 md:p-6 md:pl-14"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-foreground/3 blur-3xl" />
              <div className="absolute left-[1.08rem] top-8 hidden h-3 w-3 rounded-full border border-border bg-foreground/40 md:block" />

              <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground md:text-[1.7rem]">{exp.company}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/55">{exp.role}</p>
                </div>
                <span className="w-fit rounded-full border border-border bg-background/58 px-3 py-1 text-xs font-medium text-foreground/70">
                  {exp.period}
                </span>
              </div>

              <ul className="relative z-10 mt-5 space-y-2.5">
                {exp.description.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/76">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

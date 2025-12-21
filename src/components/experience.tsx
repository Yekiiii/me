import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "PenguinApps",
    role: "Full Stack Developer",
    period: "August 2024 - Present",
    description: [
      "Built and maintained end-to-end web & mobile applications using MERN stack, React Native, MySQL, and AWS.",
      "Designed UI/UX in Figma and implemented production-ready interfaces in React and React Native.",
      "Developed CMS dashboards and Android apps deployed on the Play Store; delivered Shopify Liquid themes, apps, and GraphQL integrations for third-party marketplaces.",
      "Worked directly with clients to translate business requirements into technical solutions and ensure timely delivery."
    ]
  },
  {
    company: "XIRCLS - 360° Martech Stack & Decentralized Collaborative Marketing Network",
    role: "Frontend Developer Intern",
    period: "March 2024 - July 2024", 
    description: [
      "Worked on multiple projects using technologies like ReactJS, Bootstrap, GraphQL, Shopify and Django.",
      "Worked on the entirety of the Shopify CRM which Included making a few client-sided and server sided filters, various forms for product/user CRUD operations with clean UI using both GraphQL and REST.",
      "Worked on a Flowchart Maker for WhatsApp Automation using ReactFlow."
    ]
  },
  {
    company: "Business Web Solutions",
    role: "Full Stack Developer Intern",
    period: "October 2023 - December 2023",
    description: [
      "Worked on multiple projects using technologies like React, HTML/CSS/JS, Bootstrap, jQuery, React, Django, PostgreSQL etc.",
      "Worked on a social media platform using Django PostgreSQL, React."
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px_100%]"></div>
         <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,var(--gold),transparent_70%)] opacity-10 blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-gold mb-16 tracking-widest uppercase">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l border-border hover:border-gold transition-colors"
            >
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-gold transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-2xl font-light text-foreground">{exp.company}</h3>
                <span className="font-mono text-sm text-gold">{exp.period}</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-4">{exp.role}</p>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground/80 leading-relaxed text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../../../constants/projects"
import { site } from "../../../constants/site"
import { skillGroups } from "../../../constants/skills"
import { container } from "../../../helpers/cx"

const ease = [0.22, 1, 0.36, 1] as const

const facts = [
  { label: "Experience", value: site.tenure },
  { label: "Company", value: site.company },
  { label: "Role", value: site.role },
  { label: "Projects", value: String(projects.length).padStart(2, "0") },
]

const ticker = skillGroups.flatMap((group) => group.items)

export function Hero() {
  const reduce = useReducedMotion()
  const splitAt = site.name.lastIndexOf(" ")
  const leading = splitAt > 0 ? site.name.slice(0, splitAt) : site.name
  const trailing = splitAt > 0 ? site.name.slice(splitAt + 1) : ""

  return (
    <section aria-labelledby="hero-title">
      <div className={container}>
        <motion.div
          className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pb-10 pt-16 sm:pb-14"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }}
        >
          <motion.p
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent"
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } } }}
          >
            {site.company} · {site.role}
          </motion.p>
          <motion.h1
            id="hero-title"
            className="mt-5 max-w-6xl font-serif text-[clamp(3.4rem,9vw,8rem)] font-medium leading-[0.84] tracking-[-0.045em] text-ink"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
          >
            {leading}{" "}
            {trailing ? <span className="italic text-accent">{trailing}</span> : null}
          </motion.h1>
          <motion.div
            className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,34rem)_auto]"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
          >
            <p className="max-w-xl text-lg leading-8 text-muted">{site.summary}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={{ hash: "projects" }}
                className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink"
              >
                View projects
              </Link>
              <Link
                to={{ hash: "contact" }}
                className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-ink"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-line py-6 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">{fact.label}</dt>
              <dd className="mt-2 font-serif text-3xl tracking-[-0.03em] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="ticker mt-0 border-y border-line py-4" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center pr-10">
              {ticker.map((item) => (
                <span key={`${copy}-${item}`} className="px-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  {item}
                  <span className="ml-8 text-accent">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

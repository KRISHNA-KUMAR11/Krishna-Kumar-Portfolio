import { Link } from "react-router-dom"
import { site } from "../../../constants/site"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"

export function Hero() {
  return (
    <section className="border-b border-line py-16 sm:py-24" aria-labelledby="hero-title">
      <div className={container}>
        <Reveal>
          <p className="text-sm font-medium text-accent">
            {site.company} · {site.tenure}
          </p>
          <h1 id="hero-title" className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-ink">{site.role}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{site.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={{ hash: "projects" }}
              className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink"
            >
              View projects
            </Link>
            <Link
              to={{ hash: "contact" }}
              className="inline-flex items-center rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink"
            >
              Contact
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a className="text-ink underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="text-ink underline decoration-line underline-offset-4" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

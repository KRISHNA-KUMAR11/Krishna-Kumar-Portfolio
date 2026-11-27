import { Link } from "react-router-dom"
import { architectures } from "../../../constants/architecture"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function ArchitecturePreview() {
  return (
    <section id="architecture" aria-labelledby="architecture-title" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="architecture"
            index="07 — Systems"
            title="Architecture and system design"
            intro="Two write-ups of how the request path, data, and supporting services fit together."
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {architectures.map((doc) => (
              <li key={doc.slug}>
                <Link
                  to={`/architecture/${doc.slug}`}
                  className="lift group block h-full border border-line bg-surface p-7 sm:p-8"
                >
                  <h3 className="font-serif text-3xl font-medium tracking-[-0.03em] text-ink group-hover:text-accent">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{doc.summary}</p>
                  <p className="mt-6 text-sm font-medium text-ink">Read the design</p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

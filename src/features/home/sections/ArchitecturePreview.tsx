import { Link } from "react-router-dom"
import { architectures } from "../../../constants/architecture"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function ArchitecturePreview() {
  return (
    <section id="architecture" aria-labelledby="architecture-title" className="py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="architecture"
            title="Architecture and system design"
            intro="Two write-ups of how the request path, data, and supporting services fit together."
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {architectures.map((doc) => (
              <li key={doc.slug}>
                <Link
                  to={`/architecture/${doc.slug}`}
                  className="block h-full rounded-lg border border-line bg-surface p-5 hover:border-accent"
                >
                  <h3 className="text-xl font-medium text-ink">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{doc.summary}</p>
                  <p className="mt-4 text-sm font-medium text-accent">Read the design</p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

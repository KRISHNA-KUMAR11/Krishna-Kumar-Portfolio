import { highlights } from "../../../constants/highlights"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading id="highlights" title="Professional highlights" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item.title} className="rounded-lg border border-line bg-surface p-5">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

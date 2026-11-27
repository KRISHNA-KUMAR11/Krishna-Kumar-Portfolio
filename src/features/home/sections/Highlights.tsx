import { highlights } from "../../../constants/highlights"
import { container } from "../../../helpers/cx"
import { Reveal, Stagger, StaggerItem } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading id="highlights" index="01 — Practice" title="Professional highlights" />
          <Stagger as="ul" className="grid border-t border-line sm:grid-cols-2">
            {highlights.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.title}
                className="border-b border-line py-8 sm:px-8 sm:odd:pl-0 sm:even:border-l sm:even:pr-0"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-medium leading-none tracking-[-0.03em] text-ink">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}

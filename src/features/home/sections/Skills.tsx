import { skillGroups } from "../../../constants/skills"
import { container } from "../../../helpers/cx"
import { Reveal, Stagger, StaggerItem } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="skills"
            index="03 — Capabilities"
            title="Technical skills"
            intro="Tools I use in product work, grouped by where they sit in the stack."
          />
          <Stagger className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <StaggerItem key={group.title}>
              <section aria-labelledby={`skill-${group.title}`} className="h-full border border-line bg-surface p-6 sm:p-7">
                <h3 id={`skill-${group.title}`} className="font-serif text-2xl font-medium tracking-[-0.03em] text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-canvas px-3 py-1 text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}

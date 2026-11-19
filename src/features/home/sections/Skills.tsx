import { skillGroups } from "../../../constants/skills"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="skills"
            title="Technical skills"
            intro="Tools I use in product work, grouped by where they sit in the stack."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.title} aria-labelledby={`skill-${group.title}`} className="rounded-lg border border-line bg-surface p-5">
                <h3 id={`skill-${group.title}`} className="text-base font-medium text-ink">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-canvas px-2.5 py-1 text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

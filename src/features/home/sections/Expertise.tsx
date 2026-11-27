import { expertise } from "../../../constants/expertise"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="border-y border-line bg-surface py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="expertise"
            index="06 — How I work"
            title="Engineering expertise"
            intro="How I approach the parts of a system that are easy to fake in a demo and expensive to fix later."
          />
          <ol className="border-t border-line">
            {expertise.map((item, index) => (
              <li key={item.title} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="text-sm font-medium text-accent">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

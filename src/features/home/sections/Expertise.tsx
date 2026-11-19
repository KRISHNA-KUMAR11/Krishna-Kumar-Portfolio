import { expertise } from "../../../constants/expertise"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="border-y border-line py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="expertise"
            title="Engineering expertise"
            intro="How I approach the parts of a system that are easy to fake in a demo and expensive to fix later."
          />
          <ol className="grid gap-4">
            {expertise.map((item, index) => (
              <li key={item.title} className="rounded-lg border border-line bg-surface p-5">
                <h3 className="text-lg font-medium text-ink">
                  <span className="mr-2 text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

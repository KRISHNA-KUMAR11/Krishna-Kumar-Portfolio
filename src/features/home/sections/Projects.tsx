import { Link, useSearchParams } from "react-router-dom"
import { projects } from "../../../constants/projects"
import { container, cx } from "../../../helpers/cx"
import { filterProjects, focusOptions, parseFocus, type Focus } from "../../../helpers/filters"
import { Reveal, Stagger, StaggerItem } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function Projects() {
  const [params, setParams] = useSearchParams()
  const focus = parseFocus(params.get("focus"))
  const visible = filterProjects(projects, focus)

  function setFocus(next: Focus) {
    const updated = new URLSearchParams(params)
    if (next === "all") updated.delete("focus")
    else updated.set("focus", next)
    setParams(updated, { replace: true, preventScrollReset: true })
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="projects"
            index="05 — Selected work"
            title="Featured projects"
            intro="My own products and an earlier delivery project. Filters stay in the URL so a view can be shared."
          />
          <fieldset>
            <legend className="sr-only">Filter projects</legend>
            <div className="flex flex-wrap gap-2">
              {focusOptions.map((option) => (
                <label
                  key={option.id}
                  className={cx(
                    "inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-sm",
                    focus === option.id
                      ? "border-accent bg-accent text-accent-ink"
                      : "border-line bg-surface text-ink",
                  )}
                >
                  <input
                    type="radio"
                    name="project-focus"
                    value={option.id}
                    checked={focus === option.id}
                    onChange={() => setFocus(option.id)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
          <Stagger key={focus} as="ul" className="mt-2 border-t border-line">
            {visible.map((project, index) => (
              <StaggerItem as="li" key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="lift group grid gap-4 border-b border-line py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-end sm:gap-8 sm:px-3"
                >
                  <p className="font-serif text-2xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-3xl font-medium tracking-[-0.03em] text-ink transition-colors group-hover:text-accent sm:text-5xl">
                        {project.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{project.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted">
                      {project.stack.slice(0, 5).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-ink sm:pb-1 sm:text-right">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">{project.period}</span>
                    <span className="mt-2 block font-medium">Open case study</span>
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          {visible.length === 0 ? (
            <p className="mt-6 text-sm text-muted">No projects in this filter.</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}

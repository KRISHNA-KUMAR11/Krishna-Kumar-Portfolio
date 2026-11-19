import { Link, useSearchParams } from "react-router-dom"
import { projects } from "../../../constants/projects"
import { container, cx } from "../../../helpers/cx"
import { filterProjects, focusOptions, parseFocus, type Focus } from "../../../helpers/filters"
import { Reveal } from "../../../shared/components/ui/Reveal"
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
    <section id="projects" aria-labelledby="projects-title" className="py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="projects"
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
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {visible.map((project) => (
              <li key={project.slug} className={project.featured ? "md:col-span-2" : undefined}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="block h-full rounded-lg border border-line bg-surface p-5 hover:border-accent"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-medium text-ink">{project.title}</h3>
                    <span className="text-sm text-muted">{project.period}</span>
                  </div>
                  {project.featured ? (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-accent">Featured</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((item) => (
                      <li key={item} className="rounded-md border border-line px-2 py-0.5 text-xs text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
          {visible.length === 0 ? (
            <p className="mt-6 text-sm text-muted">No projects in this filter.</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}

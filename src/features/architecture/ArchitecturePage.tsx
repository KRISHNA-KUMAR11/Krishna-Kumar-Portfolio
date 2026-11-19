import { Link, useParams } from "react-router-dom"
import { SystemDiagram } from "../../shared/components/architecture/SystemDiagram"
import { getArchitecture } from "../../constants/architecture"
import { getProject } from "../../constants/projects"
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle"
import { container } from "../../helpers/cx"
import { NotFoundPage } from "../notfound/NotFoundPage"

export function ArchitecturePage() {
  const { slug } = useParams()
  const doc = slug ? getArchitecture(slug) : undefined
  const project = doc ? getProject(doc.projectSlug) : undefined

  useDocumentTitle({
    page: doc?.title,
    description: doc?.summary,
  })

  if (!doc) return <NotFoundPage />

  return (
    <article className="py-14 sm:py-20">
      <div className={`${container} grid max-w-3xl gap-10`}>
        <header>
          <p className="text-sm text-muted">
            <Link to="/" className="text-ink underline decoration-line underline-offset-4">
              Portfolio
            </Link>
            <span aria-hidden="true"> / </span>
            Architecture
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-base leading-7 text-muted">{doc.summary}</p>
          {project ? (
            <p className="mt-4">
              <Link
                to={`/projects/${project.slug}`}
                className="text-sm text-ink underline decoration-line underline-offset-4"
              >
                Back to {project.title}
              </Link>
            </p>
          ) : null}
        </header>

        <section aria-labelledby="diagram-title">
          <h2 id="diagram-title" className="text-xl font-medium text-ink">
            Request path
          </h2>
          <div className="mt-4">
            <SystemDiagram steps={doc.steps} stores={doc.stores} />
          </div>
        </section>

        <section aria-labelledby="layers-title">
          <h2 id="layers-title" className="text-xl font-medium text-ink">
            Boundaries
          </h2>
          <div className="mt-4 grid gap-4">
            {doc.layers.map((layer) => (
              <section key={layer.title} className="rounded-lg border border-line bg-surface p-4">
                <h3 className="font-medium text-ink">{layer.title}</h3>
                <ul className="mt-2 grid gap-1">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        {doc.structures?.map((structure) => (
          <section key={structure.title} aria-labelledby={`structure-${structure.title}`}>
            <h2 id={`structure-${structure.title}`} className="text-xl font-medium text-ink">
              {structure.title}
            </h2>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-sm leading-6 text-ink">
              {structure.code}
            </pre>
          </section>
        ))}

        <section aria-labelledby="flows-title">
          <h2 id="flows-title" className="text-xl font-medium text-ink">
            Flows
          </h2>
          <div className="mt-4 grid gap-4">
            {doc.flows.map((flow) => (
              <section key={flow.title} className="rounded-lg border border-line p-4">
                <h3 className="font-medium text-ink">{flow.title}</h3>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  {flow.steps.map((step) => (
                    <li key={step} className="text-sm leading-6 text-muted">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="notes-title">
          <h2 id="notes-title" className="text-xl font-medium text-ink">
            Constraints
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
            {doc.notes.map((note) => (
              <li key={note} className="text-sm leading-6 text-muted">
                {note}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

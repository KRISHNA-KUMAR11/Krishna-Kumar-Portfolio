import { Link, useParams } from "react-router-dom"
import { getProject } from "../../constants/projects"
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle"
import { container } from "../../helpers/cx"
import { NotFoundPage } from "../notfound/NotFoundPage"

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  useDocumentTitle({
    page: project?.title,
    description: project?.summary,
  })

  if (!project) return <NotFoundPage />

  return (
    <article className="py-14 sm:py-20">
      <div className={`${container} max-w-3xl`}>
        <p className="text-sm text-muted">
          <Link to="/" className="text-ink underline decoration-line underline-offset-4">
            Portfolio
          </Link>
          <span aria-hidden="true"> / </span>
          Projects
        </p>
        <h1 className="mt-6 font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.035em] text-ink">{project.title}</h1>
        <p className="mt-3 text-sm text-muted">
          {project.role} · {project.period}
        </p>
        {project.quote ? (
          <blockquote className="mt-6 border-l border-accent pl-4 font-serif text-xl leading-8 text-ink">
            {project.quote}
          </blockquote>
        ) : null}
        <p className="mt-6 text-base leading-7 text-muted">{project.summary}</p>

        <h2 className="mt-10 text-xl font-medium text-ink">Problem</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{project.problem}</p>

        <h2 className="mt-10 text-xl font-medium text-ink">What I built</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
          {project.built.map((item) => (
            <li key={item} className="text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-medium text-ink">Contribution</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
          {project.contribution.map((item) => (
            <li key={item} className="text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>

        {project.areas ? (
          <>
            <h2 className="mt-10 text-xl font-medium text-ink">What it does</h2>
            <dl className="mt-3 grid gap-3">
              {project.areas.map((area) => (
                <div key={area.name} className="rounded-lg border border-line bg-surface p-4">
                  <dt className="font-medium text-ink">{area.name}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{area.purpose}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}

        {project.actors ? (
          <>
            <h2 className="mt-10 text-xl font-medium text-ink">Actors</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.actors.map((actor) => (
                <li key={actor} className="rounded-md border border-line px-2.5 py-1 text-sm text-ink">
                  {actor}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h2 className="mt-10 text-xl font-medium text-ink">Stack</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>

        {project.architectureSlug ? (
          <p className="mt-10">
            <Link
              to={`/architecture/${project.architectureSlug}`}
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink"
            >
              View system design
            </Link>
          </p>
        ) : null}
      </div>
    </article>
  )
}

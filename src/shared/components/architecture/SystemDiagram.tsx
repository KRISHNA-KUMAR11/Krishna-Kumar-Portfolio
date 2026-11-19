import type { ArchitectureDoc } from "../../../constants/architecture"

export function SystemDiagram({
  steps,
  stores,
}: {
  steps: ArchitectureDoc["steps"]
  stores: ArchitectureDoc["stores"]
}) {
  return (
    <div className="grid gap-3">
      <ol className="grid gap-3">
        {steps.map((step, index) => (
          <li key={step.title}>
            <div className="rounded-lg border border-line bg-surface px-4 py-3">
              <p className="font-medium text-ink">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{step.detail}</p>
            </div>
            {index < steps.length - 1 ? (
              <div className="mx-auto h-6 w-px bg-line" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
      <ul className="grid gap-3 sm:grid-cols-2">
        {stores.map((store) => (
          <li key={store.title} className="rounded-lg border border-line bg-accent-soft px-4 py-3">
            <p className="font-medium text-ink">{store.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{store.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

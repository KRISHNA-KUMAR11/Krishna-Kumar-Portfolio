export function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string
  title: string
  intro?: string
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 id={`${id}-title`} className="font-serif text-3xl text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-base leading-7 text-muted">{intro}</p> : null}
    </div>
  )
}

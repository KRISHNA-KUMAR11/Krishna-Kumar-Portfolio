export function SectionHeading({
  id,
  title,
  intro,
  index,
}: {
  id: string
  title: string
  intro?: string
  index?: string
}) {
  return (
    <div className="mb-14 max-w-4xl">
      {index ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">{index}</p>
      ) : null}
      <h2
        id={`${id}-title`}
        className="mt-3 font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.035em] text-ink"
      >
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-xl text-base leading-7 text-muted">{intro}</p> : null}
    </div>
  )
}

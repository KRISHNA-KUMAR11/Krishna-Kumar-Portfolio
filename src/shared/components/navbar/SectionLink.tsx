import { Link, useLocation } from "react-router-dom"
import type { SectionId } from "../../../constants/site"
import { cx } from "../../../helpers/cx"

export function SectionLink({
  id,
  label,
  current,
  className,
  onNavigate,
}: {
  id: SectionId
  label: string
  current?: boolean
  className?: string
  onNavigate?: () => void
}) {
  const { pathname } = useLocation()
  const to = pathname === "/" ? { hash: id } : { pathname: "/", hash: id }

  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={current ? "location" : undefined}
      className={cx(
        "text-sm",
        current ? "text-ink" : "text-muted hover:text-ink",
        className,
      )}
    >
      {label}
    </Link>
  )
}

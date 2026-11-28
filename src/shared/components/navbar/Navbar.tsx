import { Menu, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { sections, site } from "../../../constants/site"
import { useActiveSection } from "../../hooks/useActiveSection"
import { container, cx } from "../../../helpers/cx"
import { SectionLink } from "./SectionLink"
import { ThemeToggle } from "./ThemeToggle"

const sectionIds = sections.map((section) => section.id)
const noSections: readonly string[] = []

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const active = useActiveSection(location.pathname === "/" ? sectionIds : noSections)
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const dialog = document.getElementById("mobile-menu")
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab" || !dialog) return
      const focusable = [...dialog.querySelectorAll<HTMLElement>("a, button")]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/80 backdrop-blur-xl">
      <div className={cx(container, "flex h-16 items-center gap-4")}>
        <Link to="/" className="mr-auto flex items-center gap-3 text-ink">
          <span className="grid size-9 place-items-center rounded-full bg-ink font-serif text-sm italic text-canvas">
            KT
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium">{site.name}</span>
            <span className="block text-xs text-muted">{site.role}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {sections
              .filter((section) => section.id !== "contact")
              .map((section) => (
                <li key={section.id}>
                  <SectionLink
                    id={section.id}
                    label={section.label}
                    current={active === section.id}
                  />
                </li>
              ))}
          </ul>
        </nav>

        <Link
          to={location.pathname === "/" ? { hash: "contact" } : { pathname: "/", hash: "contact" }}
          className="hidden h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-ink xl:inline-flex"
        >
          Contact
        </Link>

        <ThemeToggle />

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" size={18} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 xl:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-line bg-canvas p-5"
          >
            <div className="mb-6 flex items-center justify-between">
              <p id={titleId} className="font-medium">
                Menu
              </p>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-md border border-line"
                onClick={() => setOpen(false)}
              >
                <X aria-hidden="true" size={18} />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav aria-label="Mobile">
              <ul className="grid gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <SectionLink
                      id={section.id}
                      label={section.label}
                      current={active === section.id}
                      className="block text-base"
                      onNavigate={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}

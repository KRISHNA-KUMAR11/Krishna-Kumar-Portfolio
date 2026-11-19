import { useEffect, useState } from "react"

export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("")
  const key = ids.join("|")

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [ids, key])

  return active
}

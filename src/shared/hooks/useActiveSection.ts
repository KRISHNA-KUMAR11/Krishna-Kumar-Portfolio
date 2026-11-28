import { useEffect, useState } from "react"

const marker = 88

export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("")
  const key = ids.join("|")

  useEffect(() => {
    if (ids.length === 0) {
      setActive("")
      return
    }

    function update() {
      let current = ""
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= marker) current = id
      }
      setActive(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [ids, key])

  return active
}

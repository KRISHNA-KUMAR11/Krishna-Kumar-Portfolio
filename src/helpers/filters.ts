export const focuses = ["all", "fullstack", "backend", "realtime", "devops"] as const

export type Focus = (typeof focuses)[number]

export const focusOptions: { id: Focus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full stack" },
  { id: "backend", label: "Backend" },
  { id: "realtime", label: "Realtime" },
  { id: "devops", label: "DevOps" },
]

export function parseFocus(value: string | null): Focus {
  if (value && focuses.some((focus) => focus === value)) {
    return value as Focus
  }
  return "all"
}

export function filterProjects<T extends { focuses: readonly Exclude<Focus, "all">[] }>(
  items: readonly T[],
  focus: Focus,
): T[] {
  if (focus === "all") return [...items]
  return items.filter((item) => item.focuses.includes(focus))
}

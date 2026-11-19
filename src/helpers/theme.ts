export const THEME_STORAGE_KEY = "theme"

export type Theme = "light" | "dark"

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark"
}

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

export function preferredTheme(): Theme {
  if (typeof window === "undefined") return "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

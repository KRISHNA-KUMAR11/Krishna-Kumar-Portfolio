import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { preferredTheme, readStoredTheme, THEME_STORAGE_KEY, type Theme } from "../../helpers/theme"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function initialTheme(): Theme {
  const stored = readStoredTheme()
  if (stored) return stored
  if (typeof document !== "undefined") {
    if (document.documentElement.classList.contains("light")) return "light"
    if (document.documentElement.classList.contains("dark")) return "dark"
  }
  return preferredTheme()
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0e1014" : "#f4f1ea")
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme(): void {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* Private mode can block storage. The class still updates. */
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const value = useContext(ThemeContext)
  if (!value) throw new Error("useTheme must be used within ThemeProvider")
  return value
}

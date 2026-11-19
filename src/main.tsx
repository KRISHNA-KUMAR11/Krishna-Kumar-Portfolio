import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import "@fontsource/instrument-sans/latin-400.css"
import "@fontsource/instrument-sans/latin-500.css"
import "@fontsource/instrument-sans/latin-600.css"
import "@fontsource/instrument-serif/latin-400.css"
import "./styles.css"

const root = document.getElementById("root")
if (!root) throw new Error("Root element #root is missing")

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

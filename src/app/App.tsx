import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app-routing"

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

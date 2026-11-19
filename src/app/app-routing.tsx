import { Route, Routes } from "react-router-dom"
import { ArchitecturePage } from "../features/architecture/ArchitecturePage"
import { HomePage } from "../features/home/HomePage"
import { NotFoundPage } from "../features/notfound/NotFoundPage"
import { ProjectPage } from "../features/projects/ProjectPage"
import { RootLayout } from "../shared/components/layout/RootLayout"
import { ThemeProvider } from "../shared/hooks/useTheme"

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="architecture/:slug" element={<ArchitecturePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

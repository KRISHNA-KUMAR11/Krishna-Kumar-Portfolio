import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { AppRoutes } from "../../app/app-routing"

const headings = [
  "Professional highlights",
  "About me",
  "Technical skills",
  "Professional experience",
  "Featured projects",
  "Engineering expertise",
  "Architecture and system design",
  "Recent work",
  "Contact",
]

function renderHome() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe("home page", () => {
  it("renders the name, every section, and no social profile links", () => {
    renderHome()
    expect(screen.getByRole("heading", { level: 1, name: "Krishna Kumar Tummala" })).toBeInTheDocument()
    for (const heading of headings) {
      expect(screen.getByRole("heading", { level: 2, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole("contentinfo")).toHaveTextContent("krishnakumarnaidu11@gmail.com")
    expect(screen.queryByRole("link", { name: "GitHub" })).not.toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "LinkedIn" })).not.toBeInTheDocument()
  })

  it("filters the project list", async () => {
    const user = userEvent.setup()
    renderHome()
    const projects = document.getElementById("projects")
    expect(projects).not.toBeNull()
    if (!projects) return

    await user.click(screen.getByRole("radio", { name: "Full stack" }))
    expect(within(projects).getByRole("link", { name: /Interview Management Platform/ })).toBeInTheDocument()
    expect(within(projects).queryByRole("link", { name: /Package Tracking System/ })).not.toBeInTheDocument()
    expect(within(projects).queryByRole("link", { name: /Automated CI\/CD Pipeline/ })).not.toBeInTheDocument()
  })
})

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { Contact } from "./Contact"

vi.mock("../../../services/contact", async () => {
  const actual = await vi.importActual<typeof import("../../../services/contact")>("../../../services/contact")
  return { ...actual, openMail: vi.fn() }
})

describe("contact form", () => {
  it("shows field errors for an empty submit", async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole("button", { name: "Send message" }))
    expect(screen.getByText("Enter your name.")).toBeInTheDocument()
    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument()
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
  })

  it("shows an email error without opening a success state", async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText("Name"), "Krishna Kumar")
    await user.type(screen.getByLabelText("Email"), "not-an-email")
    await user.type(screen.getByLabelText("Subject"), "Role")
    await user.type(screen.getByLabelText("Message"), "I would like to talk about a role.")
    await user.click(screen.getByRole("button", { name: "Send message" }))
    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument()
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
  })

  it("confirms when the message is valid", async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText("Name"), "Krishna Kumar")
    await user.type(screen.getByLabelText("Email"), "ada@example.com")
    await user.type(screen.getByLabelText("Subject"), "Role")
    await user.type(screen.getByLabelText("Message"), "I would like to talk about a role.")
    await user.click(screen.getByRole("button", { name: "Send message" }))
    expect(await screen.findByRole("status")).toHaveTextContent(/krishnakumarnaidu11@gmail.com/)
  })
})

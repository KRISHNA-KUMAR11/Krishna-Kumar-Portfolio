import { describe, expect, it } from "vitest"
import { buildMailto, contactSchema } from "./contact"

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  subject: "Role",
  message: "I would like to talk about a full-stack role.",
}

describe("contactSchema", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.parse(valid)).toEqual(valid)
  })

  it("rejects a short name, a bad email, and a short message", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Too short",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message)
      expect(messages).toContain("Enter your name.")
      expect(messages).toContain("Enter a valid email address.")
      expect(messages).toContain("Enter a subject.")
      expect(messages).toContain("Write at least 20 characters.")
    }
  })
})

describe("buildMailto", () => {
  it("addresses the message to the recipient", () => {
    const url = buildMailto("krishnakumarnaidu11@gmail.com", valid)
    expect(url.startsWith("mailto:krishnakumarnaidu11@gmail.com?")).toBe(true)
    expect(url).toContain("subject=Role")
    expect(decodeURIComponent(url)).toContain("ada@example.com")
  })
})

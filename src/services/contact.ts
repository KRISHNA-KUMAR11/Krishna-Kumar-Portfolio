import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Enter a subject."),
  message: z.string().trim().min(20, "Write at least 20 characters."),
})

export type ContactValues = z.infer<typeof contactSchema>

export function buildMailto(to: string, values: ContactValues): string {
  const body = [`Name: ${values.name}`, `Email: ${values.email}`, "", values.message].join("\n")
  const params = new URLSearchParams({
    subject: values.subject,
    body,
  })
  return `mailto:${to}?${params.toString()}`
}

export function openMail(url: string): void {
  try {
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.rel = "nofollow"
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  } catch {
    /* Opening the mail client is best-effort. The page still confirms the address. */
  }
}

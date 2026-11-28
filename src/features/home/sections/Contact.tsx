import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { site } from "../../../constants/site"
import { buildMailto, contactSchema, openMail, type ContactValues } from "../../../services/contact"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

const fields: { name: keyof ContactValues; label: string; type?: string; multiline?: boolean }[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
  { name: "message", label: "Message", multiline: true },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  function onSubmit(values: ContactValues) {
    openMail(buildMailto(site.email, values))
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                id="contact"
                index="09 — Start a conversation"
                title="Contact"
                intro="Send a note about a role or a project. A valid form opens your email app with the message addressed to me."
              />
              <ul className="grid gap-2 text-sm">
                <li>
                  <a className="text-ink underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="text-ink underline decoration-line underline-offset-4" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <form className="grid gap-5 border border-line bg-surface p-6 sm:p-8" noValidate onSubmit={handleSubmit(onSubmit)}>
              {fields.map((field) => {
                const error = errors[field.name]
                const id = `contact-${field.name}`
                const describedBy = error ? `${id}-error` : undefined
                return (
                  <div key={field.name}>
                    <label htmlFor={id} className="text-sm font-medium text-ink">
                      {field.label}
                    </label>
                    {field.multiline ? (
                      <textarea
                        id={id}
                        rows={6}
                        className="mt-1.5 w-full rounded-md border border-field-line bg-field px-3 py-3 text-base text-ink"
                        aria-invalid={error ? true : undefined}
                        aria-describedby={describedBy}
                        {...register(field.name)}
                      />
                    ) : (
                      <input
                        id={id}
                        type={field.type}
                        autoComplete={field.name === "name" ? "name" : field.name === "email" ? "email" : undefined}
                        className="mt-1.5 w-full rounded-md border border-field-line bg-field px-3 py-3 text-base text-ink"
                        aria-invalid={error ? true : undefined}
                        aria-describedby={describedBy}
                        {...register(field.name)}
                      />
                    )}
                    {error?.message ? (
                      <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-accent">
                        {error.message}
                      </p>
                    ) : null}
                  </div>
                )
              })}
              <button type="submit" className="inline-flex h-12 w-fit items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink">
                Send message
              </button>
              {sent ? (
                <p role="status" className="text-sm leading-6 text-ink">
                  Your email app should open with this message addressed to {site.email}. If it does not, use the email link on this page.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

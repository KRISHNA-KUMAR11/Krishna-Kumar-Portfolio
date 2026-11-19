import { environment } from "../environments/environment"

export const site = {
  name: "Krishna Kumar Tummala",
  role: "Full Stack Engineer",
  company: "ExcelHire",
  tenure: "2.6 years",
  email: environment.email,
  phone: environment.phone,
  phoneHref: environment.phoneHref,
  githubUsername: "KRISHNA-KUMAR11",
  linkedinUrl: "https://www.linkedin.com/in/krishna-kumar-s0499/",
  summary:
    "I design and maintain web apps with Angular, React, Node.js, Express, NestJS, MongoDB, and AWS. Most of the work is APIs, access control, and the data behind them.",
} as const

export const sections = [
  { id: "highlights", label: "Highlights" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "expertise", label: "Expertise" },
  { id: "architecture", label: "Architecture" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
] as const

export type SectionId = (typeof sections)[number]["id"]

export function profileLinks(): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = []
  if (site.githubUsername) {
    links.push({
      href: `https://github.com/${site.githubUsername}`,
      label: "GitHub",
    })
  }
  if (site.linkedinUrl) {
    links.push({ href: site.linkedinUrl, label: "LinkedIn" })
  }
  return links
}

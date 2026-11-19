import { describe, expect, it } from "vitest"
import { architectures } from "./architecture"
import { highlights } from "./highlights"
import { projects } from "./projects"
import { profileLinks, site } from "./site"

describe("portfolio content", () => {
  it("keeps four factual highlights and does not invent percentages", () => {
    expect(highlights).toHaveLength(4)
    for (const item of highlights) {
      expect(item.text).not.toMatch(/%/)
    }
  })

  it("lists three projects with unique slugs and real contact details", () => {
    expect(projects).toHaveLength(3)
    expect(new Set(projects.map((project) => project.slug)).size).toBe(3)
    expect(site.email).toBe("krishnakumarnaidu11@gmail.com")
    expect(site.phone).toBe("+91 9912633527")
    expect(site.githubUsername).toBe("")
    expect(site.linkedinUrl).toBe("")
    expect(profileLinks()).toEqual([])
  })

  it("links architecture pages only where a design exists", () => {
    const slugs = new Set(projects.map((project) => project.slug))
    expect(architectures.map((doc) => doc.slug)).toEqual(["interview-platform", "package-tracking"])
    for (const doc of architectures) {
      expect(slugs.has(doc.projectSlug)).toBe(true)
    }
    expect(projects.find((project) => project.slug === "automated-cicd-pipeline")?.architectureSlug).toBeUndefined()
  })
})

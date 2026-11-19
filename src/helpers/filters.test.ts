import { describe, expect, it } from "vitest"
import { projects } from "../constants/projects"
import { filterProjects, parseFocus } from "./filters"

describe("parseFocus", () => {
  it("accepts known filters and falls back to all", () => {
    expect(parseFocus("backend")).toBe("backend")
    expect(parseFocus("nope")).toBe("all")
    expect(parseFocus(null)).toBe("all")
  })
})

describe("filterProjects", () => {
  it("returns every project for all", () => {
    expect(filterProjects(projects, "all")).toHaveLength(3)
  })

  it("matches the interview platform to full stack, backend, and realtime", () => {
    const interview = projects.find((project) => project.slug === "interview-management-platform")
    expect(interview?.focuses).toEqual(["fullstack", "backend", "realtime"])
    expect(filterProjects(projects, "fullstack").map((project) => project.slug)).toEqual([
      "interview-management-platform",
    ])
    expect(filterProjects(projects, "realtime").map((project) => project.slug)).toEqual([
      "interview-management-platform",
    ])
  })

  it("keeps package tracking on backend and the pipeline on devops", () => {
    expect(filterProjects(projects, "backend").map((project) => project.slug)).toEqual([
      "interview-management-platform",
      "package-tracking-system",
    ])
    expect(filterProjects(projects, "devops").map((project) => project.slug)).toEqual([
      "automated-cicd-pipeline",
    ])
  })
})

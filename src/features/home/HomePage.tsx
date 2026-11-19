import { About } from "./sections/About"
import { Activity } from "./sections/Activity"
import { ArchitecturePreview } from "./sections/ArchitecturePreview"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Expertise } from "./sections/Expertise"
import { Hero } from "./sections/Hero"
import { Highlights } from "./sections/Highlights"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle"

export function HomePage() {
  useDocumentTitle({
    description:
      "Portfolio of Krishna Kumar Tummala, a full-stack engineer at ExcelHire. Interview platforms, APIs, and delivery systems built with React, Angular, NestJS, and MongoDB.",
  })

  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Expertise />
      <ArchitecturePreview />
      <Activity />
      <Contact />
    </>
  )
}

import { certifications, education, languages } from "../../../constants/experience"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-line py-16 sm:py-20">
      <div className={container}>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <SectionHeading
                id="about"
                title="About me"
                intro="I am a full-stack engineer at ExcelHire. Since June 2024 I have worked from associate to full-stack, building typed frontends, REST APIs, authentication, and the database and delivery pieces around them."
              />
              <p className="max-w-2xl text-base leading-7 text-muted">
                Day to day that means Angular and React interfaces, NestJS and Node.js services, and MongoDB. I also work in Java and Spring Boot, and I care about permission checks, logs, and tests being part of the feature rather than a follow-up. Before ExcelHire I automated a CI/CD pipeline on AWS. Alongside the product work I built package and recipient APIs with versioning, rate limiting, and structured logging.
              </p>
            </div>
            <dl className="grid content-start gap-6 rounded-lg border border-line bg-surface p-5">
              <div>
                <dt className="text-sm font-medium text-ink">Education</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">
                  {education.degree}
                  <span className="mt-1 block">{education.school}</span>
                  <span className="mt-1 block">{education.period}</span>
                  <span className="mt-1 block">{education.detail}</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ink">Certifications</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{certifications.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ink">Languages</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{languages.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

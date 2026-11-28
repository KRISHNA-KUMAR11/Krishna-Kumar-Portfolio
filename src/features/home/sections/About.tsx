import { certifications, education, languages } from "../../../constants/experience"
import { container } from "../../../helpers/cx"
import { Reveal } from "../../../shared/components/ui/Reveal"
import { SectionHeading } from "../../../shared/components/ui/SectionHeading"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-line bg-surface py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <SectionHeading
                id="about"
                index="02 — Profile"
                title="About me"
                intro="I am a full-stack engineer at ExcelHire, with 2.6 years building web applications. I started as an associate in June 2024 and moved to full-stack in November 2024."
              />
              <p className="max-w-2xl text-base leading-7 text-muted">
                Day to day that is Angular and React on the screen, and Node.js, Express, or NestJS behind it, with MongoDB and Mongoose. I have also worked with Socket.IO, RabbitMQ, JWT and role checks, third-party APIs, and deploys on AWS with Docker. Java and Spring Boot are part of the same toolkit. Before ExcelHire I put a CI/CD pipeline on EC2. On my own time I built package-tracking APIs and an interview platform.
              </p>
            </div>
            <dl className="divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Education</dt>
                <dd className="mt-2 text-sm leading-6 text-ink">
                  {education.degree}
                  <span className="mt-1 block text-muted">{education.school}</span>
                  <span className="mt-1 block text-muted">{education.period}</span>
                  <span className="mt-1 block text-muted">{education.detail}</span>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Certifications</dt>
                <dd className="mt-2 text-sm leading-6 text-ink">{certifications.join(", ")}</dd>
              </div>
              <div className="py-5">
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Languages</dt>
                <dd className="mt-2 text-sm leading-6 text-ink">{languages.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

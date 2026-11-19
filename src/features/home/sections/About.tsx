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
                intro="I am a full-stack engineer at ExcelHire, with 2.6 years building web applications. I started as an associate in June 2024 and moved to full-stack in November 2024."
              />
              <p className="max-w-2xl text-base leading-7 text-muted">
                Day to day that is Angular and React on the screen, and Node.js, Express, or NestJS behind it, with MongoDB and Mongoose. I have also worked with Socket.IO, RabbitMQ, JWT and role checks, third-party APIs, and deploys on AWS with Docker. Java and Spring Boot are part of the same toolkit. Before ExcelHire I put a CI/CD pipeline on EC2. On my own time I built package-tracking APIs and an interview platform.
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

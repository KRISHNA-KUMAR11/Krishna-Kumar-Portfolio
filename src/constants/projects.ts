import type { Focus } from "../helpers/filters"

export type ProjectArea = {
  name: string
  purpose: string
}

export type Project = {
  slug: string
  title: string
  period: string
  role: string
  summary: string
  problem: string
  built: string[]
  contribution: string[]
  stack: string[]
  focuses: Array<Exclude<Focus, "all">>
  architectureSlug?: string
  featured?: boolean
  areas?: ProjectArea[]
  actors?: string[]
  quote?: string
}

export const projects: Project[] = [
  {
    slug: "interview-management-platform",
    title: "Interview Management Platform",
    period: "April 2025 – June 2025",
    role: "Personal project",
    featured: true,
    summary:
      "An end-to-end hiring platform to schedule interviews, run live video interviews, and conduct technical assessments.",
    problem:
      "Hiring teams were splitting scheduling, live interviews, and technical tests across separate tools. Staff also needed role-based access, candidate history, a shared question bank, and a record of what happened in each session.",
    built: [
      "Auth with access and refresh tokens, password flows, and permissions that drive both menus and API access.",
      "Interview scheduling for live, technical, or combined sessions, including interviewer assignment and question selection.",
      "A live path from lobby and media check into a WebRTC room, with recording, feedback, and review.",
      "A technical path from an invite link through a timed exam, integrity logs, face recording, submission, and grading.",
      "Candidate records, a reusable question bank, analytics with CSV export, staff users, company settings, and custom roles.",
    ],
    contribution: [
      "Built the React feature architecture and the NestJS modular API.",
      "Followed a controller, guard, service, and Prisma flow so each request returns a consistent JSON shape.",
      "Kept media peer-to-peer: the server relays signalling and ICE/TURN configuration, then stores recordings for playback.",
      "Scoped data by company, with a super-admin path across companies and guest tokens for invite links.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "NestJS",
      "Prisma",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "coturn",
      "Docker Compose",
    ],
    focuses: ["fullstack", "backend", "realtime"],
    architectureSlug: "interview-platform",
    quote:
      "Full-stack interview platform with RBAC, scheduling, WebRTC live interviews, proctored technical assessments, recordings, and reporting — NestJS modular API and React feature architecture, with Dockerized supporting services.",
    actors: [
      "Super Admin",
      "Company Admin",
      "HR",
      "Interviewer",
      "Candidate",
      "Guest via invite link",
    ],
    areas: [
      {
        name: "Auth and RBAC",
        purpose: "Login, refresh tokens, password flows, and permission-aware menus and APIs.",
      },
      {
        name: "Dashboard",
        purpose: "Counts, the next interview, recent activity, and quick links.",
      },
      {
        name: "Interview management",
        purpose: "Schedule, update, or cancel live, technical, or combined interviews.",
      },
      {
        name: "Live interview",
        purpose: "Lobby, media check, WebRTC room, recording, feedback, and review.",
      },
      {
        name: "Technical interview",
        purpose: "Invite link, timed exam, integrity logs, face recording, submit, and grade.",
      },
      {
        name: "Candidates and question bank",
        purpose: "Candidate history and reusable assessment questions.",
      },
      {
        name: "Reports",
        purpose: "Analytics and CSV export.",
      },
      {
        name: "Users and settings",
        purpose: "Staff users, company profile, and custom roles and permissions.",
      },
    ],
  },
  {
    slug: "package-tracking-system",
    title: "Package Tracking System",
    period: "October 2024 – February 2025",
    role: "API engineering",
    summary:
      "Package and recipient management APIs with authenticated access, bulk import, and versioned routes.",
    problem:
      "Operations needed a reliable way to create and update packages and recipients, including bulk loads, without leaving authentication, abuse protection, or request history as an afterthought.",
    built: [
      "CRUD APIs for packages and recipients on NestJS and MongoDB.",
      "Bulk import for larger operational updates.",
      "JWT authentication, rate limiting, and API versioning.",
      "Jest unit tests and Pino logging for failures and request tracing.",
    ],
    contribution: [
      "Implemented the management APIs and the guards around them.",
      "Used versioned routes so clients could move without a silent break.",
      "Added tests and structured logs so failures were easier to reproduce.",
    ],
    stack: ["NestJS", "MongoDB", "JWT", "Jest", "Pino", "TypeScript"],
    focuses: ["backend"],
    architectureSlug: "package-tracking",
  },
  {
    slug: "automated-cicd-pipeline",
    title: "Automated CI/CD Pipeline",
    period: "May 2023 – June 2023",
    role: "DevOps",
    summary:
      "A deployment pipeline that builds, ships, and releases an application through Jenkins onto AWS.",
    problem:
      "Manual releases were slow and easy to misconfigure. The environment needed a repeatable path from build to a running host, with SSH access kept explicit.",
    built: [
      "CI/CD jobs in Jenkins, with Docker images and Kubernetes manifests.",
      "Ansible for configuration and Tomcat as the application runtime.",
      "AWS EC2 as the deployment target, with SSH configuration for access.",
    ],
    contribution: [
      "Automated the path from build to deployment instead of repeating it by hand.",
      "Separated image build, cluster config, and host access so each step could be checked.",
    ],
    stack: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Tomcat", "AWS EC2"],
    focuses: ["devops"],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

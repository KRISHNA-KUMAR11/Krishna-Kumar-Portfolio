export type ArchitectureDoc = {
  slug: string
  title: string
  summary: string
  projectSlug: string
  steps: { title: string; detail: string }[]
  stores: { title: string; detail: string }[]
  layers: { title: string; items: string[] }[]
  flows: { title: string; steps: string[] }[]
  notes: string[]
  structures?: { title: string; code: string }[]
}

export const architectures: ArchitectureDoc[] = [
  {
    slug: "interview-platform",
    title: "Interview Management Platform — system design",
    summary:
      "A React client talks to a NestJS API over HTTPS. Live interviews add a Socket.IO channel for WebRTC signalling. Media stays on the peer connection. MongoDB, object storage, coturn, and Mailpit sit behind the API.",
    projectSlug: "interview-management-platform",
    steps: [
      {
        title: "Browser",
        detail: "React single-page app. REST with a bearer JWT, plus Socket.IO on /live for signalling.",
      },
      {
        title: "NestJS API",
        detail:
          "Throttler, then JWT, then permission checks, then validation. Controllers call services, which call Prisma.",
      },
      {
        title: "JSON response",
        detail: "Each response uses a shared shape: success, message, and data.",
      },
    ],
    stores: [
      { title: "MongoDB", detail: "Replica set so Prisma can run nested writes." },
      { title: "S3 or uploads", detail: "Recordings and files, with a local uploads fallback." },
      { title: "coturn", detail: "TURN relay when a direct peer connection cannot be made." },
      { title: "Mailpit", detail: "Local inbox for schedule, update, and cancel mail." },
    ],
    layers: [
      {
        title: "Backend modules",
        items: [
          "auth",
          "dashboard",
          "interviews",
          "live-interview",
          "technical-interview",
          "candidates",
          "question-bank",
          "reports",
          "settings",
          "users",
        ],
      },
      {
        title: "Shared backend",
        items: ["Guards, decorators, filters, and helpers", "Prisma client module"],
      },
      {
        title: "Frontend",
        items: [
          "App routes and guards",
          "Feature pages and hooks per domain",
          "Shared UI kit, app shell, and theme",
          "One HTTP client in services/api.ts",
          "Environment file for API and socket URLs",
        ],
      },
    ],
    flows: [
      {
        title: "Schedule",
        steps: [
          "HR creates an interview with a type, time, interviewer, and questions when the session is technical or combined.",
          "The interviews module stores the parent record and delegates the session to the live or technical module.",
          "The candidate receives email.",
        ],
      },
      {
        title: "Live",
        steps: [
          "Both people open the lobby and check camera and microphone.",
          "They join the room. Socket.IO exchanges signalling. Audio and video use the peer connection.",
          "The host records. After the session, reviewers play recordings and read feedback.",
        ],
      },
      {
        title: "Technical",
        steps: [
          "The candidate opens an invite link and starts a timed exam.",
          "Answers, face recording, and integrity events are stored.",
          "On submit, an interviewer grades the attempt.",
        ],
      },
      {
        title: "Operations",
        steps: [
          "Reports summarize activity and export CSV.",
          "Admins manage staff, custom roles, and the company profile.",
        ],
      },
    ],
    notes: [
      "Passwords are stored with bcrypt. Clients hold a short-lived access token and a refresh token.",
      "Rate limiting, JWT checks, and permission guards run on the API.",
      "Records are company-scoped. A super admin can work across companies.",
      "Invite links use guest access tokens and stop working after the interview is completed or cancelled.",
      "The server does not carry the audio or video stream. It relays signalling and TURN configuration only.",
    ],
    structures: [
      {
        title: "Backend",
        code: `backend/src/
├── main.ts, app.module.ts
├── modules/
│   ├── auth/
│   ├── dashboard/
│   ├── interviews/
│   ├── live-interview/
│   ├── technical-interview/
│   ├── candidates/
│   ├── question-bank/
│   ├── reports/
│   ├── settings/
│   └── users/
├── common/
└── prisma/`,
      },
      {
        title: "Frontend",
        code: `frontend/src/
├── App.tsx
├── features/
├── shared/
├── services/api.ts
├── environments/
├── helpers/
├── constants/
└── types/`,
      },
    ],
  },
  {
    slug: "package-tracking",
    title: "Package Tracking System — system design",
    summary:
      "A versioned NestJS API sits in front of MongoDB. JWT and a rate limit run before business logic. Bulk import uses the same auth path as single-record writes. Jest covers the service behavior and Pino records what failed.",
    projectSlug: "package-tracking-system",
    steps: [
      {
        title: "Client",
        detail: "Calls a versioned REST route with a bearer token.",
      },
      {
        title: "NestJS API",
        detail: "Rate limit, JWT check, validation, then the package or recipient service.",
      },
      {
        title: "MongoDB",
        detail: "Package and recipient documents, including rows created by bulk import.",
      },
    ],
    stores: [
      { title: "MongoDB", detail: "System of record for packages and recipients." },
      { title: "Logs", detail: "Pino structured logs for debugging failed requests." },
    ],
    layers: [
      {
        title: "Request path",
        items: [
          "Versioned controllers so older clients can stay on a known contract",
          "JWT guard on management routes",
          "Rate limit in front of write and import endpoints",
          "Services for single-record CRUD and bulk import",
        ],
      },
      {
        title: "Confidence",
        items: ["Jest unit tests around the API behavior", "Pino logs for production debugging"],
      },
    ],
    flows: [
      {
        title: "Single record",
        steps: [
          "The client sends a create, read, update, or delete call.",
          "The guard rejects a missing or invalid token.",
          "The service writes or reads MongoDB and returns the record.",
        ],
      },
      {
        title: "Bulk import",
        steps: [
          "The client submits a batch of package or recipient rows.",
          "The same authentication and rate limit apply.",
          "Valid rows are stored. Failures are logged with enough context to retry.",
        ],
      },
    ],
    notes: [
      "Versioning is part of the route, not an optional header hidden in one controller.",
      "Rate limiting is there to protect import and write endpoints from bursts.",
      "Tests and logs were added with the API, not after the first production incident.",
    ],
  },
]

export function getArchitecture(slug: string): ArchitectureDoc | undefined {
  return architectures.find((doc) => doc.slug === slug)
}

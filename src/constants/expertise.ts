export const expertise = [
  {
    title: "API design and access control",
    body: "I treat authentication as part of the route, not a screen that sits in front of an open API. Access and refresh tokens, bcrypt password storage, and permission checks decide both what the interface shows and what the handler will do. On the interview platform, data is company-scoped, a super admin can cross companies, and a rate limit runs before validation.",
  },
  {
    title: "Realtime signalling and media",
    body: "Live interviews need a room, not a custom media server in the request path. Socket.IO carries signalling. WebRTC carries audio and video between peers. coturn is the relay when a direct connection fails. Recordings upload for review. The API never becomes the video path.",
  },
  {
    title: "Data modeling",
    body: "Prisma models sit one concern at a time: users, roles, candidates, questions, and interviews. The interviews module creates the parent interview, then hands the session to the live or technical module. That split keeps scheduling rules from getting mixed into exam timing or call state.",
  },
  {
    title: "Testing and logging",
    body: "On the package tracking APIs I added Jest coverage and Pino logs so a failed import can be traced. I use Postman to check the contract while the API is running. The technical interview flow records integrity events and a face recording so a graded attempt has more than the final answers.",
  },
  {
    title: "Delivery",
    body: "Local interview-platform dependencies run in Docker Compose: a MongoDB replica set, coturn, S3-compatible storage, and Mailpit. Earlier I automated a release path with Jenkins, Docker, Kubernetes, Ansible, Tomcat, and AWS EC2, including explicit SSH access to the host.",
  },
] as const

export const activity = [
  {
    period: "November 2024 – Present",
    title: "Full-Stack Engineer, ExcelHire",
    detail:
      "Promoted in November 2024. Angular and React screens, NestJS APIs, MongoDB. Most of the work is auth, permissions, and whatever feature is in the current sprint, including a couple of AI-backed ones.",
  },
  {
    period: "April 2025 – June 2025",
    title: "Interview Management Platform",
    detail:
      "My project, not a client ticket. Schedule a live interview, a timed test, or both. The call is WebRTC with Socket.IO only for signalling. The test stores answers, a face recording, and integrity events, then an interviewer grades it.",
  },
  {
    period: "October 2024 – February 2025",
    title: "Package tracking APIs",
    detail:
      "NestJS services for packages and recipients. Normal CRUD, plus a bulk import. JWT on the routes, a rate limit, and /v1 so the contract could change later. Jest and Pino were added with the API, not after.",
  },
  {
    period: "June 2024 – November 2024",
    title: "Associate Software Engineer, ExcelHire",
    detail:
      "First job. I was on JavaScript, TypeScript, Node.js, and MongoDB: small API changes, database updates, and a lot of Postman. We used GitHub.",
  },
  {
    period: "May 2023 – June 2023",
    title: "CI/CD pipeline",
    detail:
      "A short DevOps project. Jenkins built the app, Docker and Kubernetes ran it, Ansible configured the box, and the deploy went to EC2 over SSH. Tomcat served it.",
  },
] as const

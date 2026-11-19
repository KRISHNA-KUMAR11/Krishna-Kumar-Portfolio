export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ")
}

export const container = "mx-auto w-full max-w-6xl px-5"

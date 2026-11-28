export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ")
}

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8"

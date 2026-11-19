import { useEffect } from "react"

type DocumentMeta = {
  page?: string
  description?: string
}

export function useDocumentTitle({ page, description }: DocumentMeta = {}): void {
  useEffect(() => {
    document.title = page
      ? `${page} · Krishna Kumar Tummala`
      : "Krishna Kumar Tummala · Full Stack Engineer"
    if (!description) return
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", description)
  }, [page, description])
}

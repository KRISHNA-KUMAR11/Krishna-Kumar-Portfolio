import { Link } from "react-router-dom"
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle"
import { container } from "../../helpers/cx"

export function NotFoundPage() {
  useDocumentTitle({ page: "Page not found" })

  return (
    <div className="py-20">
      <div className={container}>
        <h1 className="font-serif text-4xl text-ink">Page not found</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">That page is not on this site.</p>
        <Link to="/" className="mt-6 inline-flex text-sm text-ink underline decoration-line underline-offset-4">
          Back to the portfolio
        </Link>
      </div>
    </div>
  )
}

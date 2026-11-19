import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "../navbar/Navbar"
import { SkipLink } from "../navbar/SkipLink"

export function RootLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    document.getElementById(id)?.scrollIntoView()
  }, [pathname, hash])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

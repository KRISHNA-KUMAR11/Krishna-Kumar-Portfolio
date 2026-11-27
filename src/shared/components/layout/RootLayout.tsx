import { motion, useReducedMotion } from "framer-motion"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "../navbar/Navbar"
import { SkipLink } from "../navbar/SkipLink"

export function RootLayout() {
  const { pathname, hash } = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo(0, 0)
        return
      }
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      const top = window.scrollY + target.getBoundingClientRect().top - 72
      window.scrollTo(0, Math.max(0, top))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="content" tabIndex={-1} className="outline-none">
        {reduce ? (
          <Outlet />
        ) : (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  )
}

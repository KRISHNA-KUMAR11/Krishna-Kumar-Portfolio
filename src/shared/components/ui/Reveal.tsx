import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  )
}

const tags = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
}

export function Stagger({
  as = "div",
  children,
  className,
}: {
  as?: "div" | "ul" | "ol"
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Comp = tags[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
      }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  as = "div",
  children,
  className,
}: {
  as?: "div" | "li"
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Comp = tags[as]
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      }}
    >
      {children}
    </Comp>
  )
}

'use client'

import { useEffect, useRef } from 'react'

interface AnimateEntryProps {
  children: React.ReactNode
  className?: string
  delay?: string
}

export default function AnimateEntry({
  children,
  className = '',
  delay = '',
}: AnimateEntryProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('opacity-100', 'translate-y-0')
            el.classList.remove('opacity-0', 'translate-y-4')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animate-entry opacity-0 translate-y-4 transition-all duration-700 ${delay} ${className}`}
    >
      {children}
    </div>
  )
}

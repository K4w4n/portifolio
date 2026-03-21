'use client'

import { useEffect, useRef, useCallback } from 'react'

interface ToastProps {
  message: string
  visible: boolean
  success?: boolean
  onHide: () => void
}

export default function Toast({
  message,
  visible,
  success = true,
  onHide,
}: ToastProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    onHide()
  }, [onHide])

  useEffect(() => {
    if (visible) {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        hide()
      }, 2000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [visible, hide])

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 font-titulo font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg pointer-events-none transition-opacity duration-300 ${
        success ? 'bg-mel text-colmeia' : 'bg-red-500 text-white'
      } ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {message}
    </div>
  )
}

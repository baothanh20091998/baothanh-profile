import { useRouter } from 'next/router'
import React from 'react'

export default function ButtonHeader({ href, children, onPress }) {
  const router = useRouter()
  const isActive = router.asPath === href
  const onNavigate = () => {
    router.push(href)
    onPress()
  }
  return (
    <button
      className={"cursor-pointer text-sm md:rounded px-2 py-3 w-full md:w-28 hover:text-white hover:bg-gradient-to-r transition-all bg-dark-secondary " + (isActive ? "text-white bg-gradient-to-r" : "text-secondary ")}
      onClick={onNavigate}
    >
      {children}
    </button>
  )
}

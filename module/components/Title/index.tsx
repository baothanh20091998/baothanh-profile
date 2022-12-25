import React from 'react'
import { Roboto_Slab } from "@next/font/google"

const roboto = Roboto_Slab({ weight: '700' })

export default function Title({ title }) {
  return (
    <p className={"inline-block text-5xl relative after:hidden md:after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full text-white after:w-48 after:bg-gradient-to-r after:h-[0.125rem] after:ml-8 after:rounded-full mb-12 " + roboto.className}>{title}</p>
  )
}

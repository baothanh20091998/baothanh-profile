import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Template({ children, id = '' }) {
  return (
    <section id={id}>
      <div className="bg-mainBg py-12 rounded-2xl w-full px-4 sm:px-5 md:px-10 lg:px-20">
        <Fade>
          {children}
        </Fade>
      </div>
    </section>
  )
}

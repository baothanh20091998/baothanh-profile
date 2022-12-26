import { PROJECTS_APP, PROJECTS_WEB } from 'config'
import { Title, WrapperPage } from 'module/components'
import React from 'react'

export default function ProjectsPage() {
  const renderProj = ({ t, link = "", desc, tech }) => {
    const getTech = () => {
      let txt = ''
      tech.forEach((t) => txt += `${t}, `)
      return txt
    }

    return (
      <div className="border border-dark-secondary p-4 flex flex-col justify-between">
        <div className="mb-4">
          {link ? (
            <a href={link} target="_blank">
              <span className="text-white text-xl font-medium hover:text-error cursor-pointer">{t}</span>
            </a>
          ) : (
            <span className="text-white text-xl font-medium">{t}</span>
          )}
          <p className="text-secondary text-base">{desc}</p>
        </div>
        <div className="h-32 lg:h-28">
          <p className="text-white font-medium">Technical: </p>
          <span className="text-white md:text-base">{getTech()} etc.</span>
        </div>
      </div>
    )
  }

  return (
    <WrapperPage id="projects">
      <Title title="Projects" />
      <p className="text-secondary font-medium text-2xl my-4">Websites</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_WEB.map(renderProj)}
      </div>
      <p className="text-secondary font-medium text-2xl my-4">App</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_APP.map(renderProj)}
      </div>
    </WrapperPage >
  )
}

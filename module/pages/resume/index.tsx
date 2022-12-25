import { RESUME_TAG, SKILLS } from 'config'
import { Title, WrapperPage } from 'module/components'
import React from 'react'

export default function ResumePage() {
  const renderItem = ({ time, title, desc, location }) => {
    return (
      <div key={"resume_" + title} className="p-4 w-full text-white border border-dark-secondary rounded-lg mb-4">
        <p className="text-dark">{time}</p>
        <div className="mb-2">
          <span className="text-lg font-medium">{title}</span>
          <p className="text-xs text-dark font-light">in {location}</p>
        </div>
        <p className="text-white">{desc}</p>
      </div>
    )
  }

  const renderSection = ({ icon, title, items }) => {
    return (
      <div className="mb-8">
        <div className="flex gap-x-4 items-end mb-2">
          {icon}
          <p className="text-white font-medium text-2xl">{title}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(renderItem)}
        </div>
      </div>
    )
  }

  const renderSkill = ({ t, icon }) => {
    return (
      <div className="mx-auto flex flex-col justify-evenly items-center w-32 h-32 md:w-40 md:h-40 border border-dark-secondary rounded-lg">
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all hover:scale-125">
          {icon}
        </div>
        <p className="capitalize text-white text-xs md:text-base">{t}</p>
      </div>
    )
  }

  return (
    <WrapperPage id="resume">
      <Title title="Resume" />
      {RESUME_TAG.map(renderSection)}
      <p className="text-white font-medium text-2xl mb-4">Working Skills</p>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {SKILLS.map(renderSkill)}
      </div>
      <p className="text-white font-medium text-2xl my-4">Language</p>
      <div className="flex flex-wrap text-white gap-8">
        <p className="p-4 bg-dark-secondary rounded-lg">Vietnamese</p>
        <p className="p-4 bg-dark-secondary rounded-lg">English</p>
      </div>
    </WrapperPage>
  )
}

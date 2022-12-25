import { PERSONAL_DO, PERSONAL_INFO } from 'config'
import { Title, WrapperPage } from 'module/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function AboutPage() {
  const router = useRouter()

  const renderDo = ({ icon, title, desc }) => {
    return (
      <div key={title} className="border-2 border-dark-secondary rounded-lg flex gap-x-4 p-4 text-white">
        {icon}
        <div>
          <p className="font-bold text-xl capitalize mb-4">{title}</p>
          <p className="text-dark text-base">{desc}</p>
        </div>
      </div>
    )
  }

  const renderInfo = ({ icon, title, desc, color }) => {
    const isLink = title === 'phone' || title === 'email'
    const onPress = () => {
      if (!isLink) return
      let option = ''
      if (title === 'phone') option = 'tel:+84921758718'
      if (title === 'email') option = 'mailto:hlb.thanh20091998@gmail.com'
      router.push(option)
    }

    return (
      <div key={title} className="flex gap-x-2 items-center">
        <span className={`w-12 h-12 rounded-lg bg-dark-secondary flex justify-center items-center ${color} text-xl`}>
          {icon}
        </span>
        <div className="flex flex-col justify-evenly h-full">
          <p className="capitalize text-xs text-dark">{title}</p>
          <p onClick={onPress} className={"text-base " + (isLink ? "hover:text-error transition-all cursor-pointer" : "")}>{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <WrapperPage id="about">
      <Title title="About me" />
      <div className="lg:flex justify-between gap-x-8">
        <div className="w-full lg:w-1/3 h-[400px] relative">
          <Image
            src="/images/myself.jpg"
            quality={100}
            alt=""
            fill
            className="object-contain lg:object-cover rounded-lg"
          />
        </div>
        <div className="my-8 lg:my-0 flex-1 text-white">
          <p className="mb-4 font-medium text-3xl">Who am i?</p>
          <div className="text-base leading-7 text-dark flex flex-col gap-y-2">
            <p>I'm Front End Developer using React adept in all stages of advanced web development and advanced mobile app development for 1 year of experience. Experienced with manage task based on Scrum.</p>
            <p>Knowledgeable in user interface, user experience, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Knowledge most of technologies, including React JS, React Native, NextJS, Typescript, SCSS, Antd, Tailwind,...</p>
            <p>Eager to join a new team of people, and assist them as a dedicated and passionate Developer.</p>
          </div>
          <p className="my-4 font-medium text-3xl">Personal Info</p>
          <div className="grid xl:grid-cols-2 gap-y-4">
            {PERSONAL_INFO.map(renderInfo)}
          </div>
        </div>
      </div>
      <p className="text-4xl font-medium text-white my-8">What I do!</p>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {PERSONAL_DO.map(renderDo)}
      </div>
    </WrapperPage>
  )
}
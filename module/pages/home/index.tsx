import { Button } from 'module/components'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { DownloadOutlined } from "@ant-design/icons"

const SOCIAL_MENU = [
  {
    link: "https://www.linkedin.com/in/hoang-le-bao-thanh/",
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>,
    color: "text-fb"
  },
  {
    link: "https://www.facebook.com/Hlb.Thanh98/",
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>,
    color: "text-in",
  },
]

export default function HomePage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Fade direction='up'>
        <div>
          <div className="relative h-[250px] w-[250px] overflow-hidden">
            <Image
              quality={100}
              src="/images/avatar.jpg"
              alt="avatar"
              className="object-cover rounded-full absolute object-[47%_50%]"
              fill
            ></Image>
          </div>
          <p className="font-semibold text-2xl text-white text-center my-4">
            Hoàng Lê Bảo Thành
          </p>
          <p className="text-secondary text-base text-center mb-4">
            Front End Developer
          </p>
          <div className="flex justify-center gap-x-4">
            {
              SOCIAL_MENU.map(({ icon, link, color }) => (
                <a href={link} key={link} target="_blank" rel="noopener noreferrer">
                  <span className={`w-12 h-12 cursor-pointer bg-dark-secondary rounded-lg hover:bg-gradient-to-r hover:text-white transition-all flex justify-center items-center ${color}`}>
                    {icon}
                  </span>
                </a>
              ))
            }
          </div>
          <div className="w-48 my-4 mx-auto">
            <Button type="bordered" onPress={() => { }}>
              <a className="hover:text-inherit" href="/Hoang_Le_Bao_Thanh_-_Front_end_Developer.pdf" download target="_blank">
                <div className="flex justify-evenly items-center">
                  <DownloadOutlined />
                  <span className="">Download CV</span>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

import { Title, WrapperPage } from 'module/components'
import { useRouter } from 'next/router'
import React from 'react'

export default function ContactPage() {
  const router = useRouter()

  const onContact = (option) => router.push(option)

  return (
    <WrapperPage id="contact">
      <Title title="Contact" />
      <div className="lg:grid grid-cols-3 gap-x-8">
        <div className="col-span-1">
          <div className="bg-dark-secondary p-4 px-4 rounded-lg mb-4">
            <p className="text-white font-bold text-xl">Phone:</p>
            <p onClick={() => onContact("tel:0921758718")} className="text-secondary cursor-pointer hover:text-error transition-all">+84 921 758 718</p>
          </div>
          <div className="bg-dark-secondary p-4 px-4 rounded-lg mb-4">
            <p className="text-white font-bold text-xl">Email:</p>
            <p onClick={() => onContact("mailto:hlb.thanh20091998@gmail.com")} className="text-secondary cursor-pointer hover:text-error transition-all">hlb.thanh20091998@gmail.com</p>
          </div>
          <div className="bg-dark-secondary p-4 px-4 rounded-lg mb-4">
            <p className="text-white font-bold text-xl">Social:</p>
            <ul className="list-disc ml-3">
              <li>
                <a href="https://www.linkedin.com/in/hoang-le-bao-thanh/" target="_blank"
                  className="text-secondary text-base cursor-pointer hover:text-error transition-all">Linkedin</a>
              </li>
              <li>
                <a href="https://www.facebook.com/Hlb.Thanh98/" target="_blank"
                  className="text-secondary text-base cursor-pointer hover:text-error transition-all">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="bg-dark-secondary p-4 px-4 rounded-lg mb-4">
            <p className="text-white font-bold text-xl">Address:</p>
            <p className="text-secondary">219 Lo D Nguyen Thien Thuat Aparment Ward 1, District 3, Ho Chi Minh City</p>
          </div>
        </div>
        <div className="col-span-2 border p-4 border-dark-secondary rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.562462252057!2d106.6758537154279!3d10.768164762289148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1f8d4cba91%3A0x3589bb43ad3ceae3!2zTMO0IEQgLSBjaHVuZyBjxrAgTmd1eeG7hW4gVGhp4buHbiBUaHXhuq10LCBQaMaw4budbmcgMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671956755718!5m2!1svi!2s" className="w-full h-72 lg:h-full" loading="lazy" ></iframe>
        </div>
      </div>
    </WrapperPage>
  )
}

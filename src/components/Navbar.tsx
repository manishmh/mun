'use client'

import { useState, useEffect } from 'react';
import logo from '../../public/logo2.png'
import Image from "next/image";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className={`w-screen transition duration-300 ease-in-out fixed z-50 ${navbar ? 'top-0 bg-red-500 text-black' : 'top-10'} left-0 right-0`}>
      <div className={`flex mx-auto py-4 max-w-7xl justify-between items-center `}>
        <div><Image src={logo} alt="MUN LOGO" className='w-[90px] h-[90px]' /></div>
        <ul className="flex gap-28"><li>About</li>
          <li>Event</li>
          <li>Speaker</li>
          <li><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            REGISTER NOW
          </button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
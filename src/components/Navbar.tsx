'use client'

import { useState, useEffect } from 'react';
import logo from '../../public/logo2.png'
import Image from "next/image";
import Link from 'next/link';

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
    <div className={`w-screen transition duration-300 ease-in-out fixed z-50 ${navbar ? 'top-0 backdrop-blur-md' : ''} left-0 right-0`}>
      <div className={`flex mx-auto ${navbar ? 'py-2' : 'py-4'} max-w-7xl justify-between items-center`}>
        <div><Link href='/'><Image src={logo} alt="MUN LOGO" className={`${navbar ? 'w-[60px] h-[60px]' : 'w-[90px] h-[90px]'}`} /></Link></div>
        <ul className="flex gap-28">
          <Link href="about">About</Link>
          <Link href='/'>Event</Link>
          <Link href='/'>Speaker</Link>
          <Link href='/'><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            REGISTER NOW
          </button></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
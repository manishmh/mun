'use client'

import { useState, useEffect } from 'react';
import logo from '../../public/logo.png'
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [mobile, setMobile] = useState(false)

  const changeBackground = () => {
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
    <div className={`w-screen transition duration-300 mr-12 ease-in-out fixed z-50 ${navbar ? 'top-0 bg-navBg/80 backdrop-blur-xl ' : ''} ${mobile ? 'top-0 bg-navBg/80 backdrop-blur-xl ' : ''} left-0 right-0`}>
      <div className={`flex mx-auto pr-8 px-8 2xl:px-0 ${navbar ? 'py-2' : 'py-4'} max-w-7xl justify-between items-center`}>
        <div>
          <Link href='/'>
            <Image src={logo} alt="MUN LOGO" className={`${navbar ? 'w-[50px] h-[50px] lg:h-[70px] lg:w-[70px]' : 'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'}`} />
          </Link>
        </div>
        <ul className="hidden md:flex gap-12 lg:gap-28">
          <Link href="about">About</Link>
          <Link href='mun'>MUN</Link>
          <Link href='mun'>Executive</Link>
          <Link href="https://docs.google.com/forms/d/1ZIM3mNaIVwyHTLFowapa-rsMMErX1kpwCTRqvSzHiMA/edit?ts=64b81355" target="_blank"><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            RECRUITMENT LIVE
          </button></Link>
        </ul>
        <div className='md:hidden' onClick={() => setMobile(!mobile)}>{mobile ? <Image src='/navbar/closenav.png' width={30} height={30} alt="close-nav" /> : <Image src="/navbar/opennav.png" width={30} height={30} alt="open--nav" />}</div>
      </div>
      {mobile && <ul className="flex  pt-6 pb-12 gap-8 items-center flex-col md:hidden ">
        <Link href="about">About</Link>
        <Link href='mun'>MUN</Link>
        <Link href='mun'>Executive</Link>
        <Link href='/'><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
          REGISTER NOW
        </button></Link>
      </ul>}
    </div>
  )
}

export default Navbar

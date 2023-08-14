import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegCalendarAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
// import HeroMobileView from "./HeroMobileView";

const Hero = () => {
  return (
    <>
    <div className="font-sans w-screen bg-HeroBackground overflow-x-hidden z-[-10] h-[120vh] md:h-auto my-custom-text">
      <Image
        src="/hero/GroupTop.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority
        className="hidden md:block absolute h-[20vh] w-screen max-w-full md:h-auto"
      ></Image>
      <Image
        src="/hero/mobileVector.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority
        className="absolute -top-10 md:hidden w-screen max-w-full md:h-auto"
      ></Image>
      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-around relative md:items-center h-full">

            <Image
              src="/hero/HeroImage.png"
              alt=""
              width={1000}
              height={720}
              quality={100}
              className="h-[50vh] w-[100%] mx-auto sm:w-[75%] md:w-[55%] sm:h-[500px] md:h-[510px] lg:h-[700px] flex-shrink-0 max-w-[700px]"
            ></Image>
            <div className="hidden md:block absolute max-w-[1440px] left-0 bottom-0 -translate-y-[5vh] md:-translate-y-[70px] translate-x-[30px] md:translate-x-[70px] z-10 text-white">
              <h1 className="text-lg lg:text-xl font-semibold leading-6">
              Ideas Collide
                <br />
                Minds Converge
                <br />
                Change Takes Shape
              </h1>
{/*               <Link href= 'mun'> */}
              <Link href="#footer">
                <button className="text-base lg:text-lg mt-3 lg:mt-5 rounded-full border-none bg-buttonBackground px-3 lg:px-5 py-3 md:py-1 outline-none font-bold">
                  CONTACT US
                </button>
              </Link>
            </div> 
          <div className="flex-col  w-full md:text-justify hidden md:block -translate-y-[400px] md:translate-y-8 lg:translate-y-0 md:-translate-x-[40px] justify-center gap-3 text-white">
            <h1 className="my-custom-text text-2xl md:text-[17px] md:leading-6 lg:text-2xl xl:text-[25px] font-bold">
            The Ultimate Platform for
              <br />
              Global Engagement, Diplomacy, and
              <br />
              Empowering tomorrow&apos;s Leaders
            </h1>
            <p className="max-w-[900px] text-sm w-[80%] mt-4 md:w-[100%] lg:w-[80%] my-custom-text leading-5"
             style={{ 
              wordWrap: 'break-word',
              whiteSpace: 'pre-line',
              textAlign: 'justify', 
            }}  
            >
            With its engaging debates, diverse perspectives, and collaborative spirit, KIITMUN serves as a catalyst for honing critical thinking, diplomacy, and problem-solving skills. This extraordinary platform brings together aspiring diplomats, future leaders, and change-makers from around the world, providing them with an unparalleled opportunity to explore pressing global issues, engage in meaningful dialogue, and collectively work towards innovative solutions.
            </p>
            <div className="flex gap-2 justify-center md:justify-normal mt-2 my-custom-text">
              See more about us
              <Link href="/about" className="flex items-center">
                <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1440px] md:-translate-y-[80px] lg:translate-y-0 mt-[70px] mx-auto  md:px-[5vw] xl:px-[100px] pt-8 text-3xl text-white first-letter">
        <div className="flex flex-col md:flex-row -translate-y-[60px] md:-translate-y-8 lg:-translate-y-0 items-center justify-between w-full lg:pr-[150px] md:pr-[100px] sm:pr-[50px] xl:pr-[200px] absolute top-0 md:top-10">
          <div className="w-[90%] md:w-[50%]">
            <h1 className="text-[43px] md:text-3xl font-bold text-center">EXECUTIVE BOARD: </h1>
            <p className="text-sm leading-5 mt-4 break-words whitespace-pre-line text-justify">
            The Executive Board of an MUN is comprised of individuals who have been selected after an extensive process of judging their merit and skills, verifying their experience, calculating the dynamics of the entire board with the requirements of the secretariat, only because they are going to be entrusted with one of the biggest tasks in making an MUN Conference successful – to guide their respective councils through debate on the agenda and throughout the debate, to judge the delegates who put in a tremendous effort to rise above the rest in all aspects of being a Delegate.
            </p>
            <div className="md:hidden flex gap-2 mt-2 text-lg font-bold justify-center md:justify-normal">
              See more about us
              <Link href="/about" className="flex items-center">
                <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Link>
            </div>
            <div className="flex justify-center md:justify-center">
              <Link href="https://forms.gle/SW8YpWVvCaLrXRvC8" className="z-30" target="blank">
                <button className="mt-12  md:mt-5 rounded-full border-none bg-buttonBackground px-10 py-1.5 text-base outline-none text-xl">
                  EB Registration LIVE !!
                </button>
              </Link>
            </div>
          </div>
          <div className="flex text-[40px] z-30 mt-6 md:mt-4">
            <Link href="/">
            {/* target="_blank" */}
              <TfiWorld className="border-r-none h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4 bg-buttonBackground" />
            </Link>
            <Link href="#events">
              <FaRegCalendarAlt className="h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4" />
            </Link>
            <Link href="mun">
              <FaImage className="h-20 w-20 border-2 border-r-0 border-[#AF693B] px-4 py-4" />
            </Link>
            <Link href="mun">
              <MdSecurity className="h-20 w-20 border-2 border-[#AF693B] px-4 py-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-h-[500px] absolute md:static bottom-[-20vh] w-screen object-cover overflow-y-hidden">
        <Image
          src="/hero/GroupBottom.png"
          alt=""
          width={1920}
          height={1080}
          quality={100}
          className="w-screen h-full"
        ></Image>
    </div>
      </div>
    </>
  )
};

export default Hero ;

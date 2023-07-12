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
    <div className="font-sans w-screen h[150vh] bg-HeroBackground overflow-x-hidden z-[-10] hidden sm:block">
      <Image
        src="/hero/GroupTop.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        priority
        className="absolute h-[20vh] w-screen max-w-full md:h-auto"
      ></Image>
      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex justify-around relative md:items-center h-full">
            <Image
              src="/hero/HeroImage.png"
              alt=""
              width={1000}
              height={720}
              quality={100}
              className="h-[550px] w-[55%] sm:h-[500px] md:h-[550px] lg:h-[700px] flex-shrink-0 max-w-[700px]"
              // className="w-[50%] h-full"
            ></Image>
            <div className="absolute max-w-[1440px] left-0 bottom-0 -translate-y-[5vh] md:-translate-y-[70px] translate-x-[30px] md:translate-x-[70px] z-20 text-white">
              <h1 className="text-lg lg:text-xl font-semibold leading-6">
              Ideas Collide
                <br />
                Minds Converge
                <br />
                Change Takes Shape
              </h1>
              <Link href="/formrec">
                <button className="text-base lg:text-lg mt-3 lg:mt-5 rounded-full border-none bg-buttonBackground px-3 lg:px-5 py-3 outline-none font-bold">
                  JOIN US NOW!
                </button>
              </Link>
            </div> 
          <div className="flex flex-col -translate-x-[40px] lg:-translate-x-0 justify-center gap-3 text-white">
            <h1 className="sm:text-2xl  lg:text-3xl font-bold">
            The Ultimate Platform for
              <br />
              Global Engagement, Diplomacy, and
              <br />
              Empowering tomorrow&apos;s Leaders
            </h1>
            <p className="max-w-[900px] text-xs w-[100%] md:w-[80%]">
            With its engaging debates, diverse perspectives, and collaborative spirit, KIITMUN serves as a catalyst for honing critical thinking, diplomacy, and problem-solving skills. This extraordinary platform brings together aspiring diplomats, future leaders, and change-makers from around the world, providing them with an unparalleled opportunity to explore pressing global issues, engage in meaningful dialogue, and collectively work towards innovative solutions.
            </p>
            <div className="flex gap-2">
              See more about us
              <Link href="/about" className="flex items-center">
                <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-[-30%] left-0 h-[35%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-3xl"></div>
        <div className="absolute bottom-[-30%] left-0 h-[35%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-3xl"></div>
        <div className="absolute bottom-[-30%] left-0 h-[35%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-3xl"></div>
        <div className="absolute bottom-[-30%] left-0 h-[35%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-3xl"></div> */}
      </div>
      <div className="relative max-w-[1440px] mt-[70px] mx-auto  px-[5vw] xl:px-[100px] pt-8 text-3xl text-white first-letter">

        <div className="flex items-center justify-between w-full max-w-[] lg:pr-[150px] md:pr-[100px] sm:pr-[50px] xl:pr-[200px] absolute top-10">
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold">WHO WE ARE: </h1>
            <p className="text-xs mt-4">
            KIIT International Model United Nations emerges as a leading global United Nations simulation, spearheaded by the Secretariat, the committed student body of the Kalinga Institute of Industrial Technology. Since its inception in 2013, this conference has consistently surpassed expectations, establishing unprecedented benchmarks year after year. By fostering intellectual growth, nurturing youth leadership, and promoting global understanding, it stands as an exemplary platform for empowerment and enlightenment.
            </p>
            <Link href="#footer" className="z-50">
              <button className=" mt-5 rounded-full border-none bg-buttonBackground px-4 py-1 text-base outline-none">
                CONTACT US
              </button>
            </Link>
          </div>
          <div className="flex text-[40px] z-40">
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
      <div className="max-h-[500px] w-screen object-cover overflow-y-hidden">
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

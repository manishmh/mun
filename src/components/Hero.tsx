'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaImage, FaRegCalendarAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const Hero: React.FC = () => {
  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Image
        src="/hero/GroupTop.png"
        alt=""
        width={1920}
        height={1080}
        quality={100}
        onContextMenu={handleContextMenu}
        priority
        className="absolute z-50 h-[20vh] w-screen max-w-full md:h-auto"
      ></Image>
      <div className="font-sans h-[160vh] w-screen overflow-hidden bg-HeroBackground pt-12">
        <div className="relative z-0 w-screen pl-[20px] md:pl-[117px]">
          <div className="absolute bottom-0 left-0  h-[35%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-3xl"></div>
          {/* <div className="absolute bottom-[-30%] left-0 h-[35%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-3xl"></div> */}

          {/* <div className="absolute bottom-0 left-0 z-10 h-[50%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-xl"></div>
          <div className="absolute bottom-[-20px] left-0 z-10 h-[25%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-lg"></div>
          <div className="absolute bottom-[-20px] left-0 z-10 h-[20%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-xl"></div>
          <div className="absolute bottom-[-20px] left-0 z-10 h-[15%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-xl"></div>
          <div className="absolute bottom-[-10px] left-0 z-10 h-[10%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-lg"></div>
          <div className="absolute bottom-[-30%] left-0 z-10 h-[30%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-lg"></div>
          <div className="absolute bottom-[-30%] left-0 z-10 h-[30%] w-screen bg-gradient-to-b from-[#1F3B68] to-transparent blur-lg"></div>
          <div className="absolute bottom-[-55%] left-0 z-10 h-[50%] w-screen bg-gradient-to-t from-[#021739] to-transparent blur-3xl"></div> */}
          <div className="mg-[50px] flex justify-around lg:gap-[70px]">
            <div className="flex-shrink-0">
              <Image
                src="/hero/HeroImagee.png"
                alt=""
                width={500}
                height={720}
                quality={100}
                className="z-[-10] h-[94vh] w-[30vw] md:w-[35vw]"
              ></Image>
              <div className="absolute bottom-[7%] left-[100px] z-20 text-white">
                <h1 className="text-xl font-semibold leading-6">
                  Get inside in The
                  <br />
                  Philosopher's Mind
                </h1>
                <button className="mt-5 rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
                  REGISTER NOW
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 text-white">
              <h1 className="text-3xl font-bold">
                The Ultimate Platform for
                <br />
                Planning and Promoting
                <br />
                Successfull Events
              </h1>
              <p className="w-[70%] text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <div className="flex gap-2">
                See more about us
                <Link href="/" className="flex items-center">
                  <span className="inline-block rounded-full bg-white px-1 py-1 text-xs text-black">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="z-30 flex items-center justify-between px-[100px] pt-8 text-3xl text-white first-letter">
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold">WHO WE ARE</h1>
            <p className="text-xs mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className=" mt-5 rounded-full border-none bg-buttonBackground px-4 py-1 text-base outline-none">
              CONTACT US
            </button>
          </div>
          <div className="flex text-[40px]">
            <TfiWorld className="border-r-none h-20 w-20 border-2 border-r-0 border-[#445DB6] px-4 py-4 bg-buttonBackground" />
            <FaRegCalendarAlt className="h-20 w-20 border-2 border-r-0 border-[#445DB6] px-4 py-4" />
            <FaImage className="h-20 w-20 border-2 border-r-0 border-[#445DB6] px-4 py-4" />
            <MdSecurity className="h-20 w-20 border-2 border-[#445DB6] px-4 py-4" />
          </div>
        </div>
        <div className="absolute bottom-[-60%] z-50 w-screen max-w-full">
          <Image
            src="/hero/GroupBottom.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
            onContextMenu={handleContextMenu}
            className="z-1 h-[55vh]"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;

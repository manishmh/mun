'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Event: React.FC = () => {
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
          <div className="absolute bottom-0 left-0  h-[35%] w-screen bg-gradient-to-t from-[#1F3B68] to-transparent blur-3xl">
          </div>
        </div>
        <div className="z-30 flex items-center justify-evenly px-[100px] pt-8 text-3xl text-white first-letter">
            <div>
              <div className="relative left-36 top-5">
                <Image
                  src="/event/Component 1.png"
                  alt=""
                  width={200}
                  height={200}></Image>
              </div>
              <div className="relative left-36 top-48">
                <Image
                  src="/event/Component 2.png"
                  alt=""
                  width={200}
                  height={200}></Image>
              </div>
              <div className="relative left-36 top-96">
                <Image
                  src="/event/Component 3.png"
                  alt=""
                  width={200}
                  height={200}></Image>
              </div>
            </div>
            <div>
              <div className="relative left-40 top-5">
                <h2>KEYNOTE ADDRESS</h2>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, enim?</p>
                <button className="primary"></button>
              </div>
              <div className="relative left-40 top-48">
              <h2>KEYNOTE ADDRESS</h2>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, enim?</p>
                <button className="primary"></button>
              </div>
              <div className="relative left-40 top-96">
              <h2>KEYNOTE ADDRESS</h2>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, enim?</p>
                <button className="primary"></button>
              </div>
            </div>
          <div className="relative top-40"> 
            <Image
              src="/event/business-executives-participating-business-meeting 1.png"
              alt=""
              width={550}
              height={380}>
            </Image>
          </div>
        </div>
        
  </div>
    <div className="absolute bottom-[-320%] z-50 w-screen max-w-full">
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
    </>
  );
};

export default Event;
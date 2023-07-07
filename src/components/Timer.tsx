'use client'

// import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import "./timer.css";
import CountdownTimer from "./CountdownTimer";
import { TiLocation, TiCalendarOutline } from "react-icons/ti";

const Timer: React.FC = () => {

  const targetDate = new Date("2023-09-10T23:59:59");

  return (
    <>
      <div className="font-sans h-[90vh] w-screen overflow-hidden bg-[#E2DDF4] pt-12">
        <h1 className="pb-5 flex items-center justify-center text-3xl font-bold text-transparent mx-auto max-w-5xl bg-clip-text bg-gradient-to-r from-[#061124] via-[#143A81] to-[#061125]">
          JOIN US FOR OUR UPCOMING EVENT!
        </h1>
        <h1 className="pb-5 flex items-center justify-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">The Future of Technology Conference</h1>
        <div className="p-10 flex items-center justify-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="mx-5 px-10 flex justify-center text-[#7691C0] text-2xl">
        &nbsp;&nbsp;<span>DAYS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>HOURS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>MINUTES</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>SECONDS</span>
        </div>
        <div className="px-10 pt-12 flex justify-evenly text-[#143A81] text-2xl mt-4">
          <span>
            <TiCalendarOutline className="inline-block align-middle" />
            <span className="align-middle">July 11-12-13, 2023</span>
          </span>
          <span>
            <TiLocation className="inline-block align-middle" />
            <span className="align-middle">KIIT Bhubaneswar</span>
          </span>
        </div>

        <div className="z-100 flex items-center justify-evenly">
          <button className="z-100 mt-5 rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            VIEW DETAILS
          </button>
          <button className="z-2 mt-5 rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-[-157%] z-0 w-screen max-w-full">
        <Image
          src="/event/Group.png"
          alt=""
          width={1920}
          height={1080}
          quality={100}
          onContextMenu={handleContextMenu}
          className="z-1 h-[40vh]"
        />
      </div> */}
    </>
  );
};

export default Timer;
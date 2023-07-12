'use client'

// import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import "./timer.css";
import CountdownTimer from "./CountdownTimer";
import { TiLocation, TiCalendarOutline } from "react-icons/ti";

const Timer: React.FC = () => {

  const targetDate = new Date("2023-10-07T06:00:00");

  return (
    <>
      <div className="font-sans w-screen py-28 overflow-hidden bg-carouselBackground pt-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="py-8 text-3xl text-center font-bold text-transparent mx-auto max-w-5xl bg-clip-text bg-gradient-to-r from-[#061124] via-[#143A81] to-[#061125]">
          Join us for the 11th Edition of KIIT International MUN!
          </h1>
          <h1 className="pb-5 py-8 text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">Countdown to UNLEASH DIPLOMACY.</h1>
          <div className="p-10 flex items-center justify-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#445DB6] to-[#7860C5]">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="mx-5 px-10 flex justify-center text-[#7691C0] text-2xl">
            &nbsp;&nbsp;<span>DAYS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>HOURS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>MINUTES</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>SECONDS</span>
          </div>``
          <div className="px-10 pt-12 flex justify-evenly text-[#143A81] text-2xl mt-4">
            <span>
              <TiCalendarOutline className="inline-block align-middle" />
              <span className="align-middle">October 7-8-9, 2023</span>
            </span>
            <span>
              <TiLocation className="inline-block align-middle" />
              <span className="align-middle">KIIT Bhubaneswar</span>
            </span>
          </div>
          <div className="flex mt-5 items-center justify-evenly">
            <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
              VIEW DETAILS
            </button>
            <button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
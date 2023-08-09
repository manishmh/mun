'use client'

import CommitteesCard from "@/components/CommitteesCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

type activelevelProps = {
  beginner: boolean
  intermediate: boolean
  advanced: boolean
}

const Committees = () => {
  const [activeLevel, setActiveLevel] = useState<activelevelProps>({
    beginner: true,
    intermediate: false,
    advanced: false,
  })
  const hanldeActiveLevel = (level: keyof activelevelProps) => {
    const newActiveLevel = {
      beginner: false,
      intermediate: false,
      advanced: false,
    }

    newActiveLevel[level] = true
    setActiveLevel(newActiveLevel)
  }
  return (
    <main className="bg-EventBackground">
      <Navbar />
      <div className="font-sans">
        <div className="lg:h-screen lg:w-screen max-w-full object-cover relative">
          <Image
            src="https://s3-alpha-sig.figma.com/img/6d2c/4729/150ce6586be9f6e02b4061edc72df258?Expires=1691971200&Signature=blc3a-7TVvS1T17SalzB-afgswwhCnX3Ppmz8keC8yMcH~bRISvzls7GcWB~W5GaafBk4SHhUnapDuCm52Fd6MdD7x43B0dTwfUoWip-8FgqFSr37pjIfPVXiJCagNSC4fq70g2Sa5rWtZFjz1RkZX4Ne5a6g0VRD0oQwACN5afSzUbRJYEgvaF2TzYs1oxZ6u72rFyg564hPVnihJQhBon6qDp~SzTXypuvIW58JmZ85capc5dKASetJChNi2m1zC3tqeEForlybvwnbZ7ntAZU807d7Q8YJSNMW0lB~E~Awl04VPla72RbEjhBWiewjxUSfOzWl3u6D7RIOQV5HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
            alt="commiittees hero image"
            width={1920}
            height={1080}
            quality={100}
            className="h-full w-full"
          ></Image>
            <div className="absolute z-10 inset-0 bg-blackBlur bg-blend-multiply mix-blend-multiply"></div>
            <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[9.5vw] 2xl:text-[150px]">
              Committees
            </h1>
        </div>
          <div className="h-[7px] bg-committeeLine"></div>
          <div className="w-full py-16">
            <div className="flex justify-center">
              <div className="text-black text-xs ssm:text-sm sm:text-base font-medium flex gap-0 md:gap-10 bg-[#D7E1E3] rounded-full">
                <div 
                  className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.beginner ? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                    onClick={() => hanldeActiveLevel('beginner')} 
                  >BEGINNER
                </div>
                <div 
                  className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.intermediate? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                    onClick={() => hanldeActiveLevel('intermediate')} 
                  >INTERMEDIATE
                </div>
                <div 
                  className={`py-2 px-2 ssm:px-4  sm:px-6 md:px-8 rounded-full cursor-pointer ${activeLevel.advanced? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
                  `}
                    onClick={() => hanldeActiveLevel('advanced')} 
                  >ADVANCED
                </div>
              </div>
            </div>
            {activeLevel.beginner && (
              <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
                <CommitteesCard 
                  imgAlt="card 1" 
                />
                <CommitteesCard 
                  imgAlt="card 2" 
                />
                <CommitteesCard 
                  imgAlt="card 3" 
                />
                <CommitteesCard 
                  imgAlt="card 4" 
                />
              </div>
            )}
            {activeLevel.intermediate && (
              <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
                <CommitteesCard 
                  imgAlt="card 1" 
                />
                <CommitteesCard 
                  imgAlt="card 2" 
                />
                <CommitteesCard 
                  imgAlt="card 3" 
                />
                <CommitteesCard 
                  imgAlt="card 4" 
                />
              </div>
            )}
            {activeLevel.advanced && (
              <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
                <CommitteesCard 
                  imgAlt="card 1" 
                />
                <CommitteesCard 
                  imgAlt="card 2" 
                />
                <CommitteesCard 
                  imgAlt="card 3" 
                />
                <CommitteesCard 
                  imgAlt="card 4" 
                />
              </div>
            )}
          </div>
      </div>
      <Footer />
    </main>
  )
};

export default Committees;

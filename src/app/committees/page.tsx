'use client'

import CommitteesCard from "@/components/CommitteesCard";
import Link from "next/link";
import { FaArrowRight, FaImage, FaRegCalendarAlt } from "react-icons/fa";
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
                  imgSource= "https://s3-alpha-sig.figma.com/img/7074/a43c/ba323351fb01e2a8b994ce2319621a96?Expires=1691971200&Signature=Ppd3M277kLWWJ57AaCoAF-cuaEldM1tKflvc87f69TpeVCGU-Yh9NTaFhrT97TFnSjMON64axkYE3fM8dW3SRtoq~iiHZ2m1bVZ81agsYYl3MRpoR57vg9R5d4ED~jDQFyIT-oH5rjKNzWVgNFeZZeH~oXyQ8~aWI3-oGVARBn-c0Z1c3sKuuHzN246Wkqys8rl0XRkgfvUTx7cux2GJb4f9HivKMveNGYCFKRP67qFoiBuC0dpWbL4AJXHO-DP73yPxSISz~qE5mUb75oL14A7TVn4XL3JZM8TIFp1wpc104cPlv6v1r07DcgVYia~IkUssm-NjlatgJdyQZ5~Oag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  h1= 'DISEC'
                  h2= 'Disarmament & International'
                  h2span = 'Security Committee'
                  single = "Single Delegate"
                  double = "EB: T.B.A."
                />
                <CommitteesCard 
                  imgAlt="card 2" 
                  imgSource= "/committees/UNHRC@4x.png"
                  h1= 'UNHRC'
                  h2= 'United Nations Human'
                  h2span = 'Rights Council'
                  single = "Double Delegate"
                  double = "EB: T.B.A."
                />
                <CommitteesCard 
                  imgAlt="card 3"
                  imgSource= "/committees/ECOSOC@4x.png"
                  h1= 'ECOSOC'
                  h2= 'United Nations Economic and'
                  h2span = 'Social Council'
                  single = "Double Delegate"
                  double = "EB: T.B.A."
                />
                <CommitteesCard 
                  imgAlt="card 4"
                  imgSource= "/committees/WHA@4x.png"
                  h1= 'WHA'
                  h2= 'World Health Assembly'
                  single = "Double Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 5"
                  imgSource= "/committees/IP@4x.png"
                  h1= 'IP'
                  h2= 'International Press'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
              </div>
            )}
            {activeLevel.intermediate && (
              <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
                <CommitteesCard 
                  imgAlt="card 1"
                  imgSource= "/committees/UNCSW@4x.png"
                  h1= 'UNCSW'
                  h2= 'United Nations Commission on the '
                  h2span = 'Status of Women'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 2"
                  imgSource= "/committees/UNFCCC@4x.png"
                  h1= 'COP-28 UNFCCC'
                  h2= ' "Conference of the Parties" of United Nations Framework Convention on Climate Change'
                  single = "Double Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 3"
                  imgSource= "/committees/WB@4x.png"
                  h1= 'WB'
                  h2= 'World Bank'
                  single = "Double Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 4"
                  imgSource= "/committees/UNESCO@4x.png"
                  h1= 'UNESCO'
                  h2= 'United Nations Educational, Scientific and Cultural Organization'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 5"
                  imgSource= "/committees/UNCND@4x.png"
                  h1= 'UNCND'
                  h2= 'United Nations Commission on Narcotic Drugs'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 6"
                  imgSource= "/committees/GA6@4x.png"
                  h1= 'GA6 LEGAL'
                  h2= 'United Nations General Assembly Sixth Committee'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
                <CommitteesCard 
                  imgAlt="card 7"
                  imgSource= "/committees/UNOOSA@4x.png"
                  h1= 'UNOOSA'
                  h2= 'United Nations Office for Outer Space Affairs'
                  single = "Single Delegate"
                  double = "EB: T.B.A." 
                />
              </div>
            )}
            {activeLevel.advanced && (
              <div className="flex gap-5 mt-[70px] flex-wrap justify-center">
                <CommitteesCard 
                  imgAlt="card 1" 
                  imgSource= "/committees/UNSC@4x.png"
                  h1= 'UNSC'
                  h2= 'United Nations Security Council'
                  single = "Single Delegate"
                  double = "EB: T.B.A."
                />
                <CommitteesCard 
                  imgAlt="card 2" 
                  imgSource= "/committees/NATO@4x.png"
                  h1= 'NATO'
                  h2= 'North Atlantic Treaty Organization'
                  single = "Single Delegate"
                  double = "EB: T.B.A."
                />
                <CommitteesCard 
                  imgAlt="card 3" 
                  imgSource= "/committees/ADHOC@4x.png"
                  h1= 'AD HOC'
                  h2= 'Ad Hoc Committee'
                  single = "Single Delegate"
                  double = "EB: T.B.A."
                />
              </div>
            )}

            <div className="flex justify-center md:justify-center">
            <p className="text-sm leading-5 mt-4 break-words whitespace-pre-line text-justify">
              For any Queries or Upgradation Requests, kindly <b>Fill out the Form</b>&emsp;
            </p> 
              <Link href="https://forms.gle/vRZPrNXAaa4Yq7GbA" className="z-30" target="blank">
                <button className="mt-12  md: mt-3 rounded-full border-none bg-buttonBackground px-2 py-1 text-base outline-none text-l">
                  Form for Change
                </button>
              </Link>
            </div>
            
          </div>
      </div>
      <Footer />
    </main>
  )
};

export default Committees;

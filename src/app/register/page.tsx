'use client'

import React, { useState } from "react";

import Image from "next/image";
import Delegate from "@/components/Delegate";
import Committee from "@/components/Committee";
import Navbar from "@/components/Navbar";

const SubmitButtom = () => {
    return (
        <div className="flex justify-center">
            <button className="px-8 md:px-12 py-1 font-bold text-lg border-none outline-none bg-buttonBackground rounded-full">SUBMIT</button>
        </div>
    )
}

type delegateNumProps = {
    name: string,
}

const DelegateNum = ({ name  }: delegateNumProps ) => {
    return(
        <div className="flex items-center px-10 my-10">
            <span className="w-full h-[2px] bg-white"></span>
            <h1 className="text-xl md:text-2xl lg:text-3xl flex-shrink-0 px-4">{ name }</h1>
            <span className="w-full h-[2px] bg-white"></span>
        </div>
    )
}

type headingProps = {
    delegateStatus: boolean;
    handleDelegateStatus: () => void;
}

const Heading = ({ delegateStatus, handleDelegateStatus }: headingProps) => {
    return (
        <div className={`${delegateStatus ? "mb-10": "mb-0"}`}>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">REGISTERATION FORM</h1>
            <div className="flex justify-center mt-2">
                <div className="flex gap-4 bg-white px-4 py-1 relative font-medium rounded-full text-sm">
                    <div 
                        className={`absolute w-1/2 h-full px-1 py-1 transition-transform duration-200 rounded-full bg-buttonBackground inset-0 justify-center items-center flex
                        ${!delegateStatus ? "translate-x-[100%]" : ""} 
                        `}>
                        {!delegateStatus ? "DOUBLE DELEGATE" : "SINGLE DELEGATE"}
                    </div>
                    <div className="cursor-pointer text-black" onClick={handleDelegateStatus} >
                        SIGNLE DELEGATE
                    </div>
                    <div 
                    className="cursor-pointer text-black"
                    onClick={handleDelegateStatus}
                    >
                        DOUBLE DELEGATE
                    </div>
                </div>
            </div>
        </div>
    )
}

const Register = () => {
    const [singleDelegate, setSingleDelegate] = useState(true)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    const handleSingleDelegate = () => {
        setSingleDelegate((prevStatus) => !prevStatus);
    };

   
  return (
    <>
    <Navbar />
    <div className="bg-RegisterationBG w-screen relative pt-[100px] md:pt-[120px] pb-[50px] md:pb-[100px]">
        <Image 
        src="/hero/GroupTop.png" 
        alt="registeration top vector"
        width={1920}
        height={1080}
        className="absolute top-0 w-screen"
        ></Image>
        <div className="w-[95vw] py-4 rounded-xl shadow-2xl mx-auto md:py-[4%] lg:pb-8 xl:px-8 max-w-[1440px]">
            <Heading delegateStatus={singleDelegate} handleDelegateStatus={handleSingleDelegate}/>         
            <form onSubmit={handleSubmit}>
                {singleDelegate ? (
                    <>
                        <Delegate name="single" single={true}/>
                        <Committee />
                    </>
                ) : (
                    <>
                        <DelegateNum name="Delegate 1" />
                        <Delegate name="double_first_delegate" single={false}/>
                        <DelegateNum name="Delegate 2" />
                        <Delegate name="double_second_delegate" single={false}/>
                        <DelegateNum name="Committee Details" />
                        <Committee />
                    </>
                )
                }
                <SubmitButtom />
            </form>
        </div>
    </div>
    </>
  )
};

export default Register ;

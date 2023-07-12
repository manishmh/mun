"use client"

import { useState, useEffect } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const GALLERY = [
    {
        url: "/about/hero.png"
    },
    {
        url: "/about/hero2.png"
    },
    {
        url: "/about/hero3.png"
    },
    {
        url: "/about/hero4.png"
    },
]


const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY.length);
    }, 5000); // Set the desired interval time (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
    <Navbar />
    <div className="w-screen bg-HeroBackground max-w-full">
        <div className="mx-auto w-full">
            <div className="relative w-full h-screen 4xl:h-[80vh] 4xl:max-h-[900px] overflow-hidden max-w-[1920px] mx-auto ">
                {/* top gradient*/}
                <div className="absolute top-[-5%] w-full h-[70%] opacity-70 bg-gradient-to-b z-10 from-[#0e213f] to-transparent blur-3xl"></div>

                <div className="absolute w-full bottom-[-10%] overflow-hidden h-[40%] z-20">
                    <Image 
                        src="/hero/GroupBottom.png" 
                        alt="About Hero img"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="w-full h-full"
                        loading="lazy"
                    ></Image>
                </div>
                {/* bottom gradient*/}
                <div className="absolute bottom-[-10%] w-full h-[80%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>
                <div className="absolute bottom-[-10%] w-full h-[40%] bg-gradient-to-t z-10 from-[#001212] to-transparent blur-xl "></div>

                {/* right gradient*/}
                <div className="absolute right-0 -top-2 w-[5%] h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-2xl "></div>
                <div className="absolute right-0 w-[5%] -top-2 h-full bg-gradient-to-l z-10 from-[#001212] to-transparent blur-3xl"></div>

                {/* left gradient*/}
                <div className="absolute -left-2 -top-2 w-[5%] h-[111%] bg-gradient-to-r z-10 from-[#001212] to-transparent blur-lg "></div>

                {GALLERY.map((image, index) => (
                    <Image 
                        key={index}
                        src={image.url}
                        alt={image.url}
                        width={1920}
                        height={1080}
                        quality={100}
                        className={`animate-fade-in absolute inset-0 z-5 translatey-[30px] opacity-1 ease-out w-full rounded-lg object-cover transform
                            ${currentIndex === 2 ? "animate-from-bottom":""}
                            ${index === currentIndex ? "block" : "hidden"}
                        `}
                    ></Image>
                ))}
                <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-bold text-[10vw] 2xl:text-[150px]">About Us</h1>
            </div>
            <div className="bg-[#D7E1E3] w-full">
                <h1 className="bg-textBG text-transparent bg-clip-text text-2xl lg:text-3xl pt-[120px] text-center font-bold 3xl:text-[2vw] 4xl:text-3xl">PREVIOUS EDITION</h1>
                <p className="text-[#051418] max-w-[1920px] w-[90%] lg:w-[80%] mx-auto lg:text-lg mt-4 pb-12 3xl:text-[1.3vw] 3xl:leading-[2vw] 4xl:text-xl " 
                    style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify', 
                    }}
                >
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
                </p>
            </div>
            <div className="bg-HeroBackground w-full relative">
                <Image
                    src="/hero/GroupTop.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full top-0"
                ></Image>
                {/* <Image
                    src="/hero/GroupBottom.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full bottom-0"
                ></Image> */}
                <div className="flex flex-col md:flex-row w-[95%] lg:w-[80%] mx-auto pt-12 gap-12 md:gap-12 max-w-[1920px] lg:gap-16 pb-[70px] 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                    <div>
                        <h1 className="text-center text-2xl font-bold">ABOUT KIIT</h1> 
                        <div className="flex justify-center">
                            <Image
                                src="/about/kiitLogo.png" 
                                alt="KIIT logo"
                                width={300}
                                height={300}
                                className="w-[100px] h-[75px] mt-8 mb-4"
                            ></Image>
                        </div>
                        <p 
                            style={{ 
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                textAlign: 'justify', 
                            }}
                        >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
                        </p>
                    </div> 
                    <div>
                        <h1 className="text-center text-2xl font-bold">ABOUT KISS</h1> 
                        <div className="flex justify-center">
                            <Image
                                src="/about/kissLogo.png" 
                                alt="KIIT logo"
                                width={300}
                                height={300}
                                className="w-[93px] h-[85px] mt-6 mb-3.5"
                            ></Image>
                        </div>
                        <p 
                        style={{
                            wordWrap: 'break-word',
                            whiteSpace: 'pre-line',
                            textAlign: 'justify', 
                        }}
                        >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
                        </p>
                    </div> 
                </div>
            </div>
            <div className="w-full bg-[#D7E1E3] ">
                <h1 className="bg-textBG text-transparent bg-clip-text text-2xl lg:text-3xl pt-[50px] text-center font-bold">ABOUT FOUNDER</h1>
                <div className="flex justify-center">
                    <div className="bg-gradient-to-b relative w-[150px] h-[150px] from-[#001212] to-[#1A4D54] p-1 rounded-full mt-2">
                        <span className="bg-white absolute w-[140px] h-[140px] top-1/2 flex justify-center items-center -translate-x-1/2 left-1/2 -translate-y-1/2 rounded-full">
                            <Image
                                src="/about/founder.png" 
                                alt="KIIT logo"
                                width={300}
                                height={300}
                                className="w-[130px] h-[130px] p-2 rounded-full"
                            ></Image>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-[95%] mt-4 md:mt-0 md:flex-row lg:w-[80%] max-w-[1920px] mx-auto gap-2 md:gap-8 lg:gap-12 pb-[70px] text-[#020B10] 3xl:text-[1.3vw] 3xl:leading-[2vw] 4xl:text-xl" 
                    style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify', 
                    }} 
                >
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC.
                    </p>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC.
                    </p>
                </div>
            </div>
            <div className="bg-HeroBackground w-full relative">
                <Image
                    src="/hero/GroupTop.png" 
                    alt="KIIT logo"
                    width={1920}
                    height={1080}
                    className="absolute w-full top-0"
                ></Image>
                <div className="w-full h-[250px] overflow-hidden absolute bottom-0">
                    <Image
                        src="/hero/GroupBottom.png" 
                        alt="KIIT logo"
                        width={1920}
                        height={1080}
                        className="h-full w-full"
                    ></Image>
                </div>
                <div className="w-[95%] lg:w-[80%] mx-auto max-w-[1920px] pb-12"
                    style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify', 
                    }} 
                >
                    <h1 className="text-2xl lg:text-3xl pt-[50px] text-center font-bold">ABOUT ART OF GIVING</h1>
                    <p className="mt-8 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham 
                    </p>
                    <h1 className="text-2xl lg:text-3xl pt-[50px] text-center font-bold">ABOUT INCREDIBLE INDIA</h1>
                    <p className="mt-8 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  )
};

export default About;

import React from 'react';
import logo from '../../../public/logo.png'
import Image from "next/image";


import Link from 'next/link';

const commingsoon = () => {
  return (
    <div className="bg-[url('/Error/green_bg.png')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href='/'><Image src={logo} alt="MUN LOGO" className={  'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'} /></Link>
              <Image src="/comingsoon.png" width={400} height={400} alt="Image" className="mt-8" />

              <p></p>
        
        <Link href='/'><button className="rounded-full border-none bg-buttonBackground mt-12 px-8 py-3 outline-none font-bold">
          RETURN TO HOMEPAGE
        </button></Link>
      </div>
    </div>
  );
};

export default commingsoon;

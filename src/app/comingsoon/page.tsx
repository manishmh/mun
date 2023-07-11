import React from 'react';
import logo from '../../../public/logo.png'
import Image from "next/image";


import Link from 'next/link';

const commingsoon = () => {
  return (
    <div className="bg-[url('/Error/green_bg.png')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href='/'><Image src={logo} alt="MUN LOGO" className={  'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'} /></Link>
              <img src="/Error/plugs_1.png" alt="Image" className="mt-8" />
        <Link href='/'><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
          REGISTER NOW
        </button></Link>
      </div>
    </div>
  );
};

export default commingsoon;

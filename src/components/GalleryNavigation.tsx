import { activelevelProps } from "@/app/gallery/page";
import React from "react";

type galleryNavigationProps = {
    activeLevel: activelevelProps;
    handleActiveLevel: (level: keyof activelevelProps) => void
}

const GalleryNavigation = ({ activeLevel, handleActiveLevel}: galleryNavigationProps) => {
  return (
    <div className="text-black text-sm sm:text-base font-medium flex flex-wrap gap-0 md:gap-10 bg-galleryNav rounded-lg w-full mx-auto mb-6 py-4 justify-around">
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.starNight? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('starNight')} 
          >STARTNIGHT
        </div>
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.delegation? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('delegation')} 
          >DELEGATION
        </div>
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.committee? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('committee')} 
          >COMMITTEE
        </div>
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.topFive? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('topFive')} 
          >TOP 5
        </div>
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.winning? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('winning')} 
          >WINNNING
        </div>
        <div 
          className={`py-1 w-full text-center sm:w-auto m-2 lg:m-0 px-4 sm:px-6 md:px-8 rounded-lg cursor-pointer ${activeLevel.inaugration? "bg-buttonBackground text-white" : "bg-[#D7E1E3]"}
          `}
            onClick={() => handleActiveLevel('inaugration')} 
          >INAUGRAITON
        </div>
      </div>
  )
};

export default GalleryNavigation;
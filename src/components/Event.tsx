import React from "react";
import Image from "next/image";
import EventDetail from "./EventDetail";

const Event = () => {
  return (
    <div className="lg:h-screen py-8 lg:py-0 bg-HeroBackground max-h-[800px] ">
      <Image 
        src="/hero/GroupTop.png" 
        alt="" 
        width={1920} 
        height={1080}
        className="w-screen absolute"
      >
      </Image>
      <div className="w-screen max-w-[1440px] flex justify-center items-center h-full mx-auto px-4 xl:px-0">
        <div className="flex flex-row justify-center sm:gap-[30px] xl:gap-[50px]">
          <div className="flex flex-col gap-10 justify-center max-w-[700px]">
            <EventDetail 
              day={14} 
              year="JULY, 2023" 
              title="KEYNOTE ADDRESS" 
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
            />
            <EventDetail 
              day={14} 
              year="JULY, 2023" 
              title="KEYNOTE ADDRESS" 
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
            />
            <EventDetail 
              day={14} 
              year="JULY, 2023" 
              title="KEYNOTE ADDRESS" 
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
            />
          </div>
          <div className="">
            <Image 
              src="/event/EventMeeting.png" 
              alt="" 
              width={1920} 
              height={1080}
              className="h-full w-full min-w-[300px] sm:max-h-[500px] lg:max-h-[600px] xl:max-h-auto"
            >
            </Image>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Event;

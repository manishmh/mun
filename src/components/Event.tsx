import React from "react";
import Image from "next/image";
import EventDetail from "./EventDetail";

const Event = () => {
  return (
    <div id = "events" className="lg:h-screen py-8 lg:py-0 bg-HeroBackground md:max-h-[800px] my-custom-text">
      <Image 
        src="/hero/GroupTop.png" 
        alt="" 
        width={1920} 
        height={1080}
        className="w-screen absolute"
      >
      </Image>
      <div className="w-screen max-w-[1440px] flex justify-center items-center h-full mx-auto px-4 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row justify-center sm:gap-[30px] xl:gap-[50px] ">
          <div className="flex flex-col gap-8 md:gap-10 justify-center max-w-[700px] mt-6 md:mt-0">
            <EventDetail 
              day="T.B.A" 
              year="Soon" 
              title="Day 1: Inception" 
              paragraph="From Delegate kit distribution to our Inauguration and Cultural Night, this day is packed with the first two thought-provoking Sessions addressing the theme."
            />
            <EventDetail 
              day="T.B.A" 
              year="Soon" 
              title="Day 2: Discourse" 
              paragraph="Immersed in three engaging sessions, delving deep into the global challenges, the second day is packed and concluded with a captivating star night, featuring a famous personality and celebration."
            />
            <EventDetail 
              day="T.B.A" 
              year="Soon" 
              title="Day 3: Epilogue" 
              paragraph="The culmination of insightful discussions in the last three sessions, followed by a profound closing ceremony and a memorable valedictory event, honoring the delegates and celebrating their accomplishments."
            />
          </div>
          <div className="flex md:block justify-center">
            <Image 
              src="/event/EventMeeting.png" 
              alt="" 
              width={1920} 
              height={1080}
              className="md:h-full md:w-full w-[60%] h-[40vh] max-w-[270px] md:min-w-[300px] lg:min-w-[350px] sm:max-h-[500px] lg:max-h-[600px] xl:max-h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Event;

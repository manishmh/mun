'use client'

type EventDetailProps = {
    day: number | string,
    year: string,
    title: string,
    paragraph: string,
}

const EventDetail = ({ day, year, title, paragraph }: EventDetailProps) => {
  return (
    <div className="flex sm:gap-4 xl:gap-8">
        <div className="rounded-full lg:w-[132px] sm:w-[100px] sm:h-[100px] md:w-[115px] md:h-[115px] flex-shrink-0 lg:h-[132px] bg-gradient-to-b from-[#B0693B] to-[#C0896A] p-[2px]">
            <div className="h-full w-full rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#093338] to-[#1A4D54]">
                <span className="sm:text-2xl md:text-3xl x1A4D54l:text-4xl font-bold bg-gradient-to-r from-[#B0693B] to-[#C0896A] text-transparent bg-clip-text">{day}</span>
                <span className="sm:text-xs lg:text-sm">{year}</span>
            </div>
        </div>
        <div>
            <h1 className="sm:text-xl lg:text-2xl font-semibold">{title}</h1>
            <p className="text-sm mt-5 ">{paragraph}</p>
            <button className="outline-none mt-3.5 border-none py-1 px-4 bg-buttonBackground rounded-full">Not yet Announced</button>
        </div>
    </div>
  )
};

export default EventDetail;

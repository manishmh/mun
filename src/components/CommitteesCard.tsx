import Image from "next/image";
import { useState } from "react";

type committeesCardProps = {
    imgAlt: string,
    imgSource?: string,
    h1?: string
    h2?: string
    h2span?: string
    single?: string
    double?: string
}

const CommitteesCard = ({ imgAlt, imgSource, h1, h2, h2span, single, double}: committeesCardProps) => {
  const [cardFlip, setCardFlip] = useState(false)
  return (
    <div className="w-[95vw] h-[45vh] max-w-[450px] md:max-w-none 4xl:max-w-[25%] 4xl:max-h-[50vh] group md:w-[45vw] md:h-[55vh] lg:h-[70vh] xl:w-[38vw] xl:h-[65vh] object-cover relative rounded-3xl overflow-hidden flex-shrink-0 mb-6 hover:scale-[102%] transition-transform duration-400"
        onClick={() => setCardFlip((prev) => !prev)} 
    >
        <div className={`w-full h-full object-cover transition-opacity duration-700 absolute inset-0 
            ${!cardFlip ? "opacity-1" : "opacity-0"}
            `}>
            {imgSource && (
                <Image 
                    src={imgSource}
                    alt={imgAlt}
                    width={500}
                    height={252}
                    quality={100}
                    className="w-full h-[65%] md:h-[75%]"
                ></Image>
            )}
            <div className="bg-white py-5 px-4 md:px-8 lg:px-16 text-black group-hover:text-white group-hover:bg-committeeCard text-center rounded-b-3xl h-[35%] md:h-[25%] flex  flex-col items-center justify-center">
                <h1 className="font-extrabold text-xl xl:text-2xl">{ h1 }</h1>
                <h2 className="text-lg xl:text-xl font-semibold">
                    { h2 }<br/>
                    { h2span }
                </h2>
            </div>
        </div>

        <div className={`absolute inset-0 w-full h-full bg-white bg-committeeCard flex items-center md:py-12 px-8 justify-center text-center rounded-3xl transition-opacity duration-700 cursor-pointer
            ${cardFlip ? "opacity-1" : "opacity-0"} 
        `}>
            <div className="gap-3 md:gap-8 flex flex-col ">
                <div>
                    <h1 className="font-extrabold text-2xl lg:text-4xl">{ h1 }</h1>
                    <h2 className="text-xl mt-4 md:text-3xl font-semibold">
                        { h2 }<br/>
                        { h2span }
                    </h2>
                </div>
                <div className="h-[1px] bg-white w-full"></div>
                <h2 className="text-xl mt-4 md:text-3xl font-semibold">
                    {single}
                </h2>
                <div className="h-[1px] bg-white w-full"></div>
                <h2 className="text-xl md:mt-4 md:text-3xl font-semibold">
                    { double }
                </h2>
            </div>
        </div>
    </div>
  )
};

export default CommitteesCard;

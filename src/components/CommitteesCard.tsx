import Image from "next/image";
import { useState } from "react";

type committeesCardProps = {
    imgAlt: string,
}

const CommitteesCard = ({ imgAlt }: committeesCardProps) => {
  const [cardFlip, setCardFlip] = useState(false)
  return (
    <div className="w-[95vw] h-[45vh] max-w-[450px] md:max-w-none 4xl:max-w-[25%] 4xl:max-h-[50vh] group md:w-[45vw] md:h-[55vh] lg:h-[70vh] xl:w-[38vw] xl:h-[65vh] object-cover relative rounded-3xl overflow-hidden flex-shrink-0 mb-6 hover:scale-[102%] transition-transform duration-400"
        onClick={() => setCardFlip((prev) => !prev)} 
    >
        <div className={`w-full h-full object-cover transition-opacity duration-700 absolute inset-0 
            ${!cardFlip ? "opacity-1" : "opacity-0"}
            `}>
            <Image 
                src="https://s3-alpha-sig.figma.com/img/7074/a43c/ba323351fb01e2a8b994ce2319621a96?Expires=1691971200&Signature=Ppd3M277kLWWJ57AaCoAF-cuaEldM1tKflvc87f69TpeVCGU-Yh9NTaFhrT97TFnSjMON64axkYE3fM8dW3SRtoq~iiHZ2m1bVZ81agsYYl3MRpoR57vg9R5d4ED~jDQFyIT-oH5rjKNzWVgNFeZZeH~oXyQ8~aWI3-oGVARBn-c0Z1c3sKuuHzN246Wkqys8rl0XRkgfvUTx7cux2GJb4f9HivKMveNGYCFKRP67qFoiBuC0dpWbL4AJXHO-DP73yPxSISz~qE5mUb75oL14A7TVn4XL3JZM8TIFp1wpc104cPlv6v1r07DcgVYia~IkUssm-NjlatgJdyQZ5~Oag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
                alt={imgAlt}
                width={500}
                height={252}
                quality={100}
                className="w-full h-[75%]"
            ></Image>
            <div className="bg-white py-5 px-4 md:px-8 lg:px-16 text-black group-hover:text-white group-hover:bg-committeeCard text-center rounded-b-3xl h-[25%] flex  flex-col items-center justify-center">
                <h1 className="font-extrabold text-xl xl:text-2xl">DISEC</h1>
                <h2 className="text-lg xl:text-xl font-semibold">
                    Disarmament & International<br/>
                    Security Committee
                </h2>
            </div>
        </div>

        <div className={`absolute inset-0 w-full h-full bg-white bg-committeeCard flex items-center md:py-12 px-8 justify-center text-center rounded-3xl transition-opacity duration-700 cursor-pointer
            ${cardFlip ? "opacity-1" : "opacity-0"} 
        `}>
            <div className="gap-8 flex flex-col ">
                <div>
                    <h1 className="font-extrabold text-2xl lg:text-4xl">DISEC</h1>
                    <h2 className="text-xl mt-4 md:text-3xl font-semibold">
                        Disarmament & International<br/>
                        Security Committee
                    </h2>
                </div>
                <div className="h-[1px] bg-white w-full"></div>
                <h2 className="text-xl mt-4 md:text-3xl font-semibold">
                    Single Delegate
                </h2>
                <div className="h-[1px] bg-white w-full"></div>
                <h2 className="text-xl mt-4 md:text-3xl font-semibold">
                    Double Delegate
                </h2>
            </div>
        </div>
    </div>
  )
};

export default CommitteesCard;

import Image from "next/image";
import Link from "next/link";
import { BiBookAlt } from "react-icons/bi"

const HeroMobileView = () => {
  return (
    <div className="sm:hidden bg-HeroBackground h-screen">
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
                <div className="flex pl-8 text-xl font-semibold items-center bg-MobileHeader w-screen h-[52px] rounded-b-lg">
                    KIIT MUN     
                </div> 
                <Image 
                    src="/hero/MobileHeroBgTop.png" 
                    alt=""
                    width={700}
                    height={500}
                    className=""
                ></Image> 
                <Image 
                    src="/logo.png" 
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[183px] h-[151px]"
                ></Image> 
                <h1 className="font-bold text-[28px]">KIIT International 2023</h1>
                <p className="font-medium">#Lorem Ipsum is simply dummy text of the</p>
                <p className="font-medium">July 14 - July 15</p>
            </div>
            <div>
                <div className="mb-[70px]">
                    <Link href="https://www.google.com" target="_blank">
                        <div className="flex items-center justify-center mx-auto gap-2 bg-MobileHeader rounded-lg w-[85vw] py-4">
                            <BiBookAlt  className="text-[25px]"/>
                            <span className="text-[25px]">Register Now</span>
                        </div>
                    </Link>
                    <Image 
                        src="/hero/MobileHeroBgBottom.png" 
                        alt=""
                        width={700}
                        height={500}
                        className="h-[20vh]"
                    ></Image>  
                </div>
                <Image 
                    src="/hero/MobileHome.png" 
                    alt=""
                    width={700}
                    height={500}
                    className="absolute bottom-0 max-h-[160px]"
                ></Image> 
            </div>
        </div>
    </div>
  )
};

export default HeroMobileView;

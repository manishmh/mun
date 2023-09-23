import Image from "next/image";

type DepartmentSecContainerProps = {
    imgSource: string,
    name: string,
    position: string,
    className?: string,
}

const DepartmentSecContainer = ({ imgSource, name, position, className }: DepartmentSecContainerProps) => {
  return (
    <>
    <div className="">
    <div className={`bg-buttonBackground mt-16 h-[150px] w-full flex justify-center object-cover ${className}`}>
        <Image
            src={imgSource}
            alt={name}
            width={142}
            height={182}
            quality={70}
            className="-translate-y-8 h-[182px] w-auto object-cover"
        ></Image>
    </div>
    <div className="mt-2">
        <h1 className="font-bold text-center">{ name }</h1>
        <h2 className="font-medium text-center text-[10px]">{ position }</h2>
    </div>
    </div>
    </>
  )
};

export default DepartmentSecContainer;

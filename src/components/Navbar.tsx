import logo from '../../public/logo2.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex my-auto left-1/2 -translate-x-1/2 max-w-[1440px] mt-[45px] justify-between top-0 absolute w-full">
      <div><Image src={logo} alt="MUN LOGO" className='w-[90px] h-[90px]'/></div>
      <ul className="flex gap-28 mr-20"><li>About</li>
        <li>Event</li>
        <li>Speaker</li>
        <li><button className="rounded-full border-none bg-buttonBackground px-4 py-1 outline-none">
          REGISTER NOW
        </button></li></ul>
    </div>
  )
}

export default Navbar
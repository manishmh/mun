import logo from '../../public/logo.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex mx-auto max-w-7xl bg-red justify-between">
      <div><Image src={logo} alt="MUN LOGO"/></div>
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
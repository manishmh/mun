'use client'

import Hero from "@/components/Hero";
import PageCarousel from "../components/PageCarousel";
import Timer from "@/components/Timer";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignUpModal from "@/components/SignUpModal";
import { useState } from "react";

export type Modal = {
  isOpenModal: boolean
  setIsOpenModal: (isOpenModal:boolean)=>void
}

export default function Home() {
	let [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className='overflow-x-hidden text-white'>
      <Navbar isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <Hero />
      <SignUpModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <Timer />
      <Event />
      <PageCarousel/>
      <Footer />
    </div>
  )
}

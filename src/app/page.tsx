'use client'

import Hero from "@/components/Hero";
import PageCarousel from "../components/PageCarousel";
import Timer from "@/components/Timer";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignUpModal from "@/components/SignUpModal";

export default function Home() {

  return (
    <div className='overflow-x-hidden text-white'>
      <Navbar />
      <Hero />
      <SignUpModal />
      <Timer />
      <Event />
      <PageCarousel />
      <Footer />
    </div>
  )
}

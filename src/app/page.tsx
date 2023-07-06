import Hero from "@/components/Hero";
import PageCarousel from "../components/PageCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <PageCarousel/>
    </div>
  )
}

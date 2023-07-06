import Hero from "@/components/Hero";
import PageCarousel from "../components/PageCarousel";
import Timer from "@/components/Timer";
import Event from "@/components/Event";


export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Timer />
      <Event />
      <PageCarousel/>
    </div>
  )
}

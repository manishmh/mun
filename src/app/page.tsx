import Hero from "@/components/Hero";
import PageCarousel from "../components/PageCarousel";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <PageCarousel/>
    </div>
  )
}

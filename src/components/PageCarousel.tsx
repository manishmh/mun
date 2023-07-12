'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const PageCarousel = () => {

	const carouselData = [{
		title: 'Kshitij Singh',
		description: "As the Secretary General of KIIT MUN 2023, I am honoured to lead the Secretariat and participate in this prestigious conference. Throughout my years of involvement with Model United Nations, I have seen the conference and the passion of the participants grow exponentially, and the collaborative effort to organize KIIT International MUN has honed my organizational skills, which will carry over into the real world. It is an honour to work alongside passionate individuals who share a common vision of creating a transformative experience for participants.",
		position: 'Secretary General',
		image: 'kshitij.png',
		id: 1
	}, {
		title: 'Satyajeet Das',
		description: "Serving as Deputy Secretary General for this year's event is a thrilling experience, and I am looking forward to seeing the transforming effects that KIIT International MUN 2023 will have on each participant. With its expansive scale and wide-ranging scope, this year's KIIT MUN holds the potential to profoundly transform the lives of all participants, offering an event of extraordinary magnitude and significance.",
		position: 'Deputy Secretary General',
		image: 'satyajeet.png',
		id: 2
	},
	{
		title: 'Ayush Kumar Srivastav',
		description: "Model United Nations has always held a special place in my heart and ever since I enrolled at KIIT, the thought of being a part of KIITMUN filled me with excitement and energy. From being a delegate to now hosting a conference, it has been an amazing journey and I sincerely hope that all participants of KIIT MUN 2023 will have as wonderful and enriching a learning experience as I have had throughout.",
		position: 'Director General',
		image: 'Ayush.png',
		id: 3
	},
	{
		title: 'Shubhadittya Roy',
		description: "KIIT International Model United Nations has always been a conference par excellence that is awaited all year long. From delegating as a fresher to serving the conference as a part of the Core Secretariat, it has been a literal embodiment of life coming to a full circle. I hope this edition of KIIT MUN beckons MUN enthusiasts from all over the globe and succeeds in adding a page to the golden book of diplomacy and dialogue.",
		position: 'Deputy Director General',
		image: 'shubh.png',
		id: 4
	},
	{
		title: 'Shivram Krishna',
		description: "KIITMUN stands tall as one of Asia's most prominent Model United Nations conferences. Since its inception in 2013, it has continually evolved and grown. This conference has been a catalyst for countless passionate and ambitious individuals, and I sincerely hope that in this edition, we can extend our reach to more young minds, ensuring a profoundly meaningful experience for all.",
		position: "Charge D' Affairs",
		image: 'shivram.png',
		id: 5
	}]

	return (
		<div className='bg-cover bg-carouselBackground'>
			<div className='h-[720px] min-[400px]:h-[620px] sm:h-[600px] md:h-[430px] lg:h-[400px] max-w-7xl mx-auto'>
				<Carousel className='h-full'>
					{carouselData.map(n => <div className='flex h-full w-full items-center justify-center' key={n.id}>
						<div className='h-full w-full md:mx-24 mx-12'>
							<h2 className='uppercase text-transparent bg-clip-text bg-gradient-to-b from-carouselTextLight to-carouselTextDark mt-6 lg:mt-12 font-bold text-xl lg:text-2xl'>
								{n.position}
							</h2>
							<div className='flex flex-col md:flex-row h-full justify-between  items-center'>
								<div className='h-full order-last md:order-none'>
									<div className='mt-4 mx-6 lg:mt-8 text-carouselText text-center md:text-left'>
										<h2 className='capitalize font-semibold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-carouselTextDark to-carouselTextLight'>
											{n.title}
										</h2>
										<p className='text-carouselTextDark text-sm lg:text-base pr-4 pt-2'>{n.description}</p>
									</div>
								</div>
								<Image src={`/carousel/${n.image}`} width={300} height={300} alt='carousel image' className={'w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] md:-mt-32'} />
							</div>
						</div>
					</div>
					)}
				</Carousel>
			</div>
		</div>
	)
}

export default PageCarousel

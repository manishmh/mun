'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const PageCarousel = () => {

	const carouselData = [{
		title: 'Kshitij Singh',
		description: 'Secretary General',
		position: 'Head Coach',
		image: 'slide1.png',
		id: 1
	}, {
		title: 'Satyajeet Das',
		description: 'Deputy Secretary General',
		position: 'Head Coach',
		image: 'slide2.png',
		id: 2
	},
	{
		title: 'Ayush Kumar Srivastav',
		description: 'Director General',
		position: 'Head Coach',
		image: 'slide2.png',
		id: 3
	},
	{
		title: 'Shubhaditya Roy',
		description: 'Deputy Director General',
		position: 'Head Coach',
		image: 'slide2.png',
		id: 4
	},
	{
		title: 'Shivram Krishna',
		description: 'Charge D Affairs',
		position: 'Head Coach',
		image: 'slide2.png',
		id: 5
	}]

	return (
		<div className='bg-cover bg-carouselBackground'>
			<div className='h-96 max-w-7xl mx-auto'><Carousel>
				{carouselData.map(n => <div className='flex h-full w-full items-center justify-center' key={n.id}>
					<div className='h-full w-full'>
						<div className='flex h-full justify-between mx-48 items-center'>
							<div className='h-full'>
								<h2 className='uppercase  text-carouselHead  mt-12 font-bold text-2xl'>
									Core Secretariat
								</h2>
								<div className='mt-16 text-carouselText'>
									<h2 className='capitalize font-semibold text-3xl'>
										{n.title}
									</h2>
									<p>{n.description}</p>
								</div>
							</div>


							<Image src={`/carousel/${n.image}`} width={350}
								height={350} alt={'carousel image'}></Image></div>
					</div>


				</div>)}

			</Carousel>
			</div>
		</div>
	)
}

export default PageCarousel
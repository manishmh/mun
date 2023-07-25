'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import type { Modal } from '@/app/page'


export default function MyModal({ isOpenModal, setIsOpenModal }: Modal) {

	function closeModal() {
		setIsOpenModal(false)
	}

	useEffect(() => {
		setTimeout(() => {
			setIsOpenModal(true)
		}, 2000)
	}, [])

	return (
		<>
			<Transition appear show={isOpenModal} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className=" text-white max-w-md md:max-w-xl lg:max-w-3xl transform overflow-hidden rounded-2xl bg-ModalBg border-4 border-white p-6  text-left align-middle relative shadow-xl transition-all">
									<AiOutlineClose className='w-6 h-6 absolute right-1 top-1 hover:cursor-pointer' onClick={closeModal} />
									<div className="mt-2">
										<Image src="/modal.png" alt="modal" height={400} width={800} className='rounded-xl' />
									</div>
									<div>
										<p className='pt-4 text-center '>The Exclusive Secretariat Recruitment for KiiT International MUN 2023 is officially LIVE!!!
											.</p>
									</div>
									<div className="mt-4 w-full mx-auto flex justify-center">
										<button className=" rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-none bg-buttonBackground outline-none">
											<Link href="https://docs.google.com/forms/d/1ZIM3mNaIVwyHTLFowapa-rsMMErX1kpwCTRqvSzHiMA/edit?ts=64b81355" target="_blank">
												SECRETARIAT RECRUITMENT LIVE
											</Link>
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
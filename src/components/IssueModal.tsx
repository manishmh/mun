'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineIssuesClose } from "react-icons/ai";
import { BsBookFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { TextAreaField, TextField } from './register/Fields'
import { VscMail } from 'react-icons/vsc'
import { Form, Formik } from "formik";
import { ticketInitial, ticketValidation } from '@/issueUtils'
import { MdSubject } from 'react-icons/md'
import backendService from '@/service'

export default function IssueModal({ isOpenModal, closeModal }) {
	const [load, setLoad] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState(false)

	function modalClose(){
		closeModal()
		setSubmitted(false)
	}

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
									<button onClick={modalClose} disabled={load} className={load ?  'cursor-not-allowed' : ''}>
										<AiOutlineClose className='w-6 h-6 absolute right-1 top-1 hover:cursor-pointer' />

									</button>
									{submitted ? <div className='w-full'>  <div className="flex flex-col justify-center items-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128" fill="none" className="w-24 h-24 md:w-32 md:h-32">
											<circle cx="64" cy="64" r="64" fill="url(#paint0_linear_496_3228)" />
											<path d="M55.3786 83.4065L38.7493 66.7772C37.7502 65.7782 37.7502 64.1583 38.7493 63.1591L42.3673 59.5411C43.3663 58.5419 44.9863 58.5419 45.9853 59.5411L57.1876 70.7433L81.1817 46.7493C82.1808 45.7502 83.8007 45.7502 84.7998 46.7493L88.4178 50.3674C89.4168 51.3664 89.4168 52.9863 88.4178 53.9854L58.9967 83.4066C57.9975 84.4057 56.3777 84.4057 55.3786 83.4065Z" fill="#10373C" />
											<defs>
												<linearGradient id="paint0_linear_496_3228" x1="64" y1="-5.5" x2="64" y2="128" gradientUnits="userSpaceOnUse">
													<stop stop-color="#F4F4F4" />
													<stop offset="0.46706" stop-color="#E3E2E2" />
													<stop offset="1" stop-color="#F5F4F4" />
												</linearGradient>
											</defs>
										</svg>
										<h1 className="text-xl text-center font-bold mt-4">Form submitted successfully!</h1>
										<h2 className="text-medium text-center">A mail containing your issue id has been sent you.</h2>
										<h2 className="text-medium text-center">Further updates pertaining this issue will be sent in mail.</h2>
										<div className="mt-10 font-medium">
											You may close this Modal.
										</div>
									</div></div> : <Formik initialValues={ticketInitial}
										validationSchema={ticketValidation}
										enableReinitialize={true}
										onSubmit={async (values) => {
											setLoad(true)
											const data = await backendService.ticketManage(values)
											if (data.error) {
												setLoad(false)
												return setError(data.error)
											}
											setLoad(false)
											setSubmitted(true)
										}
										}
									>
										<Form>
											<div className="w-full">
												<div className='text-center text-2xl mb-4 font-bold'>Feedback or Issue Form</div>
												<div className="flex flex-wrap gap-3 lg:gap-6 justify-around md:justify-center w-full mx-auto">
													<TextField
														icon={<BsFillPersonFill />}
														name="name"
														type="text"
														className="w-3/4"
														placeholder="Name" />
													<TextField
														icon={<VscMail />}
														type='email'
														placeholder="Email"
														className="w-3/4"
														name='email'
													/>
													<TextField
														icon={<BsFillTelephoneFill />}
														type="tel"
														placeholder="Contact No."
														className="w-3/4"
														name='phone'
													/>
													<TextField
														icon={<BsBookFill />}
														type="text"
														placeholder="Subject"
														className="w-3/4"
														name='subject'
													/>
													<TextAreaField
														icon={<MdSubject />}
														placeholder="Describe your feedback or issue"
														className="w-3/4 h-[75px]"
														name="description"
													/>
												</div>
											</div>

											<div className="mt-4 w-full mx-auto flex justify-center">
												<button type='submit' disabled={load} className={`rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 ${load ? 'opacity-50' : ''}  focus-visible:ring-offset-2 border-none bg-buttonBackground outline-none`}>
													Submit Ticket
												</button>
											</div>
										</Form>
									</Formik>}

								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

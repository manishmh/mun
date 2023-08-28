// 'use client'
// import React, { useState } from "react";
// import { initialValuesDoubleDelegate, initialValuesSingleDelegate } from "@/utils";
// import Image from "next/image";
// import Delegate from "@/components/register/Delegate";
// import Committee from "@/components/register/Committee";
// import Navbar from "@/components/Navbar";
// import { Form, Formik } from "formik";
// import { formValidationDoubleDelegate, formValidationSingleDelegate } from "./schema";
// import backendService from '@/service'
// import { useRouter } from "next/navigation";
// import { DelegateNum } from "@/components/register/Committee";




// type headingProps = {
//     delegateStatus: boolean;
//     handleDelegateStatus: () => void;
//     load: boolean
// }

// const Heading = ({ delegateStatus, load, handleDelegateStatus }: headingProps) => {
//     return (
//         <div className={`${delegateStatus ? "mb-10" : "mb-0"}`}>
//             <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">REGISTRATION FORM</h1>
//             <div className="flex justify-center mt-2">
//                 <div className="flex gap-4 bg-white px-4 py-1 relative font-medium rounded-full text-sm">
//                     <div
//                         className={`absolute w-1/2 h-full px-1 py-1 transition-transform duration-200 rounded-full bg-buttonBackground inset-0 justify-center items-center flex
//                         ${!delegateStatus ? "translate-x-[100%]" : ""} 
//                         `}>
//                         {!delegateStatus ? "DOUBLE DELEGATE" : "SINGLE DELEGATE"}
//                     </div>
//                     <button disabled={load} className="cursor-pointer text-black" onClick={handleDelegateStatus} >
//                         SINGLE DELEGATE
//                     </button>
//                     <button
//                         className="cursor-pointer text-black"
//                         onClick={handleDelegateStatus}
//                         disabled={load}
//                     >
//                         DOUBLE DELEGATE
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const SubmitButton = ({ load }: { load: boolean }) => {
//     return (
//         <div className="flex justify-center">  <button type="submit" disabled={load} className={`w-36 transition-all duration-300 hover:translate-y-2 py-1 font-bold text-lg border-none outline-none  ${load ? 'opacity-50' : ''} bg-buttonBackground rounded-full`}>{load ? "loading" : 'Submit'}</button></div>
//     )
// }

// const Register = () => {
//     const [singleDelegate, setSingleDelegate] = useState(true)
//     const [error, setError] = useState(null)
//     const [load, setLoad] = useState(false)
//     const handleSingleDelegate = () => {
//         setSingleDelegate(!singleDelegate);
//         setError(null)
//     };
//     const router = useRouter()

//     return (
//         <div className="overflow-x-hidden">
//             <Navbar />
//             <div className="bg-RegisterationBG w-screen relative pt-[100px] md:pt-[120px] pb-[50px] md:pb-[100px] overflow-x-hidden">
//                 <Image
//                     src="/hero/GroupTop.png"
//                     alt="registration top vector"
//                     width={1920}
//                     height={1080}
//                     className="absolute top-0 w-screen"
//                 ></Image>
//                 <div className="w-[95vw] py-4 rounded-xl shadow-2xl mx-auto md:py-[4%] lg:pb-8 xl:px-8 max-w-[1440px] overflow-x-hidden">
//                     <Heading load={load} delegateStatus={singleDelegate} handleDelegateStatus={handleSingleDelegate} />
//                     {singleDelegate ? (
//                         <Formik initialValues={initialValuesSingleDelegate}
//                             validationSchema={formValidationSingleDelegate}
//                             enableReinitialize={true}
//                             onSubmit={async (values) => {
//                                 setLoad(true)
//                                 const data = await backendService.singleDelegatePost(values)
//                                 if (data.error) {
//                                     setLoad(false)
//                                     return setError(data.error)
//                                 }
//                                 return router.push('/thankyou')
//                             }}
//                         >
//                             <Form>
//                                 <Delegate />
//                                 <DelegateNum name="Committee Details" />
//                                 <Committee delegate="single"/>
//                                 {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
//                                 <SubmitButton load={load} />
//                             </Form>
//                         </Formik>
//                     ) : (
//                         <Formik initialValues={initialValuesDoubleDelegate}
//                             validationSchema={formValidationDoubleDelegate}
//                             enableReinitialize={true}
//                             onSubmit={async (values) => {
//                                 setLoad(true)
//                                 const data = await backendService.doubleDelegatePost(values)
//                                 if (data.error) {
//                                     setLoad(false)
//                                     return setError(data.error)
//                                 }
//                                 setLoad(false)
//                                 return router.push('/thankyou')
//                             }
//                             }
//                         >
//                             <Form>
//                                 <DelegateNum name="Delegate 1" />
//                                 <Delegate delegate="s_" />
//                                 <DelegateNum name="Delegate 2" />
//                                 <Delegate delegate="d_" />
//                                 <DelegateNum name="Committee Details" />
//                                 <Committee delegate="double"/>
//                                 {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
//                                 <SubmitButton load={load} />
//                             </Form>
//                         </Formik>
//                     )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Register;
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

export default function NotFound() {
  return (
    <div className="bg-[url('/Error/green_bg.png')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center relative justify-center min-h-screen">
        <Link href='/'><Image src={logo} alt="MUN LOGO" className={'w-[60px] h-[60px] lg:h-[90px] lg:w-[90px]'} /></Link>
        <h2 className="text-3xl text-center absolute">Page Not Found</h2>
        <img src="/Error/plugs_1.png" alt="Image" className="mt-8" />
        <p className='w-84 pt-12 text-center mx-4'>We&apos;re sorry, the page you requested could not be found Please go back to the homepage</p>
        <Link href='/'><button className="rounded-full border-none bg-buttonBackground mt-12 px-8 py-3 outline-none font-bold">
          RETURN TO HOMEPAGE
        </button></Link>
      </div>
    </div>
  )
}

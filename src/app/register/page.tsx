'use client'
import React, { useState } from "react";
import { initialValuesDoubleDelegate, initialValuesSingleDelegate } from "@/utils";
import Image from "next/image";
import Delegate from "@/components/register/Delegate";
import Committee from "@/components/register/Committee";
import Navbar from "@/components/Navbar";
import { Form, Formik } from "formik";
import { formValidationDoubleDelegate, formValidationSingleDelegate } from "./schema";
import backendService from '@/service'
import { useRouter } from "next/navigation";

type delegateNumProps = {
    name: string,
}

export const DelegateNum = ({ name }: delegateNumProps) => {
    return (
        <div className="flex items-center px-10 my-10">
            <span className="w-full h-[2px] bg-white"></span>
            <h1 className="text-xl md:text-2xl lg:text-3xl flex-shrink-0 px-4">{name}</h1>
            <span className="w-full h-[2px] bg-white"></span>
        </div>
    )
}

type headingProps = {
    delegateStatus: boolean;
    handleDelegateStatus: () => void;
}

const Heading = ({ delegateStatus, handleDelegateStatus }: headingProps) => {
    return (
        <div className={`${delegateStatus ? "mb-10" : "mb-0"}`}>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">REGISTRATION FORM</h1>
            <div className="flex justify-center mt-2">
                <div className="flex gap-4 bg-white px-4 py-1 relative font-medium rounded-full text-sm">
                    <div
                        className={`absolute w-1/2 h-full px-1 py-1 transition-transform duration-200 rounded-full bg-buttonBackground inset-0 justify-center items-center flex
                        ${!delegateStatus ? "translate-x-[100%]" : ""} 
                        `}>
                        {!delegateStatus ? "DOUBLE DELEGATE" : "SINGLE DELEGATE"}
                    </div>
                    <div className="cursor-pointer text-black" onClick={handleDelegateStatus} >
                        SINGLE DELEGATE
                    </div>
                    <div
                        className="cursor-pointer text-black"
                        onClick={handleDelegateStatus}
                    >
                        DOUBLE DELEGATE
                    </div>
                </div>
            </div>
        </div>
    )
}

const SubmitButton = ({ load }: { load: boolean }) => {
    return (
        <div className="flex justify-center">  <button type="submit" disabled={load} className={`w-36 transition-all duration-300 hover:translate-y-2 py-1 font-bold text-lg border-none outline-none  ${load ? 'opacity-50' : ''} bg-buttonBackground rounded-full`}>{load ? "loading" : 'Submit'}</button></div>
    )
}

const Register = () => {
    const [singleDelegate, setSingleDelegate] = useState(true)
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)
    const handleSingleDelegate = () => {
        setSingleDelegate(!singleDelegate);
        setError(null)
    };
    const router = useRouter()

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="bg-RegisterationBG w-screen relative pt-[100px] md:pt-[120px] pb-[50px] md:pb-[100px] overflow-x-hidden">
                <Image
                    src="/hero/GroupTop.png"
                    alt="registration top vector"
                    width={1920}
                    height={1080}
                    className="absolute top-0 w-screen"
                ></Image>
                <div className="w-[95vw] py-4 rounded-xl shadow-2xl mx-auto md:py-[4%] lg:pb-8 xl:px-8 max-w-[1440px] overflow-x-hidden">
                    <Heading delegateStatus={singleDelegate} handleDelegateStatus={handleSingleDelegate} />
                    {singleDelegate ? (
                        <Formik initialValues={initialValuesSingleDelegate}
                            validationSchema={formValidationSingleDelegate}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                setLoad(true)
                                const data = await backendService.singleDelegatePost(values)
                                setLoad(false)
                                if (data.error) {
                                    console.log(data)
                                    return setError(data.error)
                                }
                                return router.push('/thankyou')
                            }}
                        >
                            <Form>
                                <Delegate />
                                <DelegateNum name="Committee Details" />
                                <Committee />
                                {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
                                <SubmitButton load={load} />
                            </Form>
                        </Formik>
                    ) : (
                        <Formik initialValues={initialValuesDoubleDelegate}
                            validationSchema={formValidationDoubleDelegate}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                setLoad(true)
                                const data = await backendService.doubleDelegatePost(values)
                                if (data.error) {
                                    setLoad(false)
                                    return setError(data.error)
                                }
                                setLoad(false)
                                return router.push('/thankyou')
                            }
                            }
                        >
                            <Form>
                                <DelegateNum name="Delegate 1" />
                                <Delegate delegate="s_" />
                                <DelegateNum name="Delegate 2" />
                                <Delegate delegate="d_" />
                                <DelegateNum name="Committee Details" />
                                <Committee />
                                {error && <div className="flex justify-center text-center my-4 text-red-500">{error} Please try Again.</div>}
                                <SubmitButton load={load} />
                            </Form>
                        </Formik>
                    )
                    }
                </div>
            </div>
        </div>
    )
};

export default Register;

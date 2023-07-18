import React from "react";
import InputButton from "./InputButton";

import Image from "next/image";
import { BsFillCalendarPlusFill, BsFillPersonFill, BsFillTelephoneFill, BsFlagFill, BsGenderAmbiguous } from 'react-icons/bs'
import { LiaUniversitySolid } from "react-icons/lia"
import { VscMail } from "react-icons/vsc"
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { BiSolidBook, BiSolidTrophy } from "react-icons/bi";
import { COUNTRIES } from "../app/register/countries"
import { AGE } from "../app/register/age"

const gender = ["Male", "Female"]

type delegateProps = {
  name: string,
  single: boolean, 
}

const Delegate = ({ name, single }: delegateProps ) => {
  return (
    <div className="w-full">
        <div className="flex flex-wrap gap-3 lg:gap-6 justify-around md:justify-center w-full mx-auto">
          <InputButton 
            icon={<BsFillPersonFill />} 
            placeholder="First Name"
            className="w-[48%] md:w-[49%] lg:w-[30%]"
            name={`${name}_first_name`}
            single={single}
          />
          <InputButton 
            icon={<BsFillPersonFill />} 
            placeholder="Middle Name"
            className="w-[48%] md:w-[49%] lg:w-[30%]"
            name={`${name}_middle_name`}
            single={single}
          />
          <InputButton 
            icon={<BsFillPersonFill />} 
            placeholder="Last Name"
            className="w-full md:w-[49%] lg:w-[30%]"
            name={`${name}_last_name`}
            single={single}
          />

          <InputButton 
            icon={<VscMail />} 
            inputType="email"
            placeholder="Email"
            className="w-full md:w-[49%] lg:w-[30%]"
            name={`${name}_email`}
            single={single}
          />
          <InputButton 
            icon={<BsGenderAmbiguous />} 
            placeholder="Gender"
            type="dropdown"
            options={gender}
            className="w-[48%] md;w-[49%] lg:w-[30%]"
            name={`${name}_gender`}
            single={single}
          />
          <InputButton 
            icon={<BsFlagFill />}  
            placeholder="Nationality"
            type="dropdown"
            options={COUNTRIES}
            className="w-[48%] md:w-[49%] lg:w-[30%]"
            name={`${name}_country`}
            single={single}
          />

          <InputButton 
            icon={<BsFillTelephoneFill />} 
            inputType="number" 
            placeholder="Contact No.1"
            className="w-[48%] md:w-[49%] lg:w-[35%]"
            name={`${name}_number_one`}
            single={single}
          />
          <InputButton 
            icon={<BsFillTelephoneFill />} 
            inputType="number" 
            placeholder="Contact No.2"
            className="w-[48%] md:w-[49%] lg:w-[35%]"
            name={`${name}_number_two`}
            single={single}
          />
          <InputButton 
            icon={<BsFillCalendarPlusFill />}  
            placeholder="Age"
            type="dropdown"
            options={AGE}
            className="w-[30%] lg:w-[20%]"
            name={`${name}_age`}
            single={single}
          />

          <InputButton 
            icon={<FaGraduationCap />}  
            placeholder="Course"
            className="w-[65%] md:w-[68%] lg:w-[30%]"
            name={`${name}_course`}
            single={single}
          />
          <InputButton 
            icon={<LiaUniversitySolid />}  
            placeholder="College"
            className="w-[71%] md:w-[73%] lg:w-[50%]"
            name={`${name}_college`}
            single={single}
          />
          <InputButton 
            icon={<BiSolidBook /> }
            inputType="number"
            placeholder="Year"
            className="w-[25%] lg:w-[10%]"
            name={`${name}_year`}
            single={single}
            />

          <InputButton 
            icon={<Image
              src="/speak.png"
              alt="experience"
              width={30}
              height={30}
              className="w-4 h-3.5"
            ></Image>}
            placeholder="Previous Experience"
            message={true}
            inputType="message"
            className="w-full lg:w-[46%] h-[75px]"
            name={`${name}_experience`}
            single={single}

          />
          <InputButton 
            icon={<BiSolidTrophy />}  
            placeholder="Awards"
            message={true}
            inputType="message"
            className="w-full lg:w-[46%] h-[75px] items-start"
            name={`${name}_awards`}
            single={single}
          />
        </div>
    </div>
  )
};

export default Delegate;

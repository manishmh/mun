import { Select } from "./Fields";
import { BiWorld } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { COUNTRIES } from "../../app/register/countries"
import { useFormikContext } from "formik";
import { committees } from "@/utils";

const gender = ["Male", 'Female']

type CommitteeBlockProps = {
  name: string,
}
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

const CommitteeBlock = ({ name}: CommitteeBlockProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-6">
      <div className="w-full md:w-1/2">
        <Select icon={<TfiWorld />}
          className="w-full"
          name={`${name}`}>
          <option value="">Committees</option>
          {committees.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3 lg:gap-6">
        <div>
        <Select icon={<BiWorld />}
          className="w-full md:w-full"
          name={`${name}_countryOne`}>
          <option value="">Country</option>
          {COUNTRIES.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
        </div>
       <div>
       <Select icon={<BiWorld />}
          className="w-full md:w-full"
          name={`${name}_countryTwo`}>
          <option value="">Country</option>
          {COUNTRIES.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
      </div> 
      <Select icon={<BiWorld />}
          className="w-full md:w-full"
          name={`${name}_countryThree`}>
          <option value="">Country</option>
          {COUNTRIES.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </Select>
      </div>
    </div>
  )
}

type FormikValues = {
  accommodation: string
}
const Committee = () => {
  const {values} = useFormikContext<FormikValues>()
  return (
    <div className="lg:px-10 gap-8 pb-10 flex flex-col lg:gap-6 mt-6">
      <CommitteeBlock name="committeeOne"/>
      <CommitteeBlock name="committeeTwo"/>
      <CommitteeBlock name ="committeeThree"/>
      <DelegateNum name="Accommodation Details" />
      <div className="flex gap-2 md:gap-8 flex-col md:flex-row -mt-4">
      <Select
        icon={<BiWorld />}  
        className="w-full md:w-[49%] " 
        name="accommodation"
        > 
        <option value="">Accommodation</option>
          {['Yes', 'No'].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>
        {values.accommodation === "Yes" &&   <Select
        icon={<BiWorld />}  
        className="w-full md:w-[49%]" 
        name="accommodation_type"
        > 
        {/* <option value="">Type</option> */}
          {['3ac', 'sleeper'].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>}
      
      </div>
        
    </div>
  )
};

export default Committee;

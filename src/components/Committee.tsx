import InputButton from "./InputButton";
import { BiWorld } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { COUNTRIES } from "../app/register/countries"

const gender = ["Male", 'Female']

type CommitteeBlockProps = {
  placeholder: number,
  name: string,
}

const CommitteeBlock = ({placeholder, name}: CommitteeBlockProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-6">
      <div className="w-full md:w-1/2">
        <InputButton 
        icon={<TfiWorld />}  
        placeholder={`Committee ${placeholder}`}
        type="dropdown"
        options={gender}
        className="w-full" 
        name={`committee_${name}`}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3 lg:gap-6">
        <div>
        <InputButton 
        icon={<BiWorld />}  
        placeholder="Country 1"
        type="dropdown"
        options={COUNTRIES}
        className="w-full md:w-full" 
        name={`committee_${name}_country_one`}
        />
        </div>
       <div>
        <InputButton 
        icon={<BiWorld />}  
        placeholder="Country 2"
        type="dropdown"
        options={COUNTRIES}
        className="w-full md:w-full" 
        name={`committee_${name}_country_two`}
        />
      </div> 
        <InputButton 
        icon={<BiWorld />}  
        placeholder="Country 3"
        type="dropdown"
        options={COUNTRIES}
        className="w-full" 
        name={`committee_${name}_country_three`}
        />
      </div>
    </div>
  )
}

const Committee = () => {
  return (
    <div className="lg:px-10 gap-8 pb-10 flex flex-col lg:gap-6 mt-6">
      <CommitteeBlock placeholder={1} name="One"/>
      <CommitteeBlock placeholder={2} name="Two"/>
      <CommitteeBlock placeholder={3} name ="Three"/>
        <InputButton 
        icon={<BiWorld />}  
        placeholder="Accomodation"
        type="dropdown"
        options={gender}
        className="w-full md:w-[49%]" 
        name="committee accomodation"
        />
    </div>
  )
};

export default Committee;

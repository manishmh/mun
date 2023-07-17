'use client'

import { useState } from "react";


type InputButtonProps = {
  icon: React.ReactNode,
  name: string,
  inputType?: string,
  placeholder: string,
  className: string,
  type?: string, 
  inputMode? : string,
  message?: boolean,
  options?: number[] | string[],
  single?: boolean,
}
  
const InputButton = ({ 
  icon, 
  name,
  inputType="text", 
  placeholder, 
  className, 
  type="normal",
  options=[], 
  single,
  message=false}
  :InputButtonProps ) => {

  const [labelHide, setLabelHide] = useState(false)

  const handleOnChange = (input: any) => {
    setLabelHide(true)

    if(input == "") {
      setLabelHide(false)
    } else setLabelHide(true)
  }

  if (type == "dropdown") {
    return (
      <div className={`flex items-center bg-[#E2DDF4] rounded-lg flex-shrink-0 ${className}`}>
          <span className={`text-black/50 pl-2 ${labelHide? "hidden" : "block"}`}>{icon}</span>
          <select
            name={name}
            id="dropdown" 
            className="bg-[#E2DDF4] text-black/50 pr-1 w-full pl-2 rounded-lg border-none outline-none focus:ring-0"
          >
            <option value="" hidden>{ placeholder }</option>
            {options.map((nation, index) => (
              <option key={index} value={nation}>{nation}</option>
            ))}
          </select>
      </div>
    )
  }
    
  return (
    <div className={` relative flex bg[#E2DDF4] rounded-lg flex-shrink-0 bg-[#E2DDF4]  ${className} ${message ? "items-start" : "items-center"}`}>
        <span className={`text-black/50 pl-2 ${labelHide? "hidden" : "block"} ${message ? "mt-3": ""}`}>{icon}</span>
        {inputType == "message" ? (
          <textarea 
          name={name}
          onChange={(e) => handleOnChange(e.target.value)}
          className="bg-[#E2DDF4] pr-1 w-full align-text-top pl-2 h-full text-black/80 appearance-none rounded-lg border-none outline-none focus:ring-0" 
          />
          
        ) : (
          <input 
          name={name}
          type={inputType} 
          onChange={(e) => handleOnChange(e.target.value)}
          className="bg-[#E2DDF4] pr-1 w-full pl-2 text-black/80 appearance-none rounded-lg border-none outline-none focus:ring-0" 
          style={{
            appearance: 'textfield',
            MozAppearance: 'textfield',  
          }}
          />
        )}
        <label
          className={`absolute left-8 top-2 text-black/50 text-base pointer-events-none transition-all duration-200 ${labelHide ? "hidden" : "block"}`}
          htmlFor="input-field"
        > 
          {placeholder} 
        </label>
    </div>
  )
};

export default InputButton;

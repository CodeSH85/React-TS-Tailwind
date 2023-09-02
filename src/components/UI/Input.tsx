import React, { Component, useEffect, useState } from "react";

export interface Input {
  id?: string;
  label?: string; 
  type?: string;
  defaultChecked?: boolean
  defaultValue?: string | number
  value: any;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputComp = (props: Input) => {
  const { type, value, onChange } = props;
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <>      
      <label htmlFor=""></label>
      {
        type === 'checkbox' ? 
          <input 
            id=""
            type={type}
            checked={localValue} 
            onChange={onChange}
            className='bg-slate-100 border-2 border-solid border-sky-500'
          /> 
          :
          <input 
            id="" 
            type={type}
            defaultValue={localValue}
            value={localValue}
            onChange={onChange}
            className='bg-slate-100 border-2 border-solid border-sky-500'
          />
      }
    </>
  )
}

export default InputComp;

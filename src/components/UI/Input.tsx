import React, { Component, useEffect, useState } from "react";
import { Input } from './types';


const InputComp = (props: Input) => {
  const { type, value } = props;
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
            onChange={e => setLocalValue(e.target.checked)}
            className='bg-slate-100 border-2 border-solid border-sky-500'
          /> 
          :
          <input 
            id="" 
            type={type} 
            defaultValue={localValue}
            value={localValue} 
            onChange={e => setLocalValue(e.target.value)}
            className='bg-slate-100 border-2 border-solid border-sky-500'
          />
      }
    </>
  )
}

export default InputComp;
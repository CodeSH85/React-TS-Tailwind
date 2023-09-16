import React, { Component, useEffect, useState } from "react";

export interface Input {
  id?: string;
  name?: string;
  label?: string; 
  type?: string;

  defaultValue?: string | number
  value?: any;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const InputComp = (props: Input) => {
  const { ...other } = props;

  const className = props.className ?? 'bg-slate-100 border-2 border-solid border-sky-500';

  return (
    <>
      <label htmlFor=""></label>
      <input
        {...other}
        className={className}
      />
    </>
  )
}

export default InputComp;

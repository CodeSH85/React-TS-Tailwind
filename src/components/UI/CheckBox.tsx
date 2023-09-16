import React, { Component, useEffect, useState } from "react";

export interface CheckBox_Type {
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

const CheckBox = (props: CheckBox_Type) => {
  const { ...rest } = props;

  const className = props.className ?? 'bg-slate-100 border-2 border-solid border-sky-500';

  return (
    <>
      <label htmlFor=""></label>
      <input
        type="checkbox"
        {...rest}
        className={className}
      />
    </>
  )
}

export default CheckBox;

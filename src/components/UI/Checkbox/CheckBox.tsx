import React, { Component, useEffect, useState } from "react";
import type { CheckBoxType } from "./type";

const CheckBox = (props: CheckBoxType) => {
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

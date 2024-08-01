import React, { Component, useEffect, useState } from "react";
import type { Input } from "./type";

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

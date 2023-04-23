import React, { useState } from "react";

const Widget = () => {

  const user:string = 'Saul';

  return (
    <div className="flex items-center">
      <div className="">
        <img
          src="https://fakeimg.pl/200x200/?retina=1&text=Avatar&font=noto" alt="avatar"
          className="rounded-full w-16 h-16"
        />
      </div>
      <div className="ml-3">
        <div className="text-lg">
          Welcome<span>{user}</span>
        </div>
        <div className="text-sm">Developer</div>
      </div>
    </div>
  )  
}

export default Widget;
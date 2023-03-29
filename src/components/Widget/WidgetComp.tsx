import React, { useState } from "react";

const Widget = () => {
  return (
    <div className="bg-white w-fit rounded-lg p-4">
      <div className="">
        <img 
          src="https://fakeimg.pl/200x200/?retina=1&text=Avatar&font=noto" alt="avatar"
          className="rounded-full w-20 h-20"
        />
      </div>
      <div className="text-lg">
        Welcome<span>User</span>
      </div>
      <div className="">Developer</div>
    </div>
  )  
}

export default Widget;
import React, { useState } from "react";

const Widget = () => {
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
          Welcome<span>User</span>
        </div>
        <div className="">Developer</div>
      </div>
    </div>
  )  
}

export default Widget;
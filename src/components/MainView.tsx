import React, { Component, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";

const MainView = () => {
  Component
  return (
    <div className="w-screen flex">
      <Sidebar 
        mode="icon"
        test={123456}
      />
      <BrowseView />
    </div>
  )
}

export default MainView;
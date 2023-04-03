import React, { Component, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";

const MainView = () => {
  const getProgram = (program: string) => {
    const currentProgram = program;
    console.log('program: ', currentProgram);
  };
  return (
    <div className="w-screen flex">
      <Sidebar 
        mode="icon"
        test={123456}
        getProgram={getProgram}
      />
      <BrowseView />
    </div>
  )
}

export default MainView;
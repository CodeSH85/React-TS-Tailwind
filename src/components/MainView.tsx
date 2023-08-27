import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";
import TopBar from "./TopBar/TopBarComp";

const MainView = () => {

  let [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };

  // useEffect(() => {
    
  // }, [currentModule]);

  return (
    <div className="w-screen min-h-screen flex flex-row">
      <Sidebar mode="icon" getModule={getModule}/>
      <div className="flex flex-col grow relative">
        <TopBar currentModule={currentModule} mode="icon" />
        <BrowseView currentModule={currentModule} /> 
      </div>
    </div>
  )
}

export default MainView;

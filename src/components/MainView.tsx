import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";
import TopBar from "./Topbar/TopBarComp";

const MainView = () => {

  let [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };

  useEffect(() => {
    
  }, [currentModule]);

  return (
    <div className="w-screen min-h-screen flex">
      <Sidebar mode="icon" getModule={getModule}/>
      <div className="min-h-screen flex flex-col flex-1">
        <TopBar currentModule={currentModule} mode="icon" />
        <BrowseView currentModule={currentModule} /> 
      </div>
    </div>
  )
}

export default MainView;

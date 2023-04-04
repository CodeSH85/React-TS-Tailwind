import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";

const MainView = () => {

  let [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };

  useEffect(() => {
    
  }, [currentModule]);

  return (
    <div className="w-screen flex">
      <Sidebar 
        mode="icon"
        test={123456}
        getModule={getModule}
      />
      <BrowseView currentModule={currentModule}/>
    </div>
  )
}

export default MainView;

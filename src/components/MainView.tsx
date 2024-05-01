import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";
import Tabs from "./UI/Tabs/Tabs";

const MainView = () => {
  const [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };

  const tabs = [
    {
      title: 'Test',
      key: 'test'
    }
  ]

  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar mode="icon" getModule={getModule}/>
      <div className="flex flex-col grow relative">
        <Tabs items={tabs}></Tabs>
        {/* <TopBar currentModule={currentModule} mode="icon" /> */}
        {/* <BrowseView currentModule={currentModule} /> */}
      </div>
    </div>
  )
}

export default MainView;

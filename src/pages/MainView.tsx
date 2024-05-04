import React, { Component, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/SidebarComp";
import Tabs from "../components/UI/Tabs/Tabs";

const MainView = () => {
  const [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };

  const tabs = [
    {
      title: 'Test',
      key: 'test'
    },
    {
      title: 'Test2',
      key: 'test2'
    },
  ]
  function onCloseTab(e: React.MouseEvent<HTMLElement>, key: string | number) {
    console.log(e, key)
  }
  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar mode="icon" getModule={getModule}/>
      <div className="flex flex-col grow relative">
        <Tabs 
          items={tabs}
          closable={true}
          onCloseTab={(e, key) => onCloseTab(e, key)}
        >
        </Tabs>
      </div>
    </div>
  )
}

export default MainView;

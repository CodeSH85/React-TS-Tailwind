import React, { Component, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/SidebarComp";
import Tabs from "../components/UI/Tabs/Tabs";
import TButton from "../components/UI/Button/Button";

const MainView = () => {
  const [currentModule, setCurrentModule] = useState<string>('dashboard');
  const getModule = (module: string) => {
    setCurrentModule(module);
  };
  const tabs = [
    {
      title: 'Tab 1',
      key: 'tab1'
    },
    {
      title: 'Tab 2',
      key: 'tab2'
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
        <TButton>Test</TButton>
      </div>
    </div>
  )
}

export default MainView;

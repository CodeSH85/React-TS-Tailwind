import React, { Component, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import Widget from "./Widget/WidgetComp";

function MainView() {
  Component
  return (
    <div className="w-full flex">
      <Sidebar />
      <Widget />
    </div>
  )
}

export default MainView;
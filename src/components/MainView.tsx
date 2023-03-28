import React, { Component, useState } from "react";
import Sidebar from "./Sidebar/SidebarComp";
import BrowseView from "./Browse/BrowseView";

function MainView() {
  Component
  return (
    <div className="w-screen flex">
      <Sidebar />
      <BrowseView />
    </div>
  )
}

export default MainView;
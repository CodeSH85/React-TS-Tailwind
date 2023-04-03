import React from "react";
import ChatModule from "../Modules/ChatModule";
import DashboardModule from "../Modules/DashboardModule";
import { Browse_Props } from "./type";

const BrowseView = (props: Browse_Props) => {
  const {currentModule} = props;
  return(
    <div className="w-full bg-slate-50 p-2">
      {
        currentModule === 'dashboard'? <DashboardModule></DashboardModule> : null
      }
      {
        currentModule === 'chat'? <ChatModule></ChatModule> : null
      }
    </div>
  )
}

export default BrowseView;

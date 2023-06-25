import React from "react";
import ChatModule from "../Modules/ChatModule/ChatModule";
import DashboardModule from "../Modules/DashboardModule/DashboardModule";
import ReportModule from "../Modules/ReportModule/ReportModule";
import DiagramModule from "../Modules/Diagrams/DiagramModule";
import { Browse_Props } from "./type";

const BrowseView = (props: Browse_Props) => {
  const { currentModule } = props;
  return(
    // <div className="max-h-screen w-full bg-slate-50 p-2">
    <div className="h-full w-full bg-slate-50 p-2">
      {/* <div className="capitalize">{currentModule}</div> */}
      <div className="w-full bg-slate-50 p-2">
        {
          currentModule === 'dashboard'? <DashboardModule></DashboardModule> : null
        }
        {
          currentModule === 'chat'? <ChatModule></ChatModule> : null
        }
        {
          currentModule === 'report'? <ReportModule></ReportModule> : null
        }
        {
          currentModule === 'diagram'? <DiagramModule></DiagramModule> : null
        }
      </div>
    </div>
  )
}

export default BrowseView;

import React from "react";
import ChatModule from "../Modules/Chat/ChatModule";
import DashboardModule from "../Modules/Dashboard/DashboardModule";
import ReportModule from "../Modules/Report/ReportModule";
import DiagramModule from "../Modules/Diagrams/DiagramModule";
import { Browse_Props } from "./type";

const BrowseView = (props: Browse_Props) => {
  const { currentModule } = props;
  return(
    // <main className="h-full w-full overflow-auto bg-slate-50 p-2">
    <main className="h-full w-full overflow-auto bg-slate-50 p-2">
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
    </main>
  )
}

export default BrowseView;

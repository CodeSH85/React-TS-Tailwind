import React from "react";
import WidgetComp from "../../Widget/WidgetComp";

const DashboardModule = () => {
  const dashBoardConfig = [
    {
      widget_type: 'user',
      avatar_url: '', 
    },
    {
      widget_type: 'chart',
      data: 'test'
    },
    {
      widget_type: 'news',
      data: 'test'
    }
  ];
  return (
    <div className="w-full bg-slate-50">
      <WidgetComp type="user"/>
      <WidgetComp type="chart"/>
      <WidgetComp type="news"/>
    </div>
  )
}

export default DashboardModule;

import React, { useState } from "react";
import HeroIcon from "../icons/HeroIcon";
import { Side_bar, Props } from "./type";

const Sidebar = (props: Props) => {
  const modeOptions = ["full", "icon", "text"];
  const { mode, getModule } = props;
  const [sidebar, setSidebar] = useState<Side_bar[]>([
    {
      title: "Dashboard",
      icon: "HomeIcon",
      color: 'red-600', // text-red-600
      label: "dashboard",
      type: "button",
    },
    {
      title: "Report",
      icon: "DocumentTextIcon",
      color: 'blue-600', // text-blue-600
      label: "report",
      type: "button",
    },
    {
      title: "Chat",
      icon: "ChatBubbleBottomCenterIcon",
      label: "chat",
      color: 'purple-600', // text-purple-600
      type: "button",
    },
    {
      title: "divider",
      label: "divider",
      type: "divider",
    },
    {
      title: "File",
      icon: "FolderIcon",
      color: 'green-600', // text-green-600
      label: "file",
      type: "button",
    },
    {
      title: "Diagram",
      icon: "PencilSquareIcon",
      color: 'orange-600', // text-orange-600
      label: "diagram",
      type: "button",
    },
  ]);

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-slate-100 py-3 px-1">
        {sidebar.map((menuItem, i) => {
          if (menuItem.type === "button" && mode === 'text') {
            return (
              <button
                key={i}
                className="text-black bg-slate-200 border-spacing-1 p-2 m-1 text-sm rounded-none"
              >
                {menuItem.title}
                <HeroIcon icon="ArchiveBoxIcon" color="text-red-100" />
              </button>
            );
          }
          if (menuItem.type === "button" && mode === 'icon') {
            return (
              <button
                key={i}
                className="text-black bg-slate-200 w-fit m-1 p-2 rounded-md"
                onClick={ () => getModule(menuItem.label) }
              >
                <HeroIcon icon={menuItem.icon} color={`text-${menuItem.color}`} />
              </button>
            );
          }
          if (menuItem.type === "divider") {
            return <div key={i}>|</div>;
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;

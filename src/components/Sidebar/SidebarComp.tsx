import React, { useState } from "react";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import HeroIcon from "../icons/HeroIcon";
import { Side_bar, Props } from "./type";

const Sidebar = (props: Props) => {
  const modeOptions = ["full", "icon", "text"];
  const { mode } = props;
  const [sidebar, setSidebar] = useState<Side_bar[]>([
    {
      title: "Dashboard",
      icon: "HomeIcon",
      label: "dashboard",
      type: "button",
    },
    {
      title: "Report",
      icon: "PencilSquareIcon",
      label: "report",
      type: "button",
    },
    {
      title: "Chat",
      icon: "ChatBubbleBottomCenterIcon",
      label: "chat",
      type: "button",
    },
    {
      title: "divider",
      icon: "",
      label: "divider",
      type: "divider",
    },
    {
      title: "File",
      icon: "FolderIcon",
      label: "file",
      type: "button",
    },
  ]);

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-slate-100 w-16">
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
                className="text-black bg-slate-200 border-spacing-1 m-2 rounded-none"
              >
                <HeroIcon icon={menuItem.icon} color="text-blue-500" />
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

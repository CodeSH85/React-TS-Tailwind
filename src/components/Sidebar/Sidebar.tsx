import React, { useState } from "react";
import './Sidebar.css';
import { RectangleGroupIcon } from '@heroicons/react/24/solid';

interface Toolbar {
  title: string,
  icon: string,
  label: string,
  type: string
}

function Sidebar() {

  const [toolbar, setToolbar] = useState<Toolbar[]>(
    [
      {
        title: 'Dashboard',
        icon: '',
        label: 'Font',
        type: 'button'
      },
      {
        title: 'Size',
        icon: '',
        label: 'Size',
        type: 'button'
      },
      {
        title: 'Color',
        icon: '',
        label: 'color',
        type: 'button'
      },
      {
        title: 'divider',
        icon: '',
        label: 'divider',
        type: 'divider'
      },
      {
        title: 'Padding',
        icon: '',
        label: 'padding',
        type: 'button'
      }
    ]
  );

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-red-400 w-20">
        {toolbar.map((tool, i)=> {
          if (tool.type === 'button') {
            return <button 
              key={i}
              className="text-black bg-slate-200
               border-spacing-1 p-2 m-1 text-sm rounded-none">
                {tool.title}
                <RectangleGroupIcon className="h-6 w-6 text-blue-500"/>
              </button>
          }
          if (tool.type === 'divider') {
            return <div key={i}></div>
          }
        })}
      </div>
    </div>
  )
}

export default Sidebar;
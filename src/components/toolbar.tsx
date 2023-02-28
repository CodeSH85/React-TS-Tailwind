import React, { useState } from "react";
import './toolbar.css';

interface Toolbar {
  title: string,
  active: boolean,
  label: string,
  type: string
}

function Toolbar() {

  const [toolbar, setToolbar] = useState<Toolbar[]>(
    [
      {
        title: 'Font',
        active: true,
        label: 'Font',
        type: 'button'
      },
      {
        title: 'Size',
        active: true,
        label: 'Size',
        type: 'button'
      },
      {
        title: 'Color',
        active: true,
        label: 'color',
        type: 'button'
      },
      {
        title: 'divider',
        active: true,
        label: 'divider',
        type: 'divider'
      },
      {
        title: 'Padding',
        active: true,
        label: 'padding',
        type: 'button'
      }
    ]
  );

  return (
    <div>
      <div className="flex w-full bg-slate-400">
        {toolbar.map((tool, i)=> {
          if (tool.type === 'button') {
            return <button 
              key={i}
              className="text-black bg-slate-200
               border-spacing-1 p-2 m-1 text-sm rounded-none">
                {tool.title}
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

export default Toolbar;
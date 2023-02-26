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
      <div className="flex w-full bg-slate-200">
        {toolbar.map((tool, i)=> {
          if (tool.type === 'button') {
            return <div className="" key={i}>
              <button className="radius-none">
                {tool.title}
              </button>
            </div>
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
import { useState } from "react";
import classnames  from "classnames";
import type { TabsProps, TabItem } from "./type";


const Tabs = (props: TabsProps) => {
  const { items, closable, children, onCloseTab } = props;
  const [tabs, setTabs] = useState<TabItem[]>(items);
  const [curTab, setCurTab] = useState<TabItem>();

  function onClick(tabItem: TabItem) {
    setCurTab(tabItem);
  }
  function handleCloseTab(
    e: React.MouseEvent<HTMLElement>,
    key: TabItem["key"]
  ) {
    if (onCloseTab) onCloseTab(e, key);
    const newTabs = tabs.filter((tab) => tab.key !== key);
    setTabs(newTabs);
  }
  function isActive(key: TabItem["key"]) {
    return curTab?.key === key;
  }
  const tabItem = (item: TabItem) => {
    return (
      <div
        key={item.key}
        onClick={() => onClick(item)}
        className={classnames([
          isActive(item.key) ? "bg-white" : "bg-slate-100",
          "px-2 py-1 rounded cursor-pointer",
        ])}
      >
        {children ?? (
          <>
            <span>{item.title}</span>
            {closable && (
              <button onClick={(e) => handleCloseTab(e, item.key)}>X</button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <nav className="flex w-full bg-slate-200">
      {tabs.length && tabs.map((item) => tabItem(item))}
    </nav>
  );
};

export default Tabs;

import { useState } from "react";

type TabItem = {
  title: string;
  key: string | number;
};

type TabsProps = {
  items: TabItem[];
  children?: React.ReactNode;
  closable?: boolean;
  onCloseTab?: (e: React.MouseEvent<HTMLElement>, key: string | number) => void;
  [othersOptions: string]: unknown;
};

const Tabs = (props: TabsProps) => {
  const {items, closable, children, onCloseTab} = props;
  const [tabs, setTabs] = useState<TabItem[]>(items);
  const [curTab, setCurTab] = useState<TabItem>();
  function onClick(tabItem: TabItem) {
    setCurTab(tabItem);
  }
  function handleCloseTab(e: React.MouseEvent<HTMLElement>, key: TabItem['key']) {
    if (onCloseTab) onCloseTab(e, key);
    const newTabs = tabs.filter(tab => tab.key !== key);
    setTabs(newTabs);
  }
  const tabItem = (item: TabItem) => {
    return (
      <div
        key={item.key}
        onClick={() => onClick(item)}
        className={[
          curTab?.key === item.key && "--active",
          'bg-slate-300'
        ].join(' ')}
      >
        { 
          children ??
          <>
            <span>{item.title}</span>
            {
              closable &&
              <button
                onClick={e => handleCloseTab(e, item.key)}
              >
              X
              </button>
            }
          </>
        }
      </div>
    )
  }

  return (
    <nav className="flex">
      {tabs.length &&
        tabs.map((item) => {
          return (
            tabItem(item)
          );
        })}
    </nav>
  );
};

export default Tabs;

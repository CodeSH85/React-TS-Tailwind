export type TabItem = {
  title: string;
  key: string | number;
};

export type TabsProps = {
  items: TabItem[];
  children?: React.ReactNode;
  closable?: boolean;
  onCloseTab?: (e: React.MouseEvent<HTMLElement>, key: string | number) => void;
  [othersOptions: string]: unknown;
};

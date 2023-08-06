interface Table_Props {
  tableHeaders: array;
  tableData: array;
  activeRow?: object;
  getActiveRow?: Function;
  pageMode?: false;
  rowHeight?: number;
}

export type { Table_Props }
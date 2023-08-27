import { useState } from "react";
import { Table_Props } from "./type";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";

const Table = (props: Table_Props) => {

  let [tableHeader, setTableHeader] = useState<ColModel>(props.tableHeaders);
  let [tableData, setTableData] = useState<Db_Data>(props.tableData);
  let { getActiveRow } = props;
  let [activeRowId, setActiveRowId] = useState<number>(0);

  const setActiveRow = (rowData: Db_Data) => {
    setActiveRowId(rowData.id);
    getActiveRow(rowData);
  }

  const isActiveRow = (rowId: number) => {
    if (rowId === activeRowId) {
      return ' bg-red-200 ';
    } else {
      return '';
    }
  }

  return (
    <table style={{}} 
      className="w-full"
    >
      <thead>
        <tr>
          {
            tableHeader.map((col: ColModel, i: number) => (
              <th
                className="bg-blue-100 py-1 text-end px-1"
                key={i}>
                {
                  col.type === 'checkbox' ? <input type="checkbox"/> : null
                }
                {
                  col.type === 'text' ? 
                  <span className="capitalize">
                    {col.title}
                  </span> : null
                }
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {tableData.map((data: Db_Data, i: number) => (
          <tr
            className={(i % 2 ? 
              'bg-sky-100' : 'bg-white-100') + isActiveRow(data.id)
            }
            key={i}
            onClick={ e => setActiveRow(data)}
          >
            {tableHeader.map((col: ColModel, j: number) => (
              <td key={j} className="text-end px-1">
                {
                  col.type === 'checkbox' ? <input type="checkbox"/> : null
                } 
                { data[col.key] }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
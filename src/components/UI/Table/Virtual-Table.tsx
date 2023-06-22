import { useState } from "react";
import { Table_Props } from "./type"
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import "./table.css"

const Table = (props: Table_Props) => {

  let [tableHeader, setTableHeader] = useState<ColModel>(props.tableHeaders);
  let [tableData, setTableData] = useState<Db_Data>(props.tableData);

  return (
    <table style={{}}>
      <thead>
        <tr>
          {
            tableHeader.map((col, i) => (
              <th
                className="bg-blue-300" 
                key={i}>
                {
                  col.type === 'checkbox' ? <input type="checkbox"></input> : null
                }
                {
                  col.type === 'text' ? <span>{col.title}</span> : null
                }
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, i) => (
          <tr
            className={
              i % 2 === 0 ? 'even-row' : 'odd-row'
              + " "
            }
            key={i}
          >
            {tableHeader.map((col, j) => (
              <td key={j}>
                {
                  col.type === 'checkbox' ? <input type="checkbox"></input> : null
                } 
                {data[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
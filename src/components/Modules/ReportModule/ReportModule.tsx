import { Component, useEffect, useState } from "react";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import _colModel from "../../../../public/colModel.json";
import _dbData from "../../../../public/dbData.json";

const ReportModule = () => {

  let [colModel, setColModel] = useState<ColModel[]>(_colModel);
  let [dbData, setDbData] = useState<Db_Data[]>(_dbData);

  console.log(colModel);

  return (
    <>
      <div className="">
        Report Name
      </div>
      <div className="w-full">
        <table>
          <thead>
            {colModel.map((col, i) => (
              <tr key={i}>
                <th>{col.title}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {dbData.map((data, i) => (
              <tr key={i}>
                {colModel.map((col, j) => (
                  <td key={j}>{data[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>        
      </div>
    </>
  )
}

export default ReportModule;

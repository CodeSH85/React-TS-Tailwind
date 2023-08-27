import { Component, useEffect, useState } from "react";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import _colModel from "../../../models/colModel.json";
import _dbData from "../../../models/dbData.json";
import Table from "../../UI/Table/Virtual-Table";
import { InputComp } from "../../UI";

const ReportModule = () => {

  let [colModel, setColModel] = useState<ColModel[]>(_colModel);
  let [dbData, setDbData] = useState<Db_Data[]>(_dbData);

  // let [activeRow, setActiveRow] = useState<Db_Data>({});
  let [activeRow, setActiveRow] = useState<any>({});

  const getActiveRow = (rowData: Db_Data) => {
    console.log(rowData);
    setActiveRow(rowData);
  }

  return (
    <>
      <div className="">
        {
         colModel.map((col, index) => {
          return (
            <span key={index}>
              <label htmlFor="">{col.title}</label>
              <InputComp type={col.type} value={activeRow[col.key]}></InputComp>
            </span>
          )
         }) 
        }
      </div>
      <div className="">
        Report Name
      </div>
      <div className="w-full">
        <Table
          tableHeaders={colModel}
          tableData={dbData}
          getActiveRow={getActiveRow}
        ></Table>
      </div>
    </>
  )
}

export default ReportModule;

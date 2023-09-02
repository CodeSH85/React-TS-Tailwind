import { Component, ReactHTMLElement, useEffect, useState } from "react";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import _colModel from "../../../models/colModel.json";
import _dbData from "../../../models/dbData.json";
import Table from "../../UI/Table/Virtual-Table";
import { InputComp } from "../../UI";

const ReportModule = () => {

  let [colModel, setColModel] = useState<ColModel[]>(_colModel);
  let [dbData, setDbData] = useState<Db_Data[]>(_dbData);

  // let [activeRow, setActiveRow] = useState<Db_Data>();
  let [activeRow, setActiveRow] = useState<any>({});

  const getActiveRow = (rowData: Db_Data) => {
    setActiveRow(rowData);
  }

  const setNewValue = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {

    activeRow[key] = e.currentTarget.value;

    // setActiveRow(e.currentTarget.value);
  }

  return (
    <>
      <div className="">
        {
         colModel.map((col, index) => {
          return (
            <span key={index}>
              <InputComp
                type={col.type}
                value={activeRow[col.key]}
                onChange={e => setNewValue(e, col.key)}
              ></InputComp>
            </span>
          )
         })
        }
      </div>
      <div className="">
        Report Name
      </div>
      <div className="">

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
